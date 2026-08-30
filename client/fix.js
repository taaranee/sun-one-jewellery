const fs = require('fs');

const pages = [
  ['src/pages/ProductsPage.js', 'ProductsPage'],
  ['src/pages/ProductDetailPage.js', 'ProductDetailPage'],
  ['src/pages/CartPage.js', 'CartPage'],
  ['src/pages/WishlistPage.js', 'WishlistPage'],
  ['src/pages/LoginPage.js', 'LoginPage'],
  ['src/pages/RegisterPage.js', 'RegisterPage'],
  ['src/pages/ProfilePage.js', 'ProfilePage'],
  ['src/pages/OrdersPage.js', 'OrdersPage'],
  ['src/pages/CheckoutPage.js', 'CheckoutPage'],
  ['src/pages/OrderConfirmPage.js', 'OrderConfirmPage'],
  ['src/pages/AboutPage.js', 'AboutPage'],
  ['src/pages/ContactPage.js', 'ContactPage'],
  ['src/pages/FAQPage.js', 'FAQPage'],
  ['src/pages/SearchPage.js', 'SearchPage'],
  ['src/pages/CategoryPage.js', 'CategoryPage'],
  ['src/pages/admin/AdminDashboard.js', 'AdminDashboard'],
  ['src/pages/admin/AdminProducts.js', 'AdminProducts'],
  ['src/pages/admin/AdminOrders.js', 'AdminOrders'],
  ['src/pages/admin/AdminCustomers.js', 'AdminCustomers'],
];

pages.forEach(([filePath, name]) => {
  const content = [
    "import React from 'react';",
    "function " + name + "() {",
    "  return React.createElement('div', {style:{color:'white',padding:'100px',textAlign:'center'}}, '" + name + " - Coming Soon');",
    "}",
    "export default " + name + ";",
    ""
  ].join('\n');
  
  fs.writeFileSync(filePath, content, { encoding: 'utf8' });
  console.log('Fixed: ' + filePath);
});

console.log('All done!');