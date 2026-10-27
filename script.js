// Genrivreality — Main Application Script (script.js)

// 1. INITIAL VERIFIED DATASET (Blending Housing.com Visual Richness & 99acres RERA/Yield Metrics)
        const GENRIV_ASSETS = {
      p1: 'images/prop1.jpg',
      p2: 'images/prop2.jpg',
      p3: 'images/prop3.jpg',
      p4: 'images/prop4.jpg',
      p5: 'images/prop5.jpg',
      p6: 'images/prop6.jpg'
    };
    const initialProperties = [
      {
        id: 'prop-1',
        title: 'Genriv Celestia Sky Penthouse',
        city: 'Mumbai',
        locality: 'Worli Sea Face, South Mumbai',
        intent: 'Buy',
        bhk: '4 BHK',
        priceCr: 8.40,
        priceLabel: '₹8.40 Cr',
        rentEquiv: '₹2.9L / mo',
        areaSqft: 3250,
        pricePerSqft: '₹25,846 / sq.ft.',
        reraId: 'P51900028491',
        reraVerified: true,
        postedBy: 'Builder',
        builderName: 'Genriv Pinnacle Developers',
        livabilityScore: 9.6,
        rentalYield: 4.3,
        appreciationYoY: '+14.2% YoY',
        tags: ['Sea / Lake View', 'Ready to Move', 'Vastu Compliant', 'Metro < 500m'],
        image: GENRIV_ASSETS.p1,
        mapX: 18,
        mapY: 66,
        description: '270-degree Arabian Sea & Bandra-Worli Sea Link panorama with private plunge deck, double-height travertine living lounge, and biometric elevator foyer.'
      },
      {
        id: 'prop-2',
        title: 'The Teakwood Courtyard Biophilic Villa',
        city: 'Bengaluru',
        locality: 'Whitefield IT Corridor, East Bengaluru',
        intent: 'Buy',
        bhk: '5 BHK',
        priceCr: 4.25,
        priceLabel: '₹4.25 Cr',
        rentEquiv: '₹1.65L / mo',
        areaSqft: 4100,
        pricePerSqft: '₹10,365 / sq.ft.',
        reraId: 'PRM/KA/RERA/1251/446',
        reraVerified: true,
        postedBy: 'Owner',
        builderName: 'Direct Verified Owner (Zero Brokerage)',
        livabilityScore: 9.4,
        rentalYield: 4.9,
        appreciationYoY: '+19.8% YoY',
        tags: ['Zero Brokerage', 'Ready to Move', 'Vastu Compliant'],
        image: GENRIV_ASSETS.p2,
        mapX: 44,
        mapY: 74,
        description: 'Net-zero smart tropical villa with private heated lap pool, 10kW solar roof, teakwood Louver facade, and 5 mins from Purple Line Metro.'
      },
      {
        id: 'prop-3',
        title: 'Aravalli Crest Golf Residences',
        city: 'Gurugram',
        locality: 'Golf Course Road, Sector 54',
        intent: 'New Projects',
        bhk: '3 BHK',
        priceCr: 3.60,
        priceLabel: '₹3.60 Cr',
        rentEquiv: '₹1.35L / mo',
        areaSqft: 2480,
        pricePerSqft: '₹14,516 / sq.ft.',
        reraId: 'RC/REP/HARERA/GGM/612',
        reraVerified: true,
        postedBy: 'Builder',
        builderName: 'DLF & Genriv Signature JV',
        livabilityScore: 9.3,
        rentalYield: 4.6,
        appreciationYoY: '+22.1% YoY',
        tags: ['Metro < 500m', 'Vastu Compliant'],
        image: GENRIV_ASSETS.p3,
        mapX: 38,
        mapY: 22,
        description: 'Ultra-low density 3-to-a-core residences with 65,000 sq.ft. podium clubhouse, temperature-controlled lagoon pool, and direct Rapid Metro skywalk.'
      },
      {
        id: 'prop-4',
        title: 'Genriv Nexus Grade-A Tech Plaza',
        city: 'Hyderabad',
        locality: 'HITEC City Main Road, Madhapur',
        intent: 'Commercial',
        bhk: 'Commercial',
        priceCr: 5.80,
        priceLabel: '₹5.80 Cr',
        rentEquiv: '₹4.40L / mo Lease',
        areaSqft: 5200,
        pricePerSqft: '₹11,153 / sq.ft.',
        reraId: 'P02400004918',
        reraVerified: true,
        postedBy: 'Builder',
        builderName: 'Genriv Commercial REIT',
        livabilityScore: 9.5,
        rentalYield: 8.6,
        appreciationYoY: '+16.5% YoY',
        tags: ['Ready to Move', 'Metro < 500m', 'Zero Brokerage'],
        image: GENRIV_ASSETS.p4,
        mapX: 54,
        mapY: 56,
        description: 'LEED Platinum certified commercial floor plate with pre-leased Fortune-500 tenant option, 8.6% assured rental yield, and double-height concourse.'
      },
      {
        id: 'prop-5',
        title: 'Botanica Waterfront Sky-Forest Towers',
        city: 'Kolkata',
        locality: 'Action Area II, New Town, Kolkata',
        intent: 'Buy',
        bhk: '3 BHK',
        priceCr: 1.45,
        priceLabel: '₹1.45 Cr',
        rentEquiv: '₹52,000 / mo',
        areaSqft: 1890,
        pricePerSqft: '₹7,671 / sq.ft.',
        reraId: 'WBRERA/P/NOR/2026/000412',
        reraVerified: true,
        postedBy: 'Builder',
        builderName: 'Bengal Genriv Eco-Homes',
        livabilityScore: 9.2,
        rentalYield: 4.4,
        appreciationYoY: '+13.4% YoY',
        tags: ['Sea / Lake View', 'Ready to Move', 'Vastu Compliant', 'Metro < 500m'],
        image: GENRIV_ASSETS.p5,
        mapX: 78,
        mapY: 42,
        description: 'Cantilevered vertical forest balconies overlooking Eco Park lake with skybridge infinity pool, smart home automation, and EV fast-charging bays.'
      },
      {
        id: 'prop-6',
        title: 'Banyan Canopy Designer Co-Living & Studio',
        city: 'Pune',
        locality: 'Koregaon Park Lane 7, Pune',
        intent: 'Rent',
        bhk: '1 BHK',
        priceCr: 0.95,
        priceLabel: '₹42,000 / mo (or ₹95 L)',
        rentEquiv: '₹42,000 / mo Zero-Deposit',
        areaSqft: 920,
        pricePerSqft: '₹10,326 / sq.ft.',
        reraId: 'P52100031904',
        reraVerified: true,
        postedBy: 'Owner',
        builderName: 'Direct Verified Owner (Zero Brokerage)',
        livabilityScore: 9.5,
        rentalYield: 5.3,
        appreciationYoY: '+12.9% YoY',
        tags: ['Zero Brokerage', 'Ready to Move', 'Vastu Compliant'],
        image: GENRIV_ASSETS.p6,
        mapX: 28,
        mapY: 58,
        description: 'Fully furnished Scandinavian-Indian studio residence overlooking century-old banyan trees, high-speed fiber workspace, and zero-brokerage digital lease.'
      }
    ];

    // State Management
    let properties = [...initialProperties];
    let currentIntent = 'All';
    let currentCity = 'All';
    let activeTags = new Set();
    let layoutMode = 'grid';
    let shortlistedIds = new Set(['prop-1', 'prop-5']);
    let compareIds = [];
    let activeTourPropId = 'prop-1';

    // Locality Intelligence Dataset
    const localityStats = {
      'Worli, Mumbai': {
        rate: '₹68,500 / sq.ft.',
        growth: '+18.4% 3-Yr Growth',
        overall: '9.4',
        conn: 9.6,
        infra: 9.5,
        safety: 9.1,
        yield: '4.2% p.a.',
        review: '"Coastal Road & Aqua Line Metro have slashed commute times to BKC & Nariman Point to under 12 minutes."',
        series: [57800, 60200, 62900, 64800, 66900, 68500]
      },
      'Whitefield, Bengaluru': {
        rate: '₹11,450 / sq.ft.',
        growth: '+29.6% 3-Yr Growth',
        overall: '9.3',
        conn: 9.4,
        infra: 9.3,
        safety: 9.0,
        yield: '5.1% p.a.',
        review: '"Operational Purple Line Metro + global tech parks have turned Whitefield into India\'s #1 rental yield micro-market."',
        series: [8800, 9350, 9900, 10500, 11050, 11450]
      },
      'Golf Course Rd, Gurugram': {
        rate: '₹24,900 / sq.ft.',
        growth: '+34.2% 3-Yr Growth',
        overall: '9.5',
        conn: 9.7,
        infra: 9.6,
        safety: 9.0,
        yield: '4.6% p.a.',
        review: '"Signal-free underpasses, Rapid Metro stations, and Fortune-500 headquarters make this NCR\'s trophy corridor."',
        series: [18550, 19800, 21200, 22600, 23900, 24900]
      },
      'HITEC City, Hyderabad': {
        rate: '₹10,800 / sq.ft.',
        growth: '+24.8% 3-Yr Growth',
        overall: '9.4',
        conn: 9.5,
        infra: 9.4,
        safety: 9.3,
        yield: '5.4% p.a.',
        review: '"Walk-to-work IT campuses, Outer Ring Road access, and 24x7 vibrant social infrastructure."',
        series: [8650, 9100, 9550, 10000, 10450, 10800]
      },
      'New Town, Kolkata': {
        rate: '₹7,680 / sq.ft.',
        growth: '+19.1% 3-Yr Growth',
        overall: '9.2',
        conn: 9.1,
        infra: 9.2,
        safety: 9.5,
        yield: '4.5% p.a.',
        review: '"Smart City wide boulevards, 480-acre Eco Park, and upcoming New Garia-Airport Metro corridor."',
        series: [6450, 6700, 6950, 7200, 7450, 7680]
      }
    };

    let priceChartInstance = null;

    // Toast Utility (Replaces alert/confirm)
    function showToast(message) {
      const container = document.getElementById('toast-container');
      if (!container) return;
      const toast = document.createElement('div');
      toast.className = 'pointer-events-auto glass-panel px-4 py-3 rounded-2xl shadow-xl border border-genriv-500/40 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2.5 transition-all duration-300';
      toast.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span><span>${message}</span>`;
      container.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
      }, 3400);
    }

    function scrollToSection(id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    function toggleTheme() {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      try {
        localStorage.setItem('genriv_theme', isDark ? 'dark' : 'light');
      } catch (e) {}
      showToast(isDark ? 'Switched to Genriv Twilight Dark UI' : 'Switched to Crisp Daylight UI');
    }

    function toggleMobileMenu() {
      const drawer = document.getElementById('mobile-menu-drawer');
      if (drawer) drawer.classList.toggle('hidden');
    }

    function setIntentTab(intent) {
      currentIntent = currentIntent === intent ? 'All' : intent;
      const tabs = ['Buy', 'Rent', 'New Projects', 'PG / Co-Living', 'Commercial'];
      tabs.forEach(t => {
        const btn = document.getElementById('intent-tab-' + t);
        if (!btn) return;
        if (currentIntent === t || (currentIntent === 'All' && t === 'Buy')) {
          btn.className = 'intent-tab px-4 py-2.5 rounded-t-xl font-bold text-xs sm:text-sm whitespace-nowrap transition bg-white text-genriv-700 shadow-lg';
        } else {
          btn.className = 'intent-tab px-4 py-2.5 rounded-t-xl font-bold text-xs sm:text-sm whitespace-nowrap transition bg-white/15 text-white hover:bg-white/25 backdrop-blur-md';
        }
      });
      const badge = document.getElementById('active-intent-badge');
      if (badge) badge.textContent = currentIntent === 'All' ? 'All Modes' : currentIntent + ' Mode';
      applyFilters();
    }

    function syncCityFilter(city) {
      currentCity = city;
      ['header-city-select', 'mobile-city-select', 'search-city'].forEach(id => {
        const el = document.getElementById(id);
        if (el && el.value !== city) el.value = city;
      });
      applyFilters();
    }

    function toggleTagFilter(tag) {
      const btn = document.getElementById('tag-btn-' + tag);
      if (activeTags.has(tag)) {
        activeTags.delete(tag);
        if (btn) btn.className = 'tag-pill px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-genriv-50 transition';
      } else {
        activeTags.add(tag);
        if (btn) btn.className = 'tag-pill px-3 py-1 rounded-full text-xs font-semibold bg-genriv-600 text-white shadow-sm transition';
      }
      applyFilters();
    }

    function updateBudgetLabel(val) {
      const lbl = document.getElementById('budget-value-label');
      if (lbl) lbl.textContent = '₹' + parseFloat(val).toFixed(1) + ' Cr';
      applyFilters();
    }

    function resetAllFilters() {
      currentIntent = 'All';
      currentCity = 'All';
      activeTags.clear();
      document.getElementById('search-query').value = '';
      document.getElementById('search-bhk').value = 'All';
      document.getElementById('posted-by-filter').value = 'All';
      document.getElementById('budget-range').value = 30;
      document.getElementById('budget-value-label').textContent = '₹30.0 Cr';
      syncCityFilter('All');
      document.querySelectorAll('.tag-pill').forEach(btn => {
        btn.className = 'tag-pill px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-genriv-50 transition';
      });
      applyFilters();
      showToast('All filters reset — showing all verified pan-India properties.');
    }

    function executeHeroSearch() {
      applyFilters();
      scrollToSection('listings-section');
    }

    function triggerVoiceSearch() {
      const sampleQueries = ['Worli', 'Whitefield', 'Kolkata', 'Golf Course', 'HITEC'];
      const picked = sampleQueries[Math.floor(Math.random() * sampleQueries.length)];
      const input = document.getElementById('search-query');
      if (input) input.value = picked;
      applyFilters();
      showToast(`🎙️ Voice Search recognized: "${picked}"`);
    }

    function getFilteredProperties() {
      const query = (document.getElementById('search-query')?.value || '').trim().toLowerCase();
      const bhk = document.getElementById('search-bhk')?.value || 'All';
      const maxBudget = parseFloat(document.getElementById('budget-range')?.value || '30');
      const postedBy = document.getElementById('posted-by-filter')?.value || 'All';
      const reraOnly = document.getElementById('rera-only-toggle')?.checked || false;
      const sortBy = document.getElementById('sort-select')?.value || 'featured';

      let list = properties.filter(p => {
        if (currentCity !== 'All' && p.city !== currentCity) return false;
        if (currentIntent !== 'All') {
          if (currentIntent === 'PG / Co-Living' && p.bhk !== '1 BHK') return false;
          else if (currentIntent !== 'PG / Co-Living' && p.intent !== currentIntent && !(currentIntent === 'Buy' && p.intent === 'New Projects')) return false;
        }
        if (bhk !== 'All' && p.bhk !== bhk) return false;
        if (p.priceCr > maxBudget) return false;
        if (postedBy !== 'All' && p.postedBy !== postedBy) return false;
        if (reraOnly && !p.reraVerified) return false;
        if (query) {
          const hay = `${p.title} ${p.city} ${p.locality} ${p.builderName} ${p.bhk}`.toLowerCase();
          if (!hay.includes(query)) return false;
        }
        for (let tag of activeTags) {
          if (!p.tags.includes(tag)) return false;
        }
        return true;
      });

      if (sortBy === 'price-asc') list.sort((a, b) => a.priceCr - b.priceCr);
      else if (sortBy === 'price-desc') list.sort((a, b) => b.priceCr - a.priceCr);
      else if (sortBy === 'yield-desc') list.sort((a, b) => b.rentalYield - a.rentalYield);
      else if (sortBy === 'score-desc') list.sort((a, b) => b.livabilityScore - a.livabilityScore);

      return list;
    }

    function applyFilters() {
      const filtered = getFilteredProperties();
      const grid = document.getElementById('properties-grid');
      const countLbl = document.getElementById('results-count-label');
      if (countLbl) countLbl.textContent = `Showing ${filtered.length} Verified ${filtered.length === 1 ? 'Property' : 'Properties'}`;

      if (!grid) return;
      if (filtered.length === 0) {
        grid.innerHTML = `
          <div class="col-span-full bg-white dark:bg-slate-900 rounded-2xl p-10 text-center border border-slate-200 dark:border-slate-800">
            <div class="text-4xl mb-3">🔍</div>
            <h3 class="font-display font-bold text-lg text-slate-900 dark:text-white">No exact matches for this filter combination</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-4">Try broadening your budget slider or resetting lifestyle tags.</p>
            <button type="button" onclick="resetAllFilters()" class="px-4 py-2 rounded-xl bg-genriv-600 text-white text-xs font-bold">Reset All Filters</button>
          </div>
        `;
        renderMapPins([]);
        return;
      }

      grid.innerHTML = filtered.map(p => {
        const isSaved = shortlistedIds.has(p.id);
        const isCompared = compareIds.includes(p.id);
        return `
          <article id="card-${p.id}" class="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-800 shadow-sm card-hover flex flex-col justify-between">
            <div>
              <!-- Image Header -->
              <div class="relative h-52 overflow-hidden group">
                <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent"></div>

                <!-- Top Badges (99acres RERA + Housing Lifestyle) -->
                <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span class="px-2.5 py-1 rounded-lg bg-emerald-500/95 text-slate-950 text-[10px] font-extrabold uppercase tracking-wide flex items-center gap-1 shadow">
                    🛡️ RERA Verified
                  </span>
                  <span class="px-2.5 py-1 rounded-lg bg-slate-900/85 text-white text-[10px] font-bold backdrop-blur-md">
                    ${p.postedBy === 'Owner' ? '🤝 Direct Owner' : '🏗️ Platinum Builder'}
                  </span>
                </div>

                <!-- Save Heart Button -->
                <button type="button" onclick="toggleShortlist('${p.id}')" aria-label="Save Property" class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 dark:bg-slate-900/90 flex items-center justify-center shadow hover:scale-110 transition">
                  <span class="${isSaved ? 'text-rose-600' : 'text-slate-400'} text-base">${isSaved ? '❤️' : '🤍'}</span>
                </button>

                <!-- Bottom Image Overlay: Price + 360 Tour Trigger -->
                <div class="absolute bottom-3 inset-x-3 flex items-end justify-between gap-2">
                  <div>
                    <div class="font-display font-extrabold text-xl text-white leading-tight">${p.priceLabel}</div>
                    <div class="text-[11px] text-slate-200">${p.pricePerSqft} • Est. Rent ${p.rentEquiv}</div>
                  </div>
                  <button type="button" onclick="openVirtualTourModal('${p.id}')" class="px-3 py-1.5 rounded-xl bg-genriv-600 hover:bg-genriv-500 text-white text-[11px] font-bold shadow-lg flex items-center gap-1 shrink-0 transition">
                    <span>🌐 360° Tour</span>
                  </button>
                </div>
              </div>

              <!-- Card Body -->
              <div class="p-4 sm:p-5 space-y-3">
                <div class="flex items-start justify-between gap-2">
                  <div>
                    <span class="text-[11px] font-bold uppercase tracking-wider text-genriv-600 dark:text-genriv-400">${p.city} • ${p.bhk}</span>
                    <h3 class="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white leading-snug">${p.title}</h3>
                    <p class="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">📍 ${p.locality}</p>
                  </div>
                  <div class="text-right shrink-0">
                    <span class="inline-flex items-center px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-extrabold">
                      ★ ${p.livabilityScore}
                    </span>
                    <div class="text-[10px] text-slate-400 mt-0.5">Livability</div>
                  </div>
                </div>

                <!-- Key Metrics Strip -->
                <div class="grid grid-cols-3 gap-2 py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 text-center text-xs">
                  <div>
                    <div class="text-[10px] text-slate-400">Carpet Area</div>
                    <div class="font-bold text-slate-800 dark:text-slate-100">${p.areaSqft} sq.ft.</div>
                  </div>
                  <div class="border-x border-slate-200 dark:border-slate-700">
                    <div class="text-[10px] text-slate-400">Rental Yield</div>
                    <div class="font-bold text-emerald-600 dark:text-emerald-400">${p.rentalYield}% p.a.</div>
                  </div>
                  <div>
                    <div class="text-[10px] text-slate-400">Appreciation</div>
                    <div class="font-bold text-acres-500">${p.appreciationYoY}</div>
                  </div>
                </div>

                <!-- Tags -->
                <div class="flex flex-wrap gap-1.5">
                  ${p.tags.map(t => `<span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-semibold">${t}</span>`).join('')}
                </div>
              </div>
            </div>

            <!-- Card Footer Actions -->
            <div class="px-4 sm:px-5 py-3 bg-slate-50/80 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
              <label class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 cursor-pointer">
                <input type="checkbox" ${isCompared ? 'checked' : ''} onchange="toggleCompare('${p.id}')" class="rounded text-genriv-600 focus:ring-genriv-500" />
                <span>Compare</span>
              </label>

              <div class="flex items-center gap-2">
                <button type="button" onclick="openVirtualTourModal('${p.id}')" class="px-3 py-1.5 rounded-xl border border-genriv-600/30 text-genriv-600 dark:text-genriv-300 text-xs font-bold hover:bg-genriv-50 dark:hover:bg-slate-800 transition">
                  Book Visit
                </button>
                <button type="button" onclick="contactSeller('${p.id}')" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-genriv-600 to-acres-500 text-white text-xs font-bold shadow-sm hover:opacity-95 transition">
                  Get Owner Contact
                </button>
              </div>
            </div>
          </article>
        `;
      }).join('');

      renderMapPins(filtered);
    }

    // Layout Mode Switcher (Full Grid vs Split Map)
    function setLayoutMode(mode) {
      layoutMode = mode;
      const wrapper = document.getElementById('explorer-layout-wrapper');
      const grid = document.getElementById('properties-grid');
      const mapPanel = document.getElementById('interactive-map-panel');
      const btnGrid = document.getElementById('view-btn-grid');
      const btnSplit = document.getElementById('view-btn-split');

      if (mode === 'split') {
        wrapper.className = 'grid grid-cols-1 lg:grid-cols-12 gap-6 items-start';
        grid.className = 'lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5';
        mapPanel.className = 'block lg:col-span-5 lg:sticky lg:top-24 h-[520px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-900 relative';
        btnSplit.className = 'px-3 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-slate-900 text-genriv-700 dark:text-genriv-300 shadow-sm transition flex items-center gap-1';
        btnGrid.className = 'px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 transition flex items-center gap-1';
      } else {
        wrapper.className = 'grid grid-cols-1 gap-6';
        grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
        mapPanel.className = 'hidden';
        btnGrid.className = 'px-3 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-slate-900 text-genriv-700 dark:text-genriv-300 shadow-sm transition flex items-center gap-1';
        btnSplit.className = 'px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 transition flex items-center gap-1';
      }
    }

    function renderMapPins(list) {
      const container = document.getElementById('map-pins-container');
      if (!container) return;
      container.innerHTML = list.map(p => `
        <button type="button" onclick="selectMapPin('${p.id}')" style="left: ${p.mapX}%; top: ${p.mapY}%;" class="map-pin-pulse absolute -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full bg-gradient-to-r from-genriv-600 to-acres-500 text-white text-xs font-extrabold shadow-lg border-2 border-white hover:scale-110 transition z-10 whitespace-nowrap">
          ${p.priceLabel} • ${p.city}
        </button>
      `).join('');
    }

    function selectMapPin(propId) {
      const p = properties.find(item => item.id === propId);
      if (!p) return;
      const box = document.getElementById('map-preview-card');
      if (box) {
        box.innerHTML = `
          <div class="flex items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <img src="${p.image}" alt="${p.title}" class="w-16 h-14 rounded-xl object-cover shrink-0" />
              <div>
                <div class="text-[10px] font-bold uppercase text-genriv-600 dark:text-genriv-300">${p.city} • RERA: ${p.reraId}</div>
                <div class="font-display font-bold text-sm text-slate-900 dark:text-white">${p.title}</div>
                <div class="text-xs font-bold text-emerald-600">${p.priceLabel} • Yield ${p.rentalYield}%</div>
              </div>
            </div>
            <button type="button" onclick="openVirtualTourModal('${p.id}')" class="px-3 py-2 rounded-xl bg-genriv-600 text-white text-xs font-bold shrink-0">360° Tour</button>
          </div>
        `;
      }
      const cardEl = document.getElementById('card-' + propId);
      if (cardEl) {
        cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        cardEl.classList.add('ring-2', 'ring-genriv-500');
        setTimeout(() => cardEl.classList.remove('ring-2', 'ring-genriv-500'), 2200);
      }
    }

    // Shortlist Logic
    function toggleShortlist(propId) {
      if (shortlistedIds.has(propId)) {
        shortlistedIds.delete(propId);
        showToast('Removed property from your saved shortlist.');
      } else {
        shortlistedIds.add(propId);
        showToast('❤️ Saved property to your shortlist!');
      }
      updateShortlistUI();
      applyFilters();
    }

    function updateShortlistUI() {
      const badge = document.getElementById('shortlist-badge');
      if (badge) badge.textContent = shortlistedIds.size;
      const container = document.getElementById('shortlist-items-container');
      if (!container) return;
      const savedList = properties.filter(p => shortlistedIds.has(p.id));
      if (savedList.length === 0) {
        container.innerHTML = `<p class="text-xs text-slate-500 py-8 text-center">No saved properties yet. Click the heart icon on any card to shortlist it.</p>`;
        return;
      }
      container.innerHTML = savedList.map(p => `
        <div class="flex items-center justify-between gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <div class="flex items-center gap-3">
            <img src="${p.image}" alt="${p.title}" class="w-16 h-14 rounded-xl object-cover shrink-0" />
            <div>
              <div class="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white">${p.title}</div>
              <div class="text-xs text-genriv-600 dark:text-genriv-400 font-bold">${p.priceLabel} • ${p.city}</div>
            </div>
          </div>
          <button type="button" onclick="toggleShortlist('${p.id}')" class="text-xs text-rose-500 font-bold px-2 py-1">Remove</button>
        </div>
      `).join('');
    }

    function toggleShortlistDrawer() {
      updateShortlistUI();
      const drawer = document.getElementById('shortlist-drawer');
      if (drawer) drawer.classList.toggle('hidden');
    }

    // Compare Tray Logic
    function toggleCompare(propId) {
      const idx = compareIds.indexOf(propId);
      if (idx > -1) {
        compareIds.splice(idx, 1);
      } else {
        if (compareIds.length >= 3) {
          showToast('You can compare up to 3 properties side-by-side.');
          applyFilters();
          return;
        }
        compareIds.push(propId);
      }
      updateCompareBar();
      applyFilters();
    }

    function updateCompareBar() {
      const bar = document.getElementById('compare-floating-bar');
      const pill = document.getElementById('compare-count-pill');
      const preview = document.getElementById('compare-items-preview');
      if (!bar) return;
      if (compareIds.length === 0) {
        bar.classList.add('hidden');
        return;
      }
      bar.classList.remove('hidden');
      pill.textContent = `${compareIds.length} / 3`;
      preview.innerHTML = compareIds.map(id => {
        const p = properties.find(x => x.id === id);
        return p ? `<span class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold">${p.title.slice(0, 18)}...</span>` : '';
      }).join('');
    }

    function clearCompareList() {
      compareIds = [];
      updateCompareBar();
      applyFilters();
    }

    function openCompareModal() {
      if (compareIds.length < 2) {
        showToast('Select at least 2 properties to compare side-by-side!');
        return;
      }
      const items = compareIds.map(id => properties.find(x => x.id === id)).filter(Boolean);
      const container = document.getElementById('compare-table-container');
      container.innerHTML = `
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-slate-200 dark:border-slate-800">
              <th class="py-3 px-3 text-slate-400 font-bold">Parameter</th>
              ${items.map(p => `<th class="py-3 px-3 font-display font-bold text-slate-900 dark:text-white">${p.title}</th>`).join('')}
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
            <tr>
              <td class="py-3 px-3 font-semibold text-slate-500">City & Locality</td>
              ${items.map(p => `<td class="py-3 px-3">${p.locality}, ${p.city}</td>`).join('')}
            </tr>
            <tr>
              <td class="py-3 px-3 font-semibold text-slate-500">Price & Rate</td>
              ${items.map(p => `<td class="py-3 px-3 font-bold text-genriv-600 dark:text-genriv-400">${p.priceLabel} (${p.pricePerSqft})</td>`).join('')}
            </tr>
            <tr>
              <td class="py-3 px-3 font-semibold text-slate-500">Configuration & Area</td>
              ${items.map(p => `<td class="py-3 px-3">${p.bhk} • ${p.areaSqft} sq.ft.</td>`).join('')}
            </tr>
            <tr>
              <td class="py-3 px-3 font-semibold text-slate-500">RERA Registration</td>
              ${items.map(p => `<td class="py-3 px-3 font-mono text-emerald-600">🛡️ ${p.reraId}</td>`).join('')}
            </tr>
            <tr>
              <td class="py-3 px-3 font-semibold text-slate-500">Gross Rental Yield</td>
              ${items.map(p => `<td class="py-3 px-3 font-bold text-emerald-600">${p.rentalYield}% p.a. (${p.appreciationYoY})</td>`).join('')}
            </tr>
            <tr>
              <td class="py-3 px-3 font-semibold text-slate-500">Locality Livability</td>
              ${items.map(p => `<td class="py-3 px-3 font-bold">★ ${p.livabilityScore} / 10</td>`).join('')}
            </tr>
          </tbody>
        </table>
      `;
      document.getElementById('compare-modal').classList.remove('hidden');
    }

    function closeCompareModal() {
      document.getElementById('compare-modal').classList.add('hidden');
    }

    // 360 Virtual Tour Modal
    function openVirtualTourModal(propId) {
      activeTourPropId = propId;
      const p = properties.find(x => x.id === propId) || properties[0];
      document.getElementById('tour-property-title').textContent = `${p.title} — ${p.locality}`;
      document.getElementById('tour-rera-badge').textContent = `RERA: ${p.reraId}`;
      document.getElementById('tour-main-image').src = p.image;
      document.getElementById('tour-price').textContent = p.priceLabel;
      document.getElementById('tour-area').textContent = `${p.areaSqft} sq.ft.`;
      document.getElementById('tour-yield').textContent = `${p.rentalYield}% p.a.`;
      document.getElementById('tour-description').textContent = p.description;
      document.getElementById('virtual-tour-modal').classList.remove('hidden');
    }

    function closeVirtualTourModal() {
      document.getElementById('virtual-tour-modal').classList.add('hidden');
    }

    function switchTourRoom(roomName, transformClasses) {
      document.getElementById('tour-room-label').textContent = 'Viewing: ' + roomName;
      const img = document.getElementById('tour-main-image');
      img.className = 'w-full h-full object-cover transition-all duration-700 transform ' + transformClasses;
    }

    function setTourSunPath(mode) {
      const overlay = document.getElementById('tour-lighting-overlay');
      if (mode === 'morning') {
        overlay.className = 'absolute inset-0 transition-all duration-500 pointer-events-none bg-amber-300/15 mix-blend-overlay';
        showToast('☀️ Simulated Morning East-Facing Natural Sunlight');
      } else if (mode === 'noon') {
        overlay.className = 'absolute inset-0 transition-all duration-500 pointer-events-none bg-transparent';
        showToast('☀️ Simulated High-Noon Zenith Daylight');
      } else {
        overlay.className = 'absolute inset-0 transition-all duration-500 pointer-events-none bg-indigo-950/35';
        showToast('🌆 Simulated Golden-Hour Twilight Ambience');
      }
    }

    function submitSiteVisit(e) {
      e.preventDefault();
      closeVirtualTourModal();
      showToast('✅ Site visit confirmed! Instant WhatsApp pass & RERA dossier sent.');
    }

    function contactSeller(propId) {
      const p = properties.find(x => x.id === propId);
      if (!p) return;
      showToast(`📞 Verified contact for ${p.builderName} unlocked (+91 98201-GENRIV). Zero spam guaranteed.`);
    }

    // Post Property Free Modal
    function openPostPropertyModal() {
      document.getElementById('post-property-modal').classList.remove('hidden');
    }

    function closePostPropertyModal() {
      document.getElementById('post-property-modal').classList.add('hidden');
    }

    function handleNewPropertySubmit(e) {
      e.preventDefault();
      const title = document.getElementById('new-prop-title').value.trim();
      const city = document.getElementById('new-prop-city').value;
      const intent = document.getElementById('new-prop-intent').value;
      const bhk = document.getElementById('new-prop-bhk').value;
      const priceCr = parseFloat(document.getElementById('new-prop-price').value) || 2.1;
      const locality = document.getElementById('new-prop-locality').value.trim();
      const areaSqft = parseInt(document.getElementById('new-prop-area').value, 10) || 1800;

      const newProp = {
        id: 'prop-' + (properties.length + 1),
        title,
        city,
        locality: `${locality}, ${city}`,
        intent,
        bhk,
        priceCr,
        priceLabel: `₹${priceCr.toFixed(2)} Cr`,
        rentEquiv: `₹${Math.round(priceCr * 32000).toLocaleString('en-IN')} / mo`,
        areaSqft,
        pricePerSqft: `₹${Math.round((priceCr * 10000000) / areaSqft).toLocaleString('en-IN')} / sq.ft.`,
        reraId: 'RERA/GENRIV/2026/' + Math.floor(1000 + Math.random() * 9000),
        reraVerified: true,
        postedBy: 'Owner',
        builderName: 'Direct Verified Owner (Zero Brokerage)',
        livabilityScore: 9.4,
        rentalYield: 4.8,
        appreciationYoY: '+15.4% YoY',
        tags: ['Zero Brokerage', 'Ready to Move', 'Vastu Compliant'],
        image: GENRIV_ASSETS.p2,
        mapX: 48,
        mapY: 48,
        description: 'Newly listed verified owner property with instant 360° digital inspection and zero brokerage fee.'
      };

      properties.unshift(newProp);
      closePostPropertyModal();
      resetAllFilters();
      scrollToSection('listings-section');
      showToast(`🎉 "${title}" is now live in the verified property grid!`);
    }

    // Genriv Edge Interactive Modals
    function openServiceModal(serviceKey) {
      const titleEl = document.getElementById('edge-modal-title');
      const bodyEl = document.getElementById('edge-modal-body');
      const modal = document.getElementById('edge-service-modal');

      if (serviceKey === 'rent-pay') {
        titleEl.textContent = '💳 Pay Rent via Credit Card (Genriv Edge)';
        bodyEl.innerHTML = `
          <p class="text-xs text-slate-500">Transfer house or office rent directly to your landlord's bank/UPI account using your Visa, Mastercard, or Amex & earn reward points.</p>
          <div class="space-y-3">
            <input type="text" placeholder="Landlord Name" value="Rajeshwari Estates LLP" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs" />
            <input type="text" placeholder="Landlord UPI ID or Bank A/C" value="rajeshwari.estates@hdfcbank" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs" />
            <input type="number" placeholder="Monthly Rent Amount (₹)" value="65000" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs" />
            <div class="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
              🎁 Instant Reward: 1,950 AirMiles + Digital Rent Receipt for HRA Tax Exemption!
            </div>
            <button type="button" onclick="closeServiceModal(); showToast('💳 Rent transfer initiated & HRA tax receipt generated!')" class="w-full py-3 rounded-xl bg-genriv-600 text-white font-bold text-xs">Proceed to Secure Transfer</button>
          </div>
        `;
      } else if (serviceKey === 'rent-agreement') {
        titleEl.textContent = '📜 Instant e-Stamped Rent Agreement';
        bodyEl.innerHTML = `
          <p class="text-xs text-slate-500">Government-approved e-Stamping with Aadhaar OTP biometric signature for Maharashtra, Karnataka, Delhi NCR, Telangana & West Bengal.</p>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs space-y-1.5">
            <div>✅ Lawyer-vetted 11-Month Leave & License Clause</div>
            <div>✅ Zero Police Verification Hassle Assistance</div>
            <div>✅ Instant PDF Delivery in 5 Minutes</div>
          </div>
          <button type="button" onclick="closeServiceModal(); showToast('📜 Draft e-Stamp Rental Agreement initialized!')" class="w-full py-3 rounded-xl bg-genriv-600 text-white font-bold text-xs">Draft Agreement Now (₹399 All-Inclusive)</button>
        `;
      } else if (serviceKey === 'ai-valuation') {
        titleEl.textContent = '🤖 Genriv AI Property Valuation Engine';
        bodyEl.innerHTML = `
          <p class="text-xs text-slate-500">Trained on 4.8 million registered sale deeds across 60+ Indian cities.</p>
          <div class="p-4 rounded-2xl bg-genriv-50 dark:bg-slate-800 border border-genriv-200 dark:border-slate-700 space-y-2 text-xs">
            <div class="font-bold text-slate-900 dark:text-white">Sample Instant Estimate — 3 BHK (1,850 sq.ft.)</div>
            <div class="text-lg font-display font-extrabold text-genriv-600 dark:text-genriv-400">Fair Market Value: ₹2.64 Cr – ₹2.78 Cr</div>
            <div class="text-emerald-600 font-semibold">Confidence Score: 98.2% • Expected Rent: ₹88,000/mo</div>
          </div>
          <button type="button" onclick="closeServiceModal(); showToast('🤖 Detailed 12-page AI Valuation Report generated!')" class="w-full py-3 rounded-xl bg-genriv-600 text-white font-bold text-xs">Download Full Valuation Report</button>
        `;
      } else {
        titleEl.textContent = '🛡️ RERA & Direct Owner Assurance';
        bodyEl.innerHTML = `
          <p class="text-xs text-slate-500">Every project on Genrivreality is cross-verified against state RERA portals for escrow compliance, title clarity, and zero-brokerage direct owner options.</p>
          <button type="button" onclick="closeServiceModal(); showToast('🛡️ RERA Verification Shield is active across all listings.')" class="w-full py-3 rounded-xl bg-genriv-600 text-white font-bold text-xs">Explore Verified Listings</button>
        `;
      }
      modal.classList.remove('hidden');
    }

    function closeServiceModal() {
      document.getElementById('edge-service-modal').classList.add('hidden');
    }

    // Locality Chart.js Initialization & Switcher
    function initLocalityChart() {
      const ctx = document.getElementById('priceTrendChart');
      if (!ctx || typeof Chart === 'undefined') return;
      const dataObj = localityStats['Worli, Mumbai'];

      priceChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Q1 2024', 'Q3 2024', 'Q1 2025', 'Q3 2025', 'Q1 2026', 'Q4 2026'],
          datasets: [{
            label: 'Avg. Price (₹ / sq.ft.)',
            data: dataObj.series,
            borderColor: '#7316ff',
            backgroundColor: 'rgba(115, 22, 255, 0.14)',
            borderWidth: 3,
            pointBackgroundColor: '#0078db',
            pointRadius: 5,
            fill: true,
            tension: 0.36
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: {
              grid: { color: 'rgba(148, 163, 184, 0.15)' },
              ticks: {
                callback: function(value) { return '₹' + value.toLocaleString('en-IN'); }
              }
            },
            x: {
              grid: { display: false }
            }
          }
        }
      });
    }

    function updateLocalityChart(locName) {
      const info = localityStats[locName];
      if (!info) return;

      document.querySelectorAll('.loc-tab').forEach(btn => {
        if (btn.getAttribute('data-loc') === locName) {
          btn.className = 'loc-tab px-3.5 py-2 rounded-xl text-xs font-bold bg-genriv-600 text-white shadow-sm transition';
        } else {
          btn.className = 'loc-tab px-3.5 py-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-genriv-50 transition';
        }
      });

      document.getElementById('chart-locality-title').textContent = `${locName} — Avg. Capital Values (₹ / sq.ft.)`;
      document.getElementById('chart-yoy-badge').textContent = info.growth;
      document.getElementById('chart-current-rate').textContent = info.rate;
      document.getElementById('scorecard-name').textContent = locName;
      document.getElementById('scorecard-overall').textContent = info.overall;
      document.getElementById('score-conn').textContent = `${info.conn} / 10`;
      document.getElementById('bar-conn').style.width = `${info.conn * 10}%`;
      document.getElementById('score-infra').textContent = `${info.infra} / 10`;
      document.getElementById('bar-infra').style.width = `${info.infra * 10}%`;
      document.getElementById('score-safety').textContent = `${info.safety} / 10`;
      document.getElementById('bar-safety').style.width = `${info.safety * 10}%`;
      document.getElementById('score-yield').textContent = info.yield;
      document.getElementById('scorecard-review').textContent = info.review;

      if (priceChartInstance) {
        priceChartInstance.data.datasets[0].data = info.series;
        priceChartInstance.update();
      }
    }

    // Smart Home Loan EMI & 5-Yr Equity Appreciation Calculator
    function calculateEMI() {
      const priceLakhs = parseFloat(document.getElementById('calc-price')?.value || '250'); // in Lakhs
      const downPct = parseFloat(document.getElementById('calc-down')?.value || '20');
      const annualRate = parseFloat(document.getElementById('calc-rate')?.value || '8.5');
      const tenureYears = parseInt(document.getElementById('calc-tenure')?.value || '20', 10);

      const priceCr = priceLakhs / 100;
      const downLakhs = (priceLakhs * downPct) / 100;
      const loanLakhs = priceLakhs - downLakhs;
      const principal = loanLakhs * 100000;

      const monthlyRate = annualRate / 12 / 100;
      const months = tenureYears * 12;
      const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);

      const totalPayable = emi * months;
      const totalInterest = totalPayable - principal;
      const principalShare = Math.round((principal / totalPayable) * 100);
      const projected5YrCr = priceCr * Math.pow(1.09, 5);

      document.getElementById('calc-price-display').textContent = priceCr >= 1 ? `₹${priceCr.toFixed(2)} Cr` : `₹${priceLakhs} Lakhs`;
      document.getElementById('calc-down-display').textContent = `${downPct}% (₹${downLakhs.toFixed(1)} L)`;
      document.getElementById('calc-rate-display').textContent = `${annualRate.toFixed(2)}%`;
      document.getElementById('calc-tenure-display').textContent = `${tenureYears} Yrs`;

      document.getElementById('emi-monthly-result').textContent = `₹${Math.round(emi).toLocaleString('en-IN')} / mo`;
      document.getElementById('emi-loan-amount-sub').textContent = `Principal Loan Amount: ₹${(loanLakhs / 100).toFixed(2)} Cr`;
      document.getElementById('emi-principal-total').textContent = `₹${(loanLakhs / 100).toFixed(2)} Cr`;
      document.getElementById('emi-interest-total').textContent = `₹${(totalInterest / 10000000).toFixed(2)} Cr`;
      document.getElementById('emi-projected-worth').textContent = `₹${projected5YrCr.toFixed(2)} Cr`;
      document.getElementById('emi-principal-bar').style.width = `${principalShare}%`;
    }

    function handleNewsletterSubmit(e) {
      e.preventDefault();
      const input = document.getElementById('newsletter-email');
      if (input) input.value = '';
      showToast('📩 Subscribed to Genriv Weekly Locality Price & RERA Alerts!');
    }


    // =========================================================================
    // NEW MODULE 1: HOSPITALITY & EVENT BOOKINGS (Marriage Hall, Picnic Spot, Hotel / Guest House)
    // =========================================================================
    const hospitalityVenues = [
      {
        id: 'venue-1',
        category: 'Marriage Hall',
        title: 'Genriv Royal Orchid Grand Banquet & Wedding Lawn',
        city: 'Kolkata',
        locality: 'Rajarhat Main Road, New Town, Kolkata',
        capacity: '300 – 1,200 Guests',
        tariffLabel: '₹1,45,000 / Day (or ₹950 / Plate)',
        rating: '4.9 ★',
        highlights: ['Pillarless AC Hall', '25,000 sq.ft. Bridal Lawn', '120 Valet Cars', 'In-House & Custom Catering'],
        image: GENRIV_ASSETS.p1,
        badge: '💒 Marriage Hall'
      },
      {
        id: 'venue-2',
        category: 'Marriage Hall',
        title: 'Imperial Sea-Facing Palace & Convention Mahal',
        city: 'Mumbai',
        locality: 'Worli Promenade, South Mumbai',
        capacity: '400 – 1,500 Guests',
        tariffLabel: '₹3,20,000 / Day (or ₹1,650 / Plate)',
        rating: '4.9 ★',
        highlights: ['Sea-Link Sunset Terrace', '2 Luxury Bridal Suites', ' acústic DJ & Mandap Deck', '100% Fire & Legal NOC'],
        image: GENRIV_ASSETS.p3,
        badge: '💒 Marriage Hall'
      },
      {
        id: 'venue-3',
        category: 'Picnic Spot',
        title: 'Botanica Riverside Eco-Farmhouse & Picnic Retreat',
        city: 'Kolkata',
        locality: 'Bawali – Raichak Riverside Belt, South Kolkata',
        capacity: '20 – 150 Picnic Guests',
        tariffLabel: '₹18,500 / Full Day (with 3 AC Cottages)',
        rating: '4.8 ★',
        highlights: ['Private Mango Orchard', 'Live BBQ & Gazebo Deck', 'Heated Pool & Kids Zone', 'Dedicated Cook Kitchen'],
        image: GENRIV_ASSETS.p2,
        badge: '🌳 Picnic Spot'
      },
      {
        id: 'venue-4',
        category: 'Picnic Spot',
        title: 'Nandi Hills Mist Canopy Day-Outing & Garden Estate',
        city: 'Bengaluru',
        locality: 'Devanahalli – Nandi Foothills, North Bengaluru',
        capacity: '25 – 200 Picnic Guests',
        tariffLabel: '₹24,000 / Full Day (or ₹799 / Person)',
        rating: '4.9 ★',
        highlights: ['5-Acre Private Lawn', 'Cricket Turf & Bonfire', 'Organic Farm Lunch', 'Ample Coach Parking'],
        image: GENRIV_ASSETS.p5,
        badge: '🌳 Picnic Spot'
      },
      {
        id: 'venue-5',
        category: 'Hotel / Guest House',
        title: 'Genriv Grand Executive Suites & Boutique Hotel',
        city: 'Kolkata',
        locality: 'Sector V & Salt Lake Stadium Corridor, Kolkata',
        capacity: '32 Deluxe & Family Suites',
        tariffLabel: '₹2,850 / Night (Complimentary Breakfast)',
        rating: '4.8 ★',
        highlights: ['24x7 Check-In', 'High-Speed Wi-Fi & Lounge', 'Airport Shuttle', 'Corporate & Family Friendly'],
        image: GENRIV_ASSETS.p6,
        badge: '🏨 Hotel / Guest House'
      },
      {
        id: 'venue-6',
        category: 'Hotel / Guest House',
        title: 'CyberHub Skyview Serviced Guest House & Residency',
        city: 'Gurugram',
        locality: 'DLF Phase 3, Near Moulsari Metro, Gurugram',
        capacity: '24 Luxury Serviced Rooms',
        tariffLabel: '₹3,400 / Night (Zero Booking Fee)',
        rating: '4.9 ★',
        highlights: ['Private Balcony Suites', 'In-Room Pantry', 'Boardroom Access', 'Long-Stay 30% Discount'],
        image: GENRIV_ASSETS.p4,
        badge: '🏨 Hotel / Guest House'
      }
    ];

    let currentVenueCategory = 'All';
    let selectedVenueId = 'venue-1';

    function filterVenueCategory(cat) {
      currentVenueCategory = cat;
      ['All', 'Marriage Hall', 'Picnic Spot', 'Hotel / Guest House'].forEach(c => {
        const btn = document.getElementById('venue-tab-' + c);
        if (!btn) return;
        if (c === cat) {
          btn.className = 'venue-cat-btn px-3.5 py-2 rounded-xl text-xs font-extrabold bg-genriv-600 text-white shadow-sm transition';
        } else {
          btn.className = 'venue-cat-btn px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-genriv-50 transition';
        }
      });
      renderHospitalityVenues();
    }

    function renderHospitalityVenues() {
      const grid = document.getElementById('hospitality-venues-grid');
      if (!grid) return;
      const list = currentVenueCategory === 'All'
        ? hospitalityVenues
        : hospitalityVenues.filter(v => v.category === currentVenueCategory);

      grid.innerHTML = list.map(v => `
        <article class="bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm card-hover flex flex-col justify-between">
          <div>
            <div class="relative h-48 overflow-hidden group">
              <img src="${v.image}" alt="${v.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div class="absolute top-3 left-3 flex gap-1.5">
                <span class="px-2.5 py-1 rounded-lg bg-amber-400 text-slate-950 text-[10px] font-extrabold uppercase shadow">${v.badge}</span>
                <span class="px-2.5 py-1 rounded-lg bg-slate-900/80 text-white text-[10px] font-bold">${v.city}</span>
              </div>
              <div class="absolute top-3 right-3 px-2 py-1 rounded-lg bg-emerald-500 text-slate-950 text-[11px] font-extrabold shadow">
                ${v.rating}
              </div>
              <div class="absolute bottom-3 left-3 right-3">
                <div class="font-display font-extrabold text-base sm:text-lg text-white leading-snug">${v.tariffLabel}</div>
                <div class="text-[11px] text-slate-200">Capacity: ${v.capacity}</div>
              </div>
            </div>

            <div class="p-4 sm:p-5 space-y-3">
              <div>
                <h3 class="font-display font-bold text-base text-slate-900 dark:text-white leading-snug">${v.title}</h3>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">📍 ${v.locality}</p>
              </div>
              <div class="flex flex-wrap gap-1.5">
                ${v.highlights.map(h => `<span class="px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-semibold text-slate-600 dark:text-slate-300">${h}</span>`).join('')}
              </div>
            </div>
          </div>

          <div class="px-4 sm:px-5 py-3 bg-white dark:bg-slate-800/60 border-t border-slate-200/70 dark:border-slate-800 flex items-center justify-between gap-2">
            <button type="button" onclick="prefillRequisitionForVenue('${v.category}', '${v.city}')" class="text-xs font-bold text-genriv-600 dark:text-genriv-400 hover:underline">
              Request Custom Quote
            </button>
            <button type="button" onclick="openVenueBookingModal('${v.id}')" class="px-4 py-2 rounded-xl bg-gradient-to-r from-genriv-600 to-acres-500 text-white text-xs font-extrabold shadow-sm hover:opacity-95 transition">
              Book ${v.category} →
            </button>
          </div>
        </article>
      `).join('');
    }

    function openVenueBookingModal(venueId) {
      selectedVenueId = venueId;
      const v = hospitalityVenues.find(x => x.id === venueId) || hospitalityVenues[0];
      document.getElementById('venue-modal-category-badge').textContent = v.badge + ' • Instant Confirmation';
      document.getElementById('venue-modal-title').textContent = v.title;
      document.getElementById('venue-modal-location').textContent = '📍 ' + v.locality;
      document.getElementById('venue-modal-tariff').textContent = v.tariffLabel;
      document.getElementById('venue-modal-capacity').textContent = v.capacity;
      document.getElementById('venue-booking-modal').classList.remove('hidden');
    }

    function closeVenueBookingModal() {
      document.getElementById('venue-booking-modal').classList.add('hidden');
    }

    function handleVenueBookingSubmit(e) {
      e.preventDefault();
      const v = hospitalityVenues.find(x => x.id === selectedVenueId) || hospitalityVenues[0];
      const guestName = document.getElementById('venue-book-name').value.trim();
      const checkin = document.getElementById('venue-book-checkin').value;
      const guests = document.getElementById('venue-book-guests').value.trim();
      const bookingCode = 'BK-' + Math.floor(10000 + Math.random() * 90000);
      closeVenueBookingModal();
      showToast(`🎉 ${v.category} booked for ${guestName} on ${checkin} (${guests})! Voucher #${bookingCode} sent.`);
    }

    function prefillRequisitionForVenue(category, city) {
      const catSelect = document.getElementById('req-category');
      if (catSelect) catSelect.value = 'Booking for ' + category;
      const locInput = document.getElementById('req-location');
      if (locInput) locInput.value = city;
      scrollToSection('forms-hub-section');
      highlightFormCard('requisition');
      showToast(`📋 Pre-filled Customer Requisition Form for ${category} in ${city}!`);
    }

    // =========================================================================
    // NEW MODULE 2: CUSTOMER REQUISITION FORM & PROPERTY ADVERTISEMENT FORM
    // =========================================================================
    const customerRequisitions = [
      {
        id: 'REQ-2026-8412',
        name: 'Sourav Mukherjee',
        role: 'Buyer',
        category: 'Residential Buy',
        location: 'New Town Action Area II, Kolkata',
        specs: '3 BHK (1,750+ sq.ft.)',
        budget: '₹1.35 Cr – ₹1.55 Cr',
        notes: 'East-facing Vastu, near upcoming Metro station, SBI Bank Loan pre-approved.'
      },
      {
        id: 'REQ-2026-8419',
        name: 'Priya & Arjun Nair',
        role: 'Wedding / Event Host',
        category: 'Booking for Marriage Hall',
        location: 'Salt Lake / EM Bypass, Kolkata',
        specs: '650 Guests (AC Banquet + Lawn)',
        budget: '₹1.80 Lakh / Day',
        notes: 'Need bridal green rooms, 80-car valet parking, and vegetarian + non-veg catering.'
      },
      {
        id: 'REQ-2026-8425',
        name: 'Apex Tech Solutions Pvt Ltd',
        role: 'Picnic Group',
        category: 'Booking for Picnic Spot',
        location: 'Raichak / Baruipur Farmhouse Belt',
        specs: '85 Team Members (Day Outing)',
        budget: '₹45,000 All-Inclusive',
        notes: 'Requires private lawn, cricket pitch, breakfast + buffet lunch, and 3 AC rest rooms.'
      }
    ];

    const publishedAdvertisements = [
      {
        id: 'ADV-FREE-901',
        owner: 'Subrata Chatterjee (Direct Owner)',
        category: 'Residential Property for Sale',
        title: 'Sunny Lakeview 3 BHK Corner Flat',
        city: 'Kolkata',
        locality: 'Salt Lake Sector II',
        price: '₹1.28 Cr',
        plan: '100% FREE Forever Ad'
      },
      {
        id: 'ADV-FREE-902',
        owner: 'Heritage Hospitality Group',
        category: 'Marriage Hall & Hotel / Guest House',
        title: 'Swarnabhumi Banquet & 18-Room Guest House',
        city: 'Kolkata',
        locality: 'VIP Road, Haldiram Crossing',
        price: '₹95,000 / Event • ₹2,200 / Room',
        plan: '100% FREE Forever Ad'
      }
    ];

    function renderRequisitionsList() {
      const container = document.getElementById('live-requisitions-list');
      const badge = document.getElementById('req-count-badge');
      if (badge) badge.textContent = `${customerRequisitions.length} Active`;
      if (!container) return;
      container.innerHTML = customerRequisitions.map(r => `
        <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 text-xs flex flex-col gap-1">
          <div class="flex items-center justify-between">
            <span class="font-mono font-bold text-genriv-600 dark:text-genriv-400">${r.id} • ${r.category}</span>
            <span class="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold text-[10px]">${r.budget}</span>
          </div>
          <div class="font-bold text-slate-900 dark:text-white">${r.name} (${r.role}) — ${r.specs} in ${r.location}</div>
          <div class="text-slate-500 dark:text-slate-400 text-[11px]">${r.notes}</div>
        </div>
      `).join('');
    }

    function renderAdvertisementsList() {
      const container = document.getElementById('live-advertisements-list');
      const badge = document.getElementById('adv-count-badge');
      if (badge) badge.textContent = `${publishedAdvertisements.length} Live Free Ads`;
      if (!container) return;
      container.innerHTML = publishedAdvertisements.map(a => `
        <div class="p-3 rounded-2xl bg-emerald-50/60 dark:bg-slate-800/80 border border-emerald-200/80 dark:border-slate-700 text-xs flex items-center justify-between gap-2">
          <div>
            <div class="flex items-center gap-1.5">
              <span class="px-1.5 py-0.2 rounded bg-emerald-600 text-white text-[9px] font-extrabold uppercase">FREE AD</span>
              <span class="font-bold text-slate-900 dark:text-white">${a.title}</span>
            </div>
            <div class="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5">${a.category} • ${a.locality}, ${a.city} • By ${a.owner}</div>
          </div>
          <div class="text-right shrink-0">
            <div class="font-display font-extrabold text-emerald-700 dark:text-emerald-400">${a.price}</div>
            <div class="text-[10px] text-slate-400">${a.id}</div>
          </div>
        </div>
      `).join('');
    }

    function handleRequisitionSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('req-name').value.trim();
      const role = document.getElementById('req-role').value;
      const category = document.getElementById('req-category').value;
      const location = document.getElementById('req-location').value.trim();
      const specs = document.getElementById('req-specs').value.trim();
      const budget = document.getElementById('req-budget').value.trim();
      const notes = document.getElementById('req-notes').value.trim() || 'Verified priority customer requisition.';

      const reqId = 'REQ-2026-' + Math.floor(1000 + Math.random() * 9000);
      customerRequisitions.unshift({
        id: reqId,
        name,
        role,
        category,
        location,
        specs,
        budget,
        notes
      });
      renderRequisitionsList();
      e.target.reset();
      showToast(`✅ Customer Requisition ${reqId} registered! Matching owners & venues notified.`);
    }

    function handleAdvertisementFormSubmit(e) {
      e.preventDefault();
      const ownerName = document.getElementById('adv-owner-name').value.trim();
      const role = document.getElementById('adv-role').value;
      const category = document.getElementById('adv-category').value;
      const title = document.getElementById('adv-title').value.trim();
      const city = document.getElementById('adv-city').value;
      const locality = document.getElementById('adv-locality').value.trim();
      const bhk = document.getElementById('adv-bhk').value;
      const areaSqft = parseInt(document.getElementById('adv-area').value, 10) || 1800;
      const priceCr = parseFloat(document.getElementById('adv-price').value) || 1.5;
      const highlights = document.getElementById('adv-highlights').value.trim() || '100% Free Verified Property Advertisement on Genrivreality.';

      const advId = 'ADV-FREE-' + Math.floor(100 + Math.random() * 900);
      publishedAdvertisements.unshift({
        id: advId,
        owner: `${ownerName} (${role})`,
        category,
        title,
        city,
        locality,
        price: `₹${priceCr.toFixed(2)} Cr`,
        plan: '100% FREE Forever Ad'
      });
      renderAdvertisementsList();

      // If it is a hospitality category, also add to hospitalityVenues; AND always add to main properties grid!
      if (category === 'Marriage Hall' || category === 'Picnic Spot' || category === 'Hotel / Guest House') {
        hospitalityVenues.unshift({
          id: 'venue-' + (hospitalityVenues.length + 1),
          category,
          title,
          city,
          locality: `${locality}, ${city}`,
          capacity: `${areaSqft} sq.ft. / Custom Capacity`,
          tariffLabel: `₹${(priceCr * 100000).toLocaleString('en-IN')} Package`,
          rating: '5.0 ★',
          highlights: ['Free Verified Ad', highlights.slice(0, 40)],
          image: GENRIV_ASSETS.p1,
          badge: category === 'Marriage Hall' ? '💒 Marriage Hall' : (category === 'Picnic Spot' ? '🌳 Picnic Spot' : '🏨 Hotel / Guest House')
        });
        renderHospitalityVenues();
      }

      const newProp = {
        id: 'prop-' + (properties.length + 1),
        title,
        city,
        locality: `${locality}, ${city}`,
        intent: (category === 'Buy' || category === 'Rent' || category === 'Commercial') ? category : 'Buy',
        bhk: bhk === 'Commercial' ? 'Commercial' : bhk,
        priceCr,
        priceLabel: `₹${priceCr.toFixed(2)} Cr`,
        rentEquiv: `₹${Math.round(priceCr * 30000).toLocaleString('en-IN')} / mo`,
        areaSqft,
        pricePerSqft: `₹${Math.round((priceCr * 10000000) / areaSqft).toLocaleString('en-IN')} / sq.ft.`,
        reraId: 'FREE-AD-' + advId,
        reraVerified: true,
        postedBy: role === 'Builder' ? 'Builder' : 'Owner',
        builderName: `${ownerName} (Free Verified Ad)`,
        livabilityScore: 9.5,
        rentalYield: 4.9,
        appreciationYoY: '+16.0% YoY',
        tags: ['Zero Brokerage', 'Ready to Move', 'Vastu Compliant'],
        image: GENRIV_ASSETS.p5,
        mapX: 52,
        mapY: 50,
        description: highlights
      };
      properties.unshift(newProp);
      applyFilters();
      e.target.reset();
      showToast(`📢 Free Property Advertisement "${title}" (${advId}) is now LIVE across Genrivreality!`);
    }

    function highlightFormCard(which) {
      const reqCard = document.getElementById('requisition-form-card');
      const advCard = document.getElementById('advertisement-form-card');
      if (which === 'requisition' && reqCard) {
        reqCard.classList.add('ring-4', 'ring-genriv-500');
        setTimeout(() => reqCard.classList.remove('ring-4', 'ring-genriv-500'), 2400);
      } else if (which === 'advertisement' && advCard) {
        advCard.classList.add('ring-4', 'ring-emerald-500');
        setTimeout(() => advCard.classList.remove('ring-4', 'ring-emerald-500'), 2400);
      }
    }

    // =========================================================================
    // NEW MODULE 3: 12 DEDICATED PORTAL NAVIGATION TABS CONTROLLER
    // =========================================================================
    const portalTabConfigs = {
      'home': {
        pill: 'Home Portal',
        heading: 'Home — Genrivreality All-in-One Super Portal',
        subtitle: 'Explore RERA-verified properties, 100% Free Property Advertisements, Customer Requisition matching, and instant bookings for Marriage Halls, Picnic Spots & Hotels / Guest Houses.',
        render: () => `
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <div class="text-xs font-extrabold uppercase text-genriv-600 dark:text-genriv-400">Buyers &amp; Tenants</div>
              <div class="font-display font-bold text-base text-slate-900 dark:text-white mt-1">360° Spatial &amp; Zero-Brokerage</div>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Browse verified homes or submit a Customer Requisition Form for instant matching.</p>
              <button type="button" onclick="scrollToSection('forms-hub-section'); highlightFormCard('requisition')" class="mt-3 text-xs font-extrabold text-genriv-600 dark:text-genriv-400 hover:underline">Open Requisition Form →</button>
            </div>
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <div class="text-xs font-extrabold uppercase text-emerald-600 dark:text-emerald-400">Sellers &amp; Owners</div>
              <div class="font-display font-bold text-base text-slate-900 dark:text-white mt-1">100% Free Property Ad Studio</div>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Publish unlimited owner/seller listings via our PROPERTY ADVERTISEMENT FORM at ₹0 cost.</p>
              <button type="button" onclick="scrollToSection('forms-hub-section'); highlightFormCard('advertisement')" class="mt-3 text-xs font-extrabold text-emerald-600 dark:text-emerald-400 hover:underline">Post Free Property Ad →</button>
            </div>
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <div class="text-xs font-extrabold uppercase text-amber-600 dark:text-amber-400">Celebrations &amp; Stays</div>
              <div class="font-display font-bold text-base text-slate-900 dark:text-white mt-1">Marriage Hall, Picnic &amp; Hotels</div>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Instant date check and e-Voucher booking for wedding banquets, picnic gardens &amp; guest houses.</p>
              <button type="button" onclick="scrollToSection('hospitality-booking-section')" class="mt-3 text-xs font-extrabold text-amber-600 dark:text-amber-400 hover:underline">Explore Venues &amp; Hotels →</button>
            </div>
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <div class="text-xs font-extrabold uppercase text-acres-600 dark:text-sky-400">Advisory &amp; Trust</div>
              <div class="font-display font-bold text-base text-slate-900 dark:text-white mt-1">Loans, Legal &amp; Publications</div>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">8.35% p.a. Bank Loans, RERA Legal Title Verification, Market Gazette &amp; 24x7 Support.</p>
              <button type="button" onclick="switchMainTab('bank-loan')" class="mt-3 text-xs font-extrabold text-acres-600 dark:text-sky-400 hover:underline">Compare Bank Loans →</button>
            </div>
          </div>
        `
      },
      'sellers': {
        pill: 'Sellers Hub',
        heading: 'Sellers — High-Velocity Property Selling & AI Valuation Suite',
        subtitle: 'Reach 1.4M+ verified home buyers and investors across India with zero listing cost and AI fair-market pricing.',
        render: () => `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div class="p-5 rounded-2xl bg-emerald-50/70 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700">
              <span class="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-extrabold uppercase">Step 1</span>
              <h3 class="font-display font-bold text-base text-slate-900 dark:text-white mt-2">Free Advertisement of your Properties</h3>
              <p class="text-xs text-slate-600 dark:text-slate-300 mt-1">Fill out the PROPERTY ADVERTISEMENT FORM to showcase your apartment, villa, plot, or commercial unit for free.</p>
              <button type="button" onclick="scrollToSection('forms-hub-section'); highlightFormCard('advertisement')" class="mt-3 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold">Open Property Ad Form →</button>
            </div>
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <span class="px-2.5 py-0.5 rounded-full bg-genriv-600 text-white text-[10px] font-extrabold uppercase">Step 2</span>
              <h3 class="font-display font-bold text-base text-slate-900 dark:text-white mt-2">Genriv AI Price Valuation</h3>
              <p class="text-xs text-slate-600 dark:text-slate-300 mt-1">Benchmark your asking price against actual registered sale deeds in your micro-market.</p>
              <button type="button" onclick="openServiceModal('ai-valuation')" class="mt-3 px-4 py-2 rounded-xl bg-genriv-600 text-white text-xs font-bold">Check AI Valuation →</button>
            </div>
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <span class="px-2.5 py-0.5 rounded-full bg-acres-500 text-white text-[10px] font-extrabold uppercase">Step 3</span>
              <h3 class="font-display font-bold text-base text-slate-900 dark:text-white mt-2">Match Live Buyer Requisitions</h3>
              <p class="text-xs text-slate-600 dark:text-slate-300 mt-1">Connect directly with pre-qualified buyers who have posted active requisitions in your city.</p>
              <button type="button" onclick="scrollToSection('forms-hub-section')" class="mt-3 px-4 py-2 rounded-xl bg-acres-600 text-white text-xs font-bold">View Live Buyer Demand →</button>
            </div>
          </div>
        `
      },
      'buyers': {
        pill: 'Buyers Hub',
        heading: 'Buyers — 100% RERA-Verified Home Discovery & Requisition Desk',
        subtitle: 'Compare luxury apartments, villas, and new launches side-by-side with 360° virtual tours, Vastu checks, and zero brokerage options.',
        render: () => `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div class="p-5 rounded-2xl bg-genriv-50/70 dark:bg-slate-800 border border-genriv-200 dark:border-slate-700">
              <h3 class="font-display font-bold text-base text-slate-900 dark:text-white">📋 Submit Buyer Requisition</h3>
              <p class="text-xs text-slate-600 dark:text-slate-300 mt-1">Can't find your exact configuration? Post your budget &amp; preferred locality in the Customer Requisition Form.</p>
              <button type="button" onclick="scrollToSection('forms-hub-section'); highlightFormCard('requisition')" class="mt-3 px-4 py-2 rounded-xl bg-genriv-600 text-white text-xs font-bold">Fill Buyer Requisition Form →</button>
            </div>
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <h3 class="font-display font-bold text-base text-slate-900 dark:text-white">🏠 Explore Verified Buy Listings</h3>
              <p class="text-xs text-slate-600 dark:text-slate-300 mt-1">Filter by Ready-to-Move, Metro &lt; 500m, Sea/Lake View, and 100% Vastu compliance.</p>
              <button type="button" onclick="setIntentTab('Buy'); scrollToSection('listings-section')" class="mt-3 px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold">Browse Buy Listings →</button>
            </div>
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <h3 class="font-display font-bold text-base text-slate-900 dark:text-white">🛡️ Legal &amp; Bank Loan Desk</h3>
              <p class="text-xs text-slate-600 dark:text-slate-300 mt-1">Get 60-year property title verification and pre-approved home loans starting at 8.35% p.a.</p>
              <button type="button" onclick="switchMainTab('legal-support')" class="mt-3 px-4 py-2 rounded-xl bg-acres-600 text-white text-xs font-bold">Verify Title &amp; RERA →</button>
            </div>
          </div>
        `
      },
      'owners': {
        pill: 'Property & Venue Owners Hub',
        heading: 'Owners — Direct Zero-Brokerage Property & Hospitality Management',
        subtitle: 'For flat owners, house landlords, marriage hall proprietors, picnic farmhouse owners, and guest house hosts.',
        render: () => `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div class="p-5 rounded-2xl bg-emerald-50/70 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700">
              <h3 class="font-display font-bold text-base text-slate-900 dark:text-white">📢 Free Advertisement of your Properties</h3>
              <p class="text-xs text-slate-600 dark:text-slate-300 mt-1">List your residential property, marriage hall, picnic spot, or guest house with 0% commission.</p>
              <button type="button" onclick="scrollToSection('forms-hub-section'); highlightFormCard('advertisement')" class="mt-3 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold">Publish Free Owner Ad →</button>
            </div>
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <h3 class="font-display font-bold text-base text-slate-900 dark:text-white">📜 Instant Aadhaar Rent Agreement</h3>
              <p class="text-xs text-slate-600 dark:text-slate-300 mt-1">Generate legally binding 11-month Leave &amp; License e-Stamped contracts online in 5 minutes.</p>
              <button type="button" onclick="openServiceModal('rent-agreement')" class="mt-3 px-4 py-2 rounded-xl bg-genriv-600 text-white text-xs font-bold">Draft Owner Agreement →</button>
            </div>
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <h3 class="font-display font-bold text-base text-slate-900 dark:text-white">🤝 Filter Direct Owner Listings</h3>
              <p class="text-xs text-slate-600 dark:text-slate-300 mt-1">View how verified direct-owner properties appear with the Zero-Brokerage badge.</p>
              <button type="button" onclick="document.getElementById('posted-by-filter').value='Owner'; applyFilters(); scrollToSection('listings-section')" class="mt-3 px-4 py-2 rounded-xl bg-acres-600 text-white text-xs font-bold">Show Owner Listings →</button>
            </div>
          </div>
        `
      },
      'tenants': {
        pill: 'Tenants & Co-Living Hub',
        heading: 'Tenants — Zero-Brokerage Rentals, PG/Co-Living & Credit Card Rent Pay',
        subtitle: 'Discover verified rental homes, studio apartments, and corporate guest houses with digital lease protection.',
        render: () => `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <h3 class="font-display font-bold text-base text-slate-900 dark:text-white">💳 Pay Rent via Credit Card</h3>
              <p class="text-xs text-slate-600 dark:text-slate-300 mt-1">Earn airline miles, enjoy 45 days interest-free period, and download instant HRA tax receipts.</p>
              <button type="button" onclick="openServiceModal('rent-pay')" class="mt-3 px-4 py-2 rounded-xl bg-genriv-600 text-white text-xs font-bold">Pay Monthly Rent →</button>
            </div>
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <h3 class="font-display font-bold text-base text-slate-900 dark:text-white">🔑 Post Tenant Requisition</h3>
              <p class="text-xs text-slate-600 dark:text-slate-300 mt-1">Submit your rental budget, furnishing need, and move-in date in the Customer Requisition Form.</p>
              <button type="button" onclick="document.getElementById('req-role').value='Tenant'; document.getElementById('req-category').value='Residential Rent'; scrollToSection('forms-hub-section'); highlightFormCard('requisition')" class="mt-3 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold">Submit Tenant Requirement →</button>
            </div>
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <h3 class="font-display font-bold text-base text-slate-900 dark:text-white">🏨 Short-Stay Guest Houses</h3>
              <p class="text-xs text-slate-600 dark:text-slate-300 mt-1">Need a flexible stay for a week or month? Book verified Hotels &amp; Guest Houses directly.</p>
              <button type="button" onclick="filterVenueCategory('Hotel / Guest House'); scrollToSection('hospitality-booking-section')" class="mt-3 px-4 py-2 rounded-xl bg-rose-600 text-white text-xs font-bold">Book Hotel / Guest House →</button>
            </div>
          </div>
        `
      },
      'listing-property': {
        pill: 'Listing your Property (100% FREE)',
        heading: 'Listing your Property — Free Advertisement Studio',
        subtitle: 'Publish your Residential, Commercial, Plot, Marriage Hall, Picnic Spot, or Hotel / Guest House listing in under 60 seconds.',
        render: () => `
          <div class="p-5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-acres-600 text-white flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span class="px-2.5 py-0.5 rounded-full bg-amber-300 text-slate-950 text-[10px] font-extrabold uppercase">Zero Listing Fee • Instant Live Publishing</span>
              <h3 class="font-display font-extrabold text-xl mt-1">Ready to Advertise Your Property or Venue for FREE?</h3>
              <p class="text-xs text-emerald-100 mt-1">Use our full-featured PROPERTY ADVERTISEMENT FORM below or launch the quick Post Property modal.</p>
            </div>
            <div class="flex flex-wrap gap-2.5 shrink-0">
              <button type="button" onclick="scrollToSection('forms-hub-section'); highlightFormCard('advertisement')" class="px-4 py-2.5 rounded-xl bg-white text-emerald-800 font-extrabold text-xs shadow">Go to PROPERTY ADVERTISEMENT FORM ↓</button>
              <button type="button" onclick="openPostPropertyModal()" class="px-4 py-2.5 rounded-xl bg-slate-950/40 hover:bg-slate-950/60 text-white font-bold text-xs border border-white/25">Quick Post Modal ➕</button>
            </div>
          </div>
        `
      },
      'customer-support': {
        pill: '24x7 Customer Support Concierge',
        heading: 'Customer Support — Dedicated Relationship & Booking Helpdesk',
        subtitle: 'Instant assistance for buyers, sellers, tenants, bank loan applicants, and marriage hall / picnic / hotel bookings.',
        render: () => `
          <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div class="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div class="font-extrabold text-genriv-600 dark:text-genriv-400">📞 24x7 Toll-Free Concierge</div>
                <div class="font-display font-bold text-base text-slate-900 dark:text-white mt-1">1800-2026-GENRIV</div>
                <p class="text-slate-500 mt-1">Zero-wait priority line for verified buyers, owners &amp; hospitality guests.</p>
              </div>
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div class="font-extrabold text-emerald-600 dark:text-emerald-400">💬 WhatsApp Bot &amp; Live Chat</div>
                <div class="font-display font-bold text-base text-slate-900 dark:text-white mt-1">+91 98300-88999</div>
                <p class="text-slate-500 mt-1">Instant e-Voucher rescheduling for Marriage Halls, Picnic Spots &amp; Hotels.</p>
              </div>
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 sm:col-span-2">
                <div class="font-extrabold text-slate-900 dark:text-white">🛡️ Buyer &amp; Tenant Escrow Protection Guarantee</div>
                <p class="text-slate-500 mt-1">Every venue booking and rental deposit processed through Genriv Edge is protected by our 100% refund assurance if venue specifications do not match the verified tour.</p>
              </div>
            </div>
            <form onsubmit="handleSupportTicketSubmit(event)" class="md:col-span-5 p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3">
              <div class="font-display font-bold text-sm text-slate-900 dark:text-white">🎧 Raise Instant Support / Callback Ticket</div>
              <input id="support-name" type="text" required placeholder="Your Name" class="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs" />
              <select id="support-topic" class="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-semibold">
                <option value="Property Buying / Selling Query">Property Buying / Selling Query</option>
                <option value="Marriage Hall / Picnic / Hotel Booking">Marriage Hall / Picnic / Hotel Booking</option>
                <option value="Free Property Advertisement Support">Free Property Advertisement Support</option>
                <option value="Bank Loan / Legal Verification">Bank Loan / Legal Verification</option>
              </select>
              <input id="support-msg" type="text" required placeholder="Brief description of your request..." class="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs" />
              <button type="submit" class="w-full py-2.5 rounded-xl bg-genriv-600 text-white font-bold text-xs">Generate Priority Support Ticket →</button>
            </form>
          </div>
        `
      },
      'bank-loan': {
        pill: 'Bank Loan & Mortgage Desk',
        heading: 'Bank Loan — Instant Pre-Approved Home & Commercial Loan Comparison',
        subtitle: 'Compare lowest Q4 2026 interest rates across India’s top public and private sector banks with digital sanction in 24 hours.',
        render: () => `
          <div class="space-y-4">
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse text-xs">
                <thead>
                  <tr class="border-b border-slate-200 dark:border-slate-800 text-slate-400">
                    <th class="py-2.5 px-3">Partner Bank</th>
                    <th class="py-2.5 px-3">Interest Rate (p.a.)</th>
                    <th class="py-2.5 px-3">Processing Fee</th>
                    <th class="py-2.5 px-3">Max Tenure</th>
                    <th class="py-2.5 px-3">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-medium">
                  <tr>
                    <td class="py-2.5 px-3 font-bold text-slate-900 dark:text-white">🏦 State Bank of India (SBI MaxGain)</td>
                    <td class="py-2.5 px-3 text-emerald-600 font-extrabold">8.35% – 8.65%</td>
                    <td class="py-2.5 px-3">₹0 (Festive Waiver)</td>
                    <td class="py-2.5 px-3">30 Years</td>
                    <td class="py-2.5 px-3"><button type="button" onclick="applyBankRate(8.35, 'SBI Home Loans')" class="px-3 py-1 rounded-lg bg-genriv-600 text-white font-bold">Apply @ 8.35%</button></td>
                  </tr>
                  <tr>
                    <td class="py-2.5 px-3 font-bold text-slate-900 dark:text-white">🏦 HDFC Bank Home Loans</td>
                    <td class="py-2.5 px-3 text-emerald-600 font-extrabold">8.45% – 8.75%</td>
                    <td class="py-2.5 px-3">Flat ₹2,999</td>
                    <td class="py-2.5 px-3">30 Years</td>
                    <td class="py-2.5 px-3"><button type="button" onclick="applyBankRate(8.45, 'HDFC Home Loans')" class="px-3 py-1 rounded-lg bg-genriv-600 text-white font-bold">Apply @ 8.45%</button></td>
                  </tr>
                  <tr>
                    <td class="py-2.5 px-3 font-bold text-slate-900 dark:text-white">🏦 ICICI Bank Express Home Credit</td>
                    <td class="py-2.5 px-3 text-emerald-600 font-extrabold">8.50% – 8.85%</td>
                    <td class="py-2.5 px-3">50% Off Online</td>
                    <td class="py-2.5 px-3">30 Years</td>
                    <td class="py-2.5 px-3"><button type="button" onclick="applyBankRate(8.50, 'ICICI Home Loans')" class="px-3 py-1 rounded-lg bg-genriv-600 text-white font-bold">Apply @ 8.50%</button></td>
                  </tr>
                  <tr>
                    <td class="py-2.5 px-3 font-bold text-slate-900 dark:text-white">🏦 Axis &amp; Kotak Privilege Mortgage</td>
                    <td class="py-2.5 px-3 text-emerald-600 font-extrabold">8.55% – 8.90%</td>
                    <td class="py-2.5 px-3">Zero Prepayment</td>
                    <td class="py-2.5 px-3">25 Years</td>
                    <td class="py-2.5 px-3"><button type="button" onclick="applyBankRate(8.55, 'Kotak/Axis Loans')" class="px-3 py-1 rounded-lg bg-genriv-600 text-white font-bold">Apply @ 8.55%</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="flex justify-end">
              <button type="button" onclick="scrollToSection('emi-section')" class="px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-extrabold text-xs">Open Interactive EMI &amp; Wealth Calculator ↓</button>
            </div>
          </div>
        `
      },
      'legal-support': {
        pill: 'Legal Support & Title Verification',
        heading: 'Legal Support — RERA Audit, Property Title Search & Deed Registration',
        subtitle: 'High-Court empaneled real estate advocates for encumbrance checks, sale deed drafting, mutation, and e-Stamped rental agreements.',
        render: () => `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
              <div class="font-display font-bold text-sm text-slate-900 dark:text-white">⚖️ 30-Year Title &amp; Encumbrance Search</div>
              <p class="text-slate-500">Complete verification of mother deed, khatiyan/porcha, mutation certificate, and bank lien clearance.</p>
              <button type="button" onclick="showToast('⚖️ Legal Title Search dossier request booked with Senior Property Counsel!')" class="px-3.5 py-2 rounded-xl bg-genriv-600 text-white font-bold">Book Title Search (₹2,499)</button>
            </div>
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
              <div class="font-display font-bold text-sm text-slate-900 dark:text-white">📜 Sale Agreement &amp; Sub-Registrar Assist</div>
              <p class="text-slate-500">End-to-end drafting of Agreement for Sale, Conveyance Deed, and stamp duty/registration slot booking.</p>
              <button type="button" onclick="showToast('📜 Conveyance Deed & Stamp Duty consultation scheduled!')" class="px-3.5 py-2 rounded-xl bg-acres-600 text-white font-bold">Consult Legal Desk</button>
            </div>
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
              <div class="font-display font-bold text-sm text-slate-900 dark:text-white">🛡️ RERA Builder Compliance &amp; Escrow Audit</div>
              <p class="text-slate-500">Verify project quarterly construction progress and RERA 70% escrow account compliance before paying booking money.</p>
              <button type="button" onclick="openServiceModal('rera-Verify')" class="px-3.5 py-2 rounded-xl bg-emerald-600 text-white font-bold">Run RERA Radar Check</button>
            </div>
          </div>
        `
      },
      'publication': {
        pill: 'Genriv Publications & Market Gazette',
        heading: 'Publication — Real Estate Gazette, Property Ad Digest & Research Reports',
        subtitle: 'Read our monthly print-and-digital Property Advertisement Magazine, Locality Price Index reports, and Legal Buyer Handbooks.',
        render: () => `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
              <div>
                <span class="px-2 py-0.5 rounded bg-genriv-100 dark:bg-genriv-900/60 text-genriv-700 dark:text-genriv-300 text-[10px] font-bold">OCTOBER 2026 ISSUE</span>
                <h4 class="font-display font-bold text-sm text-slate-900 dark:text-white mt-2">📰 Genrivreality Property &amp; Venue Ad Gazette</h4>
                <p class="text-slate-500 mt-1">Featuring 450+ Free Owner Property Advertisements, Marriage Hall festive tariffs, and Kolkata–Mumbai–Bengaluru spotlights.</p>
              </div>
              <button type="button" onclick="showToast('📰 Opened Genrivreality October 2026 Digital Gazette Issue!')" class="mt-3 px-3.5 py-2 rounded-xl bg-genriv-600 text-white font-bold">Read Digital Magazine →</button>
            </div>
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
              <div>
                <span class="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold">MARKET RESEARCH</span>
                <h4 class="font-display font-bold text-sm text-slate-900 dark:text-white mt-2">📈 Pan-India Q4 2026 Insite Price &amp; Rental Yield Report</h4>
                <p class="text-slate-500 mt-1">Deep-dive registration data across 60 micro-markets with 5-year metro corridor appreciation forecasts.</p>
              </div>
              <button type="button" onclick="scrollToSection('insights-section')" class="mt-3 px-3.5 py-2 rounded-xl bg-emerald-600 text-white font-bold">View Live Price Charts →</button>
            </div>
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
              <div>
                <span class="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300 text-[10px] font-bold">HOSPITALITY GUIDE</span>
                <h4 class="font-display font-bold text-sm text-slate-900 dark:text-white mt-2">🏛️ 2026–27 Wedding Venues, Picnic Spots &amp; Guest House Directory</h4>
                <p class="text-slate-500 mt-1">Verified checklist for booking marriage halls, winter family picnic spots, and transit guest houses.</p>
              </div>
              <button type="button" onclick="scrollToSection('hospitality-booking-section')" class="mt-3 px-3.5 py-2 rounded-xl bg-amber-500 text-slate-950 font-extrabold">Browse Venue Directory →</button>
            </div>
          </div>
        `
      },
      'contact': {
        pill: 'Contact & Regional Offices',
        heading: 'Contact — Regional Experience Centers & Direct Inquiry',
        subtitle: 'Visit our brick-and-mortar property & venue booking lounges or connect with our regional relationship managers.',
        render: () => `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="font-extrabold text-genriv-600 dark:text-genriv-400">📍 Eastern India HQ (Kolkata)</div>
              <div class="font-bold text-slate-900 dark:text-white mt-1">Genrivreality Tower, Eco Intelligent Park, Sector V, Salt Lake &amp; New Town, Kolkata – 700091</div>
              <div class="text-slate-500 mt-1">Phone: +91 (033) 4090-GENRIV • Email: kolkata@genrivreality.com</div>
            </div>
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="font-extrabold text-acres-600 dark:text-sky-400">📍 Western &amp; Northern Hubs</div>
              <div class="font-bold text-slate-900 dark:text-white mt-1">BKC Maker Maxity (Mumbai) • DLF CyberCity Tower B (Gurugram)</div>
              <div class="text-slate-500 mt-1">Phone: +91 (022) 6120-GENRIV • Email: west@genrivreality.com</div>
            </div>
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="font-extrabold text-emerald-600 dark:text-emerald-400">📍 Southern Tech Corridors</div>
              <div class="font-bold text-slate-900 dark:text-white mt-1">Prestige Tech Park, Whitefield (Bengaluru) • HITEC Mindspace (Hyderabad)</div>
              <div class="text-slate-500 mt-1">Phone: +91 (080) 4880-GENRIV • Email: care@genrivreality.com</div>
            </div>
          </div>
        `
      },
      'login': {
        pill: 'Member Login & Account Portal',
        heading: 'Login — Unified Access for Buyers, Sellers, Owners & Tenants',
        subtitle: 'Manage your saved properties, track your Customer Requisition Form status, and monitor leads on your Free Property Advertisements.',
        render: () => `
          <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div class="font-display font-bold text-base text-slate-900 dark:text-white" id="portal-login-status-title">🔐 Sign In with Genriv One-ID</div>
              <p class="text-xs text-slate-500 mt-1" id="portal-login-status-desc">Access your personalized Buyer, Seller, Owner, Tenant, or Venue Host dashboard with single-click OTP login.</p>
            </div>
            <button type="button" onclick="openLoginModal()" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-genriv-600 to-acres-500 text-white font-extrabold text-xs shadow-md shrink-0">
              Open Login / Sign-Up Modal →
            </button>
          </div>
        `
      }
    };

    function switchMainTab(tabKey) {
      const config = portalTabConfigs[tabKey] || portalTabConfigs['home'];

      // Highlight active button in 12-tab header bar
      const allTabs = ['home', 'sellers', 'buyers', 'owners', 'tenants', 'listing-property', 'customer-support', 'bank-loan', 'legal-support', 'publication', 'contact', 'login'];
      allTabs.forEach(k => {
        const btn = document.getElementById('nav-tab-' + k);
        if (!btn) return;
        if (k === 'login') {
          btn.className = k === tabKey
            ? 'main-portal-tab inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md whitespace-nowrap shrink-0 transition'
            : 'main-portal-tab inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-genriv-600 to-acres-500 hover:from-genriv-700 hover:to-acres-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-genriv-600/25 whitespace-nowrap shrink-0 transition';
        } else if (k === 'contact') {
          btn.className = k === tabKey
            ? 'main-portal-tab inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-xl bg-gradient-to-r from-genriv-600 to-acres-500 text-white font-extrabold text-xs sm:text-sm shadow-sm whitespace-nowrap shrink-0 transition'
            : 'main-portal-tab inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-genriv-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 font-bold text-xs sm:text-sm whitespace-nowrap shrink-0 transition';
        } else if (k === tabKey) {
          btn.className = 'main-portal-tab px-3 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap shrink-0 transition bg-gradient-to-r from-genriv-600 to-acres-500 text-white shadow-sm flex items-center gap-1.5';
        } else {
          btn.className = 'main-portal-tab px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-genriv-50 dark:hover:bg-slate-700 border border-slate-200/70 dark:border-slate-700 flex items-center gap-1.5';
        }
      });

      const pillEl = document.getElementById('portal-active-tab-pill');
      const headEl = document.getElementById('portal-tab-heading');
      const subEl = document.getElementById('portal-tab-subtitle');
      const bodyEl = document.getElementById('portal-tab-body');

      if (pillEl) pillEl.textContent = config.pill;
      if (headEl) headEl.textContent = config.heading;
      if (subEl) subEl.textContent = config.subtitle;
      if (bodyEl) bodyEl.innerHTML = config.render();

      if (tabKey === 'login') {
        openLoginModal();
      } else if (tabKey === 'listing-property') {
        scrollToSection('forms-hub-section');
        highlightFormCard('advertisement');
      } else if (tabKey !== 'home') {
        scrollToSection('tab-portal-section');
      }
    }

    function applyBankRate(rate, bankName) {
      const rateSlider = document.getElementById('calc-rate');
      if (rateSlider) {
        rateSlider.value = rate;
        calculateEMI();
      }
      scrollToSection('emi-section');
      showToast(`🏦 Applied ${bankName} special rate (${rate.toFixed(2)}% p.a.) to the Smart EMI Calculator!`);
    }

    function handleSupportTicketSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('support-name').value.trim();
      const topic = document.getElementById('support-topic').value;
      const ticketId = 'TKT-' + Math.floor(1000 + Math.random() * 9000);
      e.target.reset();
      showToast(`🎧 Support Ticket ${ticketId} created for ${name} (${topic}). Concierge callback in 5 mins!`);
    }

    function openLoginModal() {
      document.getElementById('login-portal-modal').classList.remove('hidden');
    }

    function closeLoginModal() {
      document.getElementById('login-portal-modal').classList.add('hidden');
    }

    function handleLoginSubmit(e) {
      e.preventDefault();
      const role = document.getElementById('login-role').value;
      const user = document.getElementById('login-identifier').value.trim();
      const shortName = user.split('@')[0].slice(0, 14);
      const loginLbl = document.getElementById('nav-login-label');
      if (loginLbl) loginLbl.textContent = `👤 ${shortName} (${role.split(' ')[0]})`;
      closeLoginModal();
      showToast(`🔐 Welcome back, ${shortName}! Logged in with ${role} privileges.`);
    }

    // Initialize on load
    window.addEventListener('DOMContentLoaded', () => {
      applyFilters();
      updateShortlistUI();
      initLocalityChart();
      calculateEMI();
      switchMainTab('home');
      renderHospitalityVenues();
      renderRequisitionsList();
      renderAdvertisementsList();
    });
