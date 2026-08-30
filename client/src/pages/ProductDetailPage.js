import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaShoppingBag } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { toast } from 'react-toastify';

const allProductsFlat = [
  { _id: 'n1', name: 'Pearl Gold Necklace Set', price: 1899, originalPrice: 2499, images: ['/images/n1.jpg'], desc: 'A stunning pearl gold necklace set crafted in one gram gold, perfect for weddings and festive occasions. Comes with matching earrings.' },
  { _id: 'n2', name: 'Antique Temple Necklace Set', price: 2199, originalPrice: 2799, images: ['/images/n2.jpg'], desc: 'Exquisite antique temple necklace inspired by traditional South Indian designs. Perfect for bridal and festive wear.' },
  { _id: 'n3', name: 'Kundan Choker Necklace Set', price: 2499, originalPrice: 3199, images: ['/images/n3.jpg'], desc: 'Beautiful kundan choker necklace set with intricate stonework. A must-have for every jewellery collection.' },
  { _id: 'n4', name: 'Gold Layered Necklace Set', price: 1799, originalPrice: 2299, images: ['/images/n4.jpg'], desc: 'Elegant multi-layered gold necklace set perfect for both casual and formal occasions.' },
  { _id: 'n5', name: 'Ruby Stone Necklace Set', price: 2899, originalPrice: 3499, images: ['/images/n5.jpg'], desc: 'Gorgeous ruby stone necklace set with gold plating. Perfect for special occasions and celebrations.' },
  { _id: 'e1', name: 'Gold Jhumka Earrings Set', price: 799, originalPrice: 999, images: ['/images/e1.jpg'], desc: 'Classic gold jhumka earrings with intricate detailing. Lightweight and comfortable for all-day wear.' },
  { _id: 'e2', name: 'Pearl Drop Earrings Set', price: 699, originalPrice: 899, images: ['/images/e2.jpg'], desc: 'Delicate pearl drop earrings that add elegance to any outfit. Perfect for daily wear.' },
  { _id: 'e3', name: 'Kundan Stud Earrings Set', price: 499, originalPrice: 699, images: ['/images/e3.jpg'], desc: 'Beautiful kundan stud earrings with sparkling stones. Ideal for office and casual wear.' },
  { _id: 'e4', name: 'Chandbali Earrings Set', price: 899, originalPrice: 1199, images: ['/images/e4.jpg'], desc: 'Traditional chandbali earrings with moon-shaped design. Perfect for festive and bridal occasions.' },
  { _id: 'e5', name: 'Antique Gold Earrings Set', price: 599, originalPrice: 799, images: ['/images/e5.jpg'], desc: 'Stunning antique gold finish earrings with traditional motifs. A timeless piece for your collection.' },
  { _id: 'b1', name: 'Gold Bangles Set', price: 1299, originalPrice: 1699, images: ['/images/b1.jpg'], desc: 'Premium one gram gold bangles featuring traditional motifs. Perfect for daily wear or special occasions.' },
  { _id: 'b2', name: 'Kundan Bangles Set', price: 1499, originalPrice: 1999, images: ['/images/b2.jpg'], desc: 'Elegant kundan bangles with sparkling stone work. A perfect addition to your festive wardrobe.' },
  { _id: 'b3', name: 'Traditional Gold Bangles Set', price: 999, originalPrice: 1299, images: ['/images/b3.jpg'], desc: 'Classic traditional gold bangles that complement every Indian outfit beautifully.' },
  { _id: 'b4', name: 'Stone Bangles Set', price: 1399, originalPrice: 1799, images: ['/images/b4.jpg'], desc: 'Beautiful stone studded bangles in gold plating. Perfect for weddings and celebrations.' },
  { _id: 'b5', name: 'Bridal Bangles Set', price: 1899, originalPrice: 2499, images: ['/images/b5.jpg'], desc: 'Luxurious bridal bangles set with intricate craftsmanship. Make your wedding day even more special.' },
  { _id: 'r1', name: 'Floral Gold Ring Set', price: 599, originalPrice: 799, images: ['/images/r1.jpg'], desc: 'A delicate floral gold ring with intricate detailing, perfect for everyday elegance.' },
  { _id: 'r2', name: 'Stone Studded Ring Set', price: 699, originalPrice: 899, images: ['/images/r2.jpg'], desc: 'Beautiful stone studded ring in gold plating. Perfect for special occasions and daily wear.' },
  { _id: 'r3', name: 'Kundan Ring Set', price: 549, originalPrice: 749, images: ['/images/r3.jpg'], desc: 'Elegant kundan ring with traditional stone work. A perfect piece for festive occasions.' },
  { _id: 'r4', name: 'Cocktail Ring Set', price: 799, originalPrice: 999, images: ['/images/r4.jpg'], desc: 'Statement cocktail ring that adds glamour to any outfit. Perfect for parties and events.' },
  { _id: 'r5', name: 'Classic Gold Ring Set', price: 449, originalPrice: 599, images: ['/images/r5.jpg'], desc: 'Classic gold ring that goes with every outfit. A timeless piece for everyday wear.' },
  { _id: 'd1', name: 'Grand Bridal Jewellery Set', price: 3499, originalPrice: 4499, images: ['/images/d1.jpg'], desc: 'A grand bridal jewellery set crafted with finest one gram gold. Makes your special day unforgettable.' },
  { _id: 'd2', name: 'Kundan Bridal Set', price: 4999, originalPrice: 5999, images: ['/images/d2.jpg'], desc: 'Exquisite kundan bridal set with matching necklace, earrings and bangles. Perfect for weddings.' },
  { _id: 'd3', name: 'Temple Bridal Jewellery Set', price: 3999, originalPrice: 4999, images: ['/images/d3.jpg'], desc: 'Traditional temple design bridal jewellery set inspired by South Indian craftsmanship.' },
  { _id: 'd4', name: 'Pearl Bridal Set', price: 2999, originalPrice: 3999, images: ['/images/d4.jpg'], desc: 'Elegant pearl bridal set with gold plating. A beautiful choice for your wedding day.' },
  { _id: 'd5', name: 'Royal Bridal Combo Set', price: 5999, originalPrice: 7499, images: ['/images/d5.jpg'], desc: 'A royal complete bridal combo set including necklace, earrings, bangles and rings.' },
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);

  const product = allProductsFlat.find(p => p._id === id) || allProductsFlat[0];
  const inWishlist = isInWishlist(product._id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success('Added to cart! 🛒');
  };

  const handleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product._id);
      toast.info('Removed from wishlist');
    } else {
      addToWishlist(product);
      toast.success('Added to wishlist ❤️');
    }
  };

  return (
    <div style={{ background: '#FFF8F0', minHeight: '80vh' }}>

      {/* Breadcrumb */}
      <div style={{
        padding: '16px 60px',
        background: '#FFF0DC',
        borderBottom: '1px solid #E8D5B0',
        fontSize: '13px', color: '#6B3A1F'
      }}>
        <Link to="/" style={{ color: '#6B3A1F', textDecoration: 'none' }}>Home</Link>
        {' / '}
        <Link to="/products" style={{ color: '#6B3A1F', textDecoration: 'none' }}>Collection</Link>
        {' / '}
        <span style={{ color: '#512815', fontWeight: '500' }}>{product.name}</span>
      </div>

      <div style={{ padding: '50px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>

          {/* Image */}
          <div style={{
            background: '#FFF0DC',
            borderRadius: '12px', padding: '40px',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #E8D5B0'
          }}>
            <img src={product.images[0]} alt={product.name}
              style={{ width: '100%', maxHeight: '450px', objectFit: 'contain' }} />
          </div>

          {/* Info */}
          <div>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '2.2rem', color: '#512815', marginBottom: '16px'
            }}>{product.name}</h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <span style={{ color: '#C8862A', fontSize: '28px', fontWeight: '700' }}>
                ₹{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span style={{ color: '#bbb', fontSize: '18px', textDecoration: 'line-through' }}>
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
              {product.originalPrice && (
                <span style={{
                  background: '#512815', color: '#E8A84C',
                  fontSize: '11px', padding: '4px 10px',
                  borderRadius: '4px', fontWeight: '600'
                }}>
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>

            <p style={{ color: '#6B3A1F', fontSize: '14px', lineHeight: '1.9', marginBottom: '30px' }}>
              {product.desc}
            </p>

            {/* Quantity */}
            <div style={{ marginBottom: '30px' }}>
              <div style={{ fontSize: '13px', color: '#512815', marginBottom: '10px', fontWeight: '600' }}>
                Quantity
              </div>
              <div style={{
                display: 'flex', alignItems: 'center',
                width: 'fit-content', border: '1.5px solid #E8D5B0',
                borderRadius: '6px', overflow: 'hidden'
              }}>
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  style={{
                    padding: '10px 18px', background: '#FFF0DC',
                    border: 'none', cursor: 'pointer',
                    fontSize: '16px', color: '#512815'
                  }}>−</button>
                <span style={{ padding: '10px 20px', fontSize: '15px', color: '#512815', fontWeight: '600' }}>
                  {quantity}
                </span>
                <button onClick={() => setQuantity(q => q + 1)}
                  style={{
                    padding: '10px 18px', background: '#FFF0DC',
                    border: 'none', cursor: 'pointer',
                    fontSize: '16px', color: '#512815'
                  }}>+</button>
              </div>
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '30px' }}>
              <button onClick={handleAddToCart} className="btn-primary"
                style={{
                  display: 'flex', alignItems: 'center',
                  gap: '8px', flex: 1, justifyContent: 'center',
                  padding: '14px'
                }}>
                <FaShoppingBag /> ADD TO CART
              </button>
              <button onClick={handleWishlist} style={{
                width: '52px', height: '52px',
                border: '1.5px solid #C8862A',
                borderRadius: '6px',
                background: inWishlist ? '#C8862A' : 'transparent',
                color: inWishlist ? '#fff' : '#C8862A',
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', cursor: 'pointer',
                fontSize: '18px'
              }}>
                {inWishlist ? <FaHeart /> : <FaRegHeart />}
              </button>
            </div>

            {/* Trust Info */}
            <div style={{
              padding: '20px', background: '#FFF0DC',
              borderRadius: '8px', border: '1px solid #E8D5B0'
            }}>
              {[
                '✅ 100% Authentic One Gram Gold',
                '🔄 7 Days Easy Return & Exchange',
                '🚚 Free Shipping on orders above ₹999',
                '📦 Packed & Delivered in 3-5 Days',
              ].map((item, i) => (
                <div key={i} style={{
                  fontSize: '13px', color: '#6B3A1F',
                  marginBottom: i < 3 ? '8px' : '0'
                }}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;