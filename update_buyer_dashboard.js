const fs = require('fs');
const path = require('path');

const buyerHtmlPath = path.join(__dirname, 'buyer-dashboard.html');
let html = fs.readFileSync(buyerHtmlPath, 'utf8');

const buyerOnboardingSnippet = `
      // Check for first-time buyer signup onboarding
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('new_signup') === 'true') {
        const reqCard = document.getElementById('buyer-requisition-form-card');
        if (reqCard) {
          reqCard.classList.remove('hidden');
          const welcomeBanner = document.createElement('div');
          welcomeBanner.className = "mb-6 p-5 rounded-2xl bg-gradient-to-r from-genriv-600 via-indigo-600 to-acres-600 text-white shadow-xl flex items-center justify-between";
          welcomeBanner.innerHTML = \`
            <div>
              <div class="text-xs font-extrabold uppercase tracking-wider text-amber-300">👋 Welcome New Buyer / Tenant!</div>
              <div class="font-display font-extrabold text-lg mt-0.5">Step 1: Complete Your Customer Requisition Form</div>
              <p class="text-xs text-indigo-100 mt-1">Filling this 6-section form allows our matching engine to display properties filtered to your exact budget, BHK configuration, and preferred Kolkata localities.</p>
            </div>
            <button onclick="document.getElementById('buyer-requisition-form-card').scrollIntoView({behavior: 'smooth'})" class="px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-extrabold text-xs shadow-md">Fill Requisition Form ↓</button>
          \`;
          const mainContainer = document.querySelector('main');
          if (mainContainer) mainContainer.insertBefore(welcomeBanner, mainContainer.firstChild);
          reqCard.scrollIntoView({ behavior: 'smooth' });
        }
      }
`;

if (!html.includes('urlParams.get(\'new_signup\')')) {
  html = html.replace('initBuyerDashboard();', 'initBuyerDashboard();\n' + buyerOnboardingSnippet);
  fs.writeFileSync(buyerHtmlPath, html, 'utf8');
  console.log('✅ Injected new_signup onboarding handler into buyer-dashboard.html');
} else {
  console.log('Already present in buyer-dashboard.html');
}
