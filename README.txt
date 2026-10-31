Genrivreality 2.0 — MagicBricks + Housing + 99acres Full-Stack Portal
================================================================================

A modern, high-performance real estate portal engineered with:
- Housing.com visual 360° discovery and clean modern aesthetics
- 99acres-grade locality intelligence, price trends, and RERA verification
- MagicBricks role-based account management (Buyer MB Prime, Seller Boost CRM, Admin Moderation)
- Role-Gated Form Access:
    * CUSTOMER REQUISITION FORM unlocks exclusively for logged-in Customers/Buyers.
    * PROPERTY ADVERTISEMENT FORM unlocks exclusively for logged-in Sellers/Owners.
    * Both forms can be inspected side-by-side by the Super Admin.

Pre-Seeded Demo Accounts:
-------------------------
You do not need to register from scratch — the following dummy accounts are ready:

1. BUYER / CUSTOMER ACCOUNT:
   - Name: Anirban Chatterjee
   - Email: anirban.buyer@genrivreality.com
   - Phone: +91 98301-44210
   - Password / OTP: 123456
   - Plan: MB Prime Gold Assisted (12 Contact Credits Left)
   - Capabilities: Access Customer Requisition Form, unlock direct owner phone numbers, save shortlisted properties.

2. SELLER / OWNER ACCOUNT:
   - Name: Debashis Sen (Sen Estates)
   - Email: debashis.seller@genrivreality.com
   - Phone: +91 98310-77890
   - Password / OTP: 123456
   - Plan: Seller Titanium Builder Pro (45 Credits, 25 Listing Slots)
   - Capabilities: Access 100% Free PROPERTY ADVERTISEMENT FORM, post live listings, CRM buyer leads tracker, 1-Click MagicBricks Top-Slot Boost.

3. SUPER ADMIN ACCOUNT:
   - Name: Vikramaditya Roy (Super Admin)
   - Email: admin@genrivreality.com
   - Phone: +91 98300-00001
   - Password / OTP: 123456
   - Plan: Platform Master Admin (999 Credits / 999 Listing Slots)
   - Capabilities: Inspect both forms, approve/revoke RERA certificates, adjust user credits, platform revenue ledger.

* Quick 1-Click Demo Switcher:
  When opening the login modal or the account dashboard, click "👤 Buyer Demo", "🏗️ Seller Demo", or "🛡️ Admin Demo" for instant zero-type role switching!

Included Files:
---------------
- index.html   : Fully responsive UI (Desktop, Laptop, Tablet, Mobile down to 360px)
- styles.css   : Custom Glassmorphism, animations, scrollbars, and PC/Mobile media queries
- script.js    : Dual-Mode Frontend Engine (REST API + LocalStorage DB fallback)
- server.js    : Node.js Express REST API Backend with persistence to `db/seed.json`
- db/seed.json : Pre-seeded database (Users, Subscriptions, Leads, Requisitions, Properties, Transactions)
- images/      : High-resolution property & hero assets (hero.jpg, prop1.jpg - prop6.jpg, genriv_logo.png)

How to Run the Website:
-----------------------
MODE 1 — Node.js Express Full-Stack Server:
  1. Open terminal in project root
  2. Run `npm install`
  3. Run `npm start` (or `node server.js`)
  4. Open http://localhost:3000 in your browser

MODE 2 — Instant Zero-Setup Static Hosting:
  Simply open `index.html` in any browser or upload to GitHub Pages, Netlify, Vercel, or shared cPanel hosting.
  The built-in dual-mode browser database immediately manages login state, role-gating, leads, and forms.

REST API Endpoints in server.js:
--------------------------------
- GET    /api/health                     : Service status & timestamp
- POST   /api/auth/login                 : Authenticate / auto-register Buyer, Seller, or Admin
- GET    /api/requisitions               : Retrieve customer requisitions
- POST   /api/requisitions               : Submit new Customer Requisition
- GET    /api/properties                 : Retrieve live property catalog
- POST   /api/properties                 : Submit new Seller Property Advertisement
- POST   /api/leads/unlock-contact       : Buyer consumes MB Prime credit to reveal owner contact
- GET    /api/seller/leads               : Seller fetches verified inquiries & leads CRM
- PATCH  /api/seller/leads/:id           : Update lead status (e.g. "Site Visit Fixed")
- GET    /api/subscriptions/plans        : MB Prime & Seller Boost subscription pricing
- POST   /api/subscriptions/checkout     : Instant mock payment checkout & quota top-up
- GET    /api/admin/users                : Master user list and platform ledger
- GET    /api/admin/metrics              : Summary platform KPI metrics
- PATCH  /api/admin/users/:id            : Admin credit grant or suspension
