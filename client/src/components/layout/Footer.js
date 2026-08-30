import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaPinterest, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ background: '#FFF8F0', borderTop: '1px solid #E8D5B0', marginTop: '40px' }}>

      {/* Trust Badges */}
      <div style={{
        padding: '24px 60px',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: '20px',
        borderBottom: '1px solid #E8D5B0'
      }}>
        {[
          { icon: '🏅', title: '100% HALLMARK', sub: 'Certified Jewellery' },
          { icon: '🔒', title: 'SECURE PAYMENT', sub: '100% Secure Checkout' },
          { icon: '🔄', title: '7 DAYS RETURN', sub: 'Easy Return & Exchange' },
          { icon: '📞', title: 'CUSTOMER SUPPORT', sub: '24/7 Dedicated Support' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '26px' }}>{item.icon}</span>
            <div>
              <div style={{ color: '#512815', fontSize: '12px', fontWeight: '600' }}>{item.title}</div>
              <div style={{ color: '#6B3A1F', fontSize: '11px' }}>{item.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Footer */}
      <div style={{
        padding: '50px 60px',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1.5fr 1.5fr',
        gap: '40px'
      }}>

        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <img
              src="/images/logo.jpg"
              alt="Sun One Logo"
              style={{ width: '55px', height: '55px', objectFit: 'contain' }}
            />
            <div>
              <div style={{
                fontFamily: 'Playfair Display, serif',
                color: '#512815', fontSize: '1.1rem', fontWeight: '700'
              }}>Sun One Gram</div>
              <div style={{
                fontSize: '9px', color: '#C8862A',
                letterSpacing: '2px', fontWeight: '600',
                textTransform: 'uppercase', marginTop: '2px'
              }}>Premium Imitated Jewellery</div>
            </div>
          </div>
          <p style={{ color: '#6B3A1F', fontSize: '12px', lineHeight: '1.8', marginBottom: '20px' }}>
            Embrace the elegance of tradition with our exquisite one gram gold jewellery crafted for every occasion.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            {[FaFacebook, FaInstagram, FaPinterest, FaYoutube].map((Icon, i) => (
              <div key={i} style={{
                width: '34px', height: '34px',
                border: '1px solid #E8D5B0', borderRadius: '50%',
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', color: '#C8862A', cursor: 'pointer'
              }}>
                <Icon style={{ fontSize: '14px' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: '#512815', fontSize: '13px', marginBottom: '18px', fontWeight: '600' }}>QUICK LINKS</h4>
          {[
            { name: 'Home', path: '/' },
            { name: 'Collection', path: '/products' },
            { name: 'New Arrivals', path: '/category/new-arrivals' },
            { name: 'Contact Us', path: '/contact' },
          ].map((item, i) => (
            <Link key={i} to={item.path} style={{
              display: 'block', color: '#6B3A1F',
              fontSize: '13px', marginBottom: '10px',
              textDecoration: 'none'
            }}>
              {item.name}
            </Link>
          ))}
        </div>

        {/* Customer Service */}
        <div>
          <h4 style={{ color: '#512815', fontSize: '13px', marginBottom: '18px', fontWeight: '600' }}>CUSTOMER SERVICE</h4>
          {[
            { name: 'My Account', path: '/profile' },
            { name: 'My Orders', path: '/orders' },
            { name: 'Login', path: '/login' },
            { name: 'Register', path: '/register' },
          ].map((item, i) => (
            <Link key={i} to={item.path} style={{
              display: 'block', color: '#6B3A1F',
              fontSize: '13px', marginBottom: '10px',
              textDecoration: 'none'
            }}>
              {item.name}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ color: '#512815', fontSize: '13px', marginBottom: '18px', fontWeight: '600' }}>CONTACT US</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#6B3A1F', fontSize: '13px' }}>
              <FaPhone style={{ color: '#C8862A' }} /> +91 98853 66722
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#6B3A1F', fontSize: '13px' }}>
              <FaPhone style={{ color: '#C8862A' }} /> +91 97014 14472
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#6B3A1F', fontSize: '13px' }}>
              <FaEnvelope style={{ color: '#C8862A' }} /> support@sunjewellery.com
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#6B3A1F', fontSize: '13px' }}>
              <FaMapMarkerAlt style={{ color: '#C8862A', marginTop: '2px' }} />
              Abdulla Khan Estate,<br />Kurnool, Andhra Pradesh
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 style={{ color: '#512815', fontSize: '13px', marginBottom: '18px', fontWeight: '600' }}>NEWSLETTER</h4>
          <p style={{ color: '#6B3A1F', fontSize: '12px', lineHeight: '1.7', marginBottom: '14px' }}>
            Subscribe to get special offers and updates.
          </p>
          <div style={{ display: 'flex' }}>
            <input type="email" placeholder="Enter your email" style={{
              flex: 1, padding: '11px 14px',
              border: '1px solid #E8D5B0',
              borderRight: 'none', fontSize: '12px',
              outline: 'none', borderRadius: '4px 0 0 4px',
              background: '#FFF8F0', color: '#512815'
            }} />
            <button style={{
              background: '#C8862A', border: 'none',
              padding: '0 16px', color: '#fff',
              cursor: 'pointer', borderRadius: '0 4px 4px 0'
            }}>→</button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: '1px solid #E8D5B0', padding: '18px 60px',
        display: 'flex', justifyContent: 'space-between',
        color: '#A0522D', fontSize: '11px'
      }}>
        <span>© 2024 Sun One Gram Jewellery. All Rights Reserved.</span>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link to="/contact" style={{ color: '#A0522D', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link to="/contact" style={{ color: '#A0522D', textDecoration: 'none' }}>Terms of Service</Link>
        </div>
      </div>

    </footer>
  );
};

export default Footer;