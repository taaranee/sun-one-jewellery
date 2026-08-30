import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import OrdersPage from './pages/OrdersPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmPage from './pages/OrderConfirmPage';
import ContactPage from './pages/ContactPage';
import CategoryPage from './pages/CategoryPage';
import SearchPage from './pages/SearchPage';

import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <ScrollToTop />
            <ToastContainer position="top-right" autoClose={3000} />
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/category/:slug" element={<CategoryPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/order-confirm/:id" element={<OrderConfirmPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer />
          </Router>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;