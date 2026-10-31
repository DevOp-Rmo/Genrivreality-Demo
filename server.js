/**
 * Genrivreality — MagicBricks-Style Full-Stack Backend Server (server.js)
 * Supports Buyer Accounts, Seller Accounts, Admin Moderation, Lead CRM & Subscriptions
 */
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_PATH = path.join(__dirname, 'db', 'seed.json');

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static(__dirname));

function readDB() {
  const data = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
  if (!Array.isArray(data.requisitions)) data.requisitions = [];
  if (!Array.isArray(data.properties)) data.properties = [];
  return data;
}

function writeDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

// Dedicated Role Dashboards
app.get('/buyer-dashboard', (req, res) => res.sendFile(path.join(__dirname, 'buyer-dashboard.html')));
app.get('/seller-dashboard', (req, res) => res.sendFile(path.join(__dirname, 'seller-dashboard.html')));
app.get('/admin-dashboard', (req, res) => res.sendFile(path.join(__dirname, 'admin-dashboard.html')));

// 1. Health & Status Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Genrivreality MagicBricks Backend', timestamp: new Date().toISOString() });
});

// 2. Auth: Login / Register Role Account (Buyer, Seller, Owner, Admin)
app.post('/api/auth/login', (req, res) => {
  const { email, role = 'Buyer', name } = req.body;
  const db = readDB();
  let user = db.users.find(u => u.email.toLowerCase() === String(email || '').toLowerCase());
  if (!user) {
    user = {
      id: 'usr-' + Date.now(),
      name: name || String(email || 'member').split('@')[0],
      email: email || 'member@genrivreality.com',
      phone: '+91 98300-12345',
      role,
      planId: role === 'Seller' ? 'seller-free-tier' : 'mb-prime-silver',
      planName: role === 'Seller' ? 'Free Basic Tier (1 Ad / 6 Mo)' : 'MB Prime Silver',
      contactCredits: role === 'Buyer' ? 15 : 5,
      listingQuota: role === 'Seller' ? 1 : 0,
      listingUsed: 0,
      planDurationDays: 180,
      planExpiresAt: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
      isTopTenActive: false,
      status: 'Active',
      unlockedPropertyIds: []
    };
    db.users.push(user);
    writeDB(db);
  }
  res.json({ authenticated: true, user });
});

// 2b. Auth: Dedicated Sign Up for Buyer & Seller
app.post('/api/auth/signup', (req, res) => {
  const { name, email, phone, role = 'Buyer', password, planId } = req.body;
  const db = readDB();
  let existing = db.users.find(u => u.email.toLowerCase() === String(email || '').toLowerCase());
  if (existing) {
    return res.status(409).json({ error: 'Account with this email already exists. Please Sign In.' });
  }

  const isSeller = role === 'Seller' || role === 'Owner' || role === 'Builder' || role === 'Agent';
  const selectedPlanId = planId || (isSeller ? 'seller-free-tier' : 'buyer-free-tier');
  const planName = isSeller 
    ? (selectedPlanId === 'seller-titanium-pro' ? 'Seller Titanium Top-10 Spotlight' : (selectedPlanId === 'seller-silver-boost' ? 'Seller Silver Boost Pack' : 'Free Basic Tier (1 Ad / 6 Mo)'))
    : 'Buyer Verified Explorer';

  const newUser = {
    id: 'usr-' + Date.now(),
    name: name || 'Valued Member',
    email: email.toLowerCase(),
    phone: phone || '+91 98300-12345',
    role: isSeller ? 'Seller' : 'Buyer',
    password: password || '123456',
    planId: selectedPlanId,
    planName,
    contactCredits: isSeller ? 10 : 20,
    listingQuota: isSeller ? (selectedPlanId === 'seller-titanium-pro' ? 25 : (selectedPlanId === 'seller-silver-boost' ? 5 : 1)) : 0,
    listingUsed: 0,
    planDurationDays: selectedPlanId === 'seller-titanium-pro' ? 180 : (selectedPlanId === 'seller-silver-boost' ? 90 : 180),
    planExpiresAt: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
    isTopTenActive: selectedPlanId === 'seller-titanium-pro',
    status: 'Active',
    isOnboarded: false,
    joinedAt: new Date().toISOString().slice(0, 10),
    unlockedPropertyIds: []
  };

  db.users.push(newUser);
  writeDB(db);
  res.status(201).json({ success: true, message: 'Account registered successfully', user: newUser });
});

// 3. Buyer Action: Unlock Direct Owner Contact (Consumes 1 MB Prime Credit & Logs Seller Lead)
app.post('/api/leads/unlock-contact', (req, res) => {
  const { userId, propertyId, propertyTitle, budget } = req.body;
  const db = readDB();
  const user = db.users.find(u => u.id === userId) || db.users[0];
  if (!user.unlockedPropertyIds.includes(propertyId) && user.role !== 'Admin') {
    if (user.contactCredits <= 0) {
      return res.status(402).json({ error: 'Insufficient Contact Credits. Please upgrade to MB Prime.' });
    }
    user.contactCredits -= 1;
    user.unlockedPropertyIds.push(propertyId);
    const newLead = {
      id: 'LEAD-' + Math.floor(100 + Math.random() * 900),
      propertyId,
      propertyTitle: propertyTitle || propertyId,
      buyerName: user.name,
      buyerPhone: user.phone,
      budget: budget || 'Verified Inquiry',
      status: 'New Lead',
      timestamp: new Date().toISOString()
    };
    db.leads.unshift(newLead);
    writeDB(db);
  }
  res.json({ success: true, remainingCredits: user.contactCredits, unlockedPropertyIds: user.unlockedPropertyIds });
});

// 4. Seller CRM: Fetch & Update Buyer Leads
app.get('/api/seller/leads', (req, res) => {
  const db = readDB();
  res.json({ leads: db.leads });
});

app.patch('/api/seller/leads/:id', (req, res) => {
  const db = readDB();
  const lead = db.leads.find(l => l.id === req.params.id);
  if (!lead) return res.status(404).json({ error: 'Lead not found' });
  lead.status = req.body.status || lead.status;
  writeDB(db);
  res.json({ success: true, lead });
});

// 5. Subscriptions: List Plans & Process Instant Checkout
app.get('/api/subscriptions/plans', (req, res) => {
  const db = readDB();
  res.json({ plans: db.subscriptions, transactions: db.transactions });
});

app.post('/api/subscriptions/checkout', (req, res) => {
  const { userId, planId, method = 'UPI Instant' } = req.body;
  const db = readDB();
  const user = db.users.find(u => u.id === userId) || db.users[0];
  const plan = db.subscriptions.find(p => p.id === planId);
  if (!plan) return res.status(404).json({ error: 'Subscription plan not found' });

  user.planId = plan.id;
  user.planName = plan.name;
  user.contactCredits += plan.contactCredits;
  user.listingQuota += plan.listingQuota;

  const txn = {
    id: 'TXN-MB-' + Math.floor(1000 + Math.random() * 9000),
    userId: user.id,
    userName: user.name,
    role: user.role,
    planName: plan.name,
    amount: plan.price,
    method,
    date: new Date().toISOString().slice(0, 10),
    status: 'Paid'
  };
  db.transactions.unshift(txn);
  writeDB(db);
  res.status(201).json({ success: true, user, transaction: txn });
});

// 6. Admin Console: Manage Users & Platform Metrics
app.get('/api/admin/users', (req, res) => {
  const db = readDB();
  res.json({ users: db.users, transactions: db.transactions });
});

app.patch('/api/admin/users/:id', (req, res) => {
  const db = readDB();
  const user = db.users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  if (typeof req.body.addCredits === 'number') user.contactCredits += req.body.addCredits;
  if (req.body.status) user.status = req.body.status;
  writeDB(db);
  res.json({ success: true, user });
});

// 7. Customer Requisition Form API
app.get('/api/requisitions', (req, res) => {
  const db = readDB();
  res.json({ requisitions: db.requisitions });
});

app.post('/api/requisitions', (req, res) => {
  const db = readDB();
  const requisition = {
    id: req.body.id || ('REQ-2026-' + Math.floor(1000 + Math.random() * 9000)),
    name: req.body.name,
    role: req.body.role || 'Buyer',
    category: req.body.category || 'Residential Buy',
    location: req.body.location,
    specs: req.body.specs,
    budget: req.body.budget,
    notes: req.body.notes || '',
    timestamp: new Date().toISOString()
  };
  db.requisitions.unshift(requisition);
  writeDB(db);
  res.status(201).json({ success: true, requisition });
});

// 8. Seller Property Advertisement API
app.get('/api/properties', (req, res) => {
  const db = readDB();
  const includeAll = req.query.all === 'true';
  const filtered = includeAll ? db.properties : db.properties.filter(p => p.approvalStatus === 'Approved');
  res.json({ properties: filtered });
});

app.post('/api/properties', (req, res) => {
  const db = readDB();
  const sellerId = req.body.ownerId || req.body.userId || 'usr-seller-1';
  const user = db.users.find(u => u.id === sellerId) || {};
  const isTopTen = Boolean(req.body.isTopTen || user.isTopTenActive);

  const property = {
    id: req.body.id || ('prop-' + Date.now()),
    title: req.body.title || 'Verified Property Listing',
    city: req.body.city || 'Kolkata',
    locality: req.body.locality || 'Prime Micro-Market',
    intent: req.body.intent || 'Buy',
    category: req.body.category || 'Residential',
    bhk: req.body.bhk || '3 BHK',
    priceCr: parseFloat(req.body.priceCr) || 1.45,
    priceLabel: req.body.priceLabel || '₹1.45 Cr',
    areaSqft: parseInt(req.body.areaSqft, 10) || 1750,
    postedBy: req.body.postedBy || user.name || 'Owner',
    ownerId: sellerId,
    ownerEmail: user.email || 'seller@genrivreality.com',
    ownerPhone: req.body.ownerPhone || user.phone || '+91 98300-12345',
    reraId: req.body.reraId || 'WBRERA/P/NOR/2026/000912',
    reraVerified: Boolean(req.body.reraVerified ?? true),
    approvalStatus: req.body.approvalStatus || 'Pending Approval', // Requirement 7: Admin approval required before showing on front-end!
    isTopTen, // Requirement 5: Top 10 placement subscription
    isFeatured: Boolean(req.body.isFeatured || isTopTen),
    tier: isTopTen ? 'Top 10 Front Spotlight' : (req.body.isFeatured ? 'Featured Project' : 'Standard Owner/Agent'),
    image: req.body.image || 'images/prop5.jpg',
    views: 1,
    leadsCount: 0,
    timestamp: new Date().toISOString()
  };

  db.properties.unshift(property);
  writeDB(db);
  res.status(201).json({ success: true, property });
});

// 8b. Admin Property Moderation & Top-10 Spotlight Control
const handlePropertyStatusUpdate = (req, res) => {
  const db = readDB();
  const property = db.properties.find(p => p.id === req.params.id);
  if (!property) return res.status(404).json({ error: 'Property not found' });

  const status = req.body.status || req.body.approvalStatus;
  if (status) property.approvalStatus = status;
  if (typeof req.body.isTopTen === 'boolean') {
    property.isTopTen = req.body.isTopTen;
    if (property.isTopTen) property.tier = 'Top 10 Front Spotlight';
  }
  if (typeof req.body.isFeatured === 'boolean') property.isFeatured = req.body.isFeatured;
  if (req.body.tier) property.tier = req.body.tier;

  writeDB(db);
  res.json({ success: true, property });
};
app.patch('/api/admin/properties/:id/status', handlePropertyStatusUpdate);
app.put('/api/admin/properties/:id/status', handlePropertyStatusUpdate);

// 8c. Geo Location Auto-Detect Helper
app.get('/api/geo/detect', (req, res) => {
  // Simulates server-side IP detection with default Kolkata for Indian metro users
  res.json({
    detectedCity: 'Kolkata',
    region: 'West Bengal',
    country: 'India',
    popularLocalities: ['New Town', 'Salt Lake', 'Rajarhat', 'EM Bypass', 'Ballygunge', 'Alipore'],
    currency: 'INR',
    symbol: '₹'
  });
});

// 9. Admin Platform Metrics
app.get('/api/admin/metrics', (req, res) => {
  const db = readDB();
  const totalRev = (db.transactions || []).reduce((acc, t) => acc + (t.amount || 0), 0);
  res.json({
    totalUsers: (db.users || []).length,
    totalProperties: (db.properties || []).length,
    totalLeads: (db.leads || []).length,
    totalRequisitions: (db.requisitions || []).length,
    totalRevenueINR: totalRev
  });
});


// 10. Seller Organized Upload API (Folder by Seller Name -> documents / properties) (Point 1 & Point 7)
app.post('/api/seller/upload', (req, res) => {
  try {
    const {
      sellerName = 'Curated_Proper',
      folderType = 'documents',
      fileName = 'upload.jpg',
      base64Data,
      id = 'DOC'
    } = req.body;

    const sanitizedSeller = String(sellerName).trim().replace(/[^a-zA-Z0-9_-]/g, '_') || 'Curated_Proper';
    const sanitizedFolder = folderType === 'properties' ? 'properties' : 'documents';
    const targetDir = path.join(__dirname, 'images', 'sellers', sanitizedSeller, sanitizedFolder);
    fs.mkdirSync(targetDir, { recursive: true });

    const ext = path.extname(fileName) || '.jpg';
    const baseName = path.basename(fileName, ext).replace(/[^a-zA-Z0-9_-]/g, '_');
    const timestamp = Date.now();
    const uniqueFileName = `${id}-${timestamp}-${baseName}${ext}`;
    const filePath = path.join(targetDir, uniqueFileName);

    if (base64Data) {
      const data = base64Data.replace(/^data:[a-zA-Z0-9\/+-]+;base64,/, '');
      fs.writeFileSync(filePath, Buffer.from(data, 'base64'));
    } else {
      fs.writeFileSync(filePath, 'Mock document file created: ' + new Date().toISOString());
    }

    const relativeUrl = `images/sellers/${sanitizedSeller}/${sanitizedFolder}/${uniqueFileName}`;
    res.json({
      success: true,
      url: relativeUrl,
      fileName: uniqueFileName,
      folder: sanitizedFolder,
      seller: sanitizedSeller,
      timestamp
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Genrivreality Full-Stack Server running at http://localhost:${PORT}`);
});
