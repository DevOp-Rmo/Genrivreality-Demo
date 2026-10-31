const fs = require('fs');
const path = require('path');

// =========================================================================
// 1. UPDATE script.js
// =========================================================================
const scriptPath = path.join(__dirname, 'script.js');
let scriptJs = fs.readFileSync(scriptPath, 'utf8');

// Replace renderMagicBricksSections with bulletproof, full-featured implementation
const oldFuncStart = scriptJs.indexOf('function renderMagicBricksSections');
const oldFuncEnd = scriptJs.indexOf('window.renderMagicBricksSections = renderMagicBricksSections;', oldFuncStart);

if (oldFuncStart !== -1 && oldFuncEnd !== -1) {
  const newFuncCode = `function renderMagicBricksSections(city = 'Kolkata') {
      const targetCity = (city === 'All' || !city) ? 'Kolkata' : city;
      const allProps = (typeof window !== 'undefined' && window.GENRIV_GLOBAL_PROPERTIES && window.GENRIV_GLOBAL_PROPERTIES.length > 0)
        ? window.GENRIV_GLOBAL_PROPERTIES
        : properties;

      // Filter properties for the selected city (or fallback to all if fewer than 4)
      let cityProps = allProps.filter(p => p.city.toLowerCase() === targetCity.toLowerCase());
      if (cityProps.length < 4) cityProps = allProps;

      // 1. Featured Projects in {city} (7+ in 1 single horizontal line)
      const featGrid = document.getElementById('featured-projects-grid');
      if (featGrid) {
        // Show 8 featured projects
        const featProps = allProps.slice(0, 8);
        featGrid.innerHTML = featProps.map(p => \`
          <div class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-md hover:shadow-xl transition flex flex-col justify-between shrink-0" style="width: 320px; scroll-snap-align: start; flex-shrink: 0 !important;">
            <div class="relative h-44 overflow-hidden bg-slate-800">
              <img src="\${p.image}" alt="\${p.title}" class="w-full h-full object-cover hover:scale-105 transition duration-500" />
              <div class="absolute top-3 left-3 flex items-center gap-1.5">
                <span class="px-2.5 py-1 rounded-full bg-amber-400 text-slate-950 text-[10px] font-extrabold uppercase shadow-sm">
                  ⭐ Top 10 Spotlight
                </span>
                <span class="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold">
                  ✓ RERA Approved
                </span>
              </div>
              <div class="absolute bottom-3 left-3 px-3 py-1 rounded-xl bg-slate-950/85 backdrop-blur-md text-white text-xs font-extrabold">
                \${p.priceLabel}
              </div>
            </div>
            <div class="p-4 space-y-2">
              <span class="text-[10px] font-extrabold text-genriv-600 dark:text-genriv-400 uppercase tracking-wider">\${p.bhk} • \${p.areaSqft} sq.ft.</span>
              <h4 class="font-display font-extrabold text-sm sm:text-base text-slate-900 dark:text-white leading-snug truncate hover:text-genriv-600 transition">
                <a href="property-detail.html?id=\${p.id}">\${p.title}</a>
              </h4>
              <p class="text-xs text-slate-500 dark:text-slate-400 truncate">📍 \${p.locality}, \${p.city}</p>
              <div class="pt-2 text-[11px] text-slate-500 flex justify-between border-t border-slate-100 dark:border-slate-800">
                <span>By: <strong>\${p.builderName || p.sellerName || 'Sen Estates'}</strong></span>
                <span class="text-emerald-600 font-bold">\${p.rentalYield || 4.5}% Yield</span>
              </div>
            </div>
            <div class="p-4 pt-0">
              <a href="property-detail.html?id=\${p.id}" class="w-full py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs hover:opacity-90 transition block text-center">
                Contact Developer &amp; Book Tour →
              </a>
            </div>
          </div>
        \`).join('');
      }

      // 2. Popular Owner Properties in {city} (Zero Brokerage)
      const ownerGrid = document.getElementById('owner-properties-grid');
      if (ownerGrid) {
        // Defensive check: match owner properties without crashing on tags
        const ownerProps = allProps.filter(p => {
          const isOwner = p.postedBy === 'Owner' || p.sellerRole === 'Property Owner';
          const hasZeroBrok = Array.isArray(p.tags) && p.tags.includes('Zero Brokerage');
          return isOwner || hasZeroBrok || p.intent === 'Rent';
        }).slice(0, 4);

        ownerGrid.innerHTML = ownerProps.map(p => \`
          <div class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col justify-between">
            <div class="relative h-44 overflow-hidden bg-slate-800">
              <img src="\${p.image}" alt="\${p.title}" class="w-full h-full object-cover" />
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-extrabold shadow-sm">
                0% ZERO BROKERAGE
              </span>
              <div class="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/80 text-white text-xs font-bold">
                \${p.priceLabel}
              </div>
            </div>
            <div class="p-4 space-y-1.5">
              <span class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">Direct Owner Listing</span>
              <h4 class="font-display font-extrabold text-sm text-slate-900 dark:text-white leading-tight truncate">
                <a href="property-detail.html?id=\${p.id}" class="hover:text-genriv-600">\${p.title}</a>
              </h4>
              <p class="text-xs text-slate-500 truncate">📍 \${p.locality}, \${p.city}</p>
              <div class="text-[11px] text-slate-400 mt-1">\${p.bhk} • \${p.areaSqft} sq.ft. • \${p.possessionType}</div>
            </div>
            <div class="p-4 pt-0">
              <button type="button" onclick="unlockContact('\${p.id}')" class="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition">
                Contact Verified Owner Free →
              </button>
            </div>
          </div>
        \`).join('');
      }

      // 3. Top Projects in {city}
      const topProjectsGrid = document.getElementById('top-projects-grid');
      if (topProjectsGrid) {
        const topProjects = allProps.filter(p => {
          return p.sellerRole === 'Builder / Developer' || p.postedBy === 'Builder' || p.isTopTen;
        }).slice(0, 4);

        topProjectsGrid.innerHTML = topProjects.map(p => \`
          <div class="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-4 shadow-sm hover:shadow-md transition">
            <img src="\${p.image}" alt="\${p.title}" class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shrink-0" />
            <div class="space-y-1 min-w-0 flex-1">
              <span class="px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-[10px] font-extrabold">Premier Township</span>
              <h4 class="font-display font-extrabold text-sm text-slate-900 dark:text-white truncate">
                <a href="property-detail.html?id=\${p.id}" class="hover:text-genriv-600">\${p.title}</a>
              </h4>
              <div class="text-xs font-bold text-emerald-600">\${p.priceLabel} • \${p.bhk}</div>
              <p class="text-[11px] text-slate-500 truncate">📍 \${p.locality}</p>
            </div>
          </div>
        \`).join('');
      }

      // 4. Trending in {city} (Micro-markets price trends)
      const trendingGrid = document.getElementById('trending-localities-grid');
      if (trendingGrid) {
        const localityData = {
          'Kolkata': [
            { name: 'New Town Action Area II', yoy: '+14.2% YoY', avgRate: '₹7,650 / sq.ft.', tag: 'Metro Corridors & IT Hub', link: 'New Town' },
            { name: 'Rajarhat Expressway', yoy: '+17.6% YoY', avgRate: '₹6,400 / sq.ft.', tag: 'High Rental Yield Zone', link: 'Rajarhat' },
            { name: 'EM Bypass / Anandapur', yoy: '+12.1% YoY', avgRate: '₹9,800 / sq.ft.', tag: 'Luxury Living & Hospitals', link: 'EM Bypass' },
            { name: 'Salt Lake Sector V', yoy: '+9.5% YoY', avgRate: '₹8,900 / sq.ft.', tag: 'Commercial Tech REIT', link: 'Salt Lake' },
            { name: 'Heritage Alipore', yoy: '+8.3% YoY', avgRate: '₹14,200 / sq.ft.', tag: 'Ultra-HNIs Enclave', link: 'Alipore' },
            { name: 'Behala Chowrasta', yoy: '+15.0% YoY', avgRate: '₹4,890 / sq.ft.', tag: 'Metro Line Expansion Boom', link: 'Behala' }
          ],
          'Mumbai': [
            { name: 'Worli Sea Face', yoy: '+14.2% YoY', avgRate: '₹68,500 / sq.ft.', tag: 'Coastal Road Expansion', link: 'Worli' },
            { name: 'Bandra West', yoy: '+16.5% YoY', avgRate: '₹62,000 / sq.ft.', tag: 'HNIs & Bollywood Hub', link: 'Bandra' },
            { name: 'Powai Lakefront', yoy: '+11.4% YoY', avgRate: '₹28,200 / sq.ft.', tag: 'IIT & Tech Ecosystem', link: 'Powai' }
          ],
          'Bengaluru': [
            { name: 'Whitefield EPIP Zone', yoy: '+16.8% YoY', avgRate: '₹11,500 / sq.ft.', tag: 'Purple Line Metro Tech Corridor', link: 'Whitefield' },
            { name: 'Indiranagar 100ft Road', yoy: '+12.4% YoY', avgRate: '₹18,500 / sq.ft.', tag: 'Prime Lifestyle & F&B District', link: 'Indiranagar' }
          ]
        };
        const list = localityData[targetCity] || localityData['Kolkata'];
        trendingGrid.innerHTML = list.map(loc => \`
          <a href="new-projects.html?city=\${targetCity}&locality=\${encodeURIComponent(loc.link || loc.name)}" class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 hover:border-genriv-500 hover:shadow-md transition block group">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">\${loc.tag}</span>
              <span class="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-extrabold text-[11px]">\${loc.yoy}</span>
            </div>
            <h4 class="font-display font-extrabold text-base text-slate-900 dark:text-white group-hover:text-genriv-600 transition">\${loc.name}</h4>
            <div class="text-xs text-slate-500">Avg Property Rate: <strong class="text-slate-800 dark:text-slate-200">\${loc.avgRate}</strong></div>
            <span class="text-xs text-genriv-600 font-bold block pt-1">Explore Projects in \${loc.link || loc.name} →</span>
          </a>
        \`).join('');
      }

      // 5. Fresh Properties in {city} (Newly listed in last 48 hours)
      const freshGrid = document.getElementById('fresh-properties-grid');
      if (freshGrid) {
        const freshProps = cityProps.slice(0, 4);
        freshGrid.innerHTML = freshProps.map((p, i) => \`
          <div class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 space-y-3 shadow-sm flex items-center gap-4 hover:shadow-md transition">
            <img src="\${p.image}" alt="\${p.title}" class="w-24 h-24 rounded-2xl object-cover shrink-0" />
            <div class="min-w-0 flex-1 space-y-1">
              <span class="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-600 font-bold text-[10px]">NEWLY LISTED (\${(i + 1) * 3}h ago)</span>
              <h4 class="font-display font-extrabold text-sm text-slate-900 dark:text-white truncate">
                <a href="property-detail.html?id=\${p.id}" class="hover:text-genriv-600">\${p.title}</a>
              </h4>
              <div class="text-xs font-bold text-genriv-600">\${p.priceLabel} • \${p.bhk}</div>
              <p class="text-[11px] text-slate-500 truncate">📍 \${p.locality}</p>
            </div>
          </div>
        \`).join('');
      }
    }
    window.renderMagicBricksSections = renderMagicBricksSections;

    // Featured Projects Carousel slider function
    function slideFeaturedProjects(direction) {
      const container = document.getElementById('featured-projects-grid');
      if (container) {
        container.scrollBy({ left: direction * 350, behavior: 'smooth' });
      }
    }
    window.slideFeaturedProjects = slideFeaturedProjects;
`;

  scriptJs = scriptJs.slice(0, oldFuncStart) + newFuncCode + scriptJs.slice(oldFuncEnd + 60);
  console.log('✅ Updated renderMagicBricksSections and slideFeaturedProjects in script.js');
}

fs.writeFileSync(scriptPath, scriptJs, 'utf8');

// =========================================================================
// 2. UPDATE index.html
// =========================================================================
const indexPath = path.join(__dirname, 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

// A. Fix <header class="... overflow-hidden"> -> remove overflow-hidden
indexHtml = indexHtml.replace(
  'class="sticky top-0 z-40 glass-panel shadow-sm transition-colors w-full overflow-hidden"',
  'class="sticky top-0 z-40 glass-panel shadow-sm transition-colors w-full"'
);

// B. Upgrade top nav links (Explore Properties, Price Trends, Smart EMI & ROI) to rich mega-menus
const oldTopNav = `<nav class="pc-compact-nav hidden xl:flex items-center gap-3 2xl:gap-5 text-xs xl:text-sm font-semibold text-slate-700 dark:text-slate-200 whitespace-nowrap shrink-0">
        <a href="#listings-section" class="hover:text-genriv-600 dark:hover:text-genriv-400 transition whitespace-nowrap shrink-0">Explore Properties</a>
        <a href="#insights-section" class="hover:text-genriv-600 dark:hover:text-genriv-400 transition whitespace-nowrap shrink-0">Price Trends</a>
        <a href="#emi-section" class="hover:text-genriv-600 dark:hover:text-genriv-400 transition whitespace-nowrap shrink-0">Smart EMI &amp; ROI</a>
      </nav>`;

const newTopNav = `<nav class="pc-compact-nav hidden xl:flex items-center gap-3 2xl:gap-5 text-xs xl:text-sm font-semibold text-slate-700 dark:text-slate-200 whitespace-nowrap shrink-0">
        
        <!-- Buy / Explore Properties Mega Dropdown -->
        <div class="nav-dropdown-item py-2">
          <button type="button" class="flex items-center gap-1 hover:text-genriv-600 dark:hover:text-genriv-400 transition font-bold">
            <span>Explore Properties</span>
            <span class="text-[9px] opacity-60">▾</span>
          </button>
          <div class="nav-dropdown-menu w-72">
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
                <div class="text-[10px] text-slate-500 font-normal">Immediate possession with zero risk</div>
              </div>
            </a>
            <a href="properties.html?intent=Rent" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-genriv-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold transition">
              <span class="text-base">🔑</span>
              <div>
                <div class="text-xs">Zero Brokerage Rentals</div>
                <div class="text-[10px] text-slate-500 font-normal">Direct owner flats in New Town &amp; Salt Lake</div>
              </div>
            </a>
            <a href="properties.html" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-genriv-50 dark:hover:bg-slate-800 text-genriv-600 dark:text-genriv-400 font-extrabold transition">
              <span class="text-base">🔍</span>
              <div>
                <div class="text-xs">Browse All 36+ Properties Pan-India</div>
                <div class="text-[10px] text-slate-500 font-normal">Mumbai, Bengaluru, NCR, Hyderabad</div>
              </div>
            </a>
          </div>
        </div>

        <!-- Price Trends Mega Dropdown -->
        <div class="nav-dropdown-item py-2">
          <button type="button" class="flex items-center gap-1 hover:text-genriv-600 dark:hover:text-genriv-400 transition font-bold">
            <span>Price Trends</span>
            <span class="text-[9px] opacity-60">▾</span>
          </button>
          <div class="nav-dropdown-menu w-72">
            <div class="px-2 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Micro-Market Intelligence</div>
            <a href="#insights-section" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-genriv-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold transition">
              <span class="text-base">📊</span>
              <div>
                <div class="text-xs">Kolkata Micro-Market Index Q4 2026</div>
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
            <a href="#edge-services-section" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-genriv-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold transition">
              <span class="text-base">🤖</span>
              <div>
                <div class="text-xs">Genriv AI Valuation Estimator</div>
                <div class="text-[10px] text-slate-500 font-normal">Instant fair-market property valuation</div>
              </div>
            </a>
          </div>
        </div>

        <!-- Smart EMI & Loans Mega Dropdown -->
        <div class="nav-dropdown-item py-2">
          <button type="button" class="flex items-center gap-1 hover:text-genriv-600 dark:hover:text-genriv-400 transition font-bold">
            <span>Home Loans &amp; EMI</span>
            <span class="text-[9px] opacity-60">▾</span>
          </button>
          <div class="nav-dropdown-menu w-72">
            <div class="px-2 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Financial Tools</div>
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
                <div class="text-[10px] text-slate-500 font-normal">Digital letter valid for 90 days</div>
              </div>
            </a>
          </div>
        </div>

      </nav>`;

if (indexHtml.includes(oldTopNav)) {
  indexHtml = indexHtml.replace(oldTopNav, newTopNav);
  console.log('✅ Replaced top desktop nav with MagicBricks-grade mega-menus in index.html');
}

// C. Upgrade Featured Projects Section with Prev & Next Buttons and 1-Line Slider
const oldFeatSectionStart = indexHtml.indexOf('<section id="featured-projects-section"');
const oldFeatSectionEnd = indexHtml.indexOf('</section>', oldFeatSectionStart) + 10;

if (oldFeatSectionStart !== -1) {
  const newFeatSection = `<!-- 1. FEATURED PROJECTS (1-Line Horizontal Slider with Prev & Next Buttons) -->
  <section id="featured-projects-section" class="py-12 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4">
        <div>
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-700 dark:text-amber-300 text-xs font-extrabold uppercase">
            <span>⭐ Sponsored &amp; Verified</span>
          </div>
          <h2 class="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white mt-1">
            Featured Projects in <span class="dynamic-city-name text-genriv-600 dark:text-amber-400">Kolkata</span>
          </h2>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Exclusive Top 10 Front-Page Spotlight with Guaranteed Delivery &amp; RERA Sanction.
          </p>
        </div>

        <div class="flex items-center gap-3">
          <!-- Slide Arrows (Prev / Next) -->
          <div class="flex items-center gap-1.5">
            <button type="button" onclick="slideFeaturedProjects(-1)" class="w-9 h-9 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-genriv-50 dark:hover:bg-slate-700 shadow-sm flex items-center justify-center font-bold text-sm transition" title="Previous Projects">
              ❮
            </button>
            <button type="button" onclick="slideFeaturedProjects(1)" class="w-9 h-9 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-genriv-50 dark:hover:bg-slate-700 shadow-sm flex items-center justify-center font-bold text-sm transition" title="Next Projects">
              ❯
            </button>
          </div>
          <!-- View All Link to Dedicated Page -->
          <a href="new-projects.html?city=Kolkata" class="px-4 py-2 rounded-xl bg-genriv-600 hover:bg-genriv-700 text-white text-xs sm:text-sm font-extrabold shadow-sm transition inline-flex items-center gap-1.5 shrink-0">
            <span>View All New Projects in Kolkata</span>
            <span>→</span>
          </a>
        </div>
      </div>

      <!-- 1 Single Line Horizontal Carousel Container -->
      <div class="relative">
        <div id="featured-projects-grid" class="flex gap-5 overflow-x-auto scroll-smooth py-3 px-1 custom-scrollbar" style="scroll-snap-type: x mandatory; display: flex !important; flex-direction: row !important; flex-wrap: nowrap !important;">
          <!-- Populated via renderMagicBricksSections() with 8+ cards in 1 line -->
        </div>
      </div>
    </div>
  </section>`;

  indexHtml = indexHtml.slice(0, oldFeatSectionStart) + newFeatSection + indexHtml.slice(oldFeatSectionEnd);
  console.log('✅ Replaced featured-projects-section with 1-line carousel and Prev/Next buttons');
}

fs.writeFileSync(indexPath, indexHtml, 'utf8');
console.log('✅ Successfully updated index.html & script.js');
