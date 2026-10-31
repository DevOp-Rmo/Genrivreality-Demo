const fs = require('fs');
const path = require('path');

// 1. Update script.js
const scriptPath = path.join(__dirname, 'script.js');
let scriptJs = fs.readFileSync(scriptPath, 'utf8');

// Ensure script.js loads properties from window.GENRIV_GLOBAL_PROPERTIES if available
if (!scriptJs.includes('window.GENRIV_GLOBAL_PROPERTIES')) {
  scriptJs = scriptJs.replace(
    'let properties = initialProperties.filter(p => p.approvalStatus === \'Approved\');',
    `let properties = (typeof window !== 'undefined' && window.GENRIV_GLOBAL_PROPERTIES && window.GENRIV_GLOBAL_PROPERTIES.length > 0)
      ? window.GENRIV_GLOBAL_PROPERTIES.filter(p => p.approvalStatus === 'Approved')
      : initialProperties.filter(p => p.approvalStatus === 'Approved');`
  );
  console.log('✅ Integrated GENRIV_GLOBAL_PROPERTIES into script.js properties initialization');
}

// Ensure getCurrentMbUser checks localStorage['genriv_active_user'] first
const getCurrentMbUserTarget = `function getCurrentMbUser() {
      const db = getMbDatabase();
      let user = db.users.find(u => u.id === db.currentUserId);
      if (!user) {
        user = db.users[0];
      }
      return user;
    }`;

const getCurrentMbUserReplacement = `function getCurrentMbUser() {
      try {
        const activeRaw = localStorage.getItem('genriv_active_user');
        if (activeRaw) {
          const parsed = JSON.parse(activeRaw);
          if (parsed && parsed.id && parsed.role) return parsed;
        }
      } catch (e) {}
      const db = getMbDatabase();
      let user = db.users.find(u => u.id === db.currentUserId);
      if (!user) {
        user = db.users[0];
      }
      return user;
    }`;

if (scriptJs.includes(getCurrentMbUserTarget)) {
  scriptJs = scriptJs.replace(getCurrentMbUserTarget, getCurrentMbUserReplacement);
  console.log('✅ Updated getCurrentMbUser in script.js to prioritize genriv_active_user');
}

// Add setQuickSearch and navigateToLocality if missing
if (!scriptJs.includes('function navigateToLocality')) {
  const quickSearchSnippet = `
    function setQuickSearch(localityName) {
      const searchInput = document.getElementById('search-locality-input');
      if (searchInput) searchInput.value = localityName;
      if (typeof applyFilters === 'function') applyFilters();
      const listingsSec = document.getElementById('listings-section');
      if (listingsSec) listingsSec.scrollIntoView({ behavior: 'smooth' });
    }

    function navigateToLocality(localityName) {
      window.location.href = 'new-projects.html?city=Kolkata&locality=' + encodeURIComponent(localityName);
    }
`;
  scriptJs += '\n' + quickSearchSnippet;
  console.log('✅ Added setQuickSearch and navigateToLocality to script.js');
}

fs.writeFileSync(scriptPath, scriptJs, 'utf8');

// 2. Update index.html
const indexPath = path.join(__dirname, 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

// Ensure properties-data.js is included in index.html before script.js
if (!indexHtml.includes('src="properties-data.js"')) {
  indexHtml = indexHtml.replace('<script src="script.js"></script>', '<script src="properties-data.js"></script>\n  <script src="script.js"></script>');
  console.log('✅ Added properties-data.js script tag to index.html');
}

// Fix 1-line horizontal action buttons in index.html (Point 6, Image 3)
const oldButtonsContainer = `<div class="flex flex-row items-center gap-2 flex-nowrap overflow-x-auto custom-scrollbar shrink-0 pt-2 lg:pt-0">`;
const upgradedButtonsContainer = `<div class="flex items-center gap-2 overflow-x-auto custom-scrollbar shrink-0 pt-2 lg:pt-0" style="display: flex !important; flex-direction: row !important; flex-wrap: nowrap !important; white-space: nowrap !important;">`;

if (indexHtml.includes(oldButtonsContainer)) {
  indexHtml = indexHtml.replace(oldButtonsContainer, upgradedButtonsContainer);
  console.log('✅ Upgraded action buttons container with inline nowrap styles in index.html');
}

// Ensure the 3 buttons have explicit white-space: nowrap and flex-shrink: 0
indexHtml = indexHtml.replace(
  'onclick="openRoleGatedForm(\'requisition\')" class="whitespace-nowrap shrink-0 px-3.5 py-2 rounded-xl bg-genriv-600',
  'onclick="openRoleGatedForm(\'requisition\')" style="white-space: nowrap !important; flex-shrink: 0 !important;" class="whitespace-nowrap shrink-0 px-3.5 py-2 rounded-xl bg-genriv-600'
);
indexHtml = indexHtml.replace(
  'onclick="openRoleGatedForm(\'advertisement\')" class="whitespace-nowrap shrink-0 px-3.5 py-2 rounded-xl bg-emerald-600',
  'onclick="openRoleGatedForm(\'advertisement\')" style="white-space: nowrap !important; flex-shrink: 0 !important;" class="whitespace-nowrap shrink-0 px-3.5 py-2 rounded-xl bg-emerald-600'
);
indexHtml = indexHtml.replace(
  'onclick="scrollToSection(\'hospitality-booking-section\')" class="whitespace-nowrap shrink-0 px-3.5 py-2 rounded-xl bg-amber-400',
  'onclick="scrollToSection(\'hospitality-booking-section\')" style="white-space: nowrap !important; flex-shrink: 0 !important;" class="whitespace-nowrap shrink-0 px-3.5 py-2 rounded-xl bg-amber-400'
);

// Upgrade the navigation bar (lines 208-242) with interactive dropdown menus
const navBarStart = indexHtml.indexOf('<div id="main-12-tabs-nav"');
if (navBarStart !== -1) {
  const navBarEnd = indexHtml.indexOf('</div>\n      </div>\n    </div>\n  </header>', navBarStart);
  
  const upgradedMegaNav = `<div id="main-12-tabs-nav" class="flex items-center justify-start lg:justify-between gap-1 xl:gap-2 py-2 overflow-x-auto flex-nowrap custom-scrollbar">
          <!-- Home -->
          <a href="index.html" id="nav-tab-home" class="px-3.5 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap shrink-0 transition bg-gradient-to-r from-genriv-600 to-acres-500 text-white shadow-sm flex items-center gap-1.5">
            <span>Home</span>
          </a>

          <!-- Sellers Dropdown -->
          <div class="relative group shrink-0">
            <button type="button" onclick="switchMainTab('sellers')" id="nav-tab-sellers" class="main-portal-tab px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-genriv-50 dark:hover:bg-slate-700 border border-slate-200/70 dark:border-slate-700 flex items-center gap-1">
              <span>Sellers</span>
              <span class="text-[9px] opacity-60">▾</span>
            </button>
            <div class="hidden group-hover:block absolute left-0 top-full pt-1 z-50 w-64">
              <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-2 space-y-1 text-xs">
                <a href="seller-dashboard.html" class="flex items-center gap-2 p-2 rounded-xl hover:bg-genriv-50 dark:hover:bg-slate-800 font-bold text-slate-800 dark:text-white">
                  <span>🏢</span> <span>Seller Dashboard &amp; CRM</span>
                </a>
                <a href="seller-dashboard.html#advertisement-form" class="flex items-center gap-2 p-2 rounded-xl hover:bg-genriv-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">
                  <span>📝</span> <span>12-Section Property Ad Form</span>
                </a>
                <a href="seller-dashboard.html#subscriptions" class="flex items-center gap-2 p-2 rounded-xl hover:bg-genriv-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">
                  <span>⭐</span> <span>Top-10 Front Listing Pricing</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Buyers Dropdown -->
          <div class="relative group shrink-0">
            <button type="button" onclick="switchMainTab('buyers')" id="nav-tab-buyers" class="main-portal-tab px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-genriv-50 dark:hover:bg-slate-700 border border-slate-200/70 dark:border-slate-700 flex items-center gap-1">
              <span>Buyers</span>
              <span class="text-[9px] opacity-60">▾</span>
            </button>
            <div class="hidden group-hover:block absolute left-0 top-full pt-1 z-50 w-64">
              <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-2 space-y-1 text-xs">
                <a href="buyer-dashboard.html" class="flex items-center gap-2 p-2 rounded-xl hover:bg-genriv-50 dark:hover:bg-slate-800 font-bold text-slate-800 dark:text-white">
                  <span>👤</span> <span>Buyer Dashboard</span>
                </a>
                <a href="buyer-dashboard.html?new_signup=true" class="flex items-center gap-2 p-2 rounded-xl hover:bg-genriv-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">
                  <span>📋</span> <span>Customer Requisition Form</span>
                </a>
                <a href="new-projects.html?city=Kolkata" class="flex items-center gap-2 p-2 rounded-xl hover:bg-genriv-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">
                  <span>🏗️</span> <span>New Projects in Kolkata</span>
                </a>
                <a href="properties.html" class="flex items-center gap-2 p-2 rounded-xl hover:bg-genriv-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">
                  <span>🔍</span> <span>All 36+ Verified Properties</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Owners Dropdown -->
          <div class="relative group shrink-0">
            <button type="button" onclick="switchMainTab('owners')" id="nav-tab-owners" class="main-portal-tab px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-genriv-50 dark:hover:bg-slate-700 border border-slate-200/70 dark:border-slate-700 flex items-center gap-1">
              <span>Owners</span>
              <span class="text-[9px] opacity-60">▾</span>
            </button>
            <div class="hidden group-hover:block absolute left-0 top-full pt-1 z-50 w-60">
              <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-2 space-y-1 text-xs">
                <a href="seller-dashboard.html" class="flex items-center gap-2 p-2 rounded-xl hover:bg-genriv-50 dark:hover:bg-slate-800 font-bold text-slate-800 dark:text-white">
                  <span>➕</span> <span>Post Free Owner Ad (1/6 mo)</span>
                </a>
                <a href="properties.html?intent=Rent" class="flex items-center gap-2 p-2 rounded-xl hover:bg-genriv-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">
                  <span>🤝</span> <span>Zero-Brokerage Resale &amp; Rent</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Tenants Dropdown -->
          <div class="relative group shrink-0">
            <button type="button" onclick="switchMainTab('tenants')" id="nav-tab-tenants" class="main-portal-tab px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-genriv-50 dark:hover:bg-slate-700 border border-slate-200/70 dark:border-slate-700 flex items-center gap-1">
              <span>Tenants</span>
              <span class="text-[9px] opacity-60">▾</span>
            </button>
            <div class="hidden group-hover:block absolute left-0 top-full pt-1 z-50 w-60">
              <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-2 space-y-1 text-xs">
                <a href="properties.html?intent=Rent" class="flex items-center gap-2 p-2 rounded-xl hover:bg-genriv-50 dark:hover:bg-slate-800 font-bold text-slate-800 dark:text-white">
                  <span>🔑</span> <span>Explore Rental Homes</span>
                </a>
                <a href="properties.html?category=Mess+%2F+PG" class="flex items-center gap-2 p-2 rounded-xl hover:bg-genriv-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">
                  <span>🛏️</span> <span>PG &amp; Co-Living Suites</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Listing your Property FREE (Dynamic) -->
          <button type="button" onclick="handleListingPropertyNavClick()" id="nav-tab-listing-property" class="main-portal-tab px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-genriv-50 dark:hover:bg-slate-700 border border-slate-200/70 dark:border-slate-700 flex items-center gap-1.5">
            <span>Listing your Property</span>
            <span class="px-1.5 py-0.2 rounded bg-emerald-500 text-white text-[9px] font-extrabold uppercase">FREE</span>
          </button>

          <!-- Customer Support -->
          <button type="button" onclick="switchMainTab('customer-support')" id="nav-tab-customer-support" class="main-portal-tab px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-genriv-50 dark:hover:bg-slate-700 border border-slate-200/70 dark:border-slate-700 flex items-center gap-1.5">
            <span>Customer Support</span>
          </button>

          <!-- Bank Loan Dropdown (MagicBricks Style) -->
          <div class="relative group shrink-0">
            <button type="button" onclick="window.location.href='loan-calculator.html'" id="nav-tab-bank-loan" class="main-portal-tab px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-genriv-50 dark:hover:bg-slate-700 border border-slate-200/70 dark:border-slate-700 flex items-center gap-1">
              <span>Bank Loan</span>
              <span class="text-[9px] opacity-60">▾</span>
            </button>
            <div class="hidden group-hover:block absolute right-0 top-full pt-1 z-50 w-64">
              <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-2 space-y-1 text-xs">
                <a href="loan-calculator.html" class="flex items-center gap-2 p-2 rounded-xl hover:bg-genriv-50 dark:hover:bg-slate-800 font-bold text-amber-600 dark:text-amber-400">
                  <span>🧮</span> <span>Home Loan Eligibility Calculator</span>
                </a>
                <a href="loan-calculator.html" class="flex items-center gap-2 p-2 rounded-xl hover:bg-genriv-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">
                  <span>🏦</span> <span>Compare Bank Rates (8.35% p.a.)</span>
                </a>
                <a href="loan-calculator.html" class="flex items-center gap-2 p-2 rounded-xl hover:bg-genriv-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">
                  <span>📄</span> <span>Instant Pre-Sanction Certificate</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Legal Support -->
          <button type="button" onclick="switchMainTab('legal-support')" id="nav-tab-legal-support" class="main-portal-tab px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-genriv-50 dark:hover:bg-slate-700 border border-slate-200/70 dark:border-slate-700 flex items-center gap-1.5">
            <span>Legal Support</span>
          </button>

          <!-- Publication -->
          <button type="button" onclick="switchMainTab('publication')" id="nav-tab-publication" class="main-portal-tab px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-genriv-50 dark:hover:bg-slate-700 border border-slate-200/70 dark:border-slate-700 flex items-center gap-1.5">
            <span>Publication</span>
          </button>
        </div>`;

  indexHtml = indexHtml.slice(0, navBarStart) + upgradedMegaNav + indexHtml.slice(navBarEnd);
  console.log('✅ Injected rich sub-menu mega navbar into index.html');
}

// Add handleListingPropertyNavClick to indexHtml
const navClickHandler = `
  <script>
    function handleListingPropertyNavClick() {
      try {
        const active = JSON.parse(localStorage.getItem('genriv_active_user') || '{}');
        if (active && (active.role === 'Seller' || active.role === 'Owner' || active.role === 'Builder')) {
          window.location.href = 'seller-dashboard.html';
          return;
        }
      } catch (e) {}
      window.location.href = 'seller-dashboard.html#advertisement-form';
    }
  </script>
`;

if (!indexHtml.includes('handleListingPropertyNavClick')) {
  indexHtml = indexHtml.replace('</body>', navClickHandler + '\n</body>');
  console.log('✅ Added handleListingPropertyNavClick to index.html');
}

// Ensure "View All" in featured projects links to new-projects.html?city=Kolkata
indexHtml = indexHtml.replace(
  /onclick="switchMainTab\('new-projects'\)"/g,
  'onclick="window.location.href=\'new-projects.html?city=Kolkata\'"'
);
indexHtml = indexHtml.replace(
  /<a href="[^"]*" id="featured-projects-view-all"/g,
  '<a href="new-projects.html?city=Kolkata" id="featured-projects-view-all"'
);

fs.writeFileSync(indexPath, indexHtml, 'utf8');
console.log('✅ Successfully updated index.html');
