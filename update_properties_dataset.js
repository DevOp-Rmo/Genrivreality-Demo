const fs = require('fs');
const path = require('path');

// Read existing properties from seed.json
const seedPath = path.join(__dirname, 'db', 'seed.json');
const seed = JSON.parse(fs.readFileSync(seedPath, 'utf8'));

// Enhance every property with all required fields
seed.properties.forEach((p, idx) => {
  // Ensure tags is always an array
  if (!p.tags || !Array.isArray(p.tags) || p.tags.length === 0) {
    if (p.sellerRole === 'Property Owner' || idx % 2 === 0) {
      p.tags = ['Zero Brokerage', 'Direct Owner', 'Verified'];
      p.postedBy = 'Owner';
    } else if (p.sellerRole === 'Builder / Developer' || idx % 3 === 0) {
      p.tags = ['RERA Verified', 'Premier Township', 'Gated Community'];
      p.postedBy = 'Builder';
    } else {
      p.tags = ['Verified Agent', 'Immediate Possession'];
      p.postedBy = 'Agent';
    }
  } else {
    p.postedBy = p.postedBy || (p.sellerRole === 'Property Owner' ? 'Owner' : 'Builder');
  }

  p.builderName = p.sellerName || 'Sen Estates';
  p.rentalYield = p.rentalYield || (4.2 + (idx % 5) * 0.3).toFixed(1);
  p.possessionType = p.possessionType || 'Ready to Move';
  p.isFeatured = p.isFeatured || (idx < 10);
  p.isTopTen = p.isTopTen || (idx < 8);
  p.approvalStatus = 'Approved';
});

// Write to seed.json
fs.writeFileSync(seedPath, JSON.stringify(seed, null, 2), 'utf8');

// Write to properties-data.js with safe universal module export
const dataJsContent = `// Global Genriv Reality Properties Dataset (36+ Verified Properties)
// Compatible with both browser environments (window) and Node.js environments
var GENRIV_PROPERTIES_DATA = ${JSON.stringify(seed.properties, null, 2)};

if (typeof window !== 'undefined') {
  window.GENRIV_GLOBAL_PROPERTIES = GENRIV_PROPERTIES_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GENRIV_PROPERTIES_DATA;
}
`;

fs.writeFileSync(path.join(__dirname, 'properties-data.js'), dataJsContent, 'utf8');
console.log('✅ Successfully enhanced and synchronized 36 properties in seed.json & properties-data.js');
