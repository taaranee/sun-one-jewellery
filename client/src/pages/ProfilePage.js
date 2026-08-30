import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully!');
    navigate('/');
  };

  if (!user) {
    return (
      <div style={{
        padding: '80px 60px', textAlign: 'center',
        background: '#fff', minHeight: '60vh'
      }}>
        <div style={{ fontSize: '60px', marginBottom: '20px' }}>👤</div>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          color: '#2B2118', marginBottom: '12px'
        }}>Please Login</h2>
        <p style={{ color: '#6B5D4F', marginBottom: '30px' }}>
          Login to view your account details.
        </p>
        <Link to="/login">
          <button className="btn-primary">LOGIN NOW</button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '50px 60px', background: '#FAF6EF', minHeight: '80vh' }}>
      <div style={{ maxWidth: '650px', margin: '0 auto' }}>

        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '2rem', color: '#2B2118', marginBottom: '30px'
        }}>My Account</h1>

        {/* Profile Card */}
        <div style={{
          background: '#fff', borderRadius: '12px',
          padding: '30px', border: '1px solid #EAE0CE',
          marginBottom: '20px'
        }}>
          {/* Avatar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px', paddingBottom: '20px', borderBottom: '1px solid #EAE0CE' }}>
            <div style={{
              width: '65px', height: '65px', borderRadius: '50%',
              background: '#C8862A', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontSize: '26px', fontWeight: '700'
            }}>
              {user.name?.charAt(0).toUpperCase()}
            </div>
            <div>
              <div style={{ fontWeight: '600', fontSize: '17px', color: '#2B2118' }}>{user.name}</div>
              <div style={{ color: '#6B5D4F', fontSize: '13px' }}>{user.email}</div>
              {user.isAdmin && (
                <span style={{
                  background: '#C8862A', color: '#fff',
                  fontSize: '10px', padding: '2px 8px',
                  borderRadius: '10px', marginTop: '4px',
                  display: 'inline-block'
                }}>ADMIN</span>
              )}
            </div>
          </div>

          {/* Details */}
          {[
            { label: 'Full Name', value: user.name },
            { label: 'Email Address', value: user.email },
            { label: 'Phone Number', value: user.phone || 'Not added yet' },
            { label: 'Member Since', value: '2024' },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'center', padding: '14px 0',
              borderBottom: i < 3 ? '1px solid #EAE0CE' : 'none'
            }}>
              <span style={{ color: '#6B5D4F', fontSize: '13px' }}>{item.label}</span>
              <span style={{ color: '#2B2118', fontSize: '13px', fontWeight: '500' }}>{item.value}</span>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '14px', marginBottom: '20px'
        }}>
          <Link to="/orders" style={{ textDecoration: 'none' }}>
            <div style={{
              background: '#fff', borderRadius: '10px',
              padding: '20px', border: '1px solid #EAE0CE',
              textAlign: 'center', cursor: 'pointer'
            }}>
              <div style={{ fontSize: '30px', marginBottom: '8px' }}>📦</div>
              <div style={{ color: '#2B2118', fontWeight: '600', fontSize: '14px' }}>My Orders</div>
              <div style={{ color: '#6B5D4F', fontSize: '12px' }}>View order history</div>
            </div>
          </Link>

          <Link to="/wishlist" style={{ textDecoration: 'none' }}>
            <div style={{
              background: '#fff', borderRadius: '10px',
              padding: '20px', border: '1px solid #EAE0CE',
              textAlign: 'center', cursor: 'pointer'
            }}>
              <div style={{ fontSize: '30px', marginBottom: '8px' }}>❤️</div>
              <div style={{ color: '#2B2118', fontWeight: '600', fontSize: '14px' }}>My Wishlist</div>
              <div style={{ color: '#6B5D4F', fontSize: '12px' }}>Saved items</div>
            </div>
          </Link>
        </div>

        {/* Logout Button */}
        <button onClick={handleLogout} className="btn-primary"
          style={{ width: '100%', padding: '14px', fontSize: '14px' }}>
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;