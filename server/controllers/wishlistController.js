const Wishlist = require('../models/wishlistModel');

const getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user._id })
      .populate('products');
    res.json(wishlist || { products: [] });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addToWishlist = async (req, res) => {
  try {
    const { productId } = req.body;
    let wishlist = await Wishlist.findOne({ user: req.user._id });
    if (!wishlist) {
      wishlist = await Wishlist.create({ user: req.user._id, products: [productId] });
    } else {
      if (!wishlist.products.includes(productId)) {
        wishlist.products.push(productId);
        await wishlist.save();
      }
    }
    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeFromWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user._id });
    if (wishlist) {
      wishlist.products = wishlist.products.filter(
        p => p.toString() !== req.params.productId
      );
      await wishlist.save();
      res.json(wishlist);
    } else {
      res.status(404).json({ message: 'Wishlist not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getWishlist, addToWishlist, removeFromWishlist };
