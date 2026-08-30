const Review = require('../models/reviewModel');
const Product = require('../models/productModel');

const createReview = async (req, res) => {
  try {
    const { rating, comment, productId } = req.body;
    const review = await Review.create({
      user: req.user._id,
      product: productId,
      rating,
      comment
    });
    const reviews = await Review.find({ product: productId });
    const avgRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;
    await Product.findByIdAndUpdate(productId, {
      ratings: avgRating,
      numReviews: reviews.length
    });
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ product: req.params.productId })
      .populate('user', 'name avatar')
      .sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (review) {
      await review.deleteOne();
      res.json({ message: 'Review removed' });
    } else {
      res.status(404).json({ message: 'Review not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createReview, getProductReviews, deleteReview };