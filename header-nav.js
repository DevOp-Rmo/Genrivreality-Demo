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
// Universal Theme Engine: Default to LIGHT mode across all pages
(function enforceDefaultTheme() {
  try {
    const saved = localStorage.getItem('genriv_theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      if (!saved) localStorage.setItem('genriv_theme', 'light');
    }
  } catch (e) {
    document.documentElement.classList.remove('dark');
  }
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



// =========================================================================
// =========================================================================
// UNIVERSAL IN-PLACE LOGIN MODAL (Injected on any page if not present)
// =========================================================================
function ensureUniversalLoginModal() {
  if (document.getElementById('login-portal-modal')) return;

  const modalHtml = `
  <div id="login-portal-modal" class="hidden fixed inset-0 z-[99999] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
      
      <!-- Modal Header -->
      <div class="p-6 bg-gradient-to-r from-genriv-600 to-indigo-700 text-white relative">
        <button type="button" onclick="closeUniversalLoginModal()" class="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center text-sm font-bold transition">✕</button>
        <span class="px-2.5 py-0.5 rounded-full bg-white/20 text-[10px] font-extrabold uppercase tracking-wider text-amber-300">GENRIV ONE-ID ACCESS</span>
        <h3 id="auth-modal-main-title" class="font-display font-extrabold text-xl mt-1">Sign In to Your Account</h3>
        <p class="text-xs text-indigo-100 mt-0.5">Secure verified portal for Buyers &amp; Sellers</p>
      </div>

      <!-- Tab Switcher -->
      <div class="flex border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-1.5 gap-1.5 m-4 rounded-2xl">
        <button type="button" id="auth-tab-btn-signin" onclick="switchUniversalAuthTab('signin')" class="flex-1 py-2 rounded-xl text-xs font-extrabold transition bg-white dark:bg-slate-900 text-genriv-700 dark:text-genriv-300 shadow-sm">
          🔑 Sign In
        </button>
        <button type="button" id="auth-tab-btn-signup" onclick="switchUniversalAuthTab('signup')" class="flex-1 py-2 rounded-xl text-xs font-bold transition text-slate-600 dark:text-slate-400 hover:text-slate-900">
          ✨ Sign Up (Free)
        </button>
      </div>

      <!-- FORM A: SIGN IN -->
      <form id="form-auth-signin" onsubmit="handleUniversalLoginSubmit(event)" class="p-6 pt-2 space-y-4">
        <div>
          <label for="login-role" class="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">Select Your Account Role</label>
          <select id="login-role" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
            <option value="Buyer">Buyer Account (MB Prime / Contact Unlocks)</option>
            <option value="Seller">Seller Account (Listings, Lead CRM &amp; Boost)</option>
          </select>
        </div>
        <div>
          <label for="login-identifier" class="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">Registered Email or Mobile Number *</label>
          <input id="login-identifier" type="text" required placeholder="e.g. debashis.seller@genrivreality.com or rajesh.buyer@genrivreality.com" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white" />
        </div>
        <div>
          <label for="login-secret" class="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">Password or 6-Digit Instant OTP *</label>
          <input id="login-secret" type="password" required value="123456" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white" />
        </div>
        <button type="submit" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-genriv-600 to-indigo-600 hover:from-genriv-700 hover:to-indigo-700 text-white font-extrabold text-sm shadow-lg transition">
          Sign In to Your Dedicated Dashboard →
        </button>
        <div class="text-center pt-1">
          <button type="button" onclick="switchUniversalAuthTab('signup')" class="text-xs font-bold text-genriv-600 dark:text-genriv-400 hover:underline">
            Don't have an account? Sign Up Free with Welcome Benefits
          </button>
        </div>
      </form>

      <!-- FORM B: SIGN UP -->
      <form id="form-auth-signup" onsubmit="handleUniversalSignupSubmit(event)" class="hidden p-6 pt-2 space-y-4">
        <div>
          <label for="signup-role" class="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">Select Account Type *</label>
          <select id="signup-role" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
            <option value="Buyer">Buyer Account (AI Smart Matching + 3 Free Unlocks)</option>
            <option value="Seller">Seller Account (1 Free Property Ad / 6 Months)</option>
          </select>
        </div>
        <div>
          <label for="signup-name" class="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">Full Legal Name *</label>
          <input id="signup-name" type="text" required placeholder="e.g. Anirban Roy" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white" />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label for="signup-email" class="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">Email Address *</label>
            <input id="signup-email" type="email" required placeholder="anirban@example.com" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white" />
          </div>
          <div>
            <label for="signup-phone" class="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">Mobile (+91) *</label>
            <input id="signup-phone" type="tel" required maxlength="10" placeholder="9830012345" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white" />
          </div>
        </div>
        <button type="submit" class="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-lg transition">
          Create Account Free &amp; Verify OTP →
        </button>
        <div class="text-center pt-1">
          <button type="button" onclick="switchUniversalAuthTab('signin')" class="text-xs font-bold text-genriv-600 dark:text-genriv-400 hover:underline">
            Already have an account? Sign In
          </button>
        </div>
      </form>

    </div>
  </div>
  `;

  const div = document.createElement('div');
  div.innerHTML = modalHtml;
  document.body.appendChild(div.firstElementChild);
}

function openUniversalLoginModal(tab = 'signin') {
  ensureUniversalLoginModal();
  const modal = document.getElementById('login-portal-modal');
  if (modal) {
    modal.classList.remove('hidden');
    switchUniversalAuthTab(tab);
  }
}
window.openUniversalLoginModal = openUniversalLoginModal;
window.openLoginModal = openUniversalLoginModal;

function closeUniversalLoginModal() {
  const modal = document.getElementById('login-portal-modal');
  if (modal) modal.classList.add('hidden');
}
window.closeUniversalLoginModal = closeUniversalLoginModal;
window.closeLoginModal = closeUniversalLoginModal;

function switchUniversalAuthTab(tab) {
  const fSignIn = document.getElementById('form-auth-signin');
  const fSignUp = document.getElementById('form-auth-signup');
  const btnIn = document.getElementById('auth-tab-btn-signin');
  const btnUp = document.getElementById('auth-tab-btn-signup');
  const title = document.getElementById('auth-modal-main-title');

  if (tab === 'signup') {
    if (fSignIn) fSignIn.classList.add('hidden');
    if (fSignUp) fSignUp.classList.remove('hidden');
    if (btnUp) btnUp.className = 'flex-1 py-2 rounded-xl text-xs font-extrabold transition bg-white dark:bg-slate-900 text-genriv-700 dark:text-genriv-300 shadow-sm';
    if (btnIn) btnIn.className = 'flex-1 py-2 rounded-xl text-xs font-bold transition text-slate-600 dark:text-slate-400 hover:text-slate-900';
    if (title) title.textContent = 'Create New Member Account';
  } else {
    if (fSignUp) fSignUp.classList.add('hidden');
    if (fSignIn) fSignIn.classList.remove('hidden');
    if (btnIn) btnIn.className = 'flex-1 py-2 rounded-xl text-xs font-extrabold transition bg-white dark:bg-slate-900 text-genriv-700 dark:text-genriv-300 shadow-sm';
    if (btnUp) btnUp.className = 'flex-1 py-2 rounded-xl text-xs font-bold transition text-slate-600 dark:text-slate-400 hover:text-slate-900';
    if (title) title.textContent = 'Sign In to Your Account';
  }
}
window.switchUniversalAuthTab = switchUniversalAuthTab;
window.switchAuthTab = switchUniversalAuthTab;

function handleUniversalLoginSubmit(e) {
  e.preventDefault();
  const roleEl = document.getElementById('login-role');
  const role = roleEl ? roleEl.value : 'Buyer';
  const idEl = document.getElementById('login-identifier');
  const identifier = idEl ? idEl.value.trim() : '';

  // Check for admin credentials
  if (identifier === 'super_user' || identifier.toLowerCase() === 'admin@genrivreality.com') {
    localStorage.setItem('genriv_is_logged_in', 'true');
    localStorage.setItem('genriv_active_user', JSON.stringify({
      id: identifier === 'super_user' ? 'usr-super' : 'usr-admin-1',
      name: identifier === 'super_user' ? 'Super Administrator' : 'Platform Administrator',
      email: identifier.includes('@') ? identifier : 'super_user@genrivreality.com',
      role: identifier === 'super_user' ? 'Super Admin' : 'Admin'
    }));
    showToast('🛡️ Admin Authenticated! Redirecting to Props Moderation Console...');
    setTimeout(() => { window.location.href = 'props.html'; }, 600);
    return;
  }

  // Handle Buyer or Seller
  const isSeller = role === 'Seller' || identifier.includes('seller');
  const activeUser = {
    id: isSeller ? 'usr-seller-1' : 'usr-buyer-1',
    name: isSeller ? 'Debashis Sen' : 'Rajesh Kumar',
    email: identifier || (isSeller ? 'debashis.seller@genrivreality.com' : 'rajesh.buyer@genrivreality.com'),
    phone: isSeller ? '+91 98310-77890' : '+91 98300-12345',
    role: isSeller ? 'Seller' : 'Buyer'
  };

  localStorage.setItem('genriv_is_logged_in', 'true');
  localStorage.setItem('genriv_active_user', JSON.stringify(activeUser));
  localStorage.setItem('genriv_current_user', JSON.stringify(activeUser));

  closeUniversalLoginModal();
  showToast(`✅ Signed in successfully as ${activeUser.name} (${activeUser.role})!`);

  setTimeout(() => {
    if (isSeller) {
      window.location.href = 'seller-dashboard.html';
    } else {
      // If currently on agents or detail page, reload to unlock contacts
      if (window.location.pathname.includes('agents.html') || window.location.pathname.includes('property-detail.html')) {
        window.location.reload();
      } else {
        window.location.href = 'buyer-dashboard.html';
      }
    }
  }, 700);
}
window.handleUniversalLoginSubmit = handleUniversalLoginSubmit;
if (typeof handleLoginSubmit !== 'function') window.handleLoginSubmit = handleUniversalLoginSubmit;

function handleUniversalSignupSubmit(e) {
  e.preventDefault();
  const role = (document.getElementById('signup-role') || {}).value || 'Buyer';
  const name = (document.getElementById('signup-name') || {}).value || 'New Member';
  const email = (document.getElementById('signup-email') || {}).value || 'user@genrivreality.com';
  const phone = (document.getElementById('signup-phone') || {}).value || '9830012345';

  const newUser = {
    id: 'usr-' + Date.now(),
    name: name,
    email: email,
    phone: '+91 ' + phone.replace(/[^0-9]/g, ''),
    role: role
  };

  localStorage.setItem('genriv_is_logged_in', 'true');
  localStorage.setItem('genriv_active_user', JSON.stringify(newUser));
  localStorage.setItem('genriv_current_user', JSON.stringify(newUser));

  closeUniversalLoginModal();
  showToast(`🎉 Welcome, ${name}! Account created as ${role}.`);

  setTimeout(() => {
    if (role === 'Seller') {
      window.location.href = 'seller-dashboard.html';
    } else {
      window.location.href = 'buyer-dashboard.html';
    }
  }, 700);
}
window.handleUniversalSignupSubmit = handleUniversalSignupSubmit;
if (typeof handleSignupSubmit !== 'function') window.handleSignupSubmit = handleUniversalSignupSubmit;

// Universal Navigation Handler: NEVER redirect to index.html on Login click
function switchMainTab(tab) {
  if (tab === 'login') {
    openUniversalLoginModal('signin');
    return;
  }
  // Other navigation tabs
  const routes = {
    'home': 'index.html',
    'sellers': 'seller-dashboard.html',
    'buyers': 'buyer-dashboard.html',
    'properties': 'properties.html',
    'agents': 'agents.html',
    'projects': 'new-projects.html'
  };
  if (routes[tab]) {
    window.location.href = routes[tab];
  }
}
window.switchMainTab = switchMainTab;

// =========================================================================
// UNIVERSAL CONTACT SECURITY & GATING ENGINE (Requirement 1, 3, 5)
// =========================================================================
function hasContactAccess() {
  // 1. Strict Login Check: Must be explicitly signed in
  const isLoggedIn = localStorage.getItem('genriv_is_logged_in') === 'true';
  if (!isLoggedIn) {
    return { allowed: false, reason: 'NOT_LOGGED_IN' };
  }

  let user = null;
  try {
    const raw = localStorage.getItem('genriv_current_user') || localStorage.getItem('genriv_active_user');
    if (raw) user = JSON.parse(raw);
  } catch (e) {}

  if (!user || !user.role || user.name === 'Guest User' || user.id === 'usr-guest') {
    return { allowed: false, reason: 'NOT_LOGGED_IN' };
  }

  // 2. Admins have direct access
  if (user.role === 'Admin' || user.role === 'Super Admin') {
    return { allowed: true, user: user };
  }

  // 3. Buyers and Sellers MUST have submitted the Customer Requisition Form
  let reqs = [];
  try {
    reqs = JSON.parse(localStorage.getItem('genriv_requisitions_v1') || '[]');
  } catch (e) {}

  const userEmail = (user.email || '').toLowerCase();
  const hasReq = reqs.some(r => 
    (r.customerEmail && r.customerEmail.toLowerCase() === userEmail) ||
    (r.email && r.email.toLowerCase() === userEmail) ||
    (user.lastRequisitionId && r.id === user.lastRequisitionId)
  );

  if (!hasReq) {
    return { allowed: false, reason: 'REQUISITION_REQUIRED', user: user };
  }

  return { allowed: true, user: user };
}
window.hasContactAccess = hasContactAccess;

function handleSecureContactClick(targetPhone, targetName, isWhatsApp = false) {
  const check = hasContactAccess();

  if (!check.allowed) {
    if (check.reason === 'NOT_LOGGED_IN') {
      showToast('🔒 Please Sign In first to unlock verified broker and owner contact numbers.');
      openUniversalLoginModal('signin');
      return;
    } else if (check.reason === 'REQUISITION_REQUIRED') {
      alert('📋 Customer Requisition Form Required:\n\nPlatform Rule: To view or call direct property owners & brokers, you must complete your Customer Requisition Form first.\n\nRedirecting you to your Buyer Dashboard to fill the form...');
      window.location.href = 'buyer-dashboard.html';
      return;
    }
  }

  // User has access
  const user = check.user;

  // Trigger simulated notification to seller/broker (Requirement 6.iii)
  showToast(`📩 Alert sent to ${targetName}: "${user.name} (${user.phone})" viewed your contact!`);

  // Register in Seller Leads CRM
  if (window.GenrivDB && typeof window.GenrivDB.addLead === 'function') {
    window.GenrivDB.addLead({
      id: 'LEAD-' + Math.floor(100 + Math.random() * 900),
      propertyTitle: `Direct Contact: ${targetName}`,
      buyerName: user.name,
      buyerPhone: user.phone,
      buyerEmail: user.email,
      status: 'Contacted',
      timestamp: new Date().toISOString().slice(0, 16).replace('T', ' ')
    });
  }

  if (isWhatsApp) {
    window.open(`https://wa.me/${targetPhone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(targetName)},%20I%20saw%20your%20listing%20on%20Genrivreality.`, '_blank');
  } else {
    alert(`📞 Verified Direct Line Connected:\n\nAdvisor: ${targetName}\nPhone: ${targetPhone}\nStatus: RERA Verified Partner\n\nClick OK to initiate telephone dialer.`);
    window.location.href = `tel:${targetPhone}`;
  }
}
window.handleSecureContactClick = handleSecureContactClick;
window.handleAgentContactClick = handleSecureContactClick;

// Explicit Logout function
function universalLogout() {
  localStorage.removeItem('genriv_is_logged_in');
  localStorage.removeItem('genriv_active_user');
  localStorage.removeItem('genriv_current_user');
  showToast('👋 You have signed out. Site is in Guest Mode.');
  setTimeout(() => { window.location.reload(); }, 600);
}
window.universalLogout = universalLogout;
