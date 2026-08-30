const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  images: [{ type: String }],
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  stock: { type: Number, required: true, default: 0 },
  sold: { type: Number, default: 0 },
  ratings: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 },
  isFeatured: { type: Boolean, default: false },
  isTrending: { type: Boolean, default: false },
  tags: [{ type: String }],
  material: { type: String },
  weight: { type: String },
  dimensions: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);