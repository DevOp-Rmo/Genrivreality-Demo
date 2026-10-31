// =========================================================================
// UNIVERSAL HEADER & NAVIGATION CONTROLLER (Genrivreality)
// Works across index.html, properties.html, new-projects.html, agents.html, loan-calculator.html, property-detail.html
// =========================================================================

function showToast(message) {
  let toast = document.getElementById('genriv-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'genriv-toast';
    toast.className = 'fixed bottom-5 right-5 z-[99999] bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl text-xs font-bold transition-all duration-300 opacity-0 pointer-events-none transform translate-y-2 border border-slate-700/80';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
  toast.classList.add('opacity-100', 'translate-y-0');
  setTimeout(() => {
    toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
    toast.classList.remove('opacity-100', 'translate-y-0');
  }, 3200);
}

function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  try {
    localStorage.setItem('genriv_theme', isDark ? 'dark' : 'light');
  } catch (e) {}
  showToast(isDark ? '🌙 Switched to Dark Mode' : '☀️ Switched to Light Mode');
}

// Restore saved theme on load
(function restoreTheme() {
  try {
    const saved = localStorage.getItem('genriv_theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();

function toggleMobileMenu() {
  const drawer = document.getElementById('mobile-menu-drawer');
  if (drawer) drawer.classList.toggle('hidden');
}

function syncCityFilter(city) {
  try {
    localStorage.setItem('genriv_selected_city', city);
  } catch(e) {}
  
  if (window.location.pathname.includes('properties.html')) {
    if (typeof filterProperties === 'function') {
      const sel = document.getElementById('city-filter-select');
      if (sel) sel.value = city;
      filterProperties();
    }
  } else if (window.location.pathname.includes('new-projects.html')) {
    window.location.href = `new-projects.html?city=${encodeURIComponent(city)}`;
  } else if (window.location.pathname.includes('agents.html')) {
    window.location.href = `agents.html?city=${encodeURIComponent(city)}`;
  } else if (typeof applyCityLocation === 'function') {
    applyCityLocation(city, false);
  } else {
    window.location.href = `index.html?city=${encodeURIComponent(city)}`;
  }
}

function switchMainTab(tabKey) {
  if (tabKey === 'login') {
    if (typeof openLoginModal === 'function') {
      openLoginModal();
    } else {
      window.location.href = 'index.html?action=login';
    }
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
  if (tabKey === 'home') {
    window.location.href = 'index.html';
    return;
  }

  // Support, legal, publication
  if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
    const sec = document.getElementById('tab-portal-section');
    if (sec) {
      sec.classList.remove('hidden');
      if (typeof scrollToSection === 'function') scrollToSection('tab-portal-section');
      return;
    }
  }
  window.location.href = `index.html#${tabKey}`;
}

function openServiceModal(type) {
  if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
    // If on homepage, trigger existing modal
    const modal = document.getElementById('services-modal');
    if (modal) modal.classList.remove('hidden');
    return;
  }
  window.location.href = `index.html?service=${type}`;
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.location.href = `index.html#${id}`;
  }
}


function scrollSlider(id, direction) {
  const container = document.getElementById(id);
  if (!container) return;
  const card = container.querySelector('.property-slider-card') || container.firstElementChild;
  const scrollAmount = card ? (card.offsetWidth + 20) : 340;
  container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}
window.scrollSlider = scrollSlider;
