import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';

const TopBar = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div style={{
      background: 'linear-gradient(90deg, #1a1810, #2d2a1a, #1a1810)',
      borderBottom: '1px solid #2d2a1a',
      padding: '8px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '11px',
      letterSpacing: '1px',
      color: '#a89060'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span>📍</span>
        <span>Delivering to Mumbai 400001</span>
      </div>

      <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        <span>🚚 Free Shipping on Orders Above ₹999</span>
        <span style={{ color: '#2d2a1a' }}>|</span>
        <span style={{ color: '#c9a84c', fontWeight: '600' }}>
          Get 10% Off on First Order! Use Code: SUN10
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <FaFacebook style={{ color: '#a89060', cursor: 'pointer', fontSize: '14px' }}
          onMouseEnter={e => e.target.style.color = '#c9a84c'}
          onMouseLeave={e => e.target.style.color = '#a89060'} />
        <FaInstagram style={{ color: '#a89060', cursor: 'pointer', fontSize: '14px' }}
          onMouseEnter={e => e.target.style.color = '#c9a84c'}
          onMouseLeave={e => e.target.style.color = '#a89060'} />
        <FaPinterest style={{ color: '#a89060', cursor: 'pointer', fontSize: '14px' }}
          onMouseEnter={e => e.target.style.color = '#c9a84c'}
          onMouseLeave={e => e.target.style.color = '#a89060'} />
        <FaYoutube style={{ color: '#a89060', cursor: 'pointer', fontSize: '14px' }}
          onMouseEnter={e => e.target.style.color = '#c9a84c'}
          onMouseLeave={e => e.target.style.color = '#a89060'} />
        <span
          onClick={() => setVisible(false)}
          style={{ cursor: 'pointer', color: '#6b5830', marginLeft: '8px', fontSize: '16px' }}>
          ×
        </span>
      </div>
    </div>
  );
};

export default TopBar;