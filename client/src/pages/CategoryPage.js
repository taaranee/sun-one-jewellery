import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';

const newArrivals = [
  { _id: 'na1', name: 'Pearl Gold Necklace Set', price: 1899, originalPrice: 2499, images: ['/images/n1.jpg'] },
  { _id: 'na2', name: 'Gold Jhumka Earrings Set', price: 799, originalPrice: 999, images: ['/images/e1.jpg'] },
  { _id: 'na3', name: 'Gold Bangles Set', price: 1299, originalPrice: 1699, images: ['/images/b1.jpg'] },
  { _id: 'na4', name: 'Floral Gold Ring Set', price: 599, originalPrice: 799, images: ['/images/r1.jpg'] },
  { _id: 'na5', name: 'Antique Temple Necklace Set', price: 2199, originalPrice: 2799, images: ['/images/n2.jpg'] },
  { _id: 'na6', name: 'Pearl Drop Earrings Set', price: 699, originalPrice: 899, images: ['/images/e2.jpg'] },
  { _id: 'na7', name: 'Grand Bridal Jewellery Set', price: 3499, originalPrice: 4499, images: ['/images/d1.jpg'] },
  { _id: 'na8', name: 'Stone Studded Ring Set', price: 699, originalPrice: 899, images: ['/images/r2.jpg'] },
];

const categoryTitles = {
  necklaces: 'Necklaces',
  earrings: 'Earrings',
  bangles: 'Bangles',
  rings: 'Rings',
  bridal: 'Bridal Collection',
  'new-arrivals': 'New Arrivals',
};

const CategoryPage = () => {
  const { slug } = useParams();
  const title = categoryTitles[slug] || 'Products';

  return (
    <div style={{ background: '#FFF8F0', minHeight: '80vh' }}>

      {/* Header */}
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
        }}>{title}</h1>
        <div style={{
          width: '50px', height: '3px',
          background: 'linear-gradient(90deg, #C8862A, #E8A84C)',
          margin: '14px auto 0', borderRadius: '2px'
        }} />
        <p style={{ color: '#A0522D', fontSize: '14px', marginTop: '14px' }}>
          A fresh combination of our finest pieces, just for you.
        </p>
      </div>

      {/* Products */}
      <div style={{ padding: '50px 60px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px'
        }}>
          {newArrivals.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default CategoryPage;