import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('sunoneCart');
    if (savedCart) setCartItems(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem('sunoneCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item._id === product._id);
      if (existing) {
        return prev.map(item =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item._id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems(prev =>
      prev.map(item => item._id === id ? { ...item, quantity } : item)
    );
  };

  const clearCart = () => setCartItems([]);

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 0
  );

  const cartCount = cartItems.reduce(
    (count, item) => count + item.quantity, 0
  );

  return (
    <CartContext.Provider value={{
      cartItems, addToCart, removeFromCart,
      updateQuantity, clearCart, cartTotal, cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
export default CartContext;