const fs = require('fs');
let s = fs.readFileSync('seller-dashboard.html', 'utf8');

const jsToAdd = `
    function openEditKycModal() {
      const activeUser = JSON.parse(localStorage.getItem('genriv_active_user') || '{}');
      if (activeUser.name) document.getElementById('kyc-company-name').value = activeUser.name;
      if (activeUser.phone) document.getElementById('kyc-phone').value = activeUser.phone;
      if (activeUser.email) document.getElementById('kyc-email').value = activeUser.email;
      const modal = document.getElementById('modal-edit-kyc');
      if (modal) modal.classList.remove('hidden');
    }

    function closeEditKycModal() {
      const modal = document.getElementById('modal-edit-kyc');
      if (modal) modal.classList.add('hidden');
    }

    function handleSaveKyc(e) {
      e.preventDefault();
      const name = document.getElementById('kyc-company-name').value;
      const rera = document.getElementById('kyc-rera-id').value;
      const phone = document.getElementById('kyc-phone').value;
      const email = document.getElementById('kyc-email').value;
      const cat = document.getElementById('kyc-category').value;

      let activeUser = JSON.parse(localStorage.getItem('genriv_active_user') || '{}');
      activeUser.name = name;
      activeUser.phone = phone;
      activeUser.email = email;
      activeUser.reraId = rera;
      activeUser.agentCategory = cat;
      localStorage.setItem('genriv_active_user', JSON.stringify(activeUser));

      const navName = document.getElementById('seller-nav-name');
      if (navName) navName.textContent = name;
      const initial = document.getElementById('seller-avatar-initial');
      if (initial) initial.textContent = (name[0] || 'S').toUpperCase();

      closeEditKycModal();
      showToast('✅ KYC Profile Updated and Verified Successfully!');
    }
`;

const lastScriptIdx = s.lastIndexOf('</script>');
if (lastScriptIdx !== -1) {
  s = s.slice(0, lastScriptIdx) + '\n' + jsToAdd + '\n' + s.slice(lastScriptIdx);
  fs.writeFileSync('seller-dashboard.html', s, 'utf8');
  console.log('✅ Injected openEditKycModal functions into seller-dashboard.html');
} else {
  console.log('</script> not found');
}
