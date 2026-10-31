const fs = require('fs');
let s = fs.readFileSync('seller-dashboard.html', 'utf8');
const target = 'Edit Profile KYC';
const idx = s.indexOf(target);
if (idx !== -1) {
  const btnStart = s.lastIndexOf('<button', idx);
  const btnEnd = s.indexOf('</button>', idx) + 9;
  const newBtn = `<button type="button" onclick="openEditKycModal()" class="px-4 py-2 rounded-xl bg-genriv-600 hover:bg-genriv-700 text-white text-xs font-bold transition shadow-sm flex items-center gap-1.5">
          <span>✏️</span> <span>Edit Profile KYC</span>
        </button>`;
  s = s.slice(0, btnStart) + newBtn + s.slice(btnEnd);
  fs.writeFileSync('seller-dashboard.html', s, 'utf8');
  console.log('✅ Replaced Edit Profile KYC button successfully');
} else {
  console.log('Target not found');
}
