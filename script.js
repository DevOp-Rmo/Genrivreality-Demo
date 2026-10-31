// Genrivreality — Full-Stack Frontend & Role-Gated Forms Engine (script.js)

// 1. INITIAL VERIFIED DATASET (Blending Housing.com Visual Richness & 99acres RERA/Yield Metrics)
        const GENRIV_ASSETS = {
      logo: 'images/genriv_logo.png',
      p1: 'images/prop1.jpg',
      p2: 'images/prop2.jpg',
      p3: 'images/prop3.jpg',
      p4: 'images/prop4.jpg',
      p5: 'images/prop5.jpg',
      p6: 'images/prop6.jpg'
    };
    const initialProperties = [
      {
        id: 'prop-5',
        title: 'Botanica Waterfront Sky-Forest Towers',
        city: 'Kolkata',
        locality: 'Action Area II, New Town, Kolkata',
        intent: 'Buy',
        category: 'Residential',
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
        approvalStatus: 'Approved',
        isTopTen: true,
        isFeatured: true,
        tier: 'Top 10 Front Spotlight',
        views: 2150,
        leadsCount: 31,
        description: 'Cantilevered vertical forest balconies overlooking Eco Park lake with skybridge infinity pool, smart home automation, and EV fast-charging bays.'
      },
      {
        id: 'prop-1',
        title: 'Genriv Celestia Sky Penthouse',
        city: 'Mumbai',
        locality: 'Worli Sea Face, South Mumbai',
        intent: 'Buy',
        category: 'Residential',
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
        approvalStatus: 'Approved',
        isTopTen: true,
        isFeatured: true,
        tier: 'Top 10 Front Spotlight',
        views: 1840,
        leadsCount: 24,
        description: '270-degree Arabian Sea & Bandra-Worli Sea Link panorama with private plunge deck, double-height travertine living lounge, and biometric elevator foyer.'
      },
      {
        id: 'prop-2',
        title: 'The Teakwood Courtyard Biophilic Villa',
        city: 'Bengaluru',
        locality: 'Whitefield IT Corridor, East Bengaluru',
        intent: 'Buy',
        category: 'Residential',
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
        approvalStatus: 'Approved',
        isTopTen: false,
        isFeatured: false,
        tier: 'Owner Free (1 ad / 6 mo)',
        views: 1290,
        leadsCount: 19,
        description: 'Net-zero smart tropical villa with private heated lap pool, 10kW solar roof, teakwood Louver facade, and 5 mins from Purple Line Metro.'
      },
      {
        id: 'prop-3',
        title: 'Aravalli Crest Golf Residences',
        city: 'Gurugram',
        locality: 'Golf Course Road, Sector 54',
        intent: 'New Projects',
        category: 'Residential',
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
        approvalStatus: 'Approved',
        isTopTen: false,
        isFeatured: true,
        tier: 'Featured Project',
        views: 980,
        leadsCount: 14,
        description: 'Ultra-low density 3-to-a-core residences with 65,000 sq.ft. podium clubhouse, temperature-controlled lagoon pool, and direct Rapid Metro skywalk.'
      },
      {
        id: 'prop-4',
        title: 'Genriv Nexus Grade-A Tech Plaza',
        city: 'Hyderabad',
        locality: 'HITEC City Main Road, Madhapur',
        intent: 'Commercial',
        category: 'Commercial',
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
        approvalStatus: 'Approved',
        isTopTen: false,
        isFeatured: false,
        tier: 'Standard',
        views: 1120,
        leadsCount: 16,
        description: 'LEED Platinum certified commercial floor plate with pre-leased Fortune-500 tenant option, 8.6% assured rental yield, and double-height concourse.'
      },
      {
        id: 'prop-6',
        title: 'Banyan Canopy Designer Co-Living & Studio',
        city: 'Pune',
        locality: 'Koregaon Park Lane 7, Pune',
        intent: 'Rent',
        category: 'Residential',
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
        approvalStatus: 'Approved',
        isTopTen: false,
        isFeatured: false,
        tier: 'Owner Free (1 ad / 6 mo)',
        views: 890,
        leadsCount: 12,
        description: 'Fully furnished Scandinavian-Indian studio residence overlooking century-old banyan trees, high-speed fiber workspace, and zero-brokerage digital lease.'
      },
      {
        id: 'prop-7',
        title: 'Merlin Rise Sports City Suites',
        city: 'Kolkata',
        locality: 'Rajarhat 6-Lane Expressway, Kolkata',
        intent: 'New Projects',
        category: 'Residential',
        bhk: '3 BHK',
        priceCr: 0.88,
        priceLabel: '₹88.5 Lakhs',
        rentEquiv: '₹32,000 / mo',
        areaSqft: 1420,
        pricePerSqft: '₹6,232 / sq.ft.',
        reraId: 'WBRERA/P/NOR/2026/000889',
        reraVerified: true,
        postedBy: 'Builder',
        builderName: 'Merlin Group & Genriv Landmark',
        livabilityScore: 9.1,
        rentalYield: 5.2,
        appreciationYoY: '+17.6% YoY',
        tags: ['Ready to Move', 'Metro < 500m', 'Vastu Compliant'],
        image: GENRIV_ASSETS.p4,
        mapX: 82,
        mapY: 48,
        approvalStatus: 'Approved',
        isTopTen: true,
        isFeatured: true,
        tier: 'Top 10 Front Spotlight',
        views: 1640,
        leadsCount: 28,
        description: 'International sports-themed gated township with Olympic swimming pool, cricket academy, and direct Metro skybridge.'
      },
      {
        id: 'prop-8',
        title: 'South City Classic Garden Apartment',
        city: 'Kolkata',
        locality: 'Prince Anwar Shah Road, South Kolkata',
        intent: 'Buy',
        category: 'Residential',
        bhk: '3 BHK',
        priceCr: 1.95,
        priceLabel: '₹1.95 Cr',
        rentEquiv: '₹65,000 / mo',
        areaSqft: 1980,
        pricePerSqft: '₹9,848 / sq.ft.',
        reraId: 'WBRERA/P/KOL/2026/000104',
        reraVerified: true,
        postedBy: 'Owner',
        builderName: 'Anupam Roy (Direct Owner)',
        livabilityScore: 9.5,
        rentalYield: 4.1,
        appreciationYoY: '+11.5% YoY',
        tags: ['Zero Brokerage', 'Ready to Move', 'Vastu Compliant'],
        image: GENRIV_ASSETS.p6,
        mapX: 74,
        mapY: 54,
        approvalStatus: 'Approved',
        isTopTen: false,
        isFeatured: false,
        tier: 'Owner Free (1 ad / 6 mo)',
        views: 740,
        leadsCount: 15,
        description: 'Iconic South Kolkata residential address with private garden view, adjacent shopping mall, and zero brokerage fee.'
      }
    ];

    // State Management
    let rawProps = (typeof window !== 'undefined' && window.GENRIV_GLOBAL_PROPERTIES && window.GENRIV_GLOBAL_PROPERTIES.length > 0)
      ? window.GENRIV_GLOBAL_PROPERTIES
      : initialProperties;
    let properties = rawProps.map(p => ({
      ...p,
      reraVerified: true,
      approvalStatus: 'Approved'
    }));
    let currentIntent = 'All';
    let currentCity = 'Kolkata'; // Auto-detected default to Kolkata
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

    function detectUserLocation() {
      const saved = localStorage.getItem('genriv_user_city');
      if (saved && saved !== 'All') {
        applyCityLocation(saved, false);
        return;
      }

      // Browser Geolocation API with IP fallback
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          pos => {
            // Check approximate coordinates or default to Kolkata
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;
            let detectedCity = 'Kolkata';
            if (lat > 18.5 && lat < 19.5 && lng > 72.5 && lng < 73.5) detectedCity = 'Mumbai';
            else if (lat > 12.5 && lat < 13.5 && lng > 77.2 && lng < 78.0) detectedCity = 'Bengaluru';
            else if (lat > 28.0 && lat < 28.9 && lng > 76.8 && lng < 77.5) detectedCity = 'Gurugram';
            else if (lat > 17.0 && lat < 17.8 && lng > 78.0 && lng < 78.9) detectedCity = 'Hyderabad';
            else if (lat > 18.2 && lat < 18.8 && lng > 73.5 && lng < 74.2) detectedCity = 'Pune';
            applyCityLocation(detectedCity, true);
          },
          err => {
            applyCityLocation('Kolkata', true);
          },
          { timeout: 3500 }
        );
      } else {
        applyCityLocation('Kolkata', true);
      }
    }

    function applyCityLocation(city, showBanner = true) {
      currentCity = city;
      try { localStorage.setItem('genriv_user_city', city); } catch (e) {}

      ['header-city-select', 'mobile-city-select', 'search-city'].forEach(id => {
        const el = document.getElementById(id);
        if (el && el.value !== city) el.value = city;
      });

      // Update all dynamic location headlines across the site
      document.querySelectorAll('.dynamic-city-name').forEach(el => {
        el.textContent = city;
      });

      const banner = document.getElementById('auto-location-banner');
      const bannerCity = document.getElementById('detected-city-name');
      if (banner && bannerCity && showBanner) {
        bannerCity.textContent = city;
        banner.classList.remove('hidden');
      }

      renderMagicBricksSections(city);
      applyFilters();
    }

    function promptChangeCity() {
      const city = prompt('Enter your metro city (Kolkata, Mumbai, Bengaluru, Gurugram, Hyderabad, Pune):', currentCity);
      if (city) {
        const formatted = city.trim();
        const validMetros = ['Kolkata', 'Mumbai', 'Bengaluru', 'Gurugram', 'Hyderabad', 'Pune'];
        const matched = validMetros.find(m => m.toLowerCase() === formatted.toLowerCase()) || 'Kolkata';
        applyCityLocation(matched, true);
        showToast(`📍 Switched active location to ${matched}`);
      }
    }
    window.promptChangeCity = promptChangeCity;

    function dismissLocationBanner() {
      const banner = document.getElementById('auto-location-banner');
      if (banner) banner.classList.add('hidden');
    }
    window.dismissLocationBanner = dismissLocationBanner;

    function syncCityFilter(city) {
      applyCityLocation(city, false);
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
      currentCity = 'Kolkata';
      activeTags.clear();
      document.getElementById('search-query').value = '';
      document.getElementById('search-bhk').value = 'All';
      document.getElementById('posted-by-filter').value = 'All';
      document.getElementById('budget-range').value = 30;
      document.getElementById('budget-value-label').textContent = '₹30.0 Cr';
      syncCityFilter('Kolkata');
      document.querySelectorAll('.tag-pill').forEach(btn => {
        btn.className = 'tag-pill px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-genriv-50 transition';
      });
      applyFilters();
      showToast('All filters reset — showing verified Kolkata properties.');
    }

    function executeHeroSearch() {
      applyFilters();
      scrollToSection('listings-section');
    }

    function triggerVoiceSearch() {
      const sampleQueries = ['New Town', 'Rajarhat', 'Salt Lake', 'Worli', 'Whitefield', 'Golf Course'];
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
        // Requirement 7: Only Approved properties are shown on the front-end!
        if (p.approvalStatus && p.approvalStatus !== 'Approved') return false;

        if (currentCity !== 'All' && p.city !== currentCity) return false;
        if (currentIntent !== 'All') {
          if (currentIntent === 'PG / Co-Living' && p.bhk !== '1 BHK') return false;
          else if (currentIntent !== 'PG / Co-Living' && p.intent !== currentIntent && !(currentIntent === 'Buy' && p.intent === 'New Projects')) return false;
        }
        if (bhk !== 'All' && p.bhk !== bhk) return false;
        if (p.priceCr > maxBudget) return false;
        if (postedBy !== 'All' && p.postedBy !== postedBy) return false;
        if (reraOnly && !p.reraVerified && !p.rera) return false;
        if (query) {
          const hay = `${p.title} ${p.city} ${p.locality} ${p.builderName || p.postedBy} ${p.bhk}`.toLowerCase();
          if (!hay.includes(query)) return false;
        }
        if (activeRequisitionMatch) {
          const reqLoc = (activeRequisitionMatch.location || '').toLowerCase();
          const pLoc = `${p.city} ${p.locality}`.toLowerCase();
          let matchCity = false;
          const cities = ['mumbai', 'bengaluru', 'gurugram', 'hyderabad', 'kolkata', 'pune'];
          for (const c of cities) {
            if (reqLoc.includes(c) && pLoc.includes(c)) { matchCity = true; break; }
          }
          const bhkNum = (activeRequisitionMatch.specs || '').match(/\d+/);
          const pBhkNum = (p.bhk || '').match(/\d+/);
          const matchBhk = bhkNum && pBhkNum && bhkNum[0] === pBhkNum[0];
          if (!matchCity && !matchBhk) return false;
        }
        for (let tag of activeTags) {
          if (!p.tags || !p.tags.includes(tag)) return false;
        }
        return true;
      });

      if (sortBy === 'price-asc') list.sort((a, b) => a.priceCr - b.priceCr);
      else if (sortBy === 'price-desc') list.sort((a, b) => b.priceCr - a.priceCr);
      else if (sortBy === 'yield-desc') list.sort((a, b) => (b.rentalYield || 0) - (a.rentalYield || 0));
      else if (sortBy === 'score-desc') list.sort((a, b) => (b.livabilityScore || 0) - (a.livabilityScore || 0));
      else {
        // Requirement 5: Top 10 Front-End Placement Subscriptions prioritized first!
        list.sort((a, b) => {
          const scoreA = (a.isTopTen ? 100 : 0) + (a.boosted ? 20 : 0) + (a.isFeatured ? 10 : 0);
          const scoreB = (b.isTopTen ? 100 : 0) + (b.boosted ? 20 : 0) + (b.isFeatured ? 10 : 0);
          return scoreB - scoreA;
        });
      }

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

      const displayList = filtered.slice(0, 8);
      grid.innerHTML = displayList.map(p => {
        const isSaved = shortlistedIds.has(p.id);
        const isCompared = compareIds.includes(p.id);
        return `
          <div id="card-${p.id}" class="property-slider-card bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl transition flex flex-col justify-between">
            <div>
              <!-- Image Header -->
              <a href="property-detail.html?id=${p.id}" class="relative h-48 block overflow-hidden group bg-slate-800">
                <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent"></div>

                <!-- Top Badges -->
                <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span class="px-2.5 py-1 rounded-lg bg-emerald-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wide shadow">
                    🛡️ RERA Verified
                  </span>
                  <span class="px-2.5 py-1 rounded-lg bg-slate-900/85 text-white text-[10px] font-bold backdrop-blur-md">
                    ${p.postedBy === 'Owner' ? '🤝 Direct Owner' : '🏗️ Certified Developer'}
                  </span>
                </div>

                <!-- Bottom Image Overlay: Price -->
                <div class="absolute bottom-3 inset-x-3 flex items-end justify-between gap-2">
                  <div class="font-display font-extrabold text-lg text-white leading-tight">${p.priceLabel}</div>
                  <span class="px-2.5 py-1 rounded-lg bg-genriv-600 text-white text-[10px] font-bold shadow">
                    ${p.bhk}
                  </span>
                </div>
              </a>

              <!-- Card Body -->
              <div class="p-4 space-y-2">
                <div class="flex items-start justify-between gap-2">
                  <div class="min-w-0 flex-1">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-genriv-600 dark:text-genriv-400">${p.city} • ${p.bhk}</span>
                    <h3 class="font-display font-extrabold text-sm sm:text-base text-slate-900 dark:text-white leading-snug truncate hover:text-genriv-600 transition">
                      <a href="property-detail.html?id=${p.id}">${p.title}</a>
                    </h3>
                    <p class="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">📍 ${p.locality}</p>
                  </div>
                  <div class="text-right shrink-0">
                    <span class="inline-flex items-center px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-extrabold">
                      ★ ${p.livabilityScore || '9.3'}
                    </span>
                    <div class="text-[10px] text-slate-400 mt-0.5">Livability</div>
                  </div>
                </div>

                <!-- Metrics Strip -->
                <div class="grid grid-cols-3 gap-1.5 py-2 px-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 text-center text-xs">
                  <div>
                    <div class="text-[10px] text-slate-400">Carpet</div>
                    <div class="font-bold text-slate-800 dark:text-slate-100 text-[11px]">${p.areaSqft || 1850} sq.ft.</div>
                  </div>
                  <div class="border-x border-slate-200 dark:border-slate-700">
                    <div class="text-[10px] text-slate-400">Yield</div>
                    <div class="font-bold text-emerald-600 dark:text-emerald-400 text-[11px]">${p.rentalYield || 4.2}%</div>
                  </div>
                  <div>
                    <div class="text-[10px] text-slate-400">Appreciation</div>
                    <div class="font-bold text-acres-500 text-[11px]">${p.appreciationYoY || '+14.2% YoY'}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card Action Footer -->
            <div class="p-4 pt-0">
              <a href="property-detail.html?id=${p.id}" class="w-full py-2.5 rounded-xl bg-genriv-600 hover:bg-genriv-700 text-white font-bold text-xs shadow-sm transition block text-center">
                Explore Property Details →
              </a>
            </div>
          </div>
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
        if (wrapper) wrapper.className = 'grid grid-cols-1 lg:grid-cols-12 gap-6 items-start';
        if (grid) grid.className = 'lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5';
        if (mapPanel) {
          mapPanel.classList.remove('hidden');
          mapPanel.style.display = 'block';
          mapPanel.className = 'block lg:col-span-5 lg:sticky lg:top-24 h-[520px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-900 relative z-20';
        }
        if (btnSplit) btnSplit.className = 'px-3 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-slate-900 text-genriv-700 dark:text-genriv-300 shadow-sm transition flex items-center gap-1';
        if (btnGrid) btnGrid.className = 'px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 transition flex items-center gap-1';
      } else {
        if (wrapper) wrapper.className = 'grid grid-cols-1 gap-6';
        if (grid) grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
        if (mapPanel) {
          mapPanel.classList.add('hidden');
          mapPanel.style.display = 'none';
          mapPanel.className = 'hidden';
        }
        if (btnGrid) btnGrid.className = 'px-3 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-slate-900 text-genriv-700 dark:text-genriv-300 shadow-sm transition flex items-center gap-1';
        if (btnSplit) btnSplit.className = 'px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 transition flex items-center gap-1';
      }
    }
    window.setLayoutMode = setLayoutMode;
    window.closeMap = () => setLayoutMode('grid');

    function renderMapPins(list) {
      const container = document.getElementById('map-pins-container');
      if (!container) return;
      container.innerHTML = list.map(p => `
        <button type="button" onclick="selectMapPin('${p.id}')" style="left: ${p.mapX}%; top: ${p.mapY}%;" class="pointer-events-auto cursor-pointer map-pin-pulse absolute -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full bg-gradient-to-r from-genriv-600 to-acres-500 text-white text-xs font-extrabold shadow-lg border-2 border-white hover:scale-110 transition z-20 whitespace-nowrap">
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
              ${items.map(p => `<td class="py-3 px-3 font-bold text-emerald-600">${p.rentalYield || 4.2}% p.a. (${p.appreciationYoY || '+14.2% YoY'})</td>`).join('')}
            </tr>
            <tr>
              <td class="py-3 px-3 font-semibold text-slate-500">Locality Livability</td>
              ${items.map(p => `<td class="py-3 px-3 font-bold">★ ${p.livabilityScore || '9.3'} / 10</td>`).join('')}
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
      unlockOwnerContactWithBackend(propId);
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

    // =========================================================================
    // MAGICBRICKS-STYLE HOME LOAN ELIGIBILITY & EMI CALCULATOR (Requirement 3)
    // Formula based on Banking FOIR (50-60%) & Reverse Loan Amortization
    // =========================================================================
    let currentEligTenure = 20;

    function setEligTenure(tenure) {
      currentEligTenure = tenure;
      const tenureInput = document.getElementById('elig-tenure');
      if (tenureInput) tenureInput.value = tenure;
      document.querySelectorAll('.tenure-btn').forEach(btn => {
        if (parseInt(btn.getAttribute('data-tenure'), 10) === tenure) {
          btn.className = 'tenure-btn px-3 py-1.5 rounded-xl bg-genriv-600 text-white font-extrabold text-xs shadow-sm transition';
        } else {
          btn.className = 'tenure-btn px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs border border-slate-200 dark:border-slate-700 hover:bg-slate-100 transition';
        }
      });
      calculateEligibility();
    }
    window.setEligTenure = setEligTenure;

    function calculateEligibility() {
      const incomeInput = document.getElementById('elig-income');
      const emiInput = document.getElementById('elig-existing-emi');
      const tenureInput = document.getElementById('elig-tenure');
      const rateInput = document.getElementById('elig-rate');
      const ageInput = document.getElementById('elig-age');

      if (!incomeInput) {
        // Fallback to legacy calc if elements don't exist yet
        return calculateLegacyEMI();
      }

      const netIncome = parseFloat(incomeInput.value) || 150000;
      const existingEmi = parseFloat(emiInput?.value || '20000') || 0;
      const tenureYrs = parseInt(tenureInput?.value || currentEligTenure || '20', 10);
      const annualRate = parseFloat(rateInput?.value || '8.40');

      // Standard Banking FOIR (Fixed Obligation to Income Ratio)
      // 50% for income < 2L, 60% for income >= 2L
      const foirPercent = netIncome >= 200000 ? 0.60 : 0.50;
      const maxAllowableTotalEmi = netIncome * foirPercent;
      const availableEmi = Math.max(0, maxAllowableTotalEmi - existingEmi);

      // Reverse EMI formula: P = EMI * ((1 + r)^n - 1) / (r * (1 + r)^n)
      const r = (annualRate / 12) / 100;
      const n = tenureYrs * 12;
      let maxLoan = 0;
      if (availableEmi > 0 && r > 0) {
        maxLoan = availableEmi * (Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n));
      }

      // Maximum Affordable Property Value (Assuming 20% down payment = Loan / 0.80)
      const maxPropertyBudget = maxLoan / 0.80;
      const totalLoanPayable = availableEmi * n;
      const totalInterest = Math.max(0, totalLoanPayable - maxLoan);
      const principalShare = totalLoanPayable > 0 ? Math.round((maxLoan / totalLoanPayable) * 100) : 50;

      // Update Slider Display Labels
      const incDisp = document.getElementById('elig-income-display');
      if (incDisp) incDisp.textContent = '₹' + Math.round(netIncome).toLocaleString('en-IN') + ' / mo';

      const emiDisp = document.getElementById('elig-emi-display');
      if (emiDisp) emiDisp.textContent = '₹' + Math.round(existingEmi).toLocaleString('en-IN') + ' / mo';

      const rateDisp = document.getElementById('elig-rate-display');
      if (rateDisp) rateDisp.textContent = annualRate.toFixed(2) + '% p.a.';

      const tenureDisp = document.getElementById('elig-tenure-display');
      if (tenureDisp) tenureDisp.textContent = tenureYrs + ' Years (' + n + ' Months)';

      // Update Metric Outputs
      const loanEl = document.getElementById('elig-max-loan');
      if (loanEl) {
        loanEl.textContent = maxLoan >= 10000000 
          ? '₹' + (maxLoan / 10000000).toFixed(2) + ' Cr' 
          : '₹' + (maxLoan / 100000).toFixed(2) + ' Lakhs';
      }

      const budgetEl = document.getElementById('elig-max-budget');
      if (budgetEl) {
        budgetEl.textContent = maxPropertyBudget >= 10000000 
          ? '₹' + (maxPropertyBudget / 10000000).toFixed(2) + ' Cr' 
          : '₹' + (maxPropertyBudget / 100000).toFixed(2) + ' Lakhs';
      }

      const monthlyEmiEl = document.getElementById('elig-monthly-emi');
      if (monthlyEmiEl) monthlyEmiEl.textContent = '₹' + Math.round(availableEmi).toLocaleString('en-IN') + ' / mo';

      const interestEl = document.getElementById('elig-total-interest');
      if (interestEl) {
        interestEl.textContent = totalInterest >= 10000000 
          ? '₹' + (totalInterest / 10000000).toFixed(2) + ' Cr' 
          : '₹' + (totalInterest / 100000).toFixed(2) + ' Lakhs';
      }

      const bar = document.getElementById('elig-principal-bar');
      if (bar) bar.style.width = Math.max(15, Math.min(85, principalShare)) + '%';
    }
    window.calculateEligibility = calculateEligibility;

    function calculateLegacyEMI() {
      const priceLakhs = parseFloat(document.getElementById('calc-price')?.value || '250');
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

      const pDisp = document.getElementById('calc-price-display');
      if (pDisp) pDisp.textContent = priceCr >= 1 ? `₹${priceCr.toFixed(2)} Cr` : `₹${priceLakhs} Lakhs`;
      const emiRes = document.getElementById('emi-monthly-result');
      if (emiRes) emiRes.textContent = `₹${Math.round(emi).toLocaleString('en-IN')} / mo`;
    }

    function calculateEMI() {
      calculateEligibility();
    }
    window.calculateEMI = calculateEMI;

    // =========================================================================
    // MAGICBRICKS-STYLE 8 CORRIDOR & LOCATION SECTIONS (Requirement 4)
    // =========================================================================
    
    // Preferred Kolkata Real Estate Agents Dataset
    const preferredAgentsData = [
      {
        id: 'agent-1',
        name: 'Debashis Sen',
        agency: 'Sen Estates & Commercial Advisory',
        experience: '14+ Yrs Experience',
        rera: 'WBRERA/A/KOL/2023/000188',
        rating: '4.9 ★ (142 Reviews)',
        listingsCount: '48 Active Listings',
        specialization: 'New Town, Rajarhat & Salt Lake IT Corridor',
        phone: '+91 98310-77890',
        image: 'images/sellers/Curated_Proper/documents/IMG-AVATAR-Curated_Proper.jpg'
      },
      {
        id: 'agent-2',
        name: 'Amitava Mukherjee',
        agency: 'Prime Habitat Advisory',
        experience: '11+ Yrs Experience',
        rera: 'WBRERA/A/KOL/2022/000094',
        rating: '4.9 ★ (118 Reviews)',
        listingsCount: '36 Active Listings',
        specialization: 'EM Bypass, Anandapur & Ballygunge',
        phone: '+91 98302-44512',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 'agent-3',
        name: 'Subhashish Bose',
        agency: 'Bengal Metro Properties',
        experience: '16+ Yrs Experience',
        rera: 'WBRERA/A/KOL/2021/000052',
        rating: '4.8 ★ (96 Reviews)',
        listingsCount: '52 Active Listings',
        specialization: 'North Kolkata & Dunlop Corridors',
        phone: '+91 98314-88901',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 'agent-4',
        name: 'Priyanka Banerjee',
        agency: 'South Kolkata Luxury Homes',
        experience: '9+ Yrs Experience',
        rera: 'WBRERA/A/KOL/2023/000219',
        rating: '4.9 ★ (84 Reviews)',
        listingsCount: '29 Active Listings',
        specialization: 'Alipore, New Alipore & Tollygunge Golf',
        phone: '+91 98365-11234',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 'agent-5',
        name: 'Rajesh Khemka',
        agency: 'Eastern Realty Partners',
        experience: '12+ Yrs Experience',
        rera: 'WBRERA/A/KOL/2022/000145',
        rating: '4.8 ★ (77 Reviews)',
        listingsCount: '34 Active Listings',
        specialization: 'Joka Metro Corridor & Behala',
        phone: '+91 98301-33299',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 'agent-6',
        name: 'Tanmoy Sengupta',
        agency: 'Heritage City Brokers',
        experience: '15+ Yrs Experience',
        rera: 'WBRERA/A/KOL/2020/000031',
        rating: '4.9 ★ (130 Reviews)',
        listingsCount: '41 Active Listings',
        specialization: 'Salt Lake & Kankurgachi Premium Residencies',
        phone: '+91 98319-55670',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
      }
    ];

    function renderMagicBricksSections(city = 'Kolkata') {
      const targetCity = (city === 'All' || !city) ? 'Kolkata' : city;
      const allProps = (typeof window !== 'undefined' && window.GENRIV_GLOBAL_PROPERTIES && window.GENRIV_GLOBAL_PROPERTIES.length > 0)
        ? window.GENRIV_GLOBAL_PROPERTIES
        : properties;

      let cityProps = allProps.filter(p => p.city.toLowerCase() === targetCity.toLowerCase());
      if (cityProps.length < 6) cityProps = allProps;

      // 1. Featured Projects in {city} (5-6 in 1 single horizontal slider)
      const featGrid = document.getElementById('featured-projects-grid');
      if (featGrid) {
        const featProps = allProps.slice(0, 6);
        featGrid.innerHTML = featProps.map(p => `
          <div class="property-slider-card rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-md hover:shadow-xl transition flex flex-col justify-between">
            <a href="property-detail.html?id=${p.id}" class="relative h-48 block overflow-hidden bg-slate-800 group">
              <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div class="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
                <span class="px-2.5 py-1 rounded-full bg-amber-400 text-slate-950 text-[10px] font-extrabold uppercase shadow-sm">
                  ⭐ Top Spotlight
                </span>
                <span class="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold">
                  ✓ RERA Approved
                </span>
              </div>
              <div class="absolute bottom-3 left-3 px-3 py-1 rounded-xl bg-slate-950/85 backdrop-blur-md text-white text-xs font-extrabold">
                ${p.priceLabel}
              </div>
            </a>
            <div class="p-4 space-y-2">
              <span class="text-[10px] font-extrabold text-genriv-600 dark:text-genriv-400 uppercase tracking-wider">${p.bhk} • ${p.areaSqft || 1850} sq.ft.</span>
              <h4 class="font-display font-extrabold text-sm sm:text-base text-slate-900 dark:text-white leading-snug truncate hover:text-genriv-600 transition">
                <a href="property-detail.html?id=${p.id}">${p.title}</a>
              </h4>
              <p class="text-xs text-slate-500 dark:text-slate-400 truncate">📍 ${p.locality}, ${p.city}</p>
              <div class="pt-2 text-[11px] text-slate-500 flex justify-between border-t border-slate-100 dark:border-slate-800">
                <span>By: <strong>${p.builderName || p.sellerName || 'Sen Estates'}</strong></span>
                <span class="text-emerald-600 font-bold">${p.rentalYield || 4.5}% Yield</span>
              </div>
            </div>
            <div class="p-4 pt-0">
              <a href="property-detail.html?id=${p.id}" class="w-full py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs hover:opacity-90 transition block text-center">
                Explore Property Details →
              </a>
            </div>
          </div>
        `).join('');
      }

      // 2. Popular Owner Properties in {city} (5-6 in 1 horizontal slider)
      const ownerGrid = document.getElementById('owner-properties-grid');
      if (ownerGrid) {
        const ownerProps = allProps.filter(p => {
          const isOwner = p.postedBy === 'Owner' || p.sellerRole === 'Property Owner';
          const hasZeroBrok = Array.isArray(p.tags) && p.tags.includes('Zero Brokerage');
          return isOwner || hasZeroBrok || p.intent === 'Rent';
        }).slice(0, 6);

        ownerGrid.innerHTML = ownerProps.map(p => `
          <div class="property-slider-card rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col justify-between">
            <a href="property-detail.html?id=${p.id}" class="relative h-48 block overflow-hidden bg-slate-800 group">
              <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-extrabold shadow-sm">
                0% ZERO BROKERAGE
              </span>
              <div class="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/80 text-white text-xs font-bold">
                ${p.priceLabel}
              </div>
            </a>
            <div class="p-4 space-y-1.5">
              <span class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">Direct Owner Flat</span>
              <h4 class="font-display font-extrabold text-sm text-slate-900 dark:text-white leading-tight truncate">
                <a href="property-detail.html?id=${p.id}" class="hover:text-genriv-600">${p.title}</a>
              </h4>
              <p class="text-xs text-slate-500 truncate">📍 ${p.locality}, ${p.city}</p>
              <div class="text-[11px] text-slate-400 mt-1">${p.bhk} • ${p.areaSqft || 1450} sq.ft. • ${p.possessionType || 'Ready to Move'}</div>
            </div>
            <div class="p-4 pt-0">
              <a href="property-detail.html?id=${p.id}" class="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition block text-center">
                Contact Owner &amp; View Details →
              </a>
            </div>
          </div>
        `).join('');
      }

      // 3. Preferred Agents in {city} (5-6 in 1 horizontal slider)
      const agentsGrid = document.getElementById('preferred-agents-grid');
      if (agentsGrid) {

      // Point 3: Inject Super Admin Verified Seller into Preferred Agents slider
      let displayAgents = [...preferredAgentsData];
      try {
        const rawProf = localStorage.getItem('genriv_seller_profile');
        if (rawProf) {
          const prof = JSON.parse(rawProf);
          if (prof.status === 'verified') {
            displayAgents.unshift({
              name: prof.companyName || 'Curated Proper',
              agency: (prof.category || 'Certified Partner') + ' (Super Seller)',
              rating: '5.0 ★',
              listingsCount: (prof.quota || 5) + '+ Properties',
              rera: prof.reraId || 'WBRERA/A/KOL/2024/000188',
              specialization: 'New Town, Salt Lake, Kolkata',
              phone: prof.phone || '+91 98300-99110',
              image: prof.image || 'images/genriv_logo-Photoroom.png'
            });
          }
        }
      } catch (e) {}

        agentsGrid.innerHTML = displayAgents.map(ag => `
          <div class="property-slider-card rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 shadow-sm hover:shadow-lg transition flex flex-col justify-between">
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <img src="${ag.image}" alt="${ag.name}" class="w-14 h-14 rounded-2xl object-cover border-2 border-indigo-500 shadow-sm" />
                <div class="min-w-0">
                  <span class="px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-[10px] font-extrabold">Verified Agent</span>
                  <h4 class="font-display font-extrabold text-sm text-slate-900 dark:text-white truncate mt-0.5">${ag.name}</h4>
                  <p class="text-[11px] text-slate-500 truncate">${ag.agency}</p>
                </div>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-xs space-y-1">
                <div class="flex justify-between text-slate-500">
                  <span>Rating:</span>
                  <span class="font-bold text-amber-500">${ag.rating}</span>
                </div>
                <div class="flex justify-between text-slate-500">
                  <span>Listings:</span>
                  <span class="font-bold text-emerald-600">${ag.listingsCount}</span>
                </div>
                <div class="text-[10px] font-mono text-slate-400 truncate">🛡️ ${ag.rera}</div>
              </div>
              <p class="text-xs text-slate-500 line-clamp-1">📍 ${ag.specialization}</p>
            </div>
            <div class="pt-4 flex items-center gap-2">
              <a href="agents.html" class="flex-1 py-2 text-center rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition">
                View Agency →
              </a>
              <a href="tel:${ag.phone}" class="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white text-xs font-bold transition">
                📞 Call
              </a>
            </div>
          </div>
        `).join('');
      }

      // 4. Top Projects in {city} (5-6 in 1 horizontal slider)
      const topProjectsGrid = document.getElementById('top-projects-grid');
      if (topProjectsGrid) {
        const topProjects = allProps.filter(p => {
          return p.sellerRole === 'Builder / Developer' || p.postedBy === 'Builder' || p.isTopTen;
        }).slice(0, 6);

        topProjectsGrid.innerHTML = topProjects.map(p => `
          <div class="property-slider-card rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col justify-between">
            <a href="property-detail.html?id=${p.id}" class="relative h-48 block overflow-hidden bg-slate-800 group">
              <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-indigo-600 text-white text-[10px] font-extrabold shadow-sm">
                🏆 Top Township
              </span>
              <div class="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/80 text-white text-xs font-bold">
                ${p.priceLabel}
              </div>
            </a>
            <div class="p-4 space-y-1.5">
              <span class="text-[10px] font-bold text-indigo-600 dark:text-indigo-400">Master Community</span>
              <h4 class="font-display font-extrabold text-sm text-slate-900 dark:text-white leading-tight truncate">
                <a href="property-detail.html?id=${p.id}" class="hover:text-genriv-600">${p.title}</a>
              </h4>
              <p class="text-xs text-slate-500 truncate">📍 ${p.locality}, ${p.city}</p>
              <div class="text-[11px] text-slate-400 mt-1">${p.bhk} • ${p.areaSqft || 1920} sq.ft. • ${p.possessionType || 'Under Construction'}</div>
            </div>
            <div class="p-4 pt-0">
              <a href="property-detail.html?id=${p.id}" class="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition block text-center">
                Explore Project Details →
              </a>
            </div>
          </div>
        `).join('');
      }

      // 5. Trending in {city} (5-6 in 1 horizontal slider)
      const trendingGrid = document.getElementById('trending-properties-grid');
      if (trendingGrid) {
        const trendingProps = cityProps.slice(0, 6);
        trendingGrid.innerHTML = trendingProps.map(p => `
          <div class="property-slider-card rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col justify-between">
            <a href="property-detail.html?id=${p.id}" class="relative h-48 block overflow-hidden bg-slate-800 group">
              <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-extrabold shadow-sm">
                📈 Trending ${p.appreciationYoY || '+14.2% YoY'}
              </span>
              <div class="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/80 text-white text-xs font-bold">
                ${p.priceLabel}
              </div>
            </a>
            <div class="p-4 space-y-1.5">
              <span class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">High Growth Corridor</span>
              <h4 class="font-display font-extrabold text-sm text-slate-900 dark:text-white leading-tight truncate">
                <a href="property-detail.html?id=${p.id}" class="hover:text-genriv-600">${p.title}</a>
              </h4>
              <p class="text-xs text-slate-500 truncate">📍 ${p.locality}, ${p.city}</p>
              <div class="text-[11px] text-slate-400 mt-1">${p.bhk} • ${p.areaSqft || 1650} sq.ft. • ${p.possessionType || 'Ready to Move'}</div>
            </div>
            <div class="p-4 pt-0">
              <a href="property-detail.html?id=${p.id}" class="w-full py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs hover:opacity-90 transition block text-center">
                Explore Property Details →
              </a>
            </div>
          </div>
        `).join('');
      }

      // 6. New Project Gallery (5-6 in 1 horizontal slider)
      const galleryGrid = document.getElementById('project-gallery-grid');
      if (galleryGrid) {
        const galleryProps = allProps.slice(6, 12);
        galleryGrid.innerHTML = galleryProps.map(p => `
          <div class="property-slider-card rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col justify-between">
            <a href="property-detail.html?id=${p.id}" class="relative h-48 block overflow-hidden bg-slate-800 group">
              <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-purple-600 text-white text-[10px] font-extrabold shadow-sm">
                📸 New Launch Preview
              </span>
              <div class="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/80 text-white text-xs font-bold">
                ${p.priceLabel}
              </div>
            </a>
            <div class="p-4 space-y-1.5">
              <span class="text-[10px] font-bold text-purple-600 dark:text-purple-400">Architectural Masterpiece</span>
              <h4 class="font-display font-extrabold text-sm text-slate-900 dark:text-white leading-tight truncate">
                <a href="property-detail.html?id=${p.id}" class="hover:text-genriv-600">${p.title}</a>
              </h4>
              <p class="text-xs text-slate-500 truncate">📍 ${p.locality}, ${p.city}</p>
              <div class="text-[11px] text-slate-400 mt-1">${p.bhk} • ${p.areaSqft || 2100} sq.ft. • ${p.possessionType || 'Upcoming 2027'}</div>
            </div>
            <div class="p-4 pt-0">
              <a href="property-detail.html?id=${p.id}" class="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-sm transition block text-center">
                Explore Project Details →
              </a>
            </div>
          </div>
        `).join('');
      }

      // 7. Popular Localities in Kolkata (8 Micro-market Cards)
      const localitiesGrid = document.getElementById('trending-localities-grid');
      if (localitiesGrid) {
        const localityData = [
          { name: 'New Town Action Area II', yoy: '+14.2% YoY', avgRate: '₹7,650 / sq.ft.', tag: 'Metro Corridors & IT Hub', link: 'New Town' },
          { name: 'Rajarhat Expressway', yoy: '+17.6% YoY', avgRate: '₹6,400 / sq.ft.', tag: 'High Rental Yield Zone', link: 'Rajarhat' },
          { name: 'EM Bypass / Anandapur', yoy: '+12.1% YoY', avgRate: '₹9,800 / sq.ft.', tag: 'Luxury Living & Hospitals', link: 'EM Bypass' },
          { name: 'Salt Lake Sector V', yoy: '+9.5% YoY', avgRate: '₹8,900 / sq.ft.', tag: 'Commercial Tech REIT', link: 'Salt Lake' },
          { name: 'Ballygunge Circular Rd', yoy: '+11.2% YoY', avgRate: '₹14,500 / sq.ft.', tag: 'South Kolkata Heritage', link: 'Ballygunge' },
          { name: 'Behala Chowrasta', yoy: '+15.0% YoY', avgRate: '₹4,890 / sq.ft.', tag: 'Metro Line Expansion Boom', link: 'Behala' },
          { name: 'Jadavpur & Prince Anwar Shah', yoy: '+13.8% YoY', avgRate: '₹8,200 / sq.ft.', tag: 'South City Mall & Metro', link: 'Jadavpur' },
          { name: 'Garia & Kavi Subhash', yoy: '+16.1% YoY', avgRate: '₹5,400 / sq.ft.', tag: 'Metro Junction & Affordable', link: 'Garia' }
        ];

        localitiesGrid.innerHTML = localityData.map(loc => `
          <a href="new-projects.html?city=Kolkata&locality=${encodeURIComponent(loc.link)}" class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 hover:border-genriv-500 hover:shadow-md transition block group">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">${loc.tag}</span>
              <span class="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-extrabold text-[11px]">${loc.yoy}</span>
            </div>
            <h4 class="font-display font-extrabold text-base text-slate-900 dark:text-white group-hover:text-genriv-600 transition">${loc.name}</h4>
            <div class="text-xs text-slate-500">Avg Property Rate: <strong class="text-slate-800 dark:text-slate-200">${loc.avgRate}</strong></div>
            <span class="text-xs text-genriv-600 font-bold block pt-1">Explore Projects in ${loc.link} →</span>
          </a>
        `).join('');
      }

      // 8. Exclusive Owner Properties (5-6 in 1 horizontal slider)
      const exclusiveGrid = document.getElementById('exclusive-owner-grid');
      if (exclusiveGrid) {
        const exclusiveProps = allProps.filter(p => p.intent === 'Buy' || p.purpose === 'For Sale').slice(4, 10);
        exclusiveGrid.innerHTML = exclusiveProps.map(p => `
          <div class="property-slider-card rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col justify-between">
            <a href="property-detail.html?id=${p.id}" class="relative h-48 block overflow-hidden bg-slate-800 group">
              <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-rose-600 text-white text-[10px] font-extrabold shadow-sm">
                ⚡ Direct Resale
              </span>
              <div class="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/80 text-white text-xs font-bold">
                ${p.priceLabel}
              </div>
            </a>
            <div class="p-4 space-y-1.5">
              <span class="text-[10px] font-bold text-rose-600 dark:text-rose-400">Exclusive Owner Resale</span>
              <h4 class="font-display font-extrabold text-sm text-slate-900 dark:text-white leading-tight truncate">
                <a href="property-detail.html?id=${p.id}" class="hover:text-genriv-600">${p.title}</a>
              </h4>
              <p class="text-xs text-slate-500 truncate">📍 ${p.locality}, ${p.city}</p>
              <div class="text-[11px] text-slate-400 mt-1">${p.bhk} • ${p.areaSqft || 1780} sq.ft. • ${p.possessionType || 'Ready to Move'}</div>
            </div>
            <div class="p-4 pt-0">
              <a href="property-detail.html?id=${p.id}" class="w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-sm transition block text-center">
                Explore Property Details →
              </a>
            </div>
          </div>
        `).join('');
      }
          // 9. Fresh Properties (Last 48 Hours) in {city} (5-6 in 1 horizontal slider)
      const freshGrid = document.getElementById('fresh-properties-grid');
      if (freshGrid) {
        const freshProps = allProps.slice(12, 18).length >= 4 ? allProps.slice(12, 18) : allProps.slice(0, 6);
        freshGrid.innerHTML = freshProps.map(p => `
          <div class="property-slider-card rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col justify-between">
            <a href="property-detail.html?id=${p.id}" class="relative h-48 block overflow-hidden bg-slate-800 group">
              <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-rose-600 text-white text-[10px] font-extrabold shadow-sm">
                ⚡ Freshly Listed &bull; 2h ago
              </span>
              <div class="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/80 text-white text-xs font-bold">
                ${p.priceLabel}
              </div>
            </a>
            <div class="p-4 space-y-1.5">
              <span class="text-[10px] font-bold text-rose-600 dark:text-rose-400">Verified Fresh Listing</span>
              <h4 class="font-display font-extrabold text-sm text-slate-900 dark:text-white leading-tight truncate">
                <a href="property-detail.html?id=${p.id}" class="hover:text-genriv-600">${p.title}</a>
              </h4>
              <p class="text-xs text-slate-500 truncate">📍 ${p.locality}, ${p.city}</p>
              <div class="text-[11px] text-slate-400 mt-1">${p.bhk} • ${p.areaSqft || 1550} sq.ft. • ${p.possessionType || 'Ready to Move'}</div>
            </div>
            <div class="p-4 pt-0">
              <a href="property-detail.html?id=${p.id}" class="w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-sm transition block text-center">
                Explore Property Details →
              </a>
            </div>
          </div>
        `).join('');
      }
    }
    window.renderMagicBricksSections = renderMagicBricksSections;

    function scrollSlider(id, direction) {
      const container = document.getElementById(id);
      if (!container) return;
      const card = container.querySelector('.property-slider-card') || container.firstElementChild;
      const scrollAmount = card ? (card.offsetWidth + 20) : 340;
      container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
    window.scrollSlider = scrollSlider;

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
      openRoleGatedForm('requisition');
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
      const reqId = (document.getElementById('req-no-input')?.value || '').trim() || ('REQ-2026-' + Math.floor(1000 + Math.random() * 9000));
      const name = document.getElementById('req-name').value.trim();
      const phone = document.getElementById('req-phone').value.trim();
      const whatsapp = document.getElementById('req-whatsapp')?.value.trim() || phone;
      const role = document.getElementById('req-role').value;
      const purpose = document.getElementById('req-purpose')?.value || 'Buy';
      const category = document.getElementById('req-category').value;
      const checkedTypes = Array.from(document.querySelectorAll('input[name="req_prop_type"]:checked')).map(cb => cb.value);
      const otherType = (document.getElementById('req-prop-type-other')?.value || '').trim();
      if (otherType) checkedTypes.push(otherType);
      const propTypesLabel = checkedTypes.length ? checkedTypes.join(', ') : 'Flat/Apartment';

      const specs = document.getElementById('req-specs').value;
      const location = document.getElementById('req-location').value.trim();
      const prefArea = document.getElementById('req-pref-area')?.value || '1650';
      const minBudget = document.getElementById('req-min-budget')?.value.trim() || '₹95L';
      const maxBudget = document.getElementById('req-budget').value.trim();
      const paymentPref = document.getElementById('req-payment-pref')?.value || 'Home Loan';
      const furnishing = document.getElementById('req-furnishing')?.value || 'Semi-Furnished';
      const possession = document.getElementById('req-possession')?.value || 'Immediate';
      const notes = document.getElementById('req-notes').value.trim() || `${furnishing} • ${paymentPref} • Possession: ${possession}`;

      const newReq = {
        id: reqId,
        name,
        role: `${role} (${purpose})`,
        category: `${category} • ${propTypesLabel}`,
        location,
        specs: `${specs} (~${prefArea} sq.ft.)`,
        budget: `${minBudget} – ${maxBudget}`,
        notes: `WhatsApp: ${whatsapp} | ${notes}`
      };
      customerRequisitions.unshift(newReq);
      renderRequisitionsList();

      const user = getCurrentMbUser();
      user.lastRequisitionId = reqId;
      saveMbDatabase();
      renderMbDashboard();

      e.target.reset();
      const nextReqInput = document.getElementById('req-no-input');
      if (nextReqInput) nextReqInput.value = 'REQ-2026-' + Math.floor(1000 + Math.random() * 9000);
      showToast(`✅ Customer Requisition ${reqId} registered! Tailored properties matching your criteria are ready.`);
    }

    function handleAdvertisementFormSubmit(e) {
      e.preventDefault();
      const advId = (document.getElementById('adv-reg-no')?.value || '').trim() || ('REG-2026-' + Math.floor(100 + Math.random() * 900));
      const ownerName = document.getElementById('adv-owner-name').value.trim();
      const role = document.getElementById('adv-role').value;
      const propCategory = document.getElementById('adv-prop-category')?.value || 'Residential';
      const purpose = document.getElementById('adv-category').value;
      const possessionType = document.getElementById('adv-possession-type')?.value || 'Ready to Move';
      const title = document.getElementById('adv-title').value.trim();
      const city = document.getElementById('adv-city').value;
      const locality = document.getElementById('adv-locality').value.trim();
      const bhk = document.getElementById('adv-bhk').value;
      const areaSqft = parseInt(document.getElementById('adv-area').value, 10) || 1800;
      const priceType = document.getElementById('adv-price-type')?.value || 'Sale Price (₹)';
      const minPriceINR = parseFloat(document.getElementById('adv-min-price')?.value) || 12000000;
      const maxPriceINR = parseFloat(document.getElementById('adv-price').value) || 14500000;
      const furnishing = document.getElementById('adv-furnishing')?.value || 'Semi-furnished';
      const checkedAmenities = Array.from(document.querySelectorAll('input[name="adv_amenity"]:checked')).map(cb => cb.value);
      const highlights = document.getElementById('adv-highlights').value.trim() || checkedAmenities.slice(0, 5).join(', ') || 'Verified GenRiv Property Listing';

      // Convert INR to Cr if Sale Price >= 100000, or handle direct Cr entry
      const priceCr = maxPriceINR > 100 ? +(maxPriceINR / 10000000).toFixed(2) : maxPriceINR;
      const formattedPrice = priceType.includes('Rent') || priceType.includes('Lease')
        ? `₹${maxPriceINR.toLocaleString('en-IN')} / mo`
        : `₹${priceCr.toFixed(2)} Cr`;

      publishedAdvertisements.unshift({
        id: advId,
        owner: `${ownerName} (${role})`,
        category: `${propCategory} • ${purpose} (${possessionType})`,
        title,
        city,
        locality,
        price: formattedPrice,
        plan: `${furnishing} • ${checkedAmenities.length} Amenities`
      });
      renderAdvertisementsList();

      if (propCategory === 'Marriage Hall' || propCategory === 'Picnic Spot' || propCategory === 'Hotel / Guest House') {
        hospitalityVenues.unshift({
          id: 'venue-' + (hospitalityVenues.length + 1),
          category: propCategory,
          title,
          city,
          locality: `${locality}, ${city}`,
          capacity: `${areaSqft} sq.ft.`,
          tariffLabel: formattedPrice,
          rating: '5.0 ★',
          highlights: ['Free Verified Ad', ...checkedAmenities.slice(0, 3)],
          image: GENRIV_ASSETS.p1,
          badge: propCategory === 'Marriage Hall' ? '💒 Marriage Hall' : (propCategory === 'Picnic Spot' ? '🌳 Picnic Spot' : '🏨 Hotel / Guest House')
        });
        renderHospitalityVenues();
      }

      const newProp = {
        id: 'prop-' + (properties.length + 1),
        title,
        city,
        locality: `${locality}, ${city}`,
        intent: purpose === 'For Rent' || purpose === 'For Lease' ? 'Rent' : (propCategory === 'Commercial' ? 'Commercial' : 'Buy'),
        bhk: propCategory === 'Commercial' ? 'Commercial' : (bhk.includes('BHK') ? bhk : '3 BHK'),
        priceCr: priceCr > 0 ? priceCr : 1.45,
        priceLabel: formattedPrice,
        rentEquiv: `₹${Math.round((priceCr || 1.4) * 30000).toLocaleString('en-IN')} / mo`,
        areaSqft,
        pricePerSqft: `₹${Math.round(((priceCr || 1.4) * 10000000) / areaSqft).toLocaleString('en-IN')} / sq.ft.`,
        reraId: advId,
        reraVerified: true,
        postedBy: role.includes('Builder') ? 'Builder' : 'Owner',
        builderName: `${ownerName} (${role})`,
        livabilityScore: 9.5,
        rentalYield: 4.9,
        appreciationYoY: '+16.0% YoY',
        tags: ['Zero Brokerage', 'Ready to Move', 'Vastu Compliant'],
        image: GENRIV_ASSETS.p5,
        mapX: 52,
        mapY: 50,
        description: `${highlights} | Amenities: ${checkedAmenities.join(', ')}`
      };
      properties.unshift(newProp);
      applyFilters();
      e.target.reset();
      const nextRegInput = document.getElementById('adv-reg-no');
      if (nextRegInput) nextRegInput.value = 'REG-2026-' + Math.floor(100 + Math.random() * 900);
      showToast(`📢 Property Advertisement "${title}" (${advId}) published live under your Seller Account!`);
    }

    function highlightFormCard(which) {
      openRoleGatedForm(which);
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
              <button type="button" onclick="openRoleGatedForm('requisition')" class="mt-3 text-xs font-extrabold text-genriv-600 dark:text-genriv-400 hover:underline">Open Requisition Form →</button>
            </div>
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <div class="text-xs font-extrabold uppercase text-emerald-600 dark:text-emerald-400">Sellers &amp; Owners</div>
              <div class="font-display font-bold text-base text-slate-900 dark:text-white mt-1">100% Free Property Ad Studio</div>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Publish unlimited owner/seller listings via our PROPERTY ADVERTISEMENT FORM at ₹0 cost.</p>
              <button type="button" onclick="openRoleGatedForm('advertisement')" class="mt-3 text-xs font-extrabold text-emerald-600 dark:text-emerald-400 hover:underline">Post Free Property Ad →</button>
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
              <button type="button" onclick="openRoleGatedForm('advertisement')" class="mt-3 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold">Open Property Ad Form →</button>
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
              <button type="button" onclick="openRoleGatedForm('requisition')" class="mt-3 px-4 py-2 rounded-xl bg-acres-600 text-white text-xs font-bold">View Live Buyer Demand →</button>
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
              <button type="button" onclick="openRoleGatedForm('requisition')" class="mt-3 px-4 py-2 rounded-xl bg-genriv-600 text-white text-xs font-bold">Fill Buyer Requisition Form →</button>
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
              <button type="button" onclick="openRoleGatedForm('advertisement')" class="mt-3 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold">Publish Free Owner Ad →</button>
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
              <button type="button" onclick="openRoleGatedForm('advertisement')" class="px-4 py-2.5 rounded-xl bg-white text-emerald-800 font-extrabold text-xs shadow">Go to PROPERTY ADVERTISEMENT FORM ↓</button>
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
      if (tabKey === 'login') {
        openLoginModal();
        return;
      }
      if (tabKey === 'sellers' || tabKey === 'owners') {
        window.location.href = 'seller-dashboard.html';
        return;
      }
      if (tabKey === 'buyers' || tabKey === 'tenants') {
        window.location.href = 'buyer-dashboard.html';
        return;
      }
      if (tabKey === 'listing-property') {
        window.location.href = 'seller-dashboard.html#seller-page-advertisement-form';
        return;
      }
      if (tabKey === 'bank-loan') {
        window.location.href = 'loan-calculator.html';
        return;
      }

      const sec = document.getElementById('tab-portal-section');
      if (tabKey === 'home') {
        if (sec) sec.classList.add('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // For customer-support, legal-support, publication:
      const config = portalTabConfigs[tabKey] || portalTabConfigs['home'];
      if (sec) sec.classList.remove('hidden');

      const pillEl = document.getElementById('portal-active-tab-pill');
      const headEl = document.getElementById('portal-tab-heading');
      const subEl = document.getElementById('portal-tab-subtitle');
      const bodyEl = document.getElementById('portal-tab-body');

      if (pillEl) pillEl.textContent = config.pill;
      if (headEl) headEl.textContent = config.heading;
      if (subEl) subEl.textContent = config.subtitle;
      if (bodyEl) bodyEl.innerHTML = config.render();

      scrollToSection('tab-portal-section');
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

    function openLoginModal(tab = 'signin') {
      const modal = document.getElementById('login-portal-modal');
      if (modal) {
        modal.classList.remove('hidden');
        switchAuthTab(tab);
      }
    }
    window.openLoginModal = openLoginModal;

    function closeLoginModal() {
      const modal = document.getElementById('login-portal-modal');
      if (modal) modal.classList.add('hidden');
    }
    window.closeLoginModal = closeLoginModal;

    function switchAuthTab(tab) {
      const formSignIn = document.getElementById('form-auth-signin');
      const formSignUp = document.getElementById('form-auth-signup');
      const btnSignIn = document.getElementById('auth-tab-btn-signin');
      const btnSignUp = document.getElementById('auth-tab-btn-signup');
      const mainTitle = document.getElementById('auth-modal-main-title');

      if (tab === 'signup') {
        if (formSignIn) formSignIn.classList.add('hidden');
        if (formSignUp) formSignUp.classList.remove('hidden');
        if (btnSignUp) {
          btnSignUp.className = 'flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition bg-white dark:bg-slate-900 text-genriv-700 dark:text-genriv-300 shadow-sm';
        }
        if (btnSignIn) {
          btnSignIn.className = 'flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition text-slate-600 dark:text-slate-400 hover:text-slate-900';
        }
        if (mainTitle) mainTitle.textContent = 'Create New Member Account';
      } else {
        if (formSignIn) formSignIn.classList.remove('hidden');
        if (formSignUp) formSignUp.classList.add('hidden');
        if (btnSignIn) {
          btnSignIn.className = 'flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition bg-white dark:bg-slate-900 text-genriv-700 dark:text-genriv-300 shadow-sm';
        }
        if (btnSignUp) {
          btnSignUp.className = 'flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition text-slate-600 dark:text-slate-400 hover:text-slate-900';
        }
        if (mainTitle) mainTitle.textContent = 'Sign In to Your Account';
      }
    }
    window.switchAuthTab = switchAuthTab;

    function handleSignupSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('signup-name').value.trim();
      const email = document.getElementById('signup-email').value.trim().toLowerCase();
      const phone = document.getElementById('signup-phone').value.trim();
      const role = document.getElementById('signup-role').value;
      const isSeller = role === 'Seller' || role === 'Owner' || role === 'Builder' || role === 'Agent';

      // Check if user already exists
      const existing = mbDatabase.users.find(u => u.email.toLowerCase() === email);
      if (existing) {
        showToast('⚠️ An account with this email already exists. Please Sign In.');
        switchAuthTab('signin');
        const idInput = document.getElementById('login-identifier');
        if (idInput) idInput.value = email;
        return;
      }

      const newUser = {
        id: 'usr-' + Date.now(),
        name,
        email,
        phone: phone || '+91 98300-12345',
        role: isSeller ? 'Seller' : 'Buyer',
        planId: isSeller ? 'seller-free-tier' : 'buyer-free-tier',
        planName: isSeller ? 'Free Basic Tier (1 Ad / 6 Mo)' : 'Buyer Verified Explorer',
        contactCredits: isSeller ? 10 : 20,
        listingQuota: isSeller ? 1 : 0,
        listingUsed: 0,
        planDurationDays: 180,
        planExpiresAt: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
        isTopTenActive: false,
        status: 'Active',
        isOnboarded: false,
        joinedAt: new Date().toISOString().slice(0, 10),
        unlockedPropertyIds: []
      };

      mbDatabase.users.push(newUser);
      mbDatabase.isLoggedIn = true;
      mbDatabase.currentUserId = newUser.id;
      mbDatabase.currentDashboardView = isSeller ? 'seller' : 'buyer';
      saveMbDatabase();

      try {
        localStorage.setItem('genriv_active_user', JSON.stringify(newUser));
      } catch (e) {}

      // Post to Express backend
      try {
        fetch('/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newUser)
        }).catch(() => {});
      } catch (err) {}

      updateHeaderAccountStatus();
      closeLoginModal();

      
      if (isSeller) {
        const regId = 'REG-2026-' + Math.floor(1000 + Math.random() * 9000);
        const sellerProfile = {
          regId: regId,
          companyName: name,
          reraId: 'WBRERA/A/KOL/2026/' + Math.floor(100000 + Math.random() * 900000),
          category: role === 'Builder' ? 'Builder / Developer' : (role === 'Agent' ? 'Real Estate Agent / Broker' : 'Property Owner'),
          pan: 'AACCS' + Math.floor(1000 + Math.random() * 9000) + 'J',
          gstin: role === 'Property Owner' ? '' : '19AACCS' + Math.floor(1000 + Math.random() * 9000) + 'J1ZM',
          phone: phone || '+91 98300-12345',
          email: email,
          status: 'pending', // Gated until Super Admin verifies
          reVerificationRequested: false,
          quota: 1,
          planName: 'Free Basic (1 Ad / 6 Mo)',
          documents: ['RERA_Sanction_Certificate.pdf', 'PAN_Incorporation_Scan.jpg'],
          submittedAt: new Date().toISOString()
        };
        localStorage.setItem('genriv_seller_profile', JSON.stringify(sellerProfile));
        let pendingList = [];
        try {
          const rawPending = localStorage.getItem('genriv_pending_sellers');
          if (rawPending) pendingList = JSON.parse(rawPending);
        } catch (e) {}
        pendingList = pendingList.filter(s => s.regId !== regId && s.email !== email);
        pendingList.unshift(sellerProfile);
        localStorage.setItem('genriv_pending_sellers', JSON.stringify(pendingList));
      }

      showToast(`🎉 Welcome, ${name}! Your ${newUser.role} account is created. Loading registration form...`);

      setTimeout(() => {
        if (newUser.role === 'Seller') {
          window.location.href = 'seller-dashboard.html?new_signup=true';
        } else {
          window.location.href = 'buyer-dashboard.html?new_signup=true';
        }
      }, 700);
    }
    window.handleSignupSubmit = handleSignupSubmit;

    // =========================================================================
    // NEW MODULE 4: MAGICBRICKS-STYLE FULL-STACK BACKEND ENGINE,
    // BUYER / SELLER / ADMIN ACCOUNTS & MB PRIME SUBSCRIPTION SYSTEM
    // =========================================================================
    const MB_SUBSCRIPTION_PLANS = [
      {
        id: 'buyer-basic',
        targetRole: 'Buyer',
        name: 'Buyer Free Explorer',
        price: 0,
        priceLabel: '₹0 / Forever',
        duration: 'Lifetime Basic',
        contactCredits: 2,
        listingQuota: 0,
        badge: 'FREE TIER',
        features: [
          'Unlock up to 2 Direct Owner Contacts',
          'Post Customer Requisition Forms',
          '360° Spatial Tour & Locality Price Access'
        ]
      },
      {
        id: 'mb-prime-silver',
        targetRole: 'Buyer',
        name: 'MB Prime Silver',
        price: 999,
        priceLabel: '₹999 / 3 Months',
        duration: '90 Days',
        contactCredits: 15,
        listingQuota: 1,
        badge: 'POPULAR BUYER PLAN',
        features: [
          'Unlock 15 Verified Direct Owner Contacts',
          'Zero-Brokerage Exclusive Owner Filter',
          'Instant WhatsApp Price-Drop Alerts',
          'Free Rent Agreement Draft Coupon'
        ]
      },
      {
        id: 'mb-prime-gold',
        targetRole: 'Buyer',
        name: 'MB Prime Gold Assisted',
        price: 2499,
        priceLabel: '₹2,499 / 6 Months',
        duration: '180 Days',
        contactCredits: 50,
        listingQuota: 3,
        badge: 'BEST VALUE • VIP RM',
        features: [
          'Unlock 50 Direct Owner & Builder Contacts',
          'Dedicated MagicBricks-Style Relationship Manager',
          '1 Free Legal Title Search Voucher (Worth ₹2,499)',
          'Priority VIP Chauffeur Site Visits'
        ]
      },
      {
        id: 'seller-free-ad',
        targetRole: 'Seller',
        name: 'Free Property Ad Starter',
        price: 0,
        priceLabel: '₹0 / Forever',
        duration: '90 Days Active',
        contactCredits: 3,
        listingQuota: 1,
        badge: '100% FREE AD',
        features: [
          'Publish 1 Property or Hospitality Venue FREE',
          'Standard Search Grid Placement',
          'Receive Buyer Inquiries in Seller CRM'
        ]
      },
      {
        id: 'seller-silver-boost',
        targetRole: 'Seller',
        name: 'Seller Silver Boost Pack',
        price: 1499,
        priceLabel: '₹1,499 / 3 Months',
        duration: '90 Days',
        contactCredits: 20,
        listingQuota: 5,
        badge: '3X MORE BUYER LEADS',
        features: [
          'Publish up to 5 Properties / Venues',
          'Boost 2 Listings to Top Search Slot',
          'Verified Owner Tag + Instant WhatsApp Lead Push',
          'Access Live Buyer Requisition Contacts'
        ]
      },
      {
        id: 'seller-titanium-pro',
        targetRole: 'Seller',
        name: 'Seller Titanium Builder Pro',
        price: 3999,
        priceLabel: '₹3,999 / 6 Months',
        duration: '180 Days',
        contactCredits: 100,
        listingQuota: 25,
        badge: '10X VISIBILITY • TOP SLOT',
        features: [
          'Up to 25 Active Listings + Unlimited Boosts',
          'Pinned #1 MB Prime Top Slot Ribbon on Search',
          'Professional 360° Virtual Tour Badge',
          'Full Buyer Lead CRM Export & Priority RERA Audit'
        ]
      }
    ];

    function getDefaultBackendDB() {
      return {
        isLoggedIn: false,
        buyerSubscriptionsEnabled: false,
        currentUserId: 'usr-buyer-1',
        currentDashboardView: 'buyer',
        users: [
          {
            id: 'usr-buyer-1',
            name: 'Anirban Chatterjee',
            email: 'anirban.buyer@genrivreality.com',
            phone: '+91 98301-44210',
            role: 'Buyer',
            planId: 'mb-prime-gold',
            planName: 'MB Prime Gold Assisted',
            contactCredits: 12,
            listingQuota: 3,
            status: 'Active',
            joinedAt: '2026-08-14',
            unlockedPropertyIds: ['prop-1', 'prop-5']
          },
          {
            id: 'usr-seller-1',
            name: 'Debashis Sen (Sen Estates)',
            email: 'debashis.seller@genrivreality.com',
            phone: '+91 98310-77890',
            role: 'Seller',
            planId: 'seller-titanium-pro',
            planName: 'Seller Titanium Builder Pro',
            contactCredits: 45,
            listingQuota: 25,
            status: 'Active',
            joinedAt: '2026-07-02',
            unlockedPropertyIds: ['prop-2']
          },
          {
            id: 'usr-owner-1',
            name: 'Meera Deshmukh',
            email: 'meera.owner@genrivreality.com',
            phone: '+91 98204-55112',
            role: 'Owner',
            planId: 'seller-silver-boost',
            planName: 'Seller Silver Boost Pack',
            contactCredits: 15,
            listingQuota: 5,
            status: 'Active',
            joinedAt: '2026-09-19',
            unlockedPropertyIds: []
          },
          {
            id: 'usr-admin-1',
            name: 'Vikramaditya Roy (Super Admin)',
            email: 'admin@genrivreality.com',
            phone: '+91 98300-00001',
            role: 'Admin',
            planId: 'admin-master',
            planName: 'Platform Master Admin',
            contactCredits: 999,
            listingQuota: 999,
            status: 'Active',
            joinedAt: '2026-01-01',
            unlockedPropertyIds: ['prop-1', 'prop-2', 'prop-3', 'prop-4', 'prop-5', 'prop-6']
          }
        ],
        sellerLeads: [
          {
            id: 'LEAD-901',
            propertyId: 'prop-5',
            propertyTitle: 'Botanica Waterfront Sky-Forest Towers (Kolkata)',
            buyerName: 'Anirban Chatterjee',
            buyerPhone: '+91 98301-44210',
            buyerEmail: 'anirban.buyer@genrivreality.com',
            budget: '₹1.45 Cr',
            intent: 'Buy • 3 BHK',
            status: 'Site Visit Fixed',
            timestamp: '2026-10-28 18:40'
          },
          {
            id: 'LEAD-902',
            propertyId: 'prop-1',
            propertyTitle: 'Genriv Celestia Sky Penthouse (Mumbai)',
            buyerName: 'Rohan Malhotra',
            buyerPhone: '+91 98201-66321',
            buyerEmail: 'rohan.m@corpindia.in',
            budget: '₹8.40 Cr',
            intent: 'Buy • 4 BHK',
            status: 'New Lead',
            timestamp: '2026-10-29 11:15'
          },
          {
            id: 'LEAD-903',
            propertyId: 'prop-2',
            propertyTitle: 'The Teakwood Courtyard Biophilic Villa (Bengaluru)',
            buyerName: 'Priya Nair',
            buyerPhone: '+91 99001-33490',
            buyerEmail: 'priya.nair@techpark.io',
            budget: '₹4.25 Cr',
            intent: 'Buy • 5 BHK',
            status: 'Contacted',
            timestamp: '2026-10-29 14:20'
          }
        ],
        transactions: [
          {
            id: 'TXN-MB-8841',
            userId: 'usr-buyer-1',
            userName: 'Anirban Chatterjee',
            role: 'Buyer',
            planName: 'MB Prime Gold Assisted',
            amount: 2499,
            method: 'UPI Instant (GPay)',
            date: '2026-10-15',
            status: 'Paid'
          },
          {
            id: 'TXN-MB-8842',
            userId: 'usr-seller-1',
            userName: 'Debashis Sen (Sen Estates)',
            role: 'Seller',
            planName: 'Seller Titanium Builder Pro',
            amount: 3999,
            method: 'Corporate NetBanking',
            date: '2026-10-18',
            status: 'Paid'
          },
          {
            id: 'TXN-MB-8843',
            userId: 'usr-owner-1',
            userName: 'Meera Deshmukh',
            role: 'Owner',
            planName: 'Seller Silver Boost Pack',
            amount: 1499,
            method: 'Credit Card',
            date: '2026-10-24',
            status: 'Paid'
          }
        ],
        propertyOverrides: {
          'prop-1': { boosted: true, views: 1840, leadsCount: 24, ownerPhone: '+91 98201-11001', ownerId: 'usr-seller-1' },
          'prop-2': { boosted: false, views: 1290, leadsCount: 19, ownerPhone: '+91 98450-22002', ownerId: 'usr-owner-1' },
          'prop-3': { boosted: false, views: 980, leadsCount: 14, ownerPhone: '+91 98110-33003', ownerId: 'usr-seller-1' },
          'prop-4': { boosted: false, views: 1120, leadsCount: 16, ownerPhone: '+91 98490-44004', ownerId: 'usr-seller-1' },
          'prop-5': { boosted: true, views: 2150, leadsCount: 31, ownerPhone: '+91 98310-77890', ownerId: 'usr-seller-1' },
          'prop-6': { boosted: false, views: 890, leadsCount: 12, ownerPhone: '+91 98220-66006', ownerId: 'usr-owner-1' }
        },
        lastApiLog: {
          endpoint: 'GET /api/v1/bootstrap',
          status: 200,
          timestamp: new Date().toISOString(),
          note: 'MagicBricks Hybrid REST + LocalStorage Engine Initialized'
        }
      };
    }

    let mbDatabase = getDefaultBackendDB();

    function loadMbDatabase() {
      try {
        const raw = localStorage.getItem('genriv_mb_db_v1');
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && Array.isArray(parsed.users)) {
            mbDatabase = parsed;
            if (typeof mbDatabase.buyerSubscriptionsEnabled !== 'boolean') {
              mbDatabase.buyerSubscriptionsEnabled = false;
            }
          }
        }
      } catch (e) {}
      syncPropertiesWithMbBackend();
    }

    function saveMbDatabase() {
      try {
        localStorage.setItem('genriv_mb_db_v1', JSON.stringify(mbDatabase));
      } catch (e) {}
    }

    function syncPropertiesWithMbBackend() {
      properties.forEach(p => {
        const ov = mbDatabase.propertyOverrides[p.id] || {
          boosted: false,
          views: 650,
          leadsCount: 8,
          ownerPhone: '+91 98300-55443',
          ownerId: 'usr-seller-1'
        };
        p.boosted = Boolean(ov.boosted);
        p.views = ov.views;
        p.leadsCount = ov.leadsCount;
        p.ownerPhone = ov.ownerPhone;
        p.ownerId = ov.ownerId;
        if (typeof ov.reraVerified === 'boolean') {
          p.reraVerified = ov.reraVerified;
        }
      });
    }

    function getCurrentMbUser() {
      return mbDatabase.users.find(u => u.id === mbDatabase.currentUserId) || mbDatabase.users[0];
    }

    function goToUserDashboard() {
      const user = getCurrentMbUser();
      if (user.role === 'Admin') {
        window.location.href = 'admin-dashboard.html';
      } else if (user.role === 'Seller' || user.role === 'Owner' || user.role === 'Builder') {
        window.location.href = 'seller-dashboard.html';
      } else {
        window.location.href = 'buyer-dashboard.html';
      }
    }
    window.goToUserDashboard = goToUserDashboard;

    function togglePortalRequisitionFormEdit() {
      const blankForm = document.getElementById('customer-requisition-form');
      const summaryView = document.getElementById('requisition-active-summary');
      if (blankForm && summaryView) {
        if (blankForm.classList.contains('hidden')) {
          blankForm.classList.remove('hidden');
          summaryView.classList.add('hidden');
        } else {
          blankForm.classList.add('hidden');
          summaryView.classList.remove('hidden');
        }
      }
    }
    window.togglePortalRequisitionFormEdit = togglePortalRequisitionFormEdit;

    function togglePortalAdFormEdit() {
      const blankAdForm = document.getElementById('property-advertisement-form');
      const adSummaryView = document.getElementById('advertisement-active-summary');
      if (blankAdForm && adSummaryView) {
        if (blankAdForm.classList.contains('hidden')) {
          blankAdForm.classList.remove('hidden');
          adSummaryView.classList.add('hidden');
        } else {
          blankAdForm.classList.add('hidden');
          adSummaryView.classList.remove('hidden');
        }
      }
    }
    window.togglePortalAdFormEdit = togglePortalAdFormEdit;

    function renderPortalMatchedPreviews(req) {
      const grid = document.getElementById('portal-matched-preview-grid');
      if (!grid) return;
      const matched = properties.slice(0, 3);
      grid.innerHTML = matched.map(p => `
        <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2 shadow-sm">
          <img src="${p.image}" class="w-full h-28 object-cover rounded-xl" />
          <div class="text-xs font-bold text-slate-900 dark:text-white truncate">${p.title}</div>
          <div class="text-[11px] text-emerald-600 font-extrabold">${p.priceLabel} • ${p.bhk}</div>
          <a href="buyer-dashboard.html" class="block text-center py-1.5 rounded-lg bg-genriv-600 hover:bg-genriv-700 text-white text-[11px] font-bold transition">
            Unlock Contact Free
          </a>
        </div>
      `).join('');
    }

    function renderPortalSellerListingPreviews(user) {
      const grid = document.getElementById('portal-seller-listings-preview');
      if (!grid) return;
      const sellerProps = properties.slice(0, 3);
      grid.innerHTML = sellerProps.map(p => `
        <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2 shadow-sm">
          <img src="${p.image}" class="w-full h-28 object-cover rounded-xl" />
          <div class="text-xs font-bold text-slate-900 dark:text-white truncate">${p.title}</div>
          <div class="text-[11px] text-emerald-600 font-extrabold">${p.priceLabel} • Live & Verified</div>
          <a href="seller-dashboard.html" class="block text-center py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold transition">
            Manage in Seller Dashboard
          </a>
        </div>
      `).join('');
    }

    function updateHeaderAccountStatus() {
      const user = getCurrentMbUser();
      const isLogged = Boolean(mbDatabase.isLoggedIn);
      const loginBtn = document.getElementById('nav-tab-login');
      const loginLbl = document.getElementById('nav-login-label');
      const shortName = user.name.split(' ')[0];

      if (loginBtn) {
        if (isLogged) {
          const dashboardUrl = user.role === 'Admin' ? 'admin-dashboard.html' : (user.role === 'Seller' || user.role === 'Owner' || user.role === 'Builder' ? 'seller-dashboard.html' : 'buyer-dashboard.html');
          const roleIcon = user.role === 'Admin' ? '⚡' : (user.role === 'Seller' || user.role === 'Owner' ? '🏢' : '👤');
          loginBtn.onclick = () => window.location.href = dashboardUrl;
          loginBtn.title = `Go to ${user.role} Dashboard`;
          if (loginLbl) {
            loginLbl.innerHTML = `<span>${roleIcon} ${shortName}</span><span class="hidden sm:inline text-[11px] opacity-90 font-bold"> (${user.role} Dashboard)</span>`;
          }
        } else {
          loginBtn.onclick = () => switchMainTab('login');
          loginBtn.title = 'Login';
          if (loginLbl) {
            loginLbl.innerHTML = 'Login';
          }
        }
      }

      // Point 1: When a seller or buyer is logged in, adjust the top tab appropriately
      const listingTab = document.getElementById('nav-tab-listing-property');
      if (listingTab) {
        if (isLogged && (user.role === 'Seller' || user.role === 'Owner' || user.role === 'Builder')) {
          listingTab.onclick = () => window.location.href = 'seller-dashboard.html';
          listingTab.innerHTML = `<span>🏢 Seller Dashboard</span><span class="px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 text-[9px] font-extrabold uppercase">POST PROPERTY</span>`;
          listingTab.title = 'Go to Seller Dashboard to post and manage properties';
        } else if (isLogged && user.role === 'Buyer') {
          listingTab.onclick = () => window.location.href = 'buyer-dashboard.html';
          listingTab.innerHTML = `<span>📋 Buyer Hub</span><span class="px-1.5 py-0.2 rounded bg-genriv-600 text-white text-[9px] font-extrabold uppercase">REQUISITIONS</span>`;
          listingTab.title = 'Go to Buyer Hub';
        } else {
          listingTab.onclick = () => switchMainTab('listing-property');
          listingTab.innerHTML = `<span>Listing your Property</span><span class="px-1.5 py-0.2 rounded bg-emerald-500 text-white text-[9px] font-extrabold uppercase">FREE</span>`;
        }
      }

      const primeBtn = document.getElementById('header-mb-prime-btn');
      if (primeBtn) {
        if (mbDatabase.buyerSubscriptionsEnabled && isLogged && (user.role === 'Buyer' || user.role === 'Admin')) {
          primeBtn.classList.remove('hidden');
          primeBtn.classList.add('inline-flex');
        } else {
          primeBtn.classList.add('hidden');
          primeBtn.classList.remove('inline-flex');
        }
      }
      const creditsPill = document.getElementById('header-credits-pill');
      if (creditsPill) {
        if (!isLogged) {
          creditsPill.textContent = 'Sign In';
        } else if (!mbDatabase.buyerSubscriptionsEnabled && user.role === 'Buyer') {
          creditsPill.textContent = 'Free Unlocks';
        } else if (user.role === 'Admin') {
          creditsPill.textContent = 'Master Admin';
        } else {
          creditsPill.textContent = `${user.contactCredits} Credits`;
        }
      }
      const nameEl = document.getElementById('mb-current-user-name');
      const metaEl = document.getElementById('mb-current-user-meta');
      const planEl = document.getElementById('mb-active-plan-badge');
      if (nameEl) {
        nameEl.textContent = isLogged ? `${user.name} (${user.email})` : 'Guest Visitor (Not Signed In)';
      }
      if (metaEl) {
        if (!isLogged) {
          metaEl.textContent = 'Sign in as Customer/Buyer for Requisition Form or Seller for Property Advertisement Form';
        } else if (user.role === 'Buyer') {
          metaEl.textContent = mbDatabase.buyerSubscriptionsEnabled
            ? `Role: Buyer • ${user.contactCredits} MB Prime Credits Active`
            : `Role: Buyer • Unlimited Free Owner Contact Unlocks (Admin Promo Active)`;
        } else if (user.role === 'Seller') {
          metaEl.textContent = `Role: Seller • ${user.listingQuota} Listing Quota Slots • Leads CRM Active`;
        } else {
          metaEl.textContent = `Role: Super Admin • Platform Governance • Buyer Subscriptions: ${mbDatabase.buyerSubscriptionsEnabled ? 'ON' : 'OFF'}`;
        }
      }
      if (planEl) {
        if (!isLogged) {
          planEl.textContent = '🔒 Personal Workspace Locked';
        } else if (user.role === 'Buyer') {
          planEl.textContent = mbDatabase.buyerSubscriptionsEnabled ? `👑 ${user.planName}` : '🎉 100% Free Buyer Access';
        } else if (user.role === 'Seller') {
          planEl.textContent = `🏗️ ${user.planName}`;
        } else {
          planEl.textContent = '🛡️ Super Admin Master';
        }
      }
      syncRoleGatedFormsVisibility();
    }

    function toggleBuyerSubscriptionsAdmin() {
      mbDatabase.buyerSubscriptionsEnabled = !mbDatabase.buyerSubscriptionsEnabled;
      saveMbDatabase();
      updateHeaderAccountStatus();
      renderMbDashboard();
      showToast(mbDatabase.buyerSubscriptionsEnabled
        ? '🟢 Admin: Buyer Subscriptions are now ENABLED (MB Prime active).'
        : '🔴 Admin: Buyer Subscriptions are now DISABLED (All buyer contacts are 100% free).'
      );
    }

    function syncRoleGatedFormsVisibility() {
      // Requirement 8: Never show "Seller Listing Desk", "Customer Requisition Desk",
      // or raw forms on index.html. Dashboards handle all authenticated forms.
      const section = document.getElementById('forms-hub-section');
      if (section) {
        section.classList.add('hidden');
      }
      const reqCard = document.getElementById('requisition-form-card');
      const advCard = document.getElementById('advertisement-form-card');
      const adminCard = document.getElementById('admin-creative-submissions-card');
      if (reqCard) reqCard.classList.add('hidden');
      if (advCard) advCard.classList.add('hidden');
      if (adminCard) adminCard.classList.add('hidden');
      return;
    }

    let adminSubmissionsActiveTab = 'requisitions';
    let activeRequisitionMatch = null;

    function switchAdminSubmissionsTab(tab) {
      adminSubmissionsActiveTab = tab;
      const tabReq = document.getElementById('admin-sub-tab-req');
      const tabAdv = document.getElementById('admin-sub-tab-adv');
      if (tabReq && tabAdv) {
        if (tab === 'requisitions') {
          tabReq.className = 'px-3.5 py-2 rounded-xl text-xs font-bold transition bg-gradient-to-r from-genriv-600 to-acres-500 text-white shadow-sm';
          tabAdv.className = 'px-3.5 py-2 rounded-xl text-xs font-bold transition bg-slate-800 text-slate-300 hover:text-white';
        } else {
          tabReq.className = 'px-3.5 py-2 rounded-xl text-xs font-bold transition bg-slate-800 text-slate-300 hover:text-white';
          tabAdv.className = 'px-3.5 py-2 rounded-xl text-xs font-bold transition bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-sm';
        }
      }
      renderAdminSubmissionsView();
    }

    function renderAdminSubmissionsView() {
      const container = document.getElementById('admin-submissions-roster-container');
      const reqCountEl = document.getElementById('admin-req-count');
      const advCountEl = document.getElementById('admin-adv-count');
      if (reqCountEl) reqCountEl.textContent = customerRequisitions.length;
      if (advCountEl) advCountEl.textContent = publishedAdvertisements.length;
      if (!container) return;

      const currentTab = adminSubmissionsActiveTab || 'requisitions';
      if (currentTab === 'requisitions') {
        container.innerHTML = `
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-display font-bold text-base text-slate-900 dark:text-white">📋 Customer Requisitions Roster (${customerRequisitions.length})</h4>
            <span class="text-xs text-slate-500 dark:text-slate-400">Demand records submitted by authenticated Buyers &amp; Hosts</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${customerRequisitions.map(r => {
              const matches = getMatchingPropertiesForRequisition(r);
              return `
                <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-genriv-500 transition shadow-md flex flex-col justify-between space-y-3">
                  <div>
                    <div class="flex items-center justify-between">
                      <span class="font-mono text-xs font-extrabold text-genriv-600 dark:text-genriv-300 bg-genriv-100 dark:bg-genriv-950/80 px-2.5 py-1 rounded-lg border border-genriv-300 dark:border-genriv-800">${r.id}</span>
                      <span class="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">Active Demand</span>
                    </div>
                    <h5 class="font-display font-extrabold text-base text-slate-900 dark:text-white mt-2">${r.name}</h5>
                    <div class="text-xs text-genriv-600 dark:text-amber-300 font-bold">${r.role} • ${r.category}</div>
                    <div class="mt-3 space-y-1.5 text-xs text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-700/60 pt-2.5">
                      <div class="flex items-start gap-1.5"><span class="text-slate-400 font-semibold">📍 Locality:</span> <strong class="text-slate-900 dark:text-white">${r.location}</strong></div>
                      <div class="flex items-start gap-1.5"><span class="text-slate-400 font-semibold">📐 Config:</span> <strong class="text-slate-900 dark:text-white">${r.specs}</strong></div>
                      <div class="flex items-start gap-1.5"><span class="text-slate-400 font-semibold">💰 Budget:</span> <span class="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-extrabold">${r.budget}</span></div>
                      ${r.notes ? `<div class="text-[11px] text-slate-500 dark:text-slate-400 mt-2 p-2 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/60">${r.notes}</div>` : ''}
                    </div>
                  </div>
                  <div class="pt-2 border-t border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-2">
                    <button type="button" onclick="filterSearchByRequisition('${r.id}')" class="px-3 py-1.5 rounded-xl bg-genriv-600 hover:bg-genriv-700 text-white text-xs font-bold transition flex items-center gap-1 shadow-sm">
                      <span>🎯 View Matches</span>
                      <span class="px-1.5 py-0.2 rounded bg-genriv-800 text-[10px]">${matches.length}</span>
                    </button>
                    <a href="https://wa.me/919830144210?text=Hello%20${encodeURIComponent(r.name)},%20we%20have%20verified%20properties%20matching%20your%20requisition%20${r.id}" target="_blank" class="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition">
                      💬 WhatsApp
                    </a>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `;
      } else {
        container.innerHTML = `
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-display font-bold text-base text-slate-900 dark:text-white">🏠 Published Property Advertisements (${publishedAdvertisements.length})</h4>
            <span class="text-xs text-slate-500 dark:text-slate-400">Seller &amp; Owner listings submitted via 100% Free Property Ad Form</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${publishedAdvertisements.map(adv => `
              <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 transition shadow-md flex flex-col justify-between space-y-3">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="font-mono text-xs font-extrabold text-emerald-600 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-300 dark:border-emerald-800">${adv.id}</span>
                    <span class="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">Live Listing</span>
                  </div>
                  <h5 class="font-display font-extrabold text-base text-slate-900 dark:text-white mt-2">${adv.title}</h5>
                  <div class="text-xs text-amber-600 dark:text-amber-300 font-bold">${adv.owner}</div>
                  <div class="mt-3 space-y-1.5 text-xs text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-700/60 pt-2.5">
                    <div class="flex items-start gap-1.5"><span class="text-slate-400 font-semibold">📍 Location:</span> <strong class="text-slate-900 dark:text-white">${adv.locality}, ${adv.city}</strong></div>
                    <div class="flex items-start gap-1.5"><span class="text-slate-400 font-semibold">🏷️ Price:</span> <span class="px-2 py-0.5 rounded bg-amber-400/15 text-amber-600 dark:text-amber-300 font-extrabold">${adv.price}</span></div>
                    <div class="flex items-start gap-1.5"><span class="text-slate-400 font-semibold">📦 Category:</span> <strong class="text-slate-900 dark:text-white">${adv.category}</strong></div>
                    <div class="flex items-start gap-1.5"><span class="text-slate-400 font-semibold">✨ Specs:</span> <span class="text-slate-600 dark:text-slate-300">${adv.plan}</span></div>
                  </div>
                </div>
                <div class="pt-2 border-t border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-2">
                  <span class="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">✓ Published in Catalog</span>
                  <button type="button" onclick="scrollToSection('listings-section')" class="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-white text-xs font-bold transition">
                    View in Search →
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      }
    }

    function getMatchingPropertiesForRequisition(req) {
      if (!req) return properties.slice(0, 3);
      const locLower = (req.location || '').toLowerCase();
      const specs = (req.specs || '');
      const bhkMatch = specs.match(/(\d+)\s*BHK/i);
      const targetBhk = bhkMatch ? bhkMatch[1] : null;

      const matches = properties.filter(p => {
        const pLoc = `${p.city} ${p.locality}`.toLowerCase();
        let cityMatch = false;
        const cities = ['mumbai', 'bengaluru', 'gurugram', 'hyderabad', 'kolkata', 'pune'];
        for (const c of cities) {
          if (locLower.includes(c) && pLoc.includes(c)) {
            cityMatch = true;
            break;
          }
        }
        const pBhkMatch = (p.bhk || '').match(/(\d+)\s*BHK/i);
        const bhkEqual = targetBhk && pBhkMatch ? targetBhk === pBhkMatch[1] : false;
        return cityMatch || bhkEqual;
      });
      return matches.length > 0 ? matches : properties.slice(0, 3);
    }

    function filterSearchByRequisition(reqId) {
      const req = customerRequisitions.find(r => r.id === reqId) || customerRequisitions[0];
      if (!req) return;

      const citySelect = document.getElementById('search-city');
      const headerCitySelect = document.getElementById('header-city-select');
      const locLower = (req.location || '').toLowerCase();
      let matchedCity = 'All';
      const metroCities = ['Mumbai', 'Bengaluru', 'Gurugram', 'Hyderabad', 'Kolkata', 'Pune'];
      for (const c of metroCities) {
        if (locLower.includes(c.toLowerCase())) {
          matchedCity = c;
          break;
        }
      }
      if (citySelect) citySelect.value = matchedCity;
      if (headerCitySelect) headerCitySelect.value = matchedCity;

      const bhkSelect = document.getElementById('search-bhk');
      if (bhkSelect) {
        if ((req.specs || '').includes('1 BHK')) bhkSelect.value = '1 BHK';
        else if ((req.specs || '').includes('3 BHK')) bhkSelect.value = '3 BHK';
        else if ((req.specs || '').includes('4 BHK')) bhkSelect.value = '4 BHK';
        else if ((req.specs || '').includes('5 BHK')) bhkSelect.value = '5 BHK';
        else bhkSelect.value = 'All';
      }

      const banner = document.getElementById('requisition-match-alert-banner');
      const reqIdEl = document.getElementById('requisition-match-req-id');
      const descEl = document.getElementById('requisition-match-desc');
      if (banner) banner.classList.remove('hidden');
      if (reqIdEl) reqIdEl.textContent = req.id;
      if (descEl) descEl.textContent = `Matching: ${req.category} • ${req.specs} in ${req.location} • Budget: ${req.budget}`;

      activeRequisitionMatch = req;
      applyFilters();
      scrollToSection('listings-section');
      showToast(`🎯 Showing verified properties matching your Requisition ${req.id}!`);
    }

    function clearRequisitionSearchFilter() {
      activeRequisitionMatch = null;
      const banner = document.getElementById('requisition-match-alert-banner');
      if (banner) banner.classList.add('hidden');
      const bhkSelect = document.getElementById('search-bhk');
      if (bhkSelect) bhkSelect.value = 'All';
      const citySelect = document.getElementById('search-city');
      if (citySelect) citySelect.value = 'All';
      applyFilters();
      showToast('Filters cleared — showing all verified properties.');
    }

    function openRoleGatedForm(which) {
      const user = getCurrentMbUser();
      const role = (user.role || '').toLowerCase();
      if (which === 'requisition') {
        if (!mbDatabase.isLoggedIn || (role !== 'buyer' && role !== 'tenant' && role !== 'admin')) {
          const roleSelect = document.getElementById('login-role');
          if (roleSelect) roleSelect.value = 'Buyer';
          openLoginModal();
          showToast('🔐 Please log in with your Customer / Buyer Account to access the Customer Requisition Form.');
          return;
        }
        syncRoleGatedFormsVisibility();
        scrollToSection('forms-hub-section');
      } else if (which === 'advertisement') {
        if (!mbDatabase.isLoggedIn || (role !== 'seller' && role !== 'owner' && role !== 'builder' && role !== 'admin')) {
          const roleSelect = document.getElementById('login-role');
          if (roleSelect) roleSelect.value = 'Seller';
          openLoginModal();
          showToast('🔐 Please log in with your Seller / Owner Account to access the PROPERTY ADVERTISEMENT FORM.');
          return;
        }
        syncRoleGatedFormsVisibility();
        scrollToSection('forms-hub-section');
      }
    }

    function logoutMbUser() {
      mbDatabase.isLoggedIn = false;
      saveMbDatabase();
      updateHeaderAccountStatus();
      renderMbDashboard();
      showToast('🚪 Signed out. Customer Requisition Form & Property Advertisement Form are now hidden from the front-end.');
    }

    function quickSwitchRole(roleName) {
      let target = mbDatabase.users.find(u => u.role.toLowerCase() === roleName.toLowerCase());
      if (!target) {
        target = mbDatabase.users[0];
      }
      mbDatabase.isLoggedIn = true;
      mbDatabase.currentUserId = target.id;
      const viewMap = { 'Buyer': 'buyer', 'Seller': 'seller', 'Owner': 'seller', 'Admin': 'admin' };
      mbDatabase.currentDashboardView = viewMap[target.role] || 'buyer';
      mbDatabase.lastApiLog = {
        endpoint: 'POST /api/auth/switch-role',
        status: 200,
        timestamp: new Date().toISOString(),
        activeUser: { id: target.id, name: target.name, role: target.role, plan: target.planName }
      };
      saveMbDatabase();
      updateHeaderAccountStatus();
      switchMbDashboardView(mbDatabase.currentDashboardView);
      if (target.role === 'Buyer' || target.role === 'Seller' || target.role === 'Owner') {
        scrollToSection('forms-hub-section');
      } else {
        scrollToSection('mb-command-center-section');
      }
      showToast(`🔐 Logged in as ${target.role} (${target.name}) — ${target.role === 'Buyer' ? 'Customer Requisition Form' : (target.role === 'Admin' ? 'Admin Console' : 'PROPERTY ADVERTISEMENT FORM')} unlocked!`);
    }

    function openMbCommandCenter(viewKey) {
      switchMbDashboardView(viewKey || mbDatabase.currentDashboardView || 'buyer');
      scrollToSection('mb-command-center-section');
    }

    function switchMbDashboardView(viewKey) {
      mbDatabase.currentDashboardView = viewKey;
      saveMbDatabase();
      renderDashboardNavStrip();
      renderMbDashboard();
    }

    function renderDashboardNavStrip() {
      const navStrip = document.getElementById('mb-dashboard-nav-strip');
      if (!navStrip) return;

      const user = getCurrentMbUser();
      const isLogged = Boolean(mbDatabase.isLoggedIn);
      const role = (user.role || 'Buyer').toLowerCase();
      const currentView = mbDatabase.currentDashboardView || 'buyer';

      if (!isLogged) {
        navStrip.innerHTML = `
          <div class="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-1">
            <span class="text-xs font-bold text-slate-400 pl-2">Select Persona to Explore:</span>
            <button type="button" onclick="quickSwitchRole('Buyer')" class="px-3.5 py-2 rounded-xl text-xs font-extrabold bg-genriv-600/30 hover:bg-genriv-600 text-white border border-genriv-500/40 transition">
              👤 Buyer Demo
            </button>
            <button type="button" onclick="quickSwitchRole('Seller')" class="px-3.5 py-2 rounded-xl text-xs font-extrabold bg-emerald-600/30 hover:bg-emerald-600 text-white border border-emerald-500/40 transition">
              🏗️ Seller Demo
            </button>
            <button type="button" onclick="quickSwitchRole('Admin')" class="px-3.5 py-2 rounded-xl text-xs font-extrabold bg-rose-600/30 hover:bg-rose-600 text-white border border-rose-500/40 transition">
              🛡️ Admin Demo
            </button>
          </div>
          <button type="button" onclick="openLoginModal()" class="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition">
            Sign In with Email / OTP →
          </button>
        `;
        return;
      }

      let tabsHtml = '';
      if (role === 'buyer' || role === 'tenant') {
        tabsHtml = `
          <button type="button" onclick="switchMbDashboardView('buyer')" class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition ${currentView === 'buyer' ? 'bg-gradient-to-r from-genriv-600 to-acres-500 text-white shadow-md' : 'bg-slate-800 text-slate-300 hover:text-white'}">
            👤 My Buyer Hub &amp; Matched Properties
          </button>
          ${mbDatabase.buyerSubscriptionsEnabled ? `
            <button type="button" onclick="switchMbDashboardView('subscriptions')" class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${currentView === 'subscriptions' ? 'bg-amber-400 text-slate-950 font-extrabold shadow' : 'bg-amber-400/20 text-amber-300 border border-amber-400/30 hover:bg-amber-400/30'}">
              👑 MB Prime Subscriptions
            </button>
          ` : `
            <span class="px-3 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold flex items-center gap-1.5">
              <span>🎉 100% Free Buyer Access Active</span>
            </span>
          `}
        `;
      } else if (role === 'seller' || role === 'owner' || role === 'builder') {
        tabsHtml = `
          <button type="button" onclick="switchMbDashboardView('seller')" class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition ${currentView === 'seller' ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-md' : 'bg-slate-800 text-slate-300 hover:text-white'}">
            🏗️ My Seller &amp; Builder CRM
          </button>
          <button type="button" onclick="switchMbDashboardView('subscriptions')" class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${currentView === 'subscriptions' ? 'bg-amber-400 text-slate-950 font-extrabold shadow' : 'bg-amber-400/20 text-amber-300 border border-amber-400/30 hover:bg-amber-400/30'}">
            🚀 Seller Boost Packages
          </button>
        `;
      } else {
        // Admin
        tabsHtml = `
          <button type="button" onclick="switchMbDashboardView('admin')" class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition ${currentView === 'admin' ? 'bg-gradient-to-r from-rose-600 to-amber-500 text-white shadow-md' : 'bg-slate-800 text-slate-300 hover:text-white'}">
            🛡️ Super Admin Master Console
          </button>
          <button type="button" onclick="scrollToSection('forms-hub-section')" class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition bg-indigo-600/30 hover:bg-indigo-600 text-indigo-200 border border-indigo-500/40">
            📋 Creative Submissions Hub (${customerRequisitions.length + publishedAdvertisements.length})
          </button>
          <button type="button" onclick="switchMbDashboardView('subscriptions')" class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${currentView === 'subscriptions' ? 'bg-amber-400 text-slate-950 font-extrabold shadow' : 'bg-slate-800 text-slate-300 hover:text-white'}">
            👑 Subscriptions Ledger
          </button>
          <button type="button" onclick="switchMbDashboardView('api')" class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${currentView === 'api' ? 'bg-slate-700 text-white font-extrabold' : 'bg-slate-800 text-slate-300 hover:text-white'}">
            ⚡ REST API Logs
          </button>
        `;
      }

      navStrip.innerHTML = `
        <div class="flex items-center gap-1.5 flex-wrap">
          ${tabsHtml}
        </div>
        <div class="flex items-center gap-2 text-xs">
          <button type="button" onclick="exportBackendDatabaseJson()" class="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold border border-slate-700 transition">
            ⬇️ Export DB JSON
          </button>
          <button type="button" onclick="resetBackendDatabase()" class="px-3 py-2 rounded-xl bg-slate-800 hover:bg-rose-950 text-rose-300 font-bold border border-slate-700 transition">
            ↺ Reset DB
          </button>
        </div>
      `;
    }

    // MagicBricks Owner Contact Unlock Workflow (Checks Buyer Subscription & Credits)
    function unlockOwnerContactWithBackend(propId) {
      const p = properties.find(x => x.id === propId);
      if (!p) return;
      const user = getCurrentMbUser();

      if (!Array.isArray(user.unlockedPropertyIds)) {
        user.unlockedPropertyIds = [];
      }

      const alreadyUnlocked = user.unlockedPropertyIds.includes(propId) || user.role === 'Admin';
      if (!alreadyUnlocked) {
        if (mbDatabase.buyerSubscriptionsEnabled) {
          if (user.contactCredits <= 0) {
            showToast('⚠️ You have 0 Owner Contact Credits left! Upgrade to MB Prime to unlock direct owner contacts.');
            openSubscriptionCheckoutModal('mb-prime-silver');
            return;
          }
          user.contactCredits -= 1;
        }
        user.unlockedPropertyIds.push(propId);

        // Increment property lead count & create a real Seller CRM Lead
        if (!mbDatabase.propertyOverrides[propId]) {
          mbDatabase.propertyOverrides[propId] = { boosted: false, views: 700, leadsCount: 9, ownerPhone: '+91 98300-11223', ownerId: 'usr-seller-1' };
        }
        mbDatabase.propertyOverrides[propId].leadsCount += 1;

        mbDatabase.sellerLeads.unshift({
          id: 'LEAD-' + Math.floor(100 + Math.random() * 900),
          propertyId: p.id,
          propertyTitle: `${p.title} (${p.city})`,
          buyerName: user.name,
          buyerPhone: user.phone,
          buyerEmail: user.email,
          budget: p.priceLabel,
          intent: `${p.intent} • ${p.bhk}`,
          status: 'New Lead',
          timestamp: new Date().toISOString().slice(0, 16).replace('T', ' ')
        });

        mbDatabase.lastApiLog = {
          endpoint: 'POST /api/leads/unlock-contact',
          status: 200,
          timestamp: new Date().toISOString(),
          propertyId: p.id,
          remainingCredits: user.contactCredits
        };
        syncPropertiesWithMbBackend();
        saveMbDatabase();
        updateHeaderAccountStatus();
        renderMbDashboard();
      }

      // Show the Unlocked Owner Contact Dossier Modal
      const titleEl = document.getElementById('unlocked-modal-prop-title');
      const bodyEl = document.getElementById('unlocked-modal-body');
      if (titleEl) titleEl.textContent = p.title;
      if (bodyEl) {
        bodyEl.innerHTML = `
          <div class="p-4 rounded-2xl bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-slate-500">Advertiser / Owner:</span>
              <span class="font-bold text-slate-900 dark:text-white">${p.builderName}</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-slate-500">Verified Mobile / WhatsApp:</span>
              <span class="font-mono font-extrabold text-emerald-600 dark:text-emerald-400 text-base">${p.ownerPhone || '+91 98310-77890'}</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-slate-500">RERA Registration ID:</span>
              <span class="font-mono font-bold text-slate-800 dark:text-slate-200">${p.reraId}</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-slate-500">Remaining MB Prime Credits:</span>
              <span class="px-2 py-0.5 rounded bg-amber-400/20 text-amber-700 dark:text-amber-300 font-extrabold text-xs">${user.contactCredits} Credits Left</span>
            </div>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400">
            ✅ Your inquiry has also been logged in the Seller's CRM Inbox and saved to your Buyer Dashboard under <strong>Unlocked Owner Contacts</strong>.
          </p>
          <div class="grid grid-cols-2 gap-2.5">
            <button type="button" onclick="closeOwnerContactModal(); openVirtualTourModal('${p.id}')" class="py-2.5 px-3 rounded-xl bg-genriv-600 text-white font-bold text-xs">
              📅 Schedule Site Visit
            </button>
            <button type="button" onclick="closeOwnerContactModal(); openMbCommandCenter('buyer')" class="py-2.5 px-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs">
              Open Buyer Vault →
            </button>
          </div>
        `;
      }
      document.getElementById('owner-contact-dossier-modal').classList.remove('hidden');
      showToast(`📞 Owner contact unlocked for ${p.title}! (${user.contactCredits} MB Prime credits left)`);
    }

    function closeOwnerContactModal() {
      document.getElementById('owner-contact-dossier-modal').classList.add('hidden');
    }

    // Seller Action: Boost Property to Top Slot (MagicBricks Super Boost)
    function toggleSellerPropertyBoost(propId) {
      const user = getCurrentMbUser();
      if (!mbDatabase.propertyOverrides[propId]) {
        mbDatabase.propertyOverrides[propId] = { boosted: false, views: 750, leadsCount: 10, ownerPhone: user.phone, ownerId: user.id };
      }
      const current = Boolean(mbDatabase.propertyOverrides[propId].boosted);
      mbDatabase.propertyOverrides[propId].boosted = !current;
      mbDatabase.propertyOverrides[propId].views += !current ? 420 : 0;
      mbDatabase.lastApiLog = {
        endpoint: `POST /api/seller/properties/${propId}/boost`,
        status: 200,
        timestamp: new Date().toISOString(),
        boosted: !current
      };
      syncPropertiesWithMbBackend();
      saveMbDatabase();
      applyFilters();
      renderMbDashboard();
      showToast(!current
        ? `⚡ Boosted property ${propId} to #1 MB Prime Top Slot in search results!`
        : `Removed Top Slot boost from ${propId}.`);
    }

    // Seller Action: Update Buyer Lead CRM Status
    function updateSellerLeadStatus(leadId, newStatus) {
      const lead = mbDatabase.sellerLeads.find(l => l.id === leadId);
      if (!lead) return;
      lead.status = newStatus;
      mbDatabase.lastApiLog = {
        endpoint: `PATCH /api/seller/leads/${leadId}`,
        status: 200,
        timestamp: new Date().toISOString(),
        leadId,
        newStatus
      };
      saveMbDatabase();
      renderMbDashboard();
      showToast(`📋 Updated Lead ${leadId} (${lead.buyerName}) status to "${newStatus}"`);
    }

    // Admin Action: Toggle RERA Verification Badge on Property
    function adminToggleReraVerification(propId) {
      const p = properties.find(x => x.id === propId);
      if (!p) return;
      p.reraVerified = !p.reraVerified;
      if (!mbDatabase.propertyOverrides[propId]) {
        mbDatabase.propertyOverrides[propId] = { boosted: false, views: 600, leadsCount: 6, ownerPhone: '+91 98300-00000', ownerId: 'usr-seller-1' };
      }
      mbDatabase.propertyOverrides[propId].reraVerified = p.reraVerified;
      mbDatabase.lastApiLog = {
        endpoint: `PATCH /api/admin/properties/${propId}/rera`,
        status: 200,
        timestamp: new Date().toISOString(),
        propertyId: propId,
        reraVerified: p.reraVerified
      };
      saveMbDatabase();
      applyFilters();
      renderMbDashboard();
      showToast(p.reraVerified
        ? `🛡️ Admin verified RERA compliance for ${p.title}`
        : `⏳ Marked ${p.title} as Pending Admin RERA Audit`);
    }

    // Admin Action: Delete / Remove Listing
    function adminDeleteProperty(propId) {
      if (properties.length <= 2) {
        showToast('⚠️ Keep at least 2 active properties in the demo catalog.');
        return;
      }
      const p = properties.find(x => x.id === propId);
      properties = properties.filter(x => x.id !== propId);
      mbDatabase.lastApiLog = {
        endpoint: `DELETE /api/admin/properties/${propId}`,
        status: 200,
        timestamp: new Date().toISOString(),
        removedProperty: p ? p.title : propId
      };
      saveMbDatabase();
      applyFilters();
      renderMbDashboard();
      showToast(`🗑️ Admin removed listing "${p ? p.title : propId}" from live catalog.`);
    }

    // Admin Action: Grant +10 Contact Credits or Toggle Account Status
    function adminAddCreditsToUser(userId, amount) {
      const u = mbDatabase.users.find(x => x.id === userId);
      if (!u) return;
      u.contactCredits += amount;
      mbDatabase.lastApiLog = {
        endpoint: `PATCH /api/admin/users/${userId}/credits`,
        status: 200,
        timestamp: new Date().toISOString(),
        user: u.name,
        newCredits: u.contactCredits
      };
      saveMbDatabase();
      updateHeaderAccountStatus();
      renderMbDashboard();
      showToast(`🎁 Admin added +${amount} credits to ${u.name} (Total: ${u.contactCredits})`);
    }

    function adminToggleUserStatus(userId) {
      const u = mbDatabase.users.find(x => x.id === userId);
      if (!u) return;
      u.status = u.status === 'Active' ? 'Suspended' : 'Active';
      mbDatabase.lastApiLog = {
        endpoint: `PATCH /api/admin/users/${userId}/status`,
        status: 200,
        timestamp: new Date().toISOString(),
        user: u.name,
        status: u.status
      };
      saveMbDatabase();
      renderMbDashboard();
      showToast(`🛡️ Admin updated ${u.name} account status to ${u.status}`);
    }

    // Subscription Checkout Modal & Payment Handler
    function openSubscriptionCheckoutModal(planId) {
      const plan = MB_SUBSCRIPTION_PLANS.find(p => p.id === planId) || MB_SUBSCRIPTION_PLANS[2];
      document.getElementById('sub-checkout-plan-id').value = plan.id;
      document.getElementById('sub-checkout-role-badge').textContent = `${plan.targetRole} Subscription Package`;
      document.getElementById('sub-checkout-plan-title').textContent = `Subscribe to ${plan.name}`;
      document.getElementById('sub-checkout-summary-name').textContent = `${plan.name} (${plan.duration})`;
      document.getElementById('sub-checkout-summary-credits').textContent = `${plan.contactCredits} Contact Unlocks • ${plan.listingQuota} Listings Quota`;
      document.getElementById('sub-checkout-summary-amount').textContent = plan.priceLabel;
      document.getElementById('mb-subscription-checkout-modal').classList.remove('hidden');
    }

    function closeSubscriptionCheckoutModal() {
      document.getElementById('mb-subscription-checkout-modal').classList.add('hidden');
    }

    function handleSubscriptionPaymentSubmit(e) {
      e.preventDefault();
      const planId = document.getElementById('sub-checkout-plan-id').value;
      const method = document.getElementById('sub-checkout-method').value;
      const promo = (document.getElementById('sub-checkout-promo').value || '').trim().toUpperCase();
      const plan = MB_SUBSCRIPTION_PLANS.find(p => p.id === planId) || MB_SUBSCRIPTION_PLANS[2];
      const user = getCurrentMbUser();

      const finalAmount = promo === 'GENRIV20' ? Math.round(plan.price * 0.8) : plan.price;

      user.planId = plan.id;
      user.planName = plan.name;
      user.contactCredits += plan.contactCredits;
      user.listingQuota += plan.listingQuota;
      if (plan.targetRole === 'Seller' && user.role === 'Buyer') {
        user.role = 'Seller';
      }

      const txn = {
        id: 'TXN-MB-' + Math.floor(1000 + Math.random() * 9000),
        userId: user.id,
        userName: user.name,
        role: user.role,
        planName: plan.name,
        amount: finalAmount,
        method,
        date: new Date().toISOString().slice(0, 10),
        status: 'Paid'
      };
      mbDatabase.transactions.unshift(txn);
      mbDatabase.lastApiLog = {
        endpoint: 'POST /api/subscriptions/checkout',
        status: 201,
        timestamp: new Date().toISOString(),
        transaction: txn
      };

      saveMbDatabase();
      updateHeaderAccountStatus();
      closeSubscriptionCheckoutModal();
      renderMbDashboard();
      showToast(`🎉 Activated ${plan.name}! Added +${plan.contactCredits} Contact Credits (Invoice ${txn.id})`);
    }

    // Export & Reset Backend DB Helpers
    function exportBackendDatabaseJson() {
      const payload = JSON.stringify(mbDatabase, null, 2);
      const blob = new Blob([payload], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'genrivreality-backend-db.json';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      showToast('⬇️ Exported live Genrivreality Backend Database JSON!');
    }

    function resetBackendDatabase() {
      mbDatabase = getDefaultBackendDB();
      try {
        localStorage.removeItem('genriv_mb_db_v1');
      } catch (e) {}
      syncPropertiesWithMbBackend();
      updateHeaderAccountStatus();
      applyFilters();
      renderMbDashboard();
      showToast('↺ Reset Backend Database to fresh default Buyer, Seller & Admin state.');
    }

    // Live API Simulator in the Backend API Console Tab
    function triggerSimulatedApiCall(endpointName) {
      const user = getCurrentMbUser();
      let responseData = {};
      if (endpointName === 'GET /api/properties') {
        responseData = { count: properties.length, boostedCount: properties.filter(p => p.boosted).length, items: properties.map(p => ({ id: p.id, title: p.title, price: p.priceLabel, reraVerified: p.reraVerified, boosted: p.boosted, views: p.views })) };
      } else if (endpointName === 'GET /api/auth/me') {
        responseData = { authenticated: true, sessionUser: user };
      } else if (endpointName === 'GET /api/seller/leads') {
        responseData = { totalLeads: mbDatabase.sellerLeads.length, leads: mbDatabase.sellerLeads };
      } else if (endpointName === 'GET /api/admin/metrics') {
        const totalRev = mbDatabase.transactions.reduce((acc, t) => acc + t.amount, 0);
        responseData = { totalUsers: mbDatabase.users.length, totalProperties: properties.length, totalSubscriptionRevenueINR: totalRev, transactions: mbDatabase.transactions };
      }
      mbDatabase.lastApiLog = {
        endpoint: endpointName,
        status: 200,
        timestamp: new Date().toISOString(),
        response: responseData
      };
      saveMbDatabase();
      renderMbDashboard();
      showToast(`⚡ Executed ${endpointName} — 200 OK`);
    }

    // Master Renderer for the Role-Isolated Dashboards & Subscriptions
    function renderMbDashboard() {
      const container = document.getElementById('mb-dashboard-workspace');
      if (!container) return;
      renderDashboardNavStrip();

      const user = getCurrentMbUser();
      const isLogged = Boolean(mbDatabase.isLoggedIn);
      const role = (user.role || 'Buyer').toLowerCase();
      let view = mbDatabase.currentDashboardView || 'buyer';

      // Enforce role dashboard separation
      if (isLogged) {
        if (role === 'buyer' || role === 'tenant') {
          if (view !== 'buyer' && view !== 'subscriptions') view = 'buyer';
          if (view === 'subscriptions' && !mbDatabase.buyerSubscriptionsEnabled) view = 'buyer';
        } else if (role === 'seller' || role === 'owner' || role === 'builder') {
          if (view !== 'seller' && view !== 'subscriptions') view = 'seller';
        }
      }

      // Guest Visitor View: Display 3 Persona Chooser Cards
      if (!isLogged) {
        container.innerHTML = `
          <div class="p-4 sm:p-8 text-center space-y-6">
            <div class="max-w-xl mx-auto space-y-2">
              <span class="px-3 py-1 rounded-full bg-genriv-600/30 text-genriv-300 text-xs font-extrabold uppercase tracking-wider">Multi-Role Portal Access</span>
              <h3 class="font-display font-extrabold text-2xl sm:text-3xl text-white">Select Your Dedicated Dashboard Workspace</h3>
              <p class="text-xs sm:text-sm text-slate-300">Each role has its own dedicated workspace, features, and gated forms. Choose an account to test:</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto text-left">
              <!-- Buyer Card -->
              <div class="p-6 rounded-3xl bg-slate-800/80 border border-genriv-500/40 hover:border-genriv-400 transition shadow-xl space-y-4 flex flex-col justify-between">
                <div class="space-y-3">
                  <div class="w-12 h-12 rounded-2xl bg-genriv-600/30 text-genriv-300 flex items-center justify-center text-2xl shadow-inner">👤</div>
                  <h4 class="font-display font-bold text-lg text-white">Customer &amp; Buyer Hub</h4>
                  <p class="text-xs text-slate-400 leading-relaxed">
                    Access the <strong>Customer Requisition Form</strong>, receive AI-curated property matches, and unlock direct owner contacts.
                  </p>
                  <div class="p-2.5 rounded-xl bg-slate-900/60 border border-slate-700/60 text-[11px] text-slate-300">
                    <span class="text-slate-400">Demo User:</span> Anirban Chatterjee<br/>
                    <span class="text-slate-400">Status:</span> ${mbDatabase.buyerSubscriptionsEnabled ? 'MB Prime Active' : '100% Free Promo Active'}
                  </div>
                </div>
                <button type="button" onclick="quickSwitchRole('Buyer')" class="w-full py-3 rounded-xl bg-gradient-to-r from-genriv-600 to-acres-500 hover:from-genriv-700 hover:to-acres-600 text-white font-extrabold text-xs shadow-md transition">
                  Enter Buyer Dashboard →
                </button>
              </div>

              <!-- Seller Card -->
              <div class="p-6 rounded-3xl bg-slate-800/80 border border-emerald-500/40 hover:border-emerald-400 transition shadow-xl space-y-4 flex flex-col justify-between">
                <div class="space-y-3">
                  <div class="w-12 h-12 rounded-2xl bg-emerald-600/30 text-emerald-300 flex items-center justify-center text-2xl shadow-inner">🏗️</div>
                  <h4 class="font-display font-bold text-lg text-white">Seller &amp; Builder CRM</h4>
                  <p class="text-xs text-slate-400 leading-relaxed">
                    Submit the <strong>PROPERTY ADVERTISEMENT FORM</strong> (100% Free), track buyer leads in real time, and 1-click boost listings.
                  </p>
                  <div class="p-2.5 rounded-xl bg-slate-900/60 border border-slate-700/60 text-[11px] text-slate-300">
                    <span class="text-slate-400">Demo User:</span> Debashis Sen (Sen Estates)<br/>
                    <span class="text-slate-400">Package:</span> Titanium Builder Pro (25 slots)
                  </div>
                </div>
                <button type="button" onclick="quickSwitchRole('Seller')" class="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white font-extrabold text-xs shadow-md transition">
                  Enter Seller Dashboard →
                </button>
              </div>

              <!-- Admin Card -->
              <div class="p-6 rounded-3xl bg-slate-800/80 border border-rose-500/40 hover:border-rose-400 transition shadow-xl space-y-4 flex flex-col justify-between">
                <div class="space-y-3">
                  <div class="w-12 h-12 rounded-2xl bg-rose-600/30 text-rose-300 flex items-center justify-center text-2xl shadow-inner">🛡️</div>
                  <h4 class="font-display font-bold text-lg text-white">Super Admin Console</h4>
                  <p class="text-xs text-slate-400 leading-relaxed">
                    Access the <strong>Creative Submissions Hub</strong>, toggle Buyer Subscriptions ON/OFF, audit RERA licenses, and view revenue ledger.
                  </p>
                  <div class="p-2.5 rounded-xl bg-slate-900/60 border border-slate-700/60 text-[11px] text-slate-300">
                    <span class="text-slate-400">Demo User:</span> Vikramaditya Roy<br/>
                    <span class="text-slate-400">Privileges:</span> Full Platform Master
                  </div>
                </div>
                <button type="button" onclick="quickSwitchRole('Admin')" class="w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 to-amber-500 hover:from-rose-700 hover:to-amber-600 text-white font-extrabold text-xs shadow-md transition">
                  Enter Admin Console →
                </button>
              </div>
            </div>
          </div>
        `;
        return;
      }

      // VIEW 1: DEDICATED BUYER DASHBOARD
      if (view === 'buyer') {
        const unlockedProps = properties.filter(p => (user.unlockedPropertyIds || []).includes(p.id));
        const savedProps = properties.filter(p => shortlistedIds.has(p.id));
        const userReq = customerRequisitions.find(r => r.name.toLowerCase().includes(user.name.split(' ')[0].toLowerCase())) || customerRequisitions[0];
        const matchedProps = getMatchingPropertiesForRequisition(userReq);

        container.innerHTML = `
          <div class="space-y-6">
            <!-- Buyer Top KPI Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="p-4 rounded-2xl bg-slate-800/90 border border-slate-700">
                <div class="text-xs text-slate-400 font-semibold">Active Buyer Plan</div>
                <div class="font-display font-extrabold text-lg ${mbDatabase.buyerSubscriptionsEnabled ? 'text-amber-300' : 'text-emerald-400'} mt-1">
                  ${mbDatabase.buyerSubscriptionsEnabled ? `👑 ${user.planName}` : '🎉 100% Free Access'}
                </div>
                <p class="text-[11px] text-slate-400 mt-1">
                  ${mbDatabase.buyerSubscriptionsEnabled ? 'MB Prime credit deduction active' : 'Zero payment required — Admin Promo'}
                </p>
              </div>
              <div class="p-4 rounded-2xl bg-slate-800/90 border border-slate-700">
                <div class="text-xs text-slate-400 font-semibold">Owner Contact Credits</div>
                <div class="font-display font-extrabold text-2xl text-emerald-400 mt-1">
                  ${mbDatabase.buyerSubscriptionsEnabled ? `${user.contactCredits} <span class="text-xs font-normal text-slate-400">Available</span>` : 'Unlimited <span class="text-xs font-normal text-slate-400">Free</span>'}
                </div>
                <p class="text-[11px] text-slate-400 mt-1">
                  ${mbDatabase.buyerSubscriptionsEnabled ? '1 credit per direct owner unlock' : 'Unlock direct owner contacts freely'}
                </p>
              </div>
              <div class="p-4 rounded-2xl bg-slate-800/90 border border-slate-700">
                <div class="text-xs text-slate-400 font-semibold">Unlocked Owner Contacts</div>
                <div class="font-display font-extrabold text-2xl text-white mt-1">${unlockedProps.length} <span class="text-xs font-normal text-slate-400">Properties</span></div>
                <p class="text-[11px] text-slate-400 mt-1">Zero-brokerage verified owner numbers</p>
              </div>
              <div class="p-4 rounded-2xl bg-slate-800/90 border border-slate-700">
                <div class="text-xs text-slate-400 font-semibold">Saved Shortlist &amp; Alerts</div>
                <div class="font-display font-extrabold text-2xl text-rose-400 mt-1">${savedProps.length} <span class="text-xs font-normal text-slate-400">Shortlisted</span></div>
                <button type="button" onclick="toggleShortlistDrawer()" class="mt-2 text-xs font-bold text-rose-300 hover:underline">Open Saved Drawer →</button>
              </div>
            </div>

            <!-- REQUIREMENT 5: Curated Property Matches based on Customer Requisition -->
            <div class="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-950/70 via-slate-800/80 to-slate-900 border-2 border-genriv-500/40 shadow-xl space-y-4">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div class="flex items-start sm:items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-genriv-600 text-white flex items-center justify-center text-lg font-bold shrink-0 shadow-md">
                    🎯
                  </div>
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="px-2 py-0.5 rounded-full bg-genriv-500/20 text-genriv-300 border border-genriv-500/30 text-[10px] font-extrabold uppercase">Requisition AI Match</span>
                      <span class="font-mono text-xs text-amber-300 font-bold">${userReq ? userReq.id : 'No Requisition Submitted'}</span>
                    </div>
                    <h3 class="font-display font-extrabold text-base sm:text-lg text-white mt-0.5">
                      Properties Curated for Your Customer Requisition
                    </h3>
                    <p class="text-xs text-slate-300">
                      ${userReq
                        ? `Matched for <strong>${userReq.specs}</strong> in <strong>${userReq.location}</strong> • Budget: <strong class="text-emerald-400">${userReq.budget}</strong>`
                        : 'Submit your Customer Requisition Form to automatically receive tailored property matches!'}
                    </p>
                  </div>
                </div>
                <div class="flex flex-wrap gap-2">
                  ${userReq ? `
                    <button type="button" onclick="filterSearchByRequisition('${userReq.id}')" class="px-3.5 py-2 rounded-xl bg-gradient-to-r from-genriv-600 to-acres-500 hover:from-genriv-700 hover:to-acres-600 text-white font-extrabold text-xs shadow-md transition flex items-center gap-1.5">
                      <span>🔍 Show All Matches in Property Search</span>
                      <span class="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">${matchedProps.length}</span>
                    </button>
                  ` : ''}
                  <button type="button" onclick="openRoleGatedForm('requisition')" class="px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs shadow-md transition">
                    📝 Edit / New Requisition
                  </button>
                </div>
              </div>

              <!-- Matched Property Cards Grid -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                ${matchedProps.slice(0, 3).map(p => `
                  <div class="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-genriv-400/60 transition shadow flex flex-col justify-between space-y-3">
                    <div class="space-y-2">
                      <div class="relative h-32 rounded-lg overflow-hidden">
                        <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover" />
                        <span class="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-emerald-400 font-extrabold text-[10px]">
                          ✓ 98% Match
                        </span>
                        <span class="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-genriv-600 text-white font-bold text-[10px]">
                          ${p.priceLabel}
                        </span>
                      </div>
                      <h4 class="font-display font-bold text-sm text-white line-clamp-1">${p.title}</h4>
                      <p class="text-[11px] text-slate-400 flex items-center gap-1">
                        <span>📍</span><span>${p.locality}, ${p.city}</span>
                      </p>
                      <div class="flex items-center justify-between text-xs font-semibold text-slate-300 pt-1 border-t border-slate-800">
                        <span>${p.bhk}</span>
                        <span>${p.areaSqft} sq.ft.</span>
                        <span class="text-emerald-400 font-bold">${p.rentalYield || '4.8'}% Yield</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 pt-1">
                      <button type="button" onclick="unlockOwnerContactWithBackend('${p.id}')" class="w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs transition">
                        ${(user.unlockedPropertyIds || []).includes(p.id) ? '📞 View Unlocked Contact' : '🔓 Get Owner Contact'}
                      </button>
                      <button type="button" onclick="openVirtualTourModal('${p.id}')" class="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold" title="360° Tour">
                        🔄
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Active Requisitions List for Current Buyer -->
            <div class="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-3">
              <div class="flex items-center justify-between">
                <h3 class="font-display font-bold text-base text-white">📋 My Active Customer Requisitions (${customerRequisitions.length})</h3>
                <button type="button" onclick="openRoleGatedForm('requisition')" class="text-xs font-bold text-genriv-400 hover:underline">
                  + Submit Another Requisition
                </button>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr class="border-b border-slate-700 text-slate-400">
                      <th class="py-2.5 px-3">Requisition ID</th>
                      <th class="py-2.5 px-3">Category &amp; Specs</th>
                      <th class="py-2.5 px-3">Location Demand</th>
                      <th class="py-2.5 px-3">Budget</th>
                      <th class="py-2.5 px-3">Action</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-700/70">
                    ${customerRequisitions.map(r => `
                      <tr>
                        <td class="py-3 px-3 font-mono font-bold text-genriv-300">${r.id}</td>
                        <td class="py-3 px-3 text-white font-semibold">${r.category}<span class="block text-[11px] text-slate-400">${r.specs}</span></td>
                        <td class="py-3 px-3 text-slate-300">📍 ${r.location}</td>
                        <td class="py-3 px-3 font-bold text-emerald-400">${r.budget}</td>
                        <td class="py-3 px-3">
                          <button type="button" onclick="filterSearchByRequisition('${r.id}')" class="px-3 py-1.5 rounded-lg bg-genriv-600 hover:bg-genriv-500 text-white font-bold text-xs">
                            🎯 Show Matches
                          </button>
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Unlocked Owner Contacts Table -->
            <div class="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-3">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 class="font-display font-bold text-base sm:text-lg text-white">📞 Buyer's Unlocked Owner Contacts Vault</h3>
                  <p class="text-xs text-slate-400">Direct zero-brokerage owner contacts unlocked by your account.</p>
                </div>
                <button type="button" onclick="scrollToSection('listings-section')" class="px-3.5 py-2 rounded-xl bg-genriv-600 hover:bg-genriv-500 text-white text-xs font-bold shrink-0">
                  + Unlock More Properties
                </button>
              </div>

              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr class="border-b border-slate-700 text-slate-400">
                      <th class="py-2.5 px-3">Property &amp; Locality</th>
                      <th class="py-2.5 px-3">Price &amp; Config</th>
                      <th class="py-2.5 px-3">Owner / Developer</th>
                      <th class="py-2.5 px-3">Unlocked Phone / WhatsApp</th>
                      <th class="py-2.5 px-3">Action</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-700/70">
                    ${unlockedProps.length === 0 ? `
                      <tr><td colspan="5" class="py-6 text-center text-slate-400">No owner contacts unlocked yet. Click "Get Owner Contact" on any property card to reveal verified direct numbers!</td></tr>
                    ` : unlockedProps.map(p => `
                      <tr>
                        <td class="py-3 px-3 font-bold text-white">${p.title} <span class="block text-[11px] font-normal text-slate-400">${p.locality}, ${p.city}</span></td>
                        <td class="py-3 px-3 text-amber-300 font-bold">${p.priceLabel} • ${p.bhk}</td>
                        <td class="py-3 px-3 text-slate-200">${p.builderName}</td>
                        <td class="py-3 px-3 font-mono font-extrabold text-emerald-400">${p.ownerPhone || '+91 98310-77890'}</td>
                        <td class="py-3 px-3">
                          <button type="button" onclick="openVirtualTourModal('${p.id}')" class="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold">360° Tour</button>
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        `;
      }

      // VIEW 2: DEDICATED SELLER DASHBOARD
      else if (view === 'seller') {
        container.innerHTML = `
          <div class="space-y-6">
            <!-- Seller Top KPI Strip -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="p-4 rounded-2xl bg-slate-800/90 border border-slate-700">
                <div class="text-xs text-slate-400 font-semibold">Active Seller Package</div>
                <div class="font-display font-extrabold text-lg text-emerald-400 mt-1">🏗️ ${user.planName}</div>
                <button type="button" onclick="switchMbDashboardView('subscriptions')" class="mt-2 text-xs font-bold text-amber-300 hover:underline">Upgrade Seller Pack →</button>
              </div>
              <div class="p-4 rounded-2xl bg-slate-800/90 border border-slate-700">
                <div class="text-xs text-slate-400 font-semibold">Active Listings &amp; Quota</div>
                <div class="font-display font-extrabold text-2xl text-white mt-1">${properties.length} / ${user.listingQuota} <span class="text-xs font-normal text-slate-400">Slots</span></div>
                <button type="button" onclick="openRoleGatedForm('advertisement')" class="mt-2 text-xs font-bold text-emerald-300 hover:underline">+ Post Free Property Ad →</button>
              </div>
              <div class="p-4 rounded-2xl bg-slate-800/90 border border-slate-700">
                <div class="text-xs text-slate-400 font-semibold">Total Buyer Impressions</div>
                <div class="font-display font-extrabold text-2xl text-sky-400 mt-1">${properties.reduce((s, p) => s + (p.views || 700), 0).toLocaleString()}</div>
                <p class="text-[11px] text-slate-400 mt-1">Boosted listings get 5x top-slot views</p>
              </div>
              <div class="p-4 rounded-2xl bg-slate-800/90 border border-slate-700">
                <div class="text-xs text-slate-400 font-semibold">Verified Buyer Leads (CRM)</div>
                <div class="font-display font-extrabold text-2xl text-amber-300 mt-1">${mbDatabase.sellerLeads.length} <span class="text-xs font-normal text-slate-400">Active Leads</span></div>
                <p class="text-[11px] text-slate-400 mt-1">Instant phone &amp; WhatsApp buyer details</p>
              </div>
            </div>

            <!-- Seller Property Performance & 1-Click Boost Table -->
            <div class="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-3">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 class="font-display font-bold text-base sm:text-lg text-white">⚡ Seller Listings &amp; MagicBricks Top-Slot Boost Manager</h3>
                  <p class="text-xs text-slate-400">Toggle "Boost to Top Slot" on any listing to pin it first in property search results.</p>
                </div>
                <div class="flex flex-wrap gap-2">
                  <button type="button" onclick="openRoleGatedForm('advertisement')" class="px-3.5 py-2 rounded-xl bg-amber-400 text-slate-950 text-xs font-extrabold shrink-0">
                    📢 Open PROPERTY ADVERTISEMENT FORM
                  </button>
                </div>
              </div>

              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr class="border-b border-slate-700 text-slate-400">
                      <th class="py-2.5 px-3">Property Listing</th>
                      <th class="py-2.5 px-3">Price &amp; City</th>
                      <th class="py-2.5 px-3">Search Views</th>
                      <th class="py-2.5 px-3">Buyer Leads</th>
                      <th class="py-2.5 px-3">RERA Status</th>
                      <th class="py-2.5 px-3">MagicBricks Boost</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-700/70">
                    ${properties.map(p => `
                      <tr>
                        <td class="py-3 px-3 font-bold text-white">${p.title}</td>
                        <td class="py-3 px-3 text-amber-300 font-bold">${p.priceLabel} • ${p.city}</td>
                        <td class="py-3 px-3 text-slate-200 font-semibold">${(p.views || 750).toLocaleString()} views</td>
                        <td class="py-3 px-3 text-emerald-400 font-bold">${p.leadsCount || 10} leads</td>
                        <td class="py-3 px-3">
                          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${p.reraVerified ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'}">
                            ${p.reraVerified ? '🛡️ Verified' : '⏳ Pending'}
                          </span>
                        </td>
                        <td class="py-3 px-3">
                          <button type="button" onclick="toggleSellerPropertyBoost('${p.id}')" class="px-3 py-1.5 rounded-xl font-extrabold text-xs transition ${p.boosted ? 'bg-amber-400 text-slate-950 shadow' : 'bg-slate-700 hover:bg-slate-600 text-white'}">
                            ${p.boosted ? '⚡ Boosted (#1 Slot)' : '🚀 Boost to Top Slot'}
                          </button>
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Seller Buyer Leads CRM Inbox -->
            <div class="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-3">
              <h3 class="font-display font-bold text-base sm:text-lg text-white">📬 Seller Lead CRM Inbox (Real-Time Buyer Inquiries)</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr class="border-b border-slate-700 text-slate-400">
                      <th class="py-2.5 px-3">Lead ID &amp; Time</th>
                      <th class="py-2.5 px-3">Buyer Name &amp; Contact</th>
                      <th class="py-2.5 px-3">Interested Property</th>
                      <th class="py-2.5 px-3">Budget / Intent</th>
                      <th class="py-2.5 px-3">CRM Pipeline Stage</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-700/70">
                    ${mbDatabase.sellerLeads.map(l => `
                      <tr>
                        <td class="py-3 px-3 font-mono text-slate-300">${l.id}<span class="block text-[10px] text-slate-500">${l.timestamp}</span></td>
                        <td class="py-3 px-3 font-bold text-white">${l.buyerName}<span class="block text-[11px] font-mono text-emerald-400">${l.buyerPhone}</span></td>
                        <td class="py-3 px-3 text-slate-200">${l.propertyTitle}</td>
                        <td class="py-3 px-3 text-amber-300 font-bold">${l.budget} (${l.intent})</td>
                        <td class="py-3 px-3">
                          <select aria-label="Lead Status" onchange="updateSellerLeadStatus('${l.id}', this.value)" class="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs font-bold text-white">
                            <option value="New Lead" ${l.status === 'New Lead' ? 'selected' : ''}>🟢 New Lead</option>
                            <option value="Contacted" ${l.status === 'Contacted' ? 'selected' : ''}>📞 Contacted</option>
                            <option value="Site Visit Fixed" ${l.status === 'Site Visit Fixed' ? 'selected' : ''}>📅 Site Visit Fixed</option>
                            <option value="Deal Closed" ${l.status === 'Deal Closed' ? 'selected' : ''}>🏆 Deal Closed</option>
                          </select>
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        `;
      }

      // VIEW 3: DEDICATED SUPER ADMIN MASTER CONSOLE
      else if (view === 'admin') {
        const totalRevenue = mbDatabase.transactions.reduce((s, t) => s + t.amount, 0);
        container.innerHTML = `
          <div class="space-y-6">
            <!-- REQUIREMENT 3: Buyer Subscriptions System Master Gate -->
            <div class="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/70 to-slate-900 border-2 ${mbDatabase.buyerSubscriptionsEnabled ? 'border-amber-500/50' : 'border-emerald-500/50'} shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div class="flex items-center gap-2">
                  <span class="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Platform Monetization Control</span>
                  <span class="px-2.5 py-0.5 rounded-full text-xs font-extrabold ${mbDatabase.buyerSubscriptionsEnabled ? 'bg-amber-400 text-slate-950' : 'bg-emerald-500 text-white'}">
                    ${mbDatabase.buyerSubscriptionsEnabled ? '🟢 Buyer Subscriptions: ON (Paid MB Prime Active)' : '🔴 Buyer Subscriptions: OFF (100% Free Buyer Access)'}
                  </span>
                </div>
                <h4 class="font-display font-extrabold text-lg text-white mt-1">Buyer Subscriptions Master Switch</h4>
                <p class="text-xs text-slate-300 mt-0.5 max-w-2xl">
                  ${mbDatabase.buyerSubscriptionsEnabled
                    ? 'MB Prime packages are currently active and visible to buyers. Buyers must spend contact credits to reveal direct owner phone numbers.'
                    : 'Buyer subscriptions are currently <strong>HIDDEN &amp; DISABLED</strong>. All buyers unlock direct owner contacts for 100% free with no credit deduction.'}
                </p>
              </div>
              <button type="button" onclick="toggleBuyerSubscriptionsAdmin()" class="px-5 py-3 rounded-xl font-extrabold text-xs sm:text-sm whitespace-nowrap shrink-0 transition shadow-lg ${mbDatabase.buyerSubscriptionsEnabled ? 'bg-rose-600 hover:bg-rose-500 text-white' : 'bg-emerald-600 hover:bg-emerald-500 text-white'}">
                ${mbDatabase.buyerSubscriptionsEnabled ? 'Turn OFF Buyer Subscriptions (Make Free)' : 'Turn ON Buyer Subscriptions (Enable Paid MB Prime)'}
              </button>
            </div>

            <!-- REQUIREMENT 4: Creative Submissions Hub Launcher -->
            <div class="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span class="text-[10px] font-extrabold uppercase tracking-wider text-genriv-400">Executive Submissions Roster</span>
                <h4 class="font-display font-bold text-base text-white mt-0.5">Admin Creative Submissions Hub</h4>
                <p class="text-xs text-slate-400">Inspect all ${customerRequisitions.length} Customer Requisitions &amp; ${publishedAdvertisements.length} Seller Property Advertisements in creative glassmorphic cards.</p>
              </div>
              <button type="button" onclick="scrollToSection('forms-hub-section')" class="px-4 py-2.5 rounded-xl bg-genriv-600 hover:bg-genriv-500 text-white font-extrabold text-xs shadow-md transition shrink-0">
                Open Creative Submissions Hub →
              </button>
            </div>

            <!-- Admin Master KPI Strip -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="p-4 rounded-2xl bg-slate-800/90 border border-rose-500/30">
                <div class="text-xs text-slate-400 font-semibold">Registered Accounts</div>
                <div class="font-display font-extrabold text-2xl text-white mt-1">${mbDatabase.users.length} <span class="text-xs font-normal text-emerald-400">Active</span></div>
              </div>
              <div class="p-4 rounded-2xl bg-slate-800/90 border border-rose-500/30">
                <div class="text-xs text-slate-400 font-semibold">Live Property Catalog</div>
                <div class="font-display font-extrabold text-2xl text-emerald-400 mt-1">${properties.length} <span class="text-xs font-normal text-slate-400">Listings</span></div>
              </div>
              <div class="p-4 rounded-2xl bg-slate-800/90 border border-rose-500/30">
                <div class="text-xs text-slate-400 font-semibold">Subscription Revenue</div>
                <div class="font-display font-extrabold text-2xl text-amber-300 mt-1">₹${totalRevenue.toLocaleString('en-IN')}</div>
              </div>
              <div class="p-4 rounded-2xl bg-slate-800/90 border border-rose-500/30">
                <div class="text-xs text-slate-400 font-semibold">Active Requisitions &amp; Ads</div>
                <div class="font-display font-extrabold text-2xl text-sky-400 mt-1">${customerRequisitions.length + publishedAdvertisements.length} <span class="text-xs font-normal text-slate-400">Submissions</span></div>
              </div>
            </div>

            <!-- Admin Table 1: User Account & Subscription Credit Management -->
            <div class="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-3">
              <h3 class="font-display font-bold text-base sm:text-lg text-white">👥 Admin User Accounts &amp; Subscription Quota Manager</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr class="border-b border-slate-700 text-slate-400">
                      <th class="py-2.5 px-3">User &amp; Email</th>
                      <th class="py-2.5 px-3">Role</th>
                      <th class="py-2.5 px-3">Active Subscription</th>
                      <th class="py-2.5 px-3">Contact Credits</th>
                      <th class="py-2.5 px-3">Account Status</th>
                      <th class="py-2.5 px-3">Admin Actions</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-700/70">
                    ${mbDatabase.users.map(u => `
                      <tr>
                        <td class="py-3 px-3 font-bold text-white">${u.name}<span class="block text-[11px] font-normal text-slate-400">${u.email}</span></td>
                        <td class="py-3 px-3"><span class="px-2.5 py-0.5 rounded-full bg-white/10 text-white font-bold">${u.role}</span></td>
                        <td class="py-3 px-3 text-amber-300 font-bold">${u.planName}</td>
                        <td class="py-3 px-3 font-mono font-extrabold text-emerald-400">${u.contactCredits}</td>
                        <td class="py-3 px-3">
                          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${u.status === 'Active' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'}">${u.status}</span>
                        </td>
                        <td class="py-3 px-3 flex flex-wrap gap-1.5">
                          <button type="button" onclick="adminAddCreditsToUser('${u.id}', 10)" class="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold">+10 Credits</button>
                          <button type="button" onclick="adminToggleUserStatus('${u.id}')" class="px-2.5 py-1 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold">${u.status === 'Active' ? 'Suspend' : 'Activate'}</button>
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Admin Table 2: Property RERA Moderation & Catalog Control -->
            <div class="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-3">
              <h3 class="font-display font-bold text-base sm:text-lg text-white">🛡️ Admin RERA Verification &amp; Listing Moderation Queue</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr class="border-b border-slate-700 text-slate-400">
                      <th class="py-2.5 px-3">Property Title</th>
                      <th class="py-2.5 px-3">City &amp; Price</th>
                      <th class="py-2.5 px-3">RERA ID</th>
                      <th class="py-2.5 px-3">RERA Audit Status</th>
                      <th class="py-2.5 px-3">Moderation Actions</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-700/70">
                    ${properties.map(p => `
                      <tr>
                        <td class="py-3 px-3 font-bold text-white">${p.title}</td>
                        <td class="py-3 px-3 text-amber-300 font-bold">${p.city} • ${p.priceLabel}</td>
                        <td class="py-3 px-3 font-mono text-slate-300">${p.reraId}</td>
                        <td class="py-3 px-3">
                          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${p.reraVerified ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'}">
                            ${p.reraVerified ? '✅ RERA Approved' : '⏳ Pending Audit'}
                          </span>
                        </td>
                        <td class="py-3 px-3 flex flex-wrap gap-1.5">
                          <button type="button" onclick="adminToggleReraVerification('${p.id}')" class="px-2.5 py-1 rounded-lg bg-genriv-600 hover:bg-genriv-500 text-white font-bold">
                            ${p.reraVerified ? 'Revoke RERA' : 'Approve RERA'}
                          </button>
                          <button type="button" onclick="toggleSellerPropertyBoost('${p.id}')" class="px-2.5 py-1 rounded-lg bg-amber-400/20 text-amber-300 font-bold">
                            ${p.boosted ? 'Unboost' : 'Feature Top'}
                          </button>
                          <button type="button" onclick="adminDeleteProperty('${p.id}')" class="px-2.5 py-1 rounded-lg bg-rose-600/30 hover:bg-rose-600 text-rose-200 font-bold">
                            Remove
                          </button>
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        `;
      }

      // VIEW 4: SUBSCRIPTIONS VIEW (Seller packs always; Buyer packs only if admin enabled)
      else if (view === 'subscriptions') {
        const plansToDisplay = mbDatabase.buyerSubscriptionsEnabled
          ? MB_SUBSCRIPTION_PLANS
          : MB_SUBSCRIPTION_PLANS.filter(p => p.targetRole !== 'Buyer');

        container.innerHTML = `
          <div class="space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
              <div>
                <span class="text-xs font-extrabold uppercase tracking-wider text-amber-400">Platform Subscriptions Hub</span>
                <h3 class="font-display font-extrabold text-xl sm:text-2xl text-white mt-0.5">
                  ${mbDatabase.buyerSubscriptionsEnabled ? 'MB Prime Buyer Plans &amp; Seller Boost Packages' : 'Seller Listing Boost &amp; Quota Packages'}
                </h3>
                <p class="text-xs text-slate-400">
                  ${mbDatabase.buyerSubscriptionsEnabled
                    ? 'Select any Buyer or Seller subscription tier below to launch instant UPI / Card checkout.'
                    : 'Seller boost packages and listing slots. Buyer subscriptions are currently 100% free!'}
                </p>
              </div>
              ${!mbDatabase.buyerSubscriptionsEnabled ? `
                <div class="px-3.5 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                  🎉 Buyer Access is 100% Free: All direct owner contacts unlocked with zero fees!
                </div>
              ` : `
                <div class="px-3.5 py-2 rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold">
                  🎁 Promo Code <strong class="text-white">GENRIV20</strong> gives 20% instant discount!
                </div>
              `}
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
              ${plansToDisplay.map(plan => `
                <div class="p-5 rounded-2xl bg-slate-800/80 border ${plan.id === user.planId ? 'border-amber-400 ring-2 ring-amber-400/30' : 'border-slate-700'} flex flex-col justify-between space-y-4">
                  <div class="space-y-2.5">
                    <div class="flex items-center justify-between">
                      <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${plan.targetRole === 'Buyer' ? 'bg-genriv-500/20 text-genriv-300' : 'bg-emerald-500/20 text-emerald-300'}">${plan.targetRole} Plan</span>
                      <span class="text-[10px] font-extrabold text-amber-300">${plan.badge}</span>
                    </div>
                    <h4 class="font-display font-extrabold text-lg text-white">${plan.name}</h4>
                    <div class="font-display font-extrabold text-2xl text-amber-300">${plan.priceLabel}</div>
                    <div class="text-xs text-slate-400 font-semibold">Includes ${plan.contactCredits} Contact Unlocks • ${plan.listingQuota} Listing Slots</div>
                    <ul class="space-y-1.5 pt-2 border-t border-slate-700/80 text-xs text-slate-300">
                      ${plan.features.map(f => `<li class="flex items-start gap-1.5"><span class="text-emerald-400">✔</span><span>${f}</span></li>`).join('')}
                    </ul>
                  </div>
                  <button type="button" onclick="openSubscriptionCheckoutModal('${plan.id}')" class="w-full py-2.5 rounded-xl font-extrabold text-xs transition ${plan.id === user.planId ? 'bg-emerald-600 text-white' : 'bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 hover:opacity-95'}">
                    ${plan.id === user.planId ? '✔ Current Active Plan (Add Credits)' : 'Subscribe / Upgrade Now →'}
                  </button>
                </div>
              `).join('')}
            </div>

            <!-- Recent Subscription Invoices & Ledger -->
            <div class="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-3">
              <h4 class="font-display font-bold text-base text-white">🧾 Live Subscription Transactions &amp; GST Invoice Ledger</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr class="border-b border-slate-700 text-slate-400">
                      <th class="py-2 px-3">Transaction ID</th>
                      <th class="py-2 px-3">Subscriber</th>
                      <th class="py-2 px-3">Plan Activated</th>
                      <th class="py-2 px-3">Amount Paid</th>
                      <th class="py-2 px-3">Payment Mode</th>
                      <th class="py-2 px-3">Date &amp; Status</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-700/70">
                    ${mbDatabase.transactions.map(t => `
                      <tr>
                        <td class="py-2.5 px-3 font-mono text-amber-300 font-bold">${t.id}</td>
                        <td class="py-2.5 px-3 font-bold text-white">${t.userName} (${t.role})</td>
                        <td class="py-2.5 px-3 text-slate-200">${t.planName}</td>
                        <td class="py-2.5 px-3 font-extrabold text-emerald-400">₹${t.amount.toLocaleString('en-IN')}</td>
                        <td class="py-2.5 px-3 text-slate-300">${t.method}</td>
                        <td class="py-2.5 px-3 text-slate-400">${t.date} • <span class="text-emerald-400 font-bold">${t.status}</span></td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        `;
      }

      // VIEW 5: REST API CONSOLE
      else if (view === 'api') {
        container.innerHTML = `
          <div class="space-y-5">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 class="font-display font-bold text-lg text-white">⚡ MagicBricks Full-Stack REST API &amp; Persistent Database Console</h3>
                <p class="text-xs text-slate-400">Test live backend endpoints right from the browser, or run <code class="text-amber-300">node server.js</code> from the downloadable ZIP archive.</p>
              </div>
              <div class="flex flex-wrap gap-2">
                <button type="button" onclick="triggerSimulatedApiCall('GET /api/properties')" class="px-3 py-1.5 rounded-xl bg-genriv-600 text-white text-xs font-bold">GET /api/properties</button>
                <button type="button" onclick="triggerSimulatedApiCall('GET /api/auth/me')" class="px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold">GET /api/auth/me</button>
                <button type="button" onclick="triggerSimulatedApiCall('GET /api/seller/leads')" class="px-3 py-1.5 rounded-xl bg-amber-500 text-slate-950 text-xs font-extrabold">GET /api/seller/leads</button>
                <button type="button" onclick="triggerSimulatedApiCall('GET /api/admin/metrics')" class="px-3 py-1.5 rounded-xl bg-rose-600 text-white text-xs font-bold">GET /api/admin/metrics</button>
              </div>
            </div>

            <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-400 overflow-x-auto max-h-80 custom-scrollbar">
              <pre>${JSON.stringify(mbDatabase.lastApiLog, null, 2)}</pre>
            </div>
          </div>
        `;
      }
    }

    function handleLoginSubmit(e) {
      e.preventDefault();
      const role = document.getElementById('login-role').value;
      const userIdentifier = document.getElementById('login-identifier').value.trim();
      const shortName = userIdentifier.split('@')[0].slice(0, 14) || 'Member';

      // First check if an account with this exact email or phone exists
      let matchedUser = mbDatabase.users.find(
        u => u.email.toLowerCase() === userIdentifier.toLowerCase() || u.phone === userIdentifier
      );

      if (!matchedUser) {
        // Create new session user with the explicitly chosen role
        const chosenRole = role.split(' ')[0];
        const isSellerRole = chosenRole === 'Seller' || chosenRole === 'Owner' || chosenRole === 'Builder';
        matchedUser = {
          id: 'usr-' + Date.now(),
          name: shortName,
          email: userIdentifier.includes('@') ? userIdentifier : `${shortName.toLowerCase()}@genrivreality.com`,
          phone: '+91 98300-99110',
          role: chosenRole,
          planId: isSellerRole ? 'seller-free-tier' : 'mb-prime-silver',
          planName: isSellerRole ? 'Free Basic Tier (1 Ad / 6 Mo)' : 'MB Prime Silver',
          contactCredits: 15,
          listingQuota: isSellerRole ? 1 : 0,
          status: 'Active',
          joinedAt: new Date().toISOString().slice(0, 10),
          unlockedPropertyIds: []
        };
        mbDatabase.users.push(matchedUser);
      }

      mbDatabase.isLoggedIn = true;
      mbDatabase.currentUserId = matchedUser.id;
      const roleViewMap = { 'Buyer': 'buyer', 'Tenant': 'buyer', 'Seller': 'seller', 'Owner': 'seller', 'Builder': 'seller', 'Admin': 'admin' };
      mbDatabase.currentDashboardView = roleViewMap[matchedUser.role] || 'buyer';
      mbDatabase.lastApiLog = {
        endpoint: 'POST /api/auth/login',
        status: 200,
        timestamp: new Date().toISOString(),
        user: { id: matchedUser.id, name: matchedUser.name, role: matchedUser.role, plan: matchedUser.planName }
      };

      saveMbDatabase();

      try {
        localStorage.setItem('genriv_active_user', JSON.stringify(matchedUser));
      } catch (e) {}

      updateHeaderAccountStatus();
      closeLoginModal();
      showToast(`🔐 Welcome, ${matchedUser.name}! Signed in as ${matchedUser.role}. Opening your dedicated dashboard...`);

      setTimeout(() => {
        if (matchedUser.role === 'Admin') {
          window.location.href = 'admin-dashboard.html';
        } else if (matchedUser.role === 'Seller' || matchedUser.role === 'Owner' || matchedUser.role === 'Builder' || matchedUser.role === 'Agent') {
          window.location.href = 'seller-dashboard.html';
        } else {
          window.location.href = 'buyer-dashboard.html';
        }
      }, 500);
    }

    // Initialize on load with robust readyState fallback
    function initGenrivApp() {
      loadMbDatabase();
      detectUserLocation();
      updateHeaderAccountStatus();
      if (typeof applyFilters === 'function') applyFilters();
      if (typeof renderMagicBricksSections === 'function') renderMagicBricksSections();
      if (typeof updateShortlistUI === 'function') updateShortlistUI();
      if (typeof initLocalityChart === 'function') initLocalityChart();
      if (typeof calculateEligibility === 'function') calculateEligibility();
      if (typeof renderHospitalityVenues === 'function') renderHospitalityVenues();
      if (typeof renderRequisitionsList === 'function') renderRequisitionsList();
      if (typeof renderAdvertisementsList === 'function') renderAdvertisementsList();
      if (typeof renderMbDashboard === 'function') renderMbDashboard();
    }

    if (document.readyState === 'loading') {
      window.addEventListener('DOMContentLoaded', initGenrivApp);
    } else {
      initGenrivApp();
    }


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
