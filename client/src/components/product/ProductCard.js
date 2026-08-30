import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useWishlist } from '../../context/WishlistContext';
import { toast } from 'react-toastify';

const ProductCard = ({ product }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product._id);

  const handleWishlist = (e) => {
    e.preventDefault();
    if (inWishlist) {
      removeFromWishlist(product._id);
      toast.info('Removed from wishlist');
    } else {
      addToWishlist(product);
      toast.success('Added to wishlist ❤️');
    }
  };

  return (
    <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
      <div style={{
        border: '1px solid #E8D5B0', borderRadius: '10px',
        overflow: 'hidden', background: '#FFF8F0',
        transition: 'box-shadow 0.3s', cursor: 'pointer'
      }}
        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(59,26,8,0.12)'}
        onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>

        {/* Image */}
        <div style={{ position: 'relative', padding: '20px', background: '#FFF8F0' }}>
          <img src={product.images?.[0]} alt={product.name}
            style={{ width: '100%', height: '180px', objectFit: 'contain' }} />
          <button onClick={handleWishlist} style={{
            position: 'absolute', top: '14px', right: '14px',
            background: 'transparent', border: 'none',
            cursor: 'pointer', fontSize: '18px',
            color: inWishlist ? '#C8862A' : '#E8D5B0'
          }}>
            {inWishlist ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>

        {/* Info */}
        <div style={{ padding: '0 16px 18px', background: '#fff', borderTop: '1px solid #E8D5B0' }}>
          <h3 style={{
            fontSize: '14px', color: '#512815',
            margin: '12px 0 6px', fontWeight: '500',
            fontFamily: 'Poppins, sans-serif'
          }}>{product.name}</h3>
          <div style={{ color: '#C8862A', fontSize: '16px', fontWeight: '700' }}>
            ₹{product.price?.toLocaleString()}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;