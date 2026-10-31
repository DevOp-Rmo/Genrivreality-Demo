const fs = require('fs');
let s = fs.readFileSync('seller-dashboard.html', 'utf8');

// Replace openQuickPostModal implementation so it activates the 12-section form every time
const oldQuickModalFunc = `function openQuickPostModal() {
      document.getElementById('modal-quick-post-property').classList.remove('hidden');
    }`;

const newQuickModalFunc = `function openQuickPostModal() {
      switchTab('advertisement-form');
      const form = document.getElementById('seller-page-advertisement-form');
      if (form) form.scrollIntoView({ behavior: 'smooth' });
      showToast('📋 Opening full 12-Section PROPERTY ADVERTISEMENT FORM...');
    }`;

if (s.includes(oldQuickModalFunc)) {
  s = s.replace(oldQuickModalFunc, newQuickModalFunc);
} else {
  // Replace via regex
  s = s.replace(/function openQuickPostModal\(\)\s*\{[^}]*\}/, newQuickModalFunc);
}

// Ensure the header link also switches to the 12-section form
s = s.replace(/onclick="openQuickPostModal\(\)"/g, "onclick=\"openQuickPostModal()\"");

fs.writeFileSync('seller-dashboard.html', s, 'utf8');
console.log('✅ Updated seller-dashboard.html: + Post a Property always opens the 12-section form');
