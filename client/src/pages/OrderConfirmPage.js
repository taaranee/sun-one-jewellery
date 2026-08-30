import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmPage = () => {
  return (
    <div style={{
      minHeight: '80vh', background: '#FAF6EF',
      display: 'flex', alignItems: 'center',
      justifyContent: 'center', padding: '40px 20px'
    }}>
      <div style={{
        background: '#fff', borderRadius: '12px',
        padding: '60px', maxWidth: '540px', width: '100%',
        textAlign: 'center', border: '1px solid #EAE0CE',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
      }}>
        {/* Success Icon */}
        <div style={{
          width: '80px', height: '80px', borderRadius: '50%',
          background: '#FAF6EF', border: '3px solid #C8862A',
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', margin: '0 auto 24px',
          fontSize: '36px'
        }}>✅</div>

        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '2rem', color: '#2B2118', marginBottom: '12px'
        }}>Order Placed!</h1>

        <p style={{ color: '#6B5D4F', fontSize: '14px', lineHeight: '1.8', marginBottom: '10px' }}>
          Thank you for shopping with Sun One Jewellery!
        </p>
        <p style={{ color: '#6B5D4F', fontSize: '14px', lineHeight: '1.8', marginBottom: '32px' }}>
          Your order has been placed successfully. You will receive a confirmation shortly.
        </p>

        {/* Order Details Box */}
        <div style={{
          background: '#FAF6EF', borderRadius: '8px',
          padding: '20px', marginBottom: '32px',
          border: '1px solid #EAE0CE', textAlign: 'left'
        }}>
          {[
            { label: 'Order Status', value: '🟡 Processing' },
            { label: 'Payment', value: 'Cash on Delivery' },
            { label: 'Delivery', value: '3-5 Business Days' },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between',
              padding: '10px 0',
              borderBottom: i < 2 ? '1px solid #EAE0CE' : 'none'
            }}>
              <span style={{ color: '#6B5D4F', fontSize: '13px' }}>{item.label}</span>
              <span style={{ color: '#2B2118', fontSize: '13px', fontWeight: '600' }}>{item.value}</span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center' }}>
          <Link to="/products">
            <button className="btn-primary" style={{ padding: '13px 30px' }}>
              CONTINUE SHOPPING
            </button>
          </Link>
          <Link to="/orders">
            <button className="btn-outline" style={{ padding: '13px 30px' }}>
              MY ORDERS
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmPage;