import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaShoppingBag } from 'react-icons/fa';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product._id);
    toast.success('Moved to cart! 🛒');
  };

  if (wishlistItems.length === 0) {
    return (
      <div style={{ padding: '80px 60px', textAlign: 'center', background: '#fff' }}>
        <div style={{ fontSize: '60px', marginBottom: '20px' }}>❤️</div>
        <h2 style={{ fontFamily: 'Playfair Display, serif', color: '#2B2118', marginBottom: '12px' }}>
          Your Wishlist is Empty
        </h2>
        <p style={{ color: '#6B5D4F', marginBottom: '30px' }}>
          Save your favourite pieces here!
        </p>
        <Link to="/products">
          <button className="btn-primary">BROWSE COLLECTION</button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '50px 60px', background: '#fff' }}>
      <h1 style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: '2rem', color: '#2B2118', marginBottom: '10px'
      }}>My Wishlist</h1>
      <p style={{ color: '#6B5D4F', marginBottom: '40px' }}>{wishlistItems.length} item(s) saved</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px'
      }}>
        {wishlistItems.map((product) => (
          <div key={product._id} style={{
            border: '1px solid #EAE0CE',
            borderRadius: '8px', overflow: 'hidden',
            background: '#fff'
          }}>
            {/* Image */}
            <Link to={`/product/${product._id}`}>
              <div style={{ background: '#FAF6EF', padding: '20px' }}>
                <img src={product.images?.[0]} alt={product.name}
                  style={{ width: '100%', height: '170px', objectFit: 'contain' }} />
              </div>
            </Link>

            {/* Info */}
            <div style={{ padding: '16px' }}>
              <h3 style={{
                fontSize: '14px', color: '#2B2118',
                marginBottom: '8px', fontWeight: '500'
              }}>{product.name}</h3>
              <div style={{ color: '#C8862A', fontWeight: '600', fontSize: '16px', marginBottom: '16px' }}>
                ₹{product.price?.toLocaleString()}
              </div>

              {/* Buttons */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <button onClick={() => handleMoveToCart(product)}
                  style={{
                    flex: 1, background: '#C8862A', color: '#fff',
                    border: 'none', padding: '10px', fontSize: '12px',
                    cursor: 'pointer', borderRadius: '4px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'
                  }}>
                  <FaShoppingBag size={12} /> Add to Cart
                </button>
                <button onClick={() => removeFromWishlist(product._id)}
                  style={{
                    width: '40px', background: 'transparent',
                    border: '1px solid #EAE0CE', color: '#C8862A',
                    cursor: 'pointer', borderRadius: '4px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                  <FaTrash size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;