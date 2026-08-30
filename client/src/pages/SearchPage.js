import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';

const allProducts = [
  { _id: 'n1', name: 'Pearl Gold Necklace Set', price: 1899, originalPrice: 2499, images: ['/images/n1.jpg'] },
  { _id: 'n2', name: 'Antique Temple Necklace Set', price: 2199, originalPrice: 2799, images: ['/images/n2.jpg'] },
  { _id: 'n3', name: 'Kundan Choker Necklace Set', price: 2499, originalPrice: 3199, images: ['/images/n3.jpg'] },
  { _id: 'n4', name: 'Gold Layered Necklace Set', price: 1799, originalPrice: 2299, images: ['/images/n4.jpg'] },
  { _id: 'n5', name: 'Ruby Stone Necklace Set', price: 2899, originalPrice: 3499, images: ['/images/n5.jpg'] },
  { _id: 'e1', name: 'Gold Jhumka Earrings Set', price: 799, originalPrice: 999, images: ['/images/e1.jpg'] },
  { _id: 'e2', name: 'Pearl Drop Earrings Set', price: 699, originalPrice: 899, images: ['/images/e2.jpg'] },
  { _id: 'e3', name: 'Kundan Stud Earrings Set', price: 499, originalPrice: 699, images: ['/images/e3.jpg'] },
  { _id: 'e4', name: 'Chandbali Earrings Set', price: 899, originalPrice: 1199, images: ['/images/e4.jpg'] },
  { _id: 'e5', name: 'Antique Gold Earrings Set', price: 599, originalPrice: 799, images: ['/images/e5.jpg'] },
  { _id: 'b1', name: 'Gold Bangles Set', price: 1299, originalPrice: 1699, images: ['/images/b1.jpg'] },
  { _id: 'b2', name: 'Kundan Bangles Set', price: 1499, originalPrice: 1999, images: ['/images/b2.jpg'] },
  { _id: 'b3', name: 'Traditional Gold Bangles Set', price: 999, originalPrice: 1299, images: ['/images/b3.jpg'] },
  { _id: 'b4', name: 'Stone Bangles Set', price: 1399, originalPrice: 1799, images: ['/images/b4.jpg'] },
  { _id: 'b5', name: 'Bridal Bangles Set', price: 1899, originalPrice: 2499, images: ['/images/b5.jpg'] },
  { _id: 'r1', name: 'Floral Gold Ring Set', price: 599, originalPrice: 799, images: ['/images/r1.jpg'] },
  { _id: 'r2', name: 'Stone Studded Ring Set', price: 699, originalPrice: 899, images: ['/images/r2.jpg'] },
  { _id: 'r3', name: 'Kundan Ring Set', price: 549, originalPrice: 749, images: ['/images/r3.jpg'] },
  { _id: 'r4', name: 'Cocktail Ring Set', price: 799, originalPrice: 999, images: ['/images/r4.jpg'] },
  { _id: 'r5', name: 'Classic Gold Ring Set', price: 449, originalPrice: 599, images: ['/images/r5.jpg'] },
  { _id: 'd1', name: 'Grand Bridal Jewellery Set', price: 3499, originalPrice: 4499, images: ['/images/d1.jpg'] },
  { _id: 'd2', name: 'Kundan Bridal Set', price: 4999, originalPrice: 5999, images: ['/images/d2.jpg'] },
  { _id: 'd3', name: 'Temple Bridal Jewellery Set', price: 3999, originalPrice: 4999, images: ['/images/d3.jpg'] },
  { _id: 'd4', name: 'Pearl Bridal Set', price: 2999, originalPrice: 3999, images: ['/images/d4.jpg'] },
  { _id: 'd5', name: 'Royal Bridal Combo Set', price: 5999, originalPrice: 7499, images: ['/images/d5.jpg'] },
];

const SearchPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';

  const results = allProducts.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ background: '#FFF8F0', minHeight: '80vh' }}>

      {/* Header */}
      <div style={{
        background: '#512815',
        padding: '40px 60px',
      }}>
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '2rem', color: '#FFF8F0', marginBottom: '8px'
        }}>
          Search Results
        </h1>
        <p style={{ color: '#A0522D', fontSize: '14px' }}>
          {results.length} result(s) for "<span style={{ color: '#E8A84C' }}>{query}</span>"
        </p>
      </div>

      {/* Results */}
      <div style={{ padding: '50px 60px' }}>
        {results.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <div style={{ fontSize: '60px', marginBottom: '20px' }}>🔍</div>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              color: '#512815', marginBottom: '12px'
            }}>No Products Found</h2>
            <p style={{ color: '#6B3A1F', fontSize: '14px' }}>
              No results for "<strong>{query}</strong>". Try searching for necklace, earrings, bangles, rings or bridal.
            </p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px'
          }}>
            {results.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default SearchPage;