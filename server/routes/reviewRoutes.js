const express = require('express');
const router = express.Router();
const {
  createReview,
  getProductReviews,
  deleteReview
} = require('../controllers/reviewController');
const { protect, admin } = require('../middleware/authMiddleware');

router.post('/', protect, createReview);
router.get('/:productId', getProductReviews);
router.delete('/:id', protect, admin, deleteReview);

module.exports = router;