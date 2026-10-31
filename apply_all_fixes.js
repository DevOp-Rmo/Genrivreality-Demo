const fs = require('fs');
const path = require('path');

// =========================================================================
// 1. UPDATE styles.css: Remove conflicting blanket rules & add .magic-nav-dropdown
// =========================================================================
let css = fs.readFileSync('styles.css', 'utf8');

// Remove any blanket group-hover display:block rules
css = css.replace(/\.group:hover \.group-hover\\:block\s*\{[^}]*\}/g, '');
css = css.replace(/\.nav-dropdown-item:hover > \.nav-dropdown-menu[^{]*\{[^}]*\}/g, '');

const magicDropdownCss = `
/* =========================================================================
   CLEAN NON-OVERLAPPING MAGICBRICKS MEGA-DROPDOWNS
   ========================================================================= */
header.glass-panel,
header {
  overflow: visible !important;
}

.magic-nav-dropdown {
  position: relative;
  display: inline-block;
}

.magic-dropdown-panel {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 290px;
  background: #ffffff;
  border: 1px solid rgba(226, 232, 240, 0.95);
  border-radius: 1.25rem;
  box-shadow: 0 20px 40px -10px rgba(15, 23, 42, 0.22), 0 0 1px 1px rgba(0, 0, 0, 0.05);
  padding: 0.75rem;
  z-index: 99999;
  margin-top: 0.25rem;
}

.dark .magic-dropdown-panel {
  background: #0f172a;
  border-color: rgba(51, 65, 85, 0.95);
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.7);
}

/* STRICT DIRECT-CHILD HOVER: Only hovered item displays its own dropdown panel */
.magic-nav-dropdown:hover > .magic-dropdown-panel {
  display: block !important;
}

.magic-dropdown-panel:hover {
  display: block !important;
}
`;

if (!css.includes('CLEAN NON-OVERLAPPING MAGICBRICKS MEGA-DROPDOWNS')) {
  css += '\n' + magicDropdownCss;
} else {
  const startIdx = css.indexOf('/* =========================================================================\n   CLEAN NON-OVERLAPPING MAGICBRICKS MEGA-DROPDOWNS');
  css = css.slice(0, startIdx) + magicDropdownCss;
}

fs.writeFileSync('styles.css', css, 'utf8');
console.log('✅ Updated styles.css with clean single-hover dropdowns');

// =========================================================================
// 2. UPDATE index.html:
// - Replace top nav with .magic-nav-dropdown items
// - Fix "Explore Zero-Brokerage Homes →" button
// - Ensure + Post Property FREE links directly to seller-dashboard.html#advertisement-form
// - Add link to agents.html
// =========================================================================
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Replace top nav links with clean magic-nav-dropdown items
const oldTopNavStart = indexHtml.indexOf('<nav class="pc-compact-nav');
const oldTopNavEnd = indexHtml.indexOf('</nav>', oldTopNavStart) + 6;

if (oldTopNavStart !== -1) {
  const newCleanTopNav = `<nav class="pc-compact-nav hidden xl:flex items-center gap-2 2xl:gap-3 text-xs xl:text-sm font-semibold text-slate-700 dark:text-slate-200 shrink-0">
        
        <!-- Explore Properties Dropdown -->
        <div class="magic-nav-dropdown py-2">
          <button type="button" class="px-2.5 py-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1 transition font-bold">
            <span>Explore Properties</span>
            <span class="text-[9px] opacity-60">▾</span>
          </button>
          <div class="magic-dropdown-panel">
            <div class="px-2 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Discover Homes</div>
            <a href="new-projects.html?city=Kolkata" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-genriv-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold transition">
              <span class="text-base">🏗️</span>
              <div>
                <div class="text-xs">New Projects in Kolkata</div>
                <div class="text-[10px] text-slate-500 font-normal">22+ RERA upcoming townships &amp; towers</div>
              </div>
            </a>
            <a href="properties.html?intent=Buy" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-genriv-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold transition">
              <span class="text-base">🏡</span>
              <div>
                <div class="text-xs">Ready to Move Apartments</div>
                <div class="text-[10px] text-slate-500 font-normal">Immediate possession flats across Kolkata</div>
              </div>
            </a>
            <a href="properties.html?intent=Rent" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-genriv-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold transition">
              <span class="text-base">🔑</span>
              <div>
                <div class="text-xs">Zero Brokerage Rentals</div>
                <div class="text-[10px] text-slate-500 font-normal">Direct owner rental flats &amp; family homes</div>
              </div>
            </a>
            <a href="properties.html" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-genriv-50 dark:hover:bg-slate-800 text-genriv-600 dark:text-genriv-400 font-extrabold transition">
              <span class="text-base">🔍</span>
              <div>
                <div class="text-xs">Browse All 36+ Properties Pan-India</div>
                <div class="text-[10px] text-slate-500 font-normal">Kolkata, Mumbai, Bengaluru, NCR, Hyderabad</div>
              </div>
            </a>
          </div>
        </div>

        <!-- Top Agents Link (Question 5) -->
        <a href="agents.html" class="px-2.5 py-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold flex items-center gap-1 transition">
          <span>👨‍💼</span> <span>Top Agents</span>
        </a>

        <!-- Home Loans Dropdown -->
        <div class="magic-nav-dropdown py-2">
          <button type="button" class="px-2.5 py-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1 transition font-bold text-amber-600 dark:text-amber-400">
            <span>Home Loans &amp; EMI</span>
            <span class="text-[9px] opacity-60">▾</span>
          </button>
          <div class="magic-dropdown-panel">
            <div class="px-2 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Banking &amp; Sanction</div>
            <a href="loan-calculator.html" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-genriv-50 dark:hover:bg-slate-800 text-amber-600 dark:text-amber-400 font-extrabold transition">
              <span class="text-base">🧮</span>
              <div>
                <div class="text-xs">Home Loan Eligibility Calculator</div>
                <div class="text-[10px] text-slate-500 font-normal">30-second MagicBricks borrowing capacity</div>
              </div>
            </a>
            <a href="loan-calculator.html" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-genriv-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold transition">
              <span class="text-base">🏦</span>
              <div>
                <div class="text-xs">Compare Partner Banks (8.35% p.a.)</div>
                <div class="text-[10px] text-slate-500 font-normal">SBI, HDFC, ICICI, Axis Bank offers</div>
              </div>
            </a>
            <a href="loan-calculator.html" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-genriv-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold transition">
              <span class="text-base">📄</span>
              <div>
                <div class="text-xs">Instant Pre-Sanction Certificate</div>
                <div class="text-[10px] text-slate-500 font-normal">Digital sanction letter valid for 90 days</div>
              </div>
            </a>
          </div>
        </div>

        <!-- Price Trends Dropdown -->
        <div class="magic-nav-dropdown py-2">
          <button type="button" class="px-2.5 py-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1 transition font-bold">
            <span>Price Trends</span>
            <span class="text-[9px] opacity-60">▾</span>
          </button>
          <div class="magic-dropdown-panel">
            <div class="px-2 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Market Intelligence</div>
            <a href="#insights-section" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-genriv-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold transition">
              <span class="text-base">📊</span>
              <div>
                <div class="text-xs">Kolkata Price Trends Index Q4 2026</div>
                <div class="text-[10px] text-slate-500 font-normal">Avg ₹7,650/sq.ft. with +14.2% YoY growth</div>
              </div>
            </a>
            <a href="#trending-localities-section" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-genriv-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold transition">
              <span class="text-base">📈</span>
              <div>
                <div class="text-xs">Trending Localities Comparison</div>
                <div class="text-[10px] text-slate-500 font-normal">New Town vs Salt Lake vs EM Bypass</div>
              </div>
            </a>
          </div>
        </div>

      </nav>`;

  indexHtml = indexHtml.slice(0, oldTopNavStart) + newCleanTopNav + indexHtml.slice(oldTopNavEnd);
  console.log('✅ Replaced top nav in index.html with clean non-overlapping dropdowns');
}

// Fix "Explore Zero-Brokerage Homes →" button (Question 6)
const oldZeroBtnRegex = /<button[^>]*>\s*Explore Zero-Brokerage Homes →\s*<\/button>/g;
indexHtml = indexHtml.replace(
  oldZeroBtnRegex,
  `<a href="properties.html?intent=Rent" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-extrabold shadow-sm transition inline-flex items-center gap-1.5 self-start sm:self-auto">
          <span>Explore Zero-Brokerage Homes</span>
          <span>→</span>
        </a>`
);

// Fix "+ Post Property FREE" in header nav to ALWAYS route to 12-section form (Question 2)
indexHtml = indexHtml.replace(
  'onclick="handleListingPropertyNavClick()" id="nav-tab-listing-property"',
  'onclick="window.location.href=\'seller-dashboard.html#advertisement-form\'" id="nav-tab-listing-property"'
);

// Remove the conflicting click-toggle script that was keeping all menus open
indexHtml = indexHtml.replace(/\/\/ Toggle sub-menu on click for touch\/mobile devices[\s\S]*?<\/script>/, '');

fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('✅ Updated index.html with clean non-overlapping menus and working links');
