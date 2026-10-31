const fs = require('fs');
const path = require('path');

const detailHtmlPath = path.join(__dirname, 'property-detail.html');

const updatedDetailHtml = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Property Details &amp; Specifications — RERA Verified | Genriv Reality</title>
  <meta name="description" content="Detailed property specifications, carpet area, verified legal documents, price breakdown, and direct owner/developer contact on Genriv Reality." />
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            genriv: { 50: '#eef2ff', 100: '#e0e7ff', 500: '#6366f1', 600: '#4f46e5', 700: '#4338ca', 800: '#3730a3', 900: '#312e81' },
            acres: { 500: '#0ea5e9', 600: '#0284c7' }
          },
          fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
            display: ['Cabinet Grotesk', 'Plus Jakarta Sans', 'sans-serif']
          }
        }
      }
    };
  </script>
  <link rel="stylesheet" href="styles.css" />
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen antialiased flex flex-col">

  <!-- UNIFIED TOP PROMO STRIP -->
  <div class="bg-gradient-to-r from-genriv-900 via-indigo-900 to-slate-900 text-white text-[11px] py-1.5 px-4 border-b border-white/10">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="px-1.5 py-0.5 rounded bg-emerald-500 text-white font-extrabold text-[10px]">100% RERA VERIFIED</span>
        <span>India's High-Trust Real Estate Portal: 360° Tours + Locality Intelligence</span>
      </div>
      <div class="hidden sm:flex items-center gap-4 text-slate-300">
        <a href="loan-calculator.html" class="hover:text-white transition">Bank Loan 8.35% p.a.</a>
        <span>•</span>
        <a href="seller-dashboard.html#advertisement-form" class="hover:text-amber-300 text-amber-400 font-bold transition">+ Post Property FREE</a>
      </div>
    </div>
  </div>

  <!-- UNIFIED HEADER -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm" style="overflow: visible !important;">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
      
      <!-- Brand Logo -->
      <a href="index.html" class="flex items-center gap-2 shrink-0">
        <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-genriv-600 via-indigo-500 to-acres-500 flex items-center justify-center text-white font-extrabold shadow-md">
          G
        </div>
        <div>
          <span class="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 dark:text-white">Genriv<span class="text-genriv-600 dark:text-genriv-400">reality</span></span>
          <span class="hidden sm:inline-block ml-1.5 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/15 text-emerald-600 uppercase tracking-wider">VERIFIED</span>
        </div>
      </a>

      <!-- Navigation Links -->
      <nav class="hidden lg:flex items-center gap-5 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200">
        <a href="index.html" class="hover:text-genriv-600 transition">Home</a>
        <a href="new-projects.html?city=Kolkata" class="hover:text-genriv-600 transition">New Projects</a>
        <a href="properties.html" class="hover:text-genriv-600 transition">All Properties</a>
        <a href="agents.html" class="hover:text-genriv-600 transition">Top Agents</a>
        <a href="loan-calculator.html" class="hover:text-amber-500 text-amber-600 dark:text-amber-400 transition">Loan Eligibility</a>
      </nav>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2 shrink-0">
        <a href="seller-dashboard.html#advertisement-form" class="px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 text-white text-xs font-extrabold shadow-sm transition flex items-center gap-1.5">
          <span>➕</span> <span>Post Property FREE</span>
        </a>
        <button onclick="shareProperty()" class="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold transition" title="Share Property">
          🔗
        </button>
      </div>
    </div>
  </header>

  <!-- BREADCRUMB STRIP (MagicBricks Style) -->
  <div class="bg-slate-100 dark:bg-slate-900/90 py-3 border-b border-slate-200 dark:border-slate-800 text-xs text-slate-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 flex-wrap">
      <a href="index.html" class="hover:underline">Home</a>
      <span>›</span>
      <a href="properties.html" class="hover:underline">Properties in Kolkata</a>
      <span>›</span>
      <span id="prop-locality-crumb" class="hover:underline">Action Area II, New Town</span>
      <span>›</span>
      <span id="prop-title-crumb" class="text-slate-900 dark:text-white font-bold truncate">Property Overview</span>
    </div>
  </div>

  <!-- MAIN PROPERTY DETAILS PAGE -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full space-y-8">
    
    <!-- Title & Top Pricing Hero -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm">
      <div class="space-y-1.5">
        <div class="flex items-center gap-2 flex-wrap">
          <span id="prop-purpose-badge" class="px-3 py-1 rounded-full text-xs font-extrabold bg-genriv-600 text-white uppercase">For Sale</span>
          <span id="prop-rera-badge" class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-600">🛡️ RERA Verified</span>
          <span id="prop-category-badge" class="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Residential</span>
          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-400/20 text-amber-700 dark:text-amber-300">0% Zero Brokerage Available</span>
        </div>
        <h1 id="prop-title" class="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 dark:text-white">
          Botanica Waterfront Sky-Forest Towers
        </h1>
        <p id="prop-locality" class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
          📍 Action Area II, New Town, Kolkata 700156
        </p>
      </div>

      <div class="md:text-right shrink-0 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200/70 dark:border-slate-700/70">
        <span class="text-[10px] text-slate-400 uppercase tracking-wider font-extrabold block">All-Inclusive Price</span>
        <div id="prop-price" class="font-display font-extrabold text-3xl sm:text-4xl text-genriv-600 dark:text-genriv-400">
          ₹1.45 Cr
        </div>
        <div id="prop-rate" class="text-xs text-slate-500 font-semibold mt-0.5">
          ₹7,671 / sq.ft. • EMI Starts ₹1.12 L/mo
        </div>
      </div>
    </div>

    <!-- Gallery & Media Section (with 360 & Floor plan) -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <!-- Main Showcase Photo -->
      <div class="lg:col-span-2 h-96 rounded-3xl overflow-hidden bg-slate-800 relative shadow-md">
        <img id="prop-main-img" src="images/prop1.jpg" alt="Property Image" class="w-full h-full object-cover" />
        <div class="absolute bottom-4 left-4 flex gap-2 flex-wrap">
          <button onclick="alert('🌀 Launching Interactive 360° Spatial Radar Tour...')" class="px-4 py-2 rounded-xl bg-black/80 hover:bg-black text-white text-xs font-extrabold backdrop-blur-md transition flex items-center gap-1.5 shadow-lg">
            <span>🌀</span> <span>360° Virtual Tour</span>
          </button>
          <button onclick="alert('📐 Architectural floor plan with exact carpet dimensions downloaded.')" class="px-4 py-2 rounded-xl bg-white/90 hover:bg-white text-slate-900 text-xs font-extrabold backdrop-blur-md transition flex items-center gap-1.5 shadow-lg">
            <span>📐</span> <span>Floor Plan &amp; Layout</span>
          </button>
        </div>
      </div>

      <!-- Thumbnail Strip -->
      <div class="flex flex-col gap-4">
        <div class="h-44 rounded-2xl overflow-hidden bg-slate-800 shadow">
          <img id="prop-thumb-1" src="images/prop2.jpg" alt="Interior view" class="w-full h-full object-cover hover:scale-105 transition" />
        </div>
        <div class="h-48 rounded-2xl overflow-hidden bg-slate-800 shadow">
          <img id="prop-thumb-2" src="images/prop3.jpg" alt="Aerial view" class="w-full h-full object-cover hover:scale-105 transition" />
        </div>
      </div>
    </div>

    <!-- Quick Specifications Strip (MagicBricks Style) -->
    <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
      <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
        <span class="text-[10px] text-slate-400 uppercase font-bold block">Super Area</span>
        <span id="prop-metric-area" class="font-display font-extrabold text-sm text-slate-900 dark:text-white mt-1 block">1890 sq.ft.</span>
      </div>
      <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
        <span class="text-[10px] text-slate-400 uppercase font-bold block">Carpet Area</span>
        <span id="prop-metric-carpet" class="font-display font-extrabold text-sm text-slate-900 dark:text-white mt-1 block">1520 sq.ft.</span>
      </div>
      <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
        <span class="text-[10px] text-slate-400 uppercase font-bold block">BHK Config</span>
        <span id="prop-metric-bhk" class="font-display font-extrabold text-sm text-slate-900 dark:text-white mt-1 block">3 BHK</span>
      </div>
      <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
        <span class="text-[10px] text-slate-400 uppercase font-bold block">Possession</span>
        <span id="prop-metric-possession" class="font-display font-extrabold text-sm text-slate-900 dark:text-white mt-1 block">Ready to Move</span>
      </div>
      <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
        <span class="text-[10px] text-slate-400 uppercase font-bold block">Furnishing</span>
        <span id="prop-metric-furnishing" class="font-display font-extrabold text-sm text-slate-900 dark:text-white mt-1 block">Semi-furnished</span>
      </div>
      <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
        <span class="text-[10px] text-slate-400 uppercase font-bold block">Facing</span>
        <span class="font-display font-extrabold text-sm text-slate-900 dark:text-white mt-1 block">East (Vastu)</span>
      </div>
      <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
        <span class="text-[10px] text-slate-400 uppercase font-bold block">Parking</span>
        <span class="font-display font-extrabold text-sm text-slate-900 dark:text-white mt-1 block">1 Covered</span>
      </div>
      <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
        <span class="text-[10px] text-slate-400 uppercase font-bold block">RERA Status</span>
        <span id="prop-metric-rera" class="font-display font-extrabold text-sm text-emerald-600 mt-1 block">Approved</span>
      </div>
    </div>

    <!-- 2-Column Main Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      <!-- Left 2 Cols: Comprehensive 12-Section Form Brief & Details -->
      <div class="lg:col-span-2 space-y-8">
        
        <!-- COMPREHENSIVE 12-SECTION PROPERTY ADVERTISEMENT DETAILS SHOWCASE -->
        <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
          <div class="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span class="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-700 dark:text-amber-300 text-[10px] font-extrabold uppercase tracking-wider">OFFICIAL ADVERTISEMENT BRIEF</span>
              <h2 class="font-display font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white mt-1">
                Verified Property Advertisement Specifications
              </h2>
            </div>
            <span class="text-xs text-slate-400 font-mono" id="brief-reg-no">Reg: GENRIV-AD-892144</span>
          </div>

          <!-- Section 1 & 2: Advertiser Capacity & Project Name -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/70">
              <span class="text-slate-400 uppercase font-bold block mb-1">1. Advertising By</span>
              <div class="font-display font-extrabold text-sm text-slate-900 dark:text-white" id="brief-seller-name">Debashis Sen (Sen Estates)</div>
              <span class="text-genriv-600 font-semibold" id="brief-seller-role">Builder / Developer</span>
            </div>
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/70">
              <span class="text-slate-400 uppercase font-bold block mb-1">2. Project / Society Name</span>
              <div class="font-display font-extrabold text-sm text-slate-900 dark:text-white" id="brief-project-name">Botanica Waterfront Sky-Forest Towers</div>
              <span class="text-emerald-600 font-mono font-bold" id="brief-rera-id">WBRERA/P/NOR/2023/000214</span>
            </div>
          </div>

          <!-- Section 3, 4, 5: Category, Purpose & Possession -->
          <div class="grid grid-cols-3 gap-3 text-xs">
            <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/70">
              <span class="text-slate-400 uppercase font-bold block mb-0.5">3. Category</span>
              <strong class="text-slate-900 dark:text-white" id="brief-category">Residential</strong>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/70">
              <span class="text-slate-400 uppercase font-bold block mb-0.5">4. Purpose</span>
              <strong class="text-emerald-600" id="brief-purpose">For Sale</strong>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/70">
              <span class="text-slate-400 uppercase font-bold block mb-0.5">5. Possession</span>
              <strong class="text-slate-900 dark:text-white" id="brief-possession">Ready to Move</strong>
            </div>
          </div>

          <!-- Section 6 & 7: Configuration & Financials -->
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/70 space-y-3 text-xs">
            <div class="font-bold text-slate-900 dark:text-white flex items-center justify-between">
              <span>6. Configuration &amp; 7. Price Breakdown</span>
              <span class="text-genriv-600 font-extrabold" id="brief-price-val">₹1.45 Cr</span>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <span class="text-slate-400 block">Unit Config:</span>
                <strong id="brief-config">3 BHK</strong>
              </div>
              <div>
                <span class="text-slate-400 block">Super Built-up:</span>
                <strong id="brief-super-area">1890 sq.ft.</strong>
              </div>
              <div>
                <span class="text-slate-400 block">Carpet Area:</span>
                <strong id="brief-carpet-area">1520 sq.ft.</strong>
              </div>
              <div>
                <span class="text-slate-400 block">Monthly Maint.:</span>
                <strong>₹4,500 / month</strong>
              </div>
            </div>
          </div>

          <!-- Section 8: All 25 Verified Amenities & Facilities -->
          <div class="space-y-3 text-xs">
            <div class="flex items-center justify-between">
              <h3 class="font-display font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
                8. Amenities &amp; Facilities (25 Verified Points)
              </h3>
              <span class="text-emerald-600 font-bold">✓ 100% Platform Verified</span>
            </div>
            <div id="prop-amenities-grid" class="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <!-- Dynamically populated with 25 amenities -->
            </div>
          </div>

          <!-- Section 9: Furnishing Status & Special Features -->
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/70 space-y-2 text-xs">
            <span class="text-slate-400 uppercase font-bold block">9. Furnishing &amp; Additional Facilities</span>
            <div class="text-slate-800 dark:text-slate-200" id="brief-furnishing-desc">
              Semi-furnished with modular German kitchen, VRV central air-conditioning piping, 11-ft clear ceilings, Italian marble flooring in living areas, and wooden flooring in master bedroom.
            </div>
          </div>

          <!-- Section 10: Legal Documents & Clearances Verified Checklist -->
          <div class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 space-y-3 text-xs">
            <span class="text-emerald-800 dark:text-emerald-300 uppercase font-extrabold block">
              10. Legal Clearances &amp; Title Verification Checklist
            </span>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-emerald-900 dark:text-emerald-200 font-semibold">
              <div class="flex items-center gap-2"><span>✓</span> <span>Title Deed &amp; Encumbrance Certificate Verified</span></div>
              <div class="flex items-center gap-2"><span>✓</span> <span>KMC / WBHIDCO Approved Sanction Plan</span></div>
              <div class="flex items-center gap-2"><span>✓</span> <span>Official WBRERA Registration Certificate</span></div>
              <div class="flex items-center gap-2"><span>✓</span> <span>Property Tax Receipts Paid &amp; Clear</span></div>
              <div class="flex items-center gap-2"><span>✓</span> <span>Fire Safety &amp; Environmental Clearance NOC</span></div>
              <div class="flex items-center gap-2"><span>✓</span> <span>Occupancy Certificate (OC) / Completion Status</span></div>
            </div>
          </div>

          <!-- Section 11 & 12: Contact & Verbatim Declaration -->
          <div class="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300/80 dark:border-amber-800/80 space-y-2 text-xs">
            <span class="text-amber-900 dark:text-amber-200 uppercase font-extrabold block">
              12. Advertiser Declaration &amp; Authenticity Assurance
            </span>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed italic">
              "The advertiser declares that the information and photographs submitted for this property advertisement are accurate, verified, and that they have full authorization to advertise this unit. GENRIV has audited the RERA and municipal approvals for platform listing safety."
            </p>
          </div>

        </div>

        <!-- Interactive Home Loan EMI Calculator prefilled for this property -->
        <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-genriv-950 text-white border border-indigo-900 shadow-md space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-amber-400">MagicBricks Loan Desk</span>
              <h3 class="font-display font-extrabold text-lg text-white mt-0.5">Finance This Property with Top Banks</h3>
            </div>
            <a href="loan-calculator.html" class="text-xs font-bold text-amber-300 hover:underline">Full Eligibility Tool →</a>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div class="p-3.5 rounded-2xl bg-white/10">
              <span class="text-slate-300 block">Indicative Loan (80%)</span>
              <span id="emi-loan-amount" class="font-display font-bold text-base text-white mt-1 block">₹1.16 Cr</span>
            </div>
            <div class="p-3.5 rounded-2xl bg-white/10">
              <span class="text-slate-300 block">Bank Rate / Tenure</span>
              <span class="font-display font-bold text-base text-white mt-1 block">8.35% p.a. • 20 Yrs</span>
            </div>
            <div class="p-3.5 rounded-2xl bg-amber-400 text-slate-950">
              <span class="text-slate-800 font-semibold block">Monthly EMI</span>
              <span id="emi-monthly-val" class="font-display font-extrabold text-base text-slate-950 mt-1 block">₹99,650 / mo</span>
            </div>
          </div>
          <a href="loan-calculator.html" class="block text-center py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition">
            Apply with SBI, HDFC or ICICI Bank at 8.35% p.a. →
          </a>
        </div>

      </div>

      <!-- Right Col: Sticky Verified Contact & Site Visit Card -->
      <aside class="space-y-6">
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg sticky top-24 space-y-5">
          <div class="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-genriv-600 to-acres-500 text-white flex items-center justify-center font-bold text-xl shadow">
              🏢
            </div>
            <div>
              <span class="text-[10px] text-slate-400 uppercase font-extrabold block">Advertiser Profile</span>
              <h4 id="prop-seller-name" class="font-display font-extrabold text-base text-slate-900 dark:text-white">Debashis Sen (Sen Estates)</h4>
              <span id="prop-seller-role" class="text-xs text-genriv-600 font-semibold">Builder / Developer</span>
            </div>
          </div>

          <div class="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
            <span>🛡️</span>
            <span>RERA Registered Advertiser with zero platform complaints.</span>
          </div>

          <!-- Schedule Free Site Visit Form -->
          <form onsubmit="handleContactSubmit(event)" class="space-y-3 text-xs">
            <div class="font-bold text-slate-900 dark:text-white">Book Free In-Person Site Visit</div>
            <div>
              <input type="text" id="buyer-name" required placeholder="Your Full Name" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700" />
            </div>
            <div>
              <input type="tel" id="buyer-phone" required placeholder="10-Digit Mobile Number" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold" />
            </div>
            <div>
              <label class="text-[11px] text-slate-500 block mb-1">Select Visit Date</label>
              <input type="date" id="visit-date" class="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700" />
            </div>
            <button type="submit" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 text-white font-extrabold text-xs shadow-md transition">
              📅 Confirm Free Site Visit &amp; Callback
            </button>
          </form>

          <div class="text-center pt-2 space-y-2 border-t border-slate-100 dark:border-slate-800">
            <button onclick="revealDirectContact()" id="btn-reveal-contact" class="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-xs font-bold transition">
              👁️ View Direct Advertiser Phone Number
            </button>
            <div id="direct-phone-box" class="hidden p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-sm font-bold text-emerald-800 dark:text-emerald-200">
              📞 <span id="seller-phone-display">+91 98310-77890</span>
            </div>
          </div>
        </div>
      </aside>

    </div>

  </main>

  <!-- UNIFIED FOOTER -->
  <footer class="bg-slate-900 text-slate-400 py-12 mt-12 border-t border-slate-800 text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="space-y-3">
          <div class="font-display font-extrabold text-lg text-white">Genriv Reality</div>
          <p class="text-slate-400 leading-relaxed">
            India's next-generation verified real estate portal inspired by MagicBricks, Housing.com &amp; 99acres with RERA verified projects, direct owner listings, and zero brokerage options.
          </p>
        </div>
        <div>
          <h4 class="font-bold text-white uppercase tracking-wider mb-3">Quick Portals</h4>
          <ul class="space-y-2">
            <li><a href="new-projects.html?city=Kolkata" class="hover:text-white transition">New Projects in Kolkata</a></li>
            <li><a href="properties.html" class="hover:text-white transition">All Verified Properties</a></li>
            <li><a href="agents.html" class="hover:text-white transition">Top Kolkata Agents Directory</a></li>
            <li><a href="loan-calculator.html" class="hover:text-white transition">Home Loan Eligibility Calculator</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-white uppercase tracking-wider mb-3">Popular Localities</h4>
          <ul class="space-y-2">
            <li><a href="new-projects.html?city=Kolkata&locality=New+Town" class="hover:text-white transition">New Town Action Area I &amp; II</a></li>
            <li><a href="new-projects.html?city=Kolkata&locality=Salt+Lake" class="hover:text-white transition">Salt Lake Sector V Tech City</a></li>
            <li><a href="new-projects.html?city=Kolkata&locality=Rajarhat" class="hover:text-white transition">Rajarhat Expressway Corridor</a></li>
            <li><a href="new-projects.html?city=Kolkata&locality=Alipore" class="hover:text-white transition">Heritage Alipore &amp; Ballygunge</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-white uppercase tracking-wider mb-3">Advertiser &amp; Legal</h4>
          <ul class="space-y-2">
            <li><a href="seller-dashboard.html#advertisement-form" class="hover:text-white transition">12-Section Property Ad Form</a></li>
            <li><a href="seller-dashboard.html#subscriptions" class="hover:text-white transition">Top-10 Front Listing Pricing</a></li>
            <li><a href="buyer-dashboard.html?new_signup=true" class="hover:text-white transition">Customer Requisition Form</a></li>
            <li><a href="admin-dashboard.html" class="hover:text-white transition">Super Admin CRM Portal</a></li>
          </ul>
        </div>
      </div>

      <div class="pt-6 border-t border-slate-800 text-center text-slate-500 text-[11px] flex flex-col sm:flex-row items-center justify-between gap-2">
        <div>© 2026 Genriv Reality Technologies Pvt. Ltd. All rights reserved. 100% RERA Compliant.</div>
        <div>Corporate Office: Park Street &amp; Camac Street Crossing, Kolkata 700016</div>
      </div>
    </div>
  </footer>

  <script src="properties-data.js"></script>
  <script>
    const full25Amenities = [
      "Lift", "Car Parking", "Two-Wheeler Parking", "24×7 Water Supply", "Power Backup",
      "Security Guard", "CCTV", "Fire Safety", "Gated Community", "Garden",
      "Children's Play Area", "Gym", "Swimming Pool", "Community Hall", "Clubhouse",
      "Intercom", "Balcony", "Terrace", "Visitor Parking", "Rainwater Harvesting",
      "Solar Power", "Nearby School", "Nearby Hospital", "Nearby Market", "Nearby Public Transport"
    ];

    let currentProp = null;

    window.addEventListener('DOMContentLoaded', () => {
      const savedTheme = localStorage.getItem('genriv_theme');
      if (savedTheme === 'dark') document.documentElement.classList.add('dark');

      const urlParams = new URLSearchParams(window.location.search);
      const propId = urlParams.get('id') || 'prop-kol-1';
      
      const allProps = window.GENRIV_GLOBAL_PROPERTIES || [];
      currentProp = allProps.find(p => p.id === propId) || allProps[0];

      if (currentProp) {
        populateProperty(currentProp);
      }
    });

    function populateProperty(p) {
      document.title = \`\${p.title} in \${p.locality}, \${p.city} | Genriv Reality\`;
      document.getElementById('prop-locality-crumb').textContent = p.locality;
      document.getElementById('prop-title-crumb').textContent = p.title;
      document.getElementById('prop-purpose-badge').textContent = p.purpose || p.intent;
      document.getElementById('prop-category-badge').textContent = p.category;
      document.getElementById('prop-title').textContent = p.title;
      document.getElementById('prop-locality').textContent = \`📍 \${p.fullAddress || p.locality + ', ' + p.city}\`;
      document.getElementById('prop-price').textContent = p.priceLabel;
      document.getElementById('prop-rate').textContent = p.pricePerSqft ? \`₹\${p.pricePerSqft} / sq.ft. • EMI Available\` : 'EMI Available';
      
      document.getElementById('prop-main-img').src = p.image;
      if (p.gallery && p.gallery[1]) document.getElementById('prop-thumb-1').src = p.gallery[1];
      if (p.gallery && p.gallery[2]) document.getElementById('prop-thumb-2').src = p.gallery[2];

      document.getElementById('prop-metric-area').textContent = \`\${p.areaSqft} sq.ft.\`;
      const carpetEst = Math.round(p.areaSqft * 0.78);
      document.getElementById('prop-metric-carpet').textContent = \`\${carpetEst} sq.ft.\`;
      document.getElementById('prop-metric-bhk').textContent = p.bhk;
      document.getElementById('prop-metric-possession').textContent = p.possessionType;
      document.getElementById('prop-metric-furnishing').textContent = p.furnishing || 'Semi-furnished';
      document.getElementById('prop-metric-rera').textContent = p.rera ? 'RERA Approved' : 'Verified';

      // 12-Section Brief Mapping
      document.getElementById('brief-seller-name').textContent = p.sellerName || 'Debashis Sen (Sen Estates)';
      document.getElementById('brief-seller-role').textContent = p.sellerRole || 'Builder / Developer';
      document.getElementById('brief-project-name').textContent = p.title;
      document.getElementById('brief-rera-id').textContent = p.rera || 'WBRERA/P/NOR/2023/000214';
      document.getElementById('brief-category').textContent = p.category;
      document.getElementById('brief-purpose').textContent = p.purpose || p.intent;
      document.getElementById('brief-possession').textContent = p.possessionType;
      document.getElementById('brief-price-val').textContent = p.priceLabel;
      document.getElementById('brief-config').textContent = p.bhk;
      document.getElementById('brief-super-area').textContent = \`\${p.areaSqft} sq.ft.\`;
      document.getElementById('brief-carpet-area').textContent = \`\${carpetEst} sq.ft.\`;
      document.getElementById('brief-furnishing-desc').textContent = \`\${p.furnishing || 'Semi-furnished'} layout. \${p.description}\`;

      document.getElementById('prop-seller-name').textContent = p.sellerName || 'Verified Advertiser';
      document.getElementById('prop-seller-role').textContent = p.sellerRole || 'Property Owner';
      document.getElementById('seller-phone-display').textContent = p.contactPhone || '+91 98310-77890';

      // EMI Calculation
      const priceVal = (p.priceCr || 1) * 10000000;
      const loanAmount = priceVal * 0.8;
      document.getElementById('emi-loan-amount').textContent = \`₹\${(loanAmount / 10000000).toFixed(2)} Cr\`;
      const monthlyRate = 0.0835 / 12;
      const months = 240;
      const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
      document.getElementById('emi-monthly-val').textContent = \`₹\${Math.round(emi).toLocaleString('en-IN')} / mo\`;

      // 25 Amenities Grid
      const amenGrid = document.getElementById('prop-amenities-grid');
      amenGrid.innerHTML = '';
      const available = new Set(p.amenities || ["Lift", "Car Parking", "24×7 Water Supply", "Power Backup", "Security Guard", "CCTV", "Fire Safety", "Garden", "Gym", "Balcony"]);

      full25Amenities.forEach(a => {
        const hasIt = available.has(a);
        const item = document.createElement('div');
        item.className = \`p-2 rounded-xl border flex items-center gap-1.5 text-xs \${hasIt ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300' : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200/60 dark:border-slate-700/60 text-slate-400 line-through opacity-60'}\`;
        item.innerHTML = \`<span class="font-bold">\${hasIt ? '✓' : '✕'}</span> <span>\${a}</span>\`;
        amenGrid.appendChild(item);
      });
    }

    function revealDirectContact() {
      document.getElementById('direct-phone-box').classList.remove('hidden');
      document.getElementById('btn-reveal-contact').classList.add('hidden');
    }

    function handleContactSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('buyer-name').value;
      const phone = document.getElementById('buyer-phone').value;
      const date = document.getElementById('visit-date').value || 'Tomorrow';
      alert(\`🎉 Site Visit Confirmed, \${name}!\n\nYour site visit has been booked for \${date}.\nThe advertiser (\${currentProp ? currentProp.sellerName : 'Debashis Sen'}) will call you at \${phone} with directions and parking instructions.\`);
    }

    function shareProperty() {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href);
        alert('📋 Property link copied to clipboard!');
      } else {
        alert(window.location.href);
      }
    }
  </script>
</body>
</html>
`;

fs.writeFileSync(detailHtmlPath, updatedDetailHtml, 'utf8');
console.log('✅ Updated property-detail.html with full 12-section brief and MagicBricks details');
