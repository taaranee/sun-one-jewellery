import React, { useState } from 'react';
import ProductCard from '../components/product/ProductCard';

const allProducts = {
  necklaces: [
    { _id: 'n1', name: 'Pearl Gold Necklace Set', price: 1899, originalPrice: 2499, images: ['/images/n1.jpg'] },
    { _id: 'n2', name: 'Antique Temple Necklace Set', price: 2199, originalPrice: 2799, images: ['/images/n2.jpg'] },
    { _id: 'n3', name: 'Kundan Choker Necklace Set', price: 2499, originalPrice: 3199, images: ['/images/n3.jpg'] },
    { _id: 'n4', name: 'Gold Layered Necklace Set', price: 1799, originalPrice: 2299, images: ['/images/n4.jpg'] },
    { _id: 'n5', name: 'Ruby Stone Necklace Set', price: 2899, originalPrice: 3499, images: ['/images/n5.jpg'] },
  ],
  earrings: [
    { _id: 'e1', name: 'Gold Jhumka Earrings Set', price: 799, originalPrice: 999, images: ['/images/e1.jpg'] },
    { _id: 'e2', name: 'Pearl Drop Earrings Set', price: 699, originalPrice: 899, images: ['/images/e2.jpg'] },
    { _id: 'e3', name: 'Kundan Stud Earrings Set', price: 499, originalPrice: 699, images: ['/images/e3.jpg'] },
    { _id: 'e4', name: 'Chandbali Earrings Set', price: 899, originalPrice: 1199, images: ['/images/e4.jpg'] },
    { _id: 'e5', name: 'Antique Gold Earrings Set', price: 599, originalPrice: 799, images: ['/images/e5.jpg'] },
  ],
  bangles: [
    { _id: 'b1', name: 'Gold Bangles Set', price: 1299, originalPrice: 1699, images: ['/images/b1.jpg'] },
    { _id: 'b2', name: 'Kundan Bangles Set', price: 1499, originalPrice: 1999, images: ['/images/b2.jpg'] },
    { _id: 'b3', name: 'Traditional Gold Bangles Set', price: 999, originalPrice: 1299, images: ['/images/b3.jpg'] },
    { _id: 'b4', name: 'Stone Bangles Set', price: 1399, originalPrice: 1799, images: ['/images/b4.jpg'] },
    { _id: 'b5', name: 'Bridal Bangles Set', price: 1899, originalPrice: 2499, images: ['/images/b5.jpg'] },
  ],
  rings: [
    { _id: 'r1', name: 'Floral Gold Ring Set', price: 599, originalPrice: 799, images: ['/images/r1.jpg'] },
    { _id: 'r2', name: 'Stone Studded Ring Set', price: 699, originalPrice: 899, images: ['/images/r2.jpg'] },
    { _id: 'r3', name: 'Kundan Ring Set', price: 549, originalPrice: 749, images: ['/images/r3.jpg'] },
    { _id: 'r4', name: 'Cocktail Ring Set', price: 799, originalPrice: 999, images: ['/images/r4.jpg'] },
    { _id: 'r5', name: 'Classic Gold Ring Set', price: 449, originalPrice: 599, images: ['/images/r5.jpg'] },
  ],
  bridal: [
    { _id: 'd1', name: 'Grand Bridal Jewellery Set', price: 3499, originalPrice: 4499, images: ['/images/d1.jpg'] },
    { _id: 'd2', name: 'Kundan Bridal Set', price: 4999, originalPrice: 5999, images: ['/images/d2.jpg'] },
    { _id: 'd3', name: 'Temple Bridal Jewellery Set', price: 3999, originalPrice: 4999, images: ['/images/d3.jpg'] },
    { _id: 'd4', name: 'Pearl Bridal Set', price: 2999, originalPrice: 3999, images: ['/images/d4.jpg'] },
    { _id: 'd5', name: 'Royal Bridal Combo Set', price: 5999, originalPrice: 7499, images: ['/images/d5.jpg'] },
  ],
};

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('necklaces');

  const categories = [
    { key: 'necklaces', label: '📿 Necklaces' },
    { key: 'earrings', label: '✨ Earrings' },
    { key: 'bangles', label: '⚜️ Bangles' },
    { key: 'rings', label: '💍 Rings' },
    { key: 'bridal', label: '👑 Bridal Collection' },
  ];

  return (
    <div style={{ background: '#FFF8F0', minHeight: '80vh' }}>

      {/* Page Header */}
      <div style={{
        background: '#512815',
        padding: '50px 60px',
        textAlign: 'center'
      }}>
        <p style={{
          color: '#E8A84C', fontSize: '11px',
          letterSpacing: '4px', marginBottom: '10px', fontWeight: '600'
        }}>✦ SUN ONE JEWELLERY ✦</p>
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '2.5rem', color: '#FFF8F0'
        }}>Our Collection</h1>
        <div style={{
          width: '50px', height: '3px',
          background: 'linear-gradient(90deg, #C8862A, #E8A84C)',
          margin: '14px auto 0', borderRadius: '2px'
        }} />
      </div>

      <div style={{ padding: '40px 60px' }}>

        {/* Category Tabs */}
        <div style={{
          display: 'flex', justifyContent: 'center',
          gap: '12px', marginBottom: '40px', flexWrap: 'wrap'
        }}>
          {categories.map((cat) => (
            <button key={cat.key} onClick={() => setActiveCategory(cat.key)}
              style={{
                padding: '11px 26px', borderRadius: '25px',
                border: activeCategory === cat.key ? 'none' : '1.5px solid #E8D5B0',
                background: activeCategory === cat.key ? '#512815' : '#fff',
                color: activeCategory === cat.key ? '#E8A84C' : '#6B3A1F',
                fontSize: '13px', fontWeight: '600',
                cursor: 'pointer', transition: 'all 0.3s',
                fontFamily: 'Poppins, sans-serif',
                boxShadow: activeCategory === cat.key
                  ? '0 4px 12px rgba(59,26,8,0.2)' : 'none'
              }}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Category Title */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.8rem', color: '#512815'
          }}>
            {categories.find(c => c.key === activeCategory)?.label}
          </h2>
          <div style={{
            width: '40px', height: '2px',
            background: '#C8862A', margin: '10px auto 0',
            borderRadius: '2px'
          }} />
        </div>

        {/* Products Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '20px'
        }}>
          {allProducts[activeCategory].map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;