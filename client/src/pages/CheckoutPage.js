import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const CheckoutPage = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'COD'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      toast.error('Please login to place order');
      navigate('/login');
      return;
    }
    clearCart();
    toast.success('Order placed successfully! 🎉');
    navigate('/order-confirm/123');
  };

  const shipping = cartTotal >= 999 ? 0 : 99;
  const total = cartTotal + shipping;

  const inputStyle = {
    width: '100%', padding: '12px 16px',
    border: '1px solid #EAE0CE', borderRadius: '6px',
    fontSize: '14px', outline: 'none',
    fontFamily: 'Poppins, sans-serif'
  };

  const labelStyle = {
    display: 'block', fontSize: '13px',
    color: '#2B2118', marginBottom: '8px', fontWeight: '500'
  };

  return (
    <div style={{ padding: '50px 60px', background: '#fff' }}>
      <h1 style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: '2rem', color: '#2B2118', marginBottom: '40px'
      }}>Checkout</h1>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '50px' }}>
        {/* Left - Delivery Form */}
        <form onSubmit={handleSubmit}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.3rem', color: '#2B2118', marginBottom: '24px'
          }}>Delivery Details</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={labelStyle}>Full Name</label>
              <input name="name" type="text" placeholder="Your name"
                value={form.name} onChange={handleChange}
                required style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Phone</label>
              <input name="phone" type="tel" placeholder="Phone number"
                value={form.phone} onChange={handleChange}
                required style={inputStyle} />
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Email</label>
            <input name="email" type="email" placeholder="Email address"
              value={form.email} onChange={handleChange}
              required style={inputStyle} />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Address</label>
            <input name="address" type="text" placeholder="Street address"
              value={form.address} onChange={handleChange}
              required style={inputStyle} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '30px' }}>
            <div>
              <label style={labelStyle}>City</label>
              <input name="city" type="text" placeholder="City"
                value={form.city} onChange={handleChange}
                required style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>State</label>
              <input name="state" type="text" placeholder="State"
                value={form.state} onChange={handleChange}
                required style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Pincode</label>
              <input name="pincode" type="text" placeholder="Pincode"
                value={form.pincode} onChange={handleChange}
                required style={inputStyle} />
            </div>
          </div>

          {/* Payment Method */}
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.3rem', color: '#2B2118', marginBottom: '20px'
          }}>Payment Method</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
            {[
              { value: 'COD', label: '💵 Cash on Delivery' },
              { value: 'UPI', label: '📱 UPI / Google Pay / PhonePe' },
              { value: 'CARD', label: '💳 Credit / Debit Card' },
            ].map((method) => (
              <label key={method.value} style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '14px 18px', border: '1px solid',
                borderColor: form.paymentMethod === method.value ? '#C8862A' : '#EAE0CE',
                borderRadius: '8px', cursor: 'pointer',
                background: form.paymentMethod === method.value ? '#FAF6EF' : '#fff'
              }}>
                <input
                  type="radio" name="paymentMethod"
                  value={method.value}
                  checked={form.paymentMethod === method.value}
                  onChange={handleChange}
                  style={{ accentColor: '#C8862A' }}
                />
                <span style={{ fontSize: '14px', color: '#2B2118' }}>{method.label}</span>
              </label>
            ))}
          </div>

          <button type="submit" className="btn-primary"
            style={{ width: '100%', padding: '15px', fontSize: '14px' }}>
            PLACE ORDER
          </button>
        </form>

        {/* Right - Order Summary */}
        <div>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.3rem', color: '#2B2118', marginBottom: '24px'
          }}>Order Summary</h2>

          <div style={{
            background: '#FAF6EF', borderRadius: '12px',
            padding: '24px', border: '1px solid #EAE0CE'
          }}>
            {/* Items */}
            {cartItems.map((item) => (
              <div key={item._id} style={{
                display: 'flex', gap: '14px',
                marginBottom: '16px', paddingBottom: '16px',
                borderBottom: '1px solid #EAE0CE'
              }}>
                <img src={item.images?.[0]} alt={item.name}
                  style={{
                    width: '60px', height: '60px',
                    objectFit: 'contain', background: '#fff',
                    borderRadius: '6px', padding: '4px'
                  }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', color: '#2B2118', fontWeight: '500', marginBottom: '4px' }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: '12px', color: '#6B5D4F' }}>Qty: {item.quantity}</div>
                </div>
                <div style={{ fontSize: '14px', color: '#C8862A', fontWeight: '600' }}>
                  ₹{(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))}

            {/* Totals */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '13px', color: '#6B5D4F' }}>
              <span>Subtotal</span>
              <span>₹{cartTotal.toLocaleString()}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '13px', color: '#6B5D4F' }}>
              <span>Shipping</span>
              <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
            </div>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              paddingTop: '14px', borderTop: '1px solid #EAE0CE',
              fontSize: '16px', fontWeight: '700', color: '#2B2118'
            }}>
              <span>Total</span>
              <span>₹{total.toLocaleString()}</span>
            </div>
          </div>

          {/* Trust Badges */}
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {['✅ 100% Secure Payment', '🔄 7 Days Easy Return', '🚚 Free Shipping above ₹999'].map((item, i) => (
              <div key={i} style={{ fontSize: '13px', color: '#6B5D4F' }}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;