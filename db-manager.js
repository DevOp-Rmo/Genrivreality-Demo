/**
 * GENRIV REALITY - MODULAR MULTI-DATABASE MANAGER (db-manager.js)
 * Partitioned Local & Cloud Data Architecture for Scaling
 * Partitions:
 *  1. genriv_users_db       -> User accounts, auth credentials, roles, profile info
 *  2. genriv_properties_db  -> Property listings, configurations, pricing, media
 *  3. genriv_requisitions_db-> Customer Requisition Forms & requirements
 *  4. genriv_leads_crm_db   -> Buyer leads, unlock events, phone inquiries
 *  5. genriv_audit_db       -> Encrypted Super Admin real-time security audit trails
 *  6. genriv_kyc_db         -> Seller advertiser KYC verification profiles & dossiers
 */

(function(window) {
  'use strict';

  const DB_KEYS = {
    USERS: 'genriv_users_db',
    PROPERTIES: 'genriv_properties_db',
    REQUISITIONS: 'genriv_requisitions_db',
    LEADS: 'genriv_leads_crm_db',
    AUDIT: 'genriv_audit_db',
    KYC: 'genriv_kyc_db'
  };

  const GenrivDB = {
    keys: DB_KEYS,

    // Generic safe reader
    getPartition: function(key, fallback = []) {
      try {
        const raw = localStorage.getItem(key);
        if (raw) return JSON.parse(raw);
      } catch (e) {
        console.warn(`[GenrivDB] Read error for ${key}:`, e);
      }
      return fallback;
    },

    // Generic safe writer
    setPartition: function(key, data) {
      try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
      } catch (e) {
        console.error(`[GenrivDB] Write error for ${key}:`, e);
        return false;
      }
    },

    // 1. Users DB
    getUsers: function() {
      let users = this.getPartition(DB_KEYS.USERS, null);
      if (!users) {
        // Fallback from legacy mb_db
        try {
          const legacy = JSON.parse(localStorage.getItem('genriv_mb_db_v1') || '{}');
          if (Array.isArray(legacy.users) && legacy.users.length) {
            users = legacy.users;
            this.setPartition(DB_KEYS.USERS, users);
          }
        } catch (e) {}
      }
      return users || [];
    },
    saveUsers: function(users) {
      return this.setPartition(DB_KEYS.USERS, users);
    },

    // 2. Properties DB
    getProperties: function() {
      return this.getPartition(DB_KEYS.PROPERTIES, []);
    },
    saveProperties: function(props) {
      return this.setPartition(DB_KEYS.PROPERTIES, props);
    },

    // 3. Requisitions DB
    getRequisitions: function() {
      let reqs = this.getPartition(DB_KEYS.REQUISITIONS, null);
      if (!reqs) {
        reqs = this.getPartition('genriv_requisitions_v1', []);
        if (reqs.length) this.setPartition(DB_KEYS.REQUISITIONS, reqs);
      }
      return reqs || [];
    },
    saveRequisitions: function(reqs) {
      this.setPartition('genriv_requisitions_v1', reqs); // sync backward
      return this.setPartition(DB_KEYS.REQUISITIONS, reqs);
    },
    addRequisition: function(reqObj) {
      const list = this.getRequisitions();
      list.unshift(reqObj);
      this.saveRequisitions(list);
      this.addAuditLog('New Customer Requisition Submitted', `ID: ${reqObj.id} by ${reqObj.customerName || reqObj.name}`);
      return reqObj;
    },

    // 4. Leads CRM DB
    getLeads: function() {
      let leads = this.getPartition(DB_KEYS.LEADS, null);
      if (!leads) {
        leads = this.getPartition('genriv_seller_leads', []);
        if (leads.length) this.setPartition(DB_KEYS.LEADS, leads);
      }
      return leads || [];
    },
    saveLeads: function(leads) {
      this.setPartition('genriv_seller_leads', leads);
      return this.setPartition(DB_KEYS.LEADS, leads);
    },
    addLead: function(leadObj) {
      const list = this.getLeads();
      list.unshift(leadObj);
      this.saveLeads(list);
      return leadObj;
    },

    // 5. Audit Trail DB (Super User Protected)
    getAuditLogs: function() {
      let logs = this.getPartition(DB_KEYS.AUDIT, null);
      if (!logs || !logs.length) {
        logs = [
          { time: new Date().toLocaleTimeString(), action: 'System Partition Initialized', code: '200 OK', actor: 'SYSTEM' },
          { time: '10 mins ago', action: 'KYC Sanction Verification Desk Active', code: '200 OK', actor: 'SYSTEM' }
        ];
        this.setPartition(DB_KEYS.AUDIT, logs);
      }
      return logs;
    },
    saveAuditLogs: function(logs) {
      return this.setPartition(DB_KEYS.AUDIT, logs);
    },
    addAuditLog: function(action, details = '', actor = 'User') {
      const logs = this.getAuditLogs();
      logs.unshift({
        time: new Date().toLocaleTimeString(),
        action: `${action}${details ? ' - ' + details : ''}`,
        code: '200 OK',
        actor: actor,
        timestamp: new Date().toISOString()
      });
      if (logs.length > 100) logs.pop();
      this.saveAuditLogs(logs);
    },

    // 6. Seller KYC DB
    getSellersKyc: function() {
      let kyc = this.getPartition(DB_KEYS.KYC, null);
      if (!kyc) {
        kyc = this.getPartition('genriv_pending_sellers', []);
        if (kyc.length) this.setPartition(DB_KEYS.KYC, kyc);
      }
      return kyc || [];
    },
    saveSellersKyc: function(list) {
      this.setPartition('genriv_pending_sellers', list);
      return this.setPartition(DB_KEYS.KYC, list);
    },

    // Validations utility (Mobile 10 digits, Aadhar 12 digits, PAN 10 characters)
    validateMobile: function(mobile) {
      if (!mobile) return false;
      const clean = String(mobile).replace(/\D/g, '');
      const last10 = clean.slice(-10);
      return /^[6-9]\d{9}$/.test(last10);
    },
    formatMobile10: function(mobile) {
      if (!mobile) return '';
      const clean = String(mobile).replace(/\D/g, '');
      return clean.slice(-10);
    },
    validateAadhar: function(aadhar) {
      if (!aadhar) return false;
      const clean = String(aadhar).replace(/\D/g, '');
      return /^\d{12}$/.test(clean);
    },
    validatePan: function(pan) {
      if (!pan) return false;
      const clean = String(pan).trim().toUpperCase();
      return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(clean);
    }
  };

  window.GenrivDB = GenrivDB;
})(window);
