const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

const additionalCss = `
/* =========================================================================
   MAGICBRICKS-STYLE MEGA-MENU & DROPDOWN NAVIGATION STYLES
   ========================================================================= */
header.glass-panel,
.glass-panel {
  overflow: visible !important;
}

.nav-dropdown-item {
  position: relative;
}

.nav-dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 9999;
  min-width: 260px;
  background: #ffffff;
  border: 1px solid rgba(226, 232, 240, 0.95);
  border-radius: 1.25rem;
  box-shadow: 0 20px 40px -12px rgba(15, 23, 42, 0.22), 0 0 1px 1px rgba(0, 0, 0, 0.05);
  padding: 0.65rem;
  margin-top: 0.25rem;
  animation: dropdownFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.dark .nav-dropdown-menu {
  background: #0f172a;
  border-color: rgba(51, 65, 85, 0.95);
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.65);
}

@keyframes dropdownFadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-dropdown-item:hover > .nav-dropdown-menu,
.nav-dropdown-item:focus-within > .nav-dropdown-menu,
.nav-dropdown-item.open > .nav-dropdown-menu {
  display: block !important;
}

/* Featured Projects 1-Line Slider */
#featured-projects-grid {
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: nowrap !important;
  overflow-x: auto !important;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}

#featured-projects-grid > div {
  flex-shrink: 0 !important;
  width: 320px;
  scroll-snap-align: start;
}

@media (min-width: 640px) {
  #featured-projects-grid > div {
    width: 350px;
  }
}
`;

if (!css.includes('MAGICBRICKS-STYLE MEGA-MENU')) {
  css += additionalCss;
  fs.writeFileSync('styles.css', css, 'utf8');
  console.log('✅ Added dropdown & slider CSS to styles.css');
} else {
  console.log('Styles already present');
}
