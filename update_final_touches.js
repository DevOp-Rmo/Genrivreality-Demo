const fs = require('fs');
const path = require('path');

// 1. Update script.js
const scriptPath = path.join(__dirname, 'script.js');
let scriptJs = fs.readFileSync(scriptPath, 'utf8');

// Change featProps slice(0, 4) to slice(0, 8) and add link to property-detail.html
const oldFeatCode = `const featProps = properties.filter(p => p.isTopTen || p.isFeatured || p.city === targetCity).slice(0, 4);`;
const newFeatCode = `const featProps = properties.filter(p => p.isTopTen || p.isFeatured || p.city === targetCity).slice(0, 8);`;

if (scriptJs.includes(oldFeatCode)) {
  scriptJs = scriptJs.replace(oldFeatCode, newFeatCode);
  console.log('✅ Updated featProps to slice(0, 8)');
}

// Add clickable link to title in featured projects
const oldTitlePattern = `<h4 class="font-display font-extrabold text-sm sm:text-base text-slate-900 dark:text-white leading-snug truncate">\${p.title}</h4>`;
const newTitlePattern = `<h4 class="font-display font-extrabold text-sm sm:text-base text-slate-900 dark:text-white leading-snug truncate hover:text-genriv-600 transition"><a href="property-detail.html?id=\${p.id}">\${p.title}</a></h4>`;

if (scriptJs.includes(oldTitlePattern)) {
  scriptJs = scriptJs.replace(oldTitlePattern, newTitlePattern);
  console.log('✅ Added link to property-detail.html in featured projects card');
}

fs.writeFileSync(scriptPath, scriptJs, 'utf8');

// 2. Update index.html
const indexPath = path.join(__dirname, 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

// Update Featured Projects "View All" button
const oldViewAllBtn = `<button type="button" onclick="scrollToSection('listings-section')" class="text-xs sm:text-sm font-extrabold text-genriv-600 dark:text-amber-400 hover:underline flex items-center gap-1 shrink-0">
        <span>View All Top Projects in Kolkata</span>
        <span>→</span>
      </button>`;

const newViewAllBtn = `<a href="new-projects.html?city=Kolkata" class="px-3.5 py-2 rounded-xl bg-genriv-600 hover:bg-genriv-700 text-white text-xs sm:text-sm font-extrabold shadow-sm transition inline-flex items-center gap-1.5 shrink-0">
        <span>View All 8+ Projects in Kolkata</span>
        <span>→</span>
      </a>`;

if (indexHtml.includes(oldViewAllBtn)) {
  indexHtml = indexHtml.replace(oldViewAllBtn, newViewAllBtn);
  console.log('✅ Replaced Featured Projects View All button with link to new-projects.html');
}

// Update loan calculator CTA button to link to loan-calculator.html
const oldLoanCta = `<button type="button" onclick="showToast('Pre-approved loan sanction request forwarded to SBI, HDFC & ICICI Bank desk!')" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 hover:from-amber-300 hover:to-orange-300 text-slate-950 font-extrabold text-sm shadow-xl transition active:scale-95 flex items-center justify-center gap-2">
            <span>📄 Get Instant Bank Pre-Approved Loan Offer</span>
            <span>→</span>
          </button>`;

const newLoanCta = `<a href="loan-calculator.html" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 hover:from-amber-300 hover:to-orange-300 text-slate-950 font-extrabold text-sm shadow-xl transition active:scale-95 flex items-center justify-center gap-2 text-center">
            <span>📄 Get Instant Bank Pre-Approved Loan Offer</span>
            <span>→</span>
          </a>`;

if (indexHtml.includes(oldLoanCta)) {
  indexHtml = indexHtml.replace(oldLoanCta, newLoanCta);
  console.log('✅ Replaced loan CTA with direct link to loan-calculator.html');
}

// Update popular localities chips in index.html to have both setQuickSearch and a direct link to new-projects.html
const oldLocalitiesBlock = `<div class="flex flex-wrap gap-2 text-xs font-semibold">
          <button type="button" onclick="setQuickSearch('New Town')" class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-genriv-500 transition">
            🏢 New Town Action Area II (₹7,650/sq.ft.)
          </button>
          <button type="button" onclick="setQuickSearch('Salt Lake')" class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-genriv-500 transition">
            💼 Salt Lake Sector V (₹8,200/sq.ft.)
          </button>
          <button type="button" onclick="setQuickSearch('Rajarhat')" class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-genriv-500 transition">
            🌳 Rajarhat Chowmatha (₹5,400/sq.ft.)
          </button>
          <button type="button" onclick="setQuickSearch('EM Bypass')" class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-genriv-500 transition">
            🛣️ EM Bypass Anandapur (₹9,800/sq.ft.)
          </button>
          <button type="button" onclick="setQuickSearch('Alipore')" class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-genriv-500 transition">
            👑 Heritage Alipore (₹14,200/sq.ft.)
          </button>
        </div>`;

const newLocalitiesBlock = `<div class="flex flex-wrap gap-2 text-xs font-semibold">
          <a href="new-projects.html?city=Kolkata&locality=New+Town" class="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-genriv-500 hover:text-genriv-600 transition shadow-sm flex items-center gap-1.5">
            <span>🏢 New Town Action Area II</span>
            <span class="text-[10px] text-emerald-600 font-bold">(₹7,650/sq.ft.)</span>
          </a>
          <a href="new-projects.html?city=Kolkata&locality=Salt+Lake" class="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-genriv-500 hover:text-genriv-600 transition shadow-sm flex items-center gap-1.5">
            <span>💼 Salt Lake Sector V</span>
            <span class="text-[10px] text-emerald-600 font-bold">(₹8,200/sq.ft.)</span>
          </a>
          <a href="new-projects.html?city=Kolkata&locality=Rajarhat" class="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-genriv-500 hover:text-genriv-600 transition shadow-sm flex items-center gap-1.5">
            <span>🌳 Rajarhat Chowmatha</span>
            <span class="text-[10px] text-emerald-600 font-bold">(₹5,400/sq.ft.)</span>
          </a>
          <a href="new-projects.html?city=Kolkata&locality=EM+Bypass" class="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-genriv-500 hover:text-genriv-600 transition shadow-sm flex items-center gap-1.5">
            <span>🛣️ EM Bypass Anandapur</span>
            <span class="text-[10px] text-emerald-600 font-bold">(₹9,800/sq.ft.)</span>
          </a>
          <a href="new-projects.html?city=Kolkata&locality=Alipore" class="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-genriv-500 hover:text-genriv-600 transition shadow-sm flex items-center gap-1.5">
            <span>👑 Heritage Alipore</span>
            <span class="text-[10px] text-emerald-600 font-bold">(₹14,200/sq.ft.)</span>
          </a>
          <a href="new-projects.html?city=Kolkata&locality=Behala" class="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-genriv-500 hover:text-genriv-600 transition shadow-sm flex items-center gap-1.5">
            <span>🚇 Behala Chowrasta</span>
            <span class="text-[10px] text-emerald-600 font-bold">(₹4,890/sq.ft.)</span>
          </a>
          <a href="new-projects.html?city=Kolkata&locality=Jadavpur" class="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-genriv-500 hover:text-genriv-600 transition shadow-sm flex items-center gap-1.5">
            <span>🎓 Jadavpur Prince Anwar Shah</span>
            <span class="text-[10px] text-emerald-600 font-bold">(₹11,500/sq.ft.)</span>
          </a>
        </div>`;

if (indexHtml.includes(oldLocalitiesBlock)) {
  indexHtml = indexHtml.replace(oldLocalitiesBlock, newLocalitiesBlock);
  console.log('✅ Replaced popular localities block with visitable direct links');
}

fs.writeFileSync(indexPath, indexHtml, 'utf8');
console.log('✅ Successfully updated index.html with final touches');
