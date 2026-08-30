import React, { createContext, useState, useContext, useEffect } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('sunoneWishlist');
    if (saved) setWishlistItems(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('sunoneWishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (product) => {
    setWishlistItems(prev => {
      if (prev.find(item => item._id === product._id)) return prev;
      return [...prev, product];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(prev => prev.filter(item => item._id !== id));
  };

  const isInWishlist = (id) => {
    return wishlistItems.some(item => item._id === id);
  };

  return (
    <WishlistContext.Provider value={{
      wishlistItems, addToWishlist,
      removeFromWishlist, isInWishlist
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
export default WishlistContext;