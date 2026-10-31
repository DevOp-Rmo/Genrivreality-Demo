const fs = require('fs');

// 1. Update styles.css with overflow visible rule for desktop
let css = fs.readFileSync('styles.css', 'utf8');
const navFixCss = `
@media (min-width: 1024px) {
  #main-12-tabs-nav {
    overflow: visible !important;
  }
  .tabs-nav-container {
    overflow: visible !important;
  }
}

.nav-dropdown-item {
  position: relative !important;
}

.nav-dropdown-menu,
.group:hover .group-hover\\:block {
  display: block !important;
  z-index: 9999 !important;
}
`;

if (!css.includes('#main-12-tabs-nav {')) {
  css += '\n' + navFixCss;
  fs.writeFileSync('styles.css', css, 'utf8');
  console.log('✅ Added overflow visible rule to styles.css');
}

// 2. In index.html, ensure classes have overflow-visible on lg
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Replace overflow-x-auto on main-12-tabs-nav with overflow-x-auto lg:overflow-visible
indexHtml = indexHtml.replace(
  'id="main-12-tabs-nav" class="flex items-center justify-start lg:justify-between gap-1 xl:gap-2 py-2 overflow-x-auto flex-nowrap custom-scrollbar"',
  'id="main-12-tabs-nav" class="flex items-center justify-start lg:justify-between gap-1 xl:gap-2 py-2 overflow-x-auto lg:overflow-visible flex-nowrap custom-scrollbar"'
);

// Also add click toggle support for sub-menus so mobile/touch users can tap to open
const dropdownClickScript = `
  <script>
    // Toggle sub-menu on click for touch/mobile devices
    document.addEventListener('click', function(e) {
      const dropdownBtn = e.target.closest('.nav-dropdown-item button, .relative.group button');
      if (dropdownBtn) {
        const parent = dropdownBtn.closest('.nav-dropdown-item, .relative.group');
        if (parent) {
          const menu = parent.querySelector('.nav-dropdown-menu, .group-hover\\\\:block, [class*="group-hover:block"]');
          if (menu) {
            const isHidden = menu.classList.contains('hidden');
            // Close other open menus
            document.querySelectorAll('.nav-dropdown-menu, [class*="group-hover:block"]').forEach(m => m.classList.add('hidden'));
            if (isHidden) {
              menu.classList.remove('hidden');
            }
          }
        }
      } else if (!e.target.closest('.nav-dropdown-menu, [class*="group-hover:block"]')) {
        // Clicked outside, close all
        document.querySelectorAll('.nav-dropdown-menu, [class*="group-hover:block"]').forEach(m => m.classList.add('hidden'));
      }
    });
  </script>
`;

if (!indexHtml.includes('// Toggle sub-menu on click for touch/mobile devices')) {
  indexHtml = indexHtml.replace('</body>', dropdownClickScript + '\n</body>');
  console.log('✅ Added click toggle script for sub-menus in index.html');
}

fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('✅ Updated index.html');
