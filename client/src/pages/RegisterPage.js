import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { registerUser } from '../utils/api';
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await registerUser({ name, email, phone, password });
      login(data);
      toast.success(`Welcome to Sun One, ${data.name}! 🎉`);
      navigate('/');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed');
    }
    setLoading(false);
  };

  const inputStyle = {
    width: '100%', padding: '13px 16px',
    border: '1px solid #EAE0CE', borderRadius: '6px',
    fontSize: '14px', outline: 'none',
    fontFamily: 'Poppins, sans-serif'
  };

  const labelStyle = {
    display: 'block', fontSize: '13px',
    color: '#2B2118', marginBottom: '8px', fontWeight: '500'
  };

  return (
    <div style={{
      minHeight: '80vh', background: '#FAF6EF',
      display: 'flex', alignItems: 'center',
      justifyContent: 'center', padding: '40px 20px'
    }}>
      <div style={{
        background: '#fff', borderRadius: '12px',
        padding: '50px', width: '100%', maxWidth: '440px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        border: '1px solid #EAE0CE'
      }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ fontSize: '36px', marginBottom: '8px' }}>☀️</div>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.8rem', color: '#C8862A', marginBottom: '4px'
          }}>Create Account</h1>
          <p style={{ color: '#6B5D4F', fontSize: '13px' }}>Join Sun One Jewellery today</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '18px' }}>
            <label style={labelStyle}>Full Name</label>
            <input type="text" placeholder="Enter your full name"
              value={name} onChange={(e) => setName(e.target.value)}
              required style={inputStyle} />
          </div>

          <div style={{ marginBottom: '18px' }}>
            <label style={labelStyle}>Email Address</label>
            <input type="email" placeholder="Enter your email"
              value={email} onChange={(e) => setEmail(e.target.value)}
              required style={inputStyle} />
          </div>

          <div style={{ marginBottom: '18px' }}>
            <label style={labelStyle}>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number"
              value={phone} onChange={(e) => setPhone(e.target.value)}
              style={inputStyle} />
          </div>

          <div style={{ marginBottom: '28px' }}>
            <label style={labelStyle}>Password</label>
            <input type="password" placeholder="Create a password"
              value={password} onChange={(e) => setPassword(e.target.value)}
              required style={inputStyle} />
          </div>

          <button type="submit" className="btn-primary"
            style={{ width: '100%', padding: '14px', fontSize: '14px' }}
            disabled={loading}>
            {loading ? 'Creating Account...' : 'CREATE ACCOUNT'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '24px', color: '#6B5D4F', fontSize: '13px' }}>
          Already have an account?{' '}
          <Link to="/login" style={{ color: '#C8862A', fontWeight: '600' }}>Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;