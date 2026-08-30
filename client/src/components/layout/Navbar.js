import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingBag, FaHeart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useWishlist } from '../../context/WishlistContext';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount } = useCart();
  const { user } = useAuth();
  const { wishlistItems } = useWishlist();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
      setSearchQuery('');
    }
  };

  return (
    <nav style={{ background: '#FFF8F0', borderBottom: '1px solid #E8D5B0' }}>

      {/* Top Bar */}
      <div style={{
        background: '#512815',
        padding: '10px 60px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '12px',
        color: '#E8A84C'
      }}>
        <span>🚚 Free Shipping on orders above ₹999</span>
        <span>🏷️ 10% Off on First Order | Use Code: SUN10</span>
        <span>📞 +91 98853 66722 / +91 97014 14472</span>
      </div>

      {/* Main Nav */}
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 60px',
        background: '#FFF8F0'
      }}>

        {/* Logo */}
        <Link to="/" style={{
          display: 'flex', alignItems: 'center',
          gap: '12px', textDecoration: 'none'
        }}>
          <img
            src="/images/logo.jpg"
            alt="Sun One Logo"
            style={{
              width: '65px', height: '65px',
              objectFit: 'contain'
            }}
          />
          <div>
            <div style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '1.5rem', color: '#512815',
              letterSpacing: '2px', fontWeight: '700',
              lineHeight: '1.2'
            }}>Sun One Gram</div>
            <div style={{
              fontSize: '9px', color: '#C8862A',
              letterSpacing: '2px', fontWeight: '600',
              marginTop: '3px', textTransform: 'uppercase'
            }}>Premium Imitated Jewellery</div>
          </div>
        </Link>

        {/* Search */}
        <form onSubmit={handleSearch} style={{
          flex: 1, maxWidth: '480px',
          margin: '0 40px', position: 'relative'
        }}>
          <input
            type="text"
            placeholder="Search for jewellery..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%', padding: '12px 50px 12px 18px',
              border: '1.5px solid #E8D5B0', borderRadius: '6px',
              fontSize: '13px', outline: 'none',
              fontFamily: 'Poppins, sans-serif',
              background: '#FFF8F0', color: '#512815'
            }}
          />
          <button type="submit" style={{
            position: 'absolute', right: '6px', top: '6px',
            bottom: '6px', width: '40px', background: '#C8862A',
            border: 'none', borderRadius: '4px', color: '#fff',
            cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center'
          }}>
            <FaSearch size={13} />
          </button>
        </form>

        {/* Icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>

          {/* Wishlist */}
          <Link to="/wishlist" style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            color: '#512815', fontSize: '13px',
            textDecoration: 'none', fontWeight: '500',
            position: 'relative'
          }}>
            <div style={{ position: 'relative' }}>
              <FaHeart style={{ color: wishlistItems.length > 0 ? '#C8862A' : '#512815' }} />
              {wishlistItems.length > 0 && (
                <span style={{
                  position: 'absolute', top: '-8px', right: '-8px',
                  background: '#C8862A', color: '#fff',
                  borderRadius: '50%', width: '16px', height: '16px',
                  fontSize: '9px', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontWeight: '700'
                }}>{wishlistItems.length}</span>
              )}
            </div>
            Wishlist
          </Link>

          {/* Login */}
          <Link to={user ? '/profile' : '/login'} style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            color: '#512815', fontSize: '13px',
            textDecoration: 'none', fontWeight: '500'
          }}>
            <FaUser />
            {user ? user.name.split(' ')[0] : 'Login'}
          </Link>

          {/* Cart */}
          <Link to="/cart" style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            color: '#512815', fontSize: '13px',
            textDecoration: 'none', fontWeight: '500',
            position: 'relative'
          }}>
            <div style={{ position: 'relative' }}>
              <FaShoppingBag />
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute', top: '-8px', right: '-8px',
                  background: '#C8862A', color: '#fff',
                  borderRadius: '50%', width: '16px', height: '16px',
                  fontSize: '9px', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontWeight: '700'
                }}>{cartCount}</span>
              )}
            </div>
            Cart ({cartCount})
          </Link>
        </div>
      </div>

      {/* Nav Links */}
      <div style={{
        display: 'flex', justifyContent: 'center', gap: '50px',
        padding: '13px', borderTop: '1px solid #E8D5B0',
        background: '#FFF8F0'
      }}>
        {[
          { name: 'HOME', path: '/' },
          { name: 'COLLECTION', path: '/products' },
          { name: 'NEW ARRIVALS', path: '/category/new-arrivals' },
          { name: 'CONTACT US', path: '/contact' },
        ].map((link, i) => (
          <Link key={i} to={link.path} style={{
            color: '#6B3A1F', fontSize: '12px',
            letterSpacing: '1px', fontWeight: '600',
            textDecoration: 'none', paddingBottom: '4px'
          }}>
            {link.name}
          </Link>
        ))}
      </div>

    </nav>
  );
};

export default Navbar;