import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: '80px 60px', textAlign: 'center', background: '#fff' }}>
        <div style={{ fontSize: '60px', marginBottom: '20px' }}>🛒</div>
        <h2 style={{ fontFamily: 'Playfair Display, serif', color: '#2B2118', marginBottom: '12px' }}>
          Your Cart is Empty
        </h2>
        <p style={{ color: '#6B5D4F', marginBottom: '30px' }}>Looks like you haven't added anything yet.</p>
        <Link to="/products">
          <button className="btn-primary">START SHOPPING</button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '50px 60px', background: '#fff' }}>
      <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#2B2118', marginBottom: '40px' }}>
        Shopping Cart
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
        {/* Cart Items */}
        <div>
          {cartItems.map((item) => (
            <div key={item._id} style={{
              display: 'flex', gap: '20px', padding: '20px 0',
              borderBottom: '1px solid #EAE0CE', alignItems: 'center'
            }}>
              <img src={item.images?.[0]} alt={item.name}
                style={{ width: '90px', height: '90px', objectFit: 'contain', background: '#FAF6EF', borderRadius: '8px' }} />

              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '15px', color: '#2B2118', marginBottom: '8px' }}>{item.name}</h3>
                <div style={{ color: '#C8862A', fontWeight: '600' }}>₹{item.price.toLocaleString()}</div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #EAE0CE', borderRadius: '6px' }}>
                <button onClick={() => updateQuantity(item._id, item.quantity - 1)}
                  style={{ padding: '8px 14px', background: '#FAF6EF', border: 'none', cursor: 'pointer' }}>−</button>
                <span style={{ padding: '8px 16px' }}>{item.quantity}</span>
                <button onClick={() => updateQuantity(item._id, item.quantity + 1)}
                  style={{ padding: '8px 14px', background: '#FAF6EF', border: 'none', cursor: 'pointer' }}>+</button>
              </div>

              <div style={{ fontWeight: '600', color: '#2B2118', minWidth: '80px', textAlign: 'right' }}>
                ₹{(item.price * item.quantity).toLocaleString()}
              </div>

              <button onClick={() => removeFromCart(item._id)} style={{
                background: 'transparent', border: 'none', color: '#C8862A',
                cursor: 'pointer', fontSize: '16px'
              }}>
                <FaTrash />
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div style={{
          background: '#FAF6EF', borderRadius: '12px',
          padding: '30px', height: 'fit-content'
        }}>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#2B2118', marginBottom: '24px' }}>
            Order Summary
          </h3>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', color: '#6B5D4F', fontSize: '14px' }}>
            <span>Subtotal</span>
            <span>₹{cartTotal.toLocaleString()}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', color: '#6B5D4F', fontSize: '14px' }}>
            <span>Shipping</span>
            <span>{cartTotal >= 999 ? 'FREE' : '₹99'}</span>
          </div>

          <div style={{
            display: 'flex', justifyContent: 'space-between',
            paddingTop: '16px', borderTop: '1px solid #EAE0CE',
            marginBottom: '24px', fontWeight: '700', fontSize: '18px', color: '#2B2118'
          }}>
            <span>Total</span>
            <span>₹{(cartTotal >= 999 ? cartTotal : cartTotal + 99).toLocaleString()}</span>
          </div>

          <button onClick={() => navigate('/checkout')} className="btn-primary" style={{ width: '100%' }}>
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;