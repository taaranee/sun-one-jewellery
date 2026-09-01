import React from 'react';
import { Link } from 'react-router-dom';

const OrdersPage = () => {
  return (
    <div style={{ padding: '80px 60px', textAlign: 'center', background: '#fff', minHeight: '60vh' }}>
      <div style={{ fontSize: '60px', marginBottom: '20px' }}>📦</div>
      <h2 style={{ fontFamily: 'Playfair Display, serif', color: '#2B2118', marginBottom: '12px' }}>
        Orders are placed
      </h2>
      <p style={{ color: '#6B5D4F', marginBottom: '30px' }}>
        We are happy to see you order our products , Start shopping again!
      </p>
      <Link to="/products">
        <button className="btn-primary">START SHOPPING</button>
      </Link>
    </div>
  );
};

export default OrdersPage;