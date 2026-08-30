import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { loginUser } from '../utils/api';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await loginUser({ email, password });
      login(data);
      toast.success(`Welcome back, ${data.name}! 😊`);
      navigate('/');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
    }
    setLoading(false);
  };

  return (
    <div style={{
      minHeight: '80vh', background: '#FAF6EF',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '40px 20px'
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
          }}>Welcome Back</h1>
          <p style={{ color: '#6B5D4F', fontSize: '13px' }}>Login to your Sun One account</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '13px', color: '#2B2118', marginBottom: '8px', fontWeight: '500' }}>
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%', padding: '13px 16px',
                border: '1px solid #EAE0CE', borderRadius: '6px',
                fontSize: '14px', outline: 'none',
                fontFamily: 'Poppins, sans-serif'
              }}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: '28px' }}>
            <label style={{ display: 'block', fontSize: '13px', color: '#2B2118', marginBottom: '8px', fontWeight: '500' }}>
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%', padding: '13px 16px',
                border: '1px solid #EAE0CE', borderRadius: '6px',
                fontSize: '14px', outline: 'none',
                fontFamily: 'Poppins, sans-serif'
              }}
            />
          </div>

          <button type="submit" className="btn-primary"
            style={{ width: '100%', padding: '14px', fontSize: '14px' }}
            disabled={loading}>
            {loading ? 'Logging in...' : 'LOGIN'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '24px', color: '#6B5D4F', fontSize: '13px' }}>
          Don't have an account?{' '}
          <Link to="/register" style={{ color: '#C8862A', fontWeight: '600' }}>Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;