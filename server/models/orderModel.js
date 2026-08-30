const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    name: String,
    image: String,
    price: Number,
    quantity: Number
  }],
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    pincode: String,
    phone: String
  },
  paymentMethod: { type: String, default: 'COD' },
  paymentResult: {
    id: String,
    status: String,
    update_time: String
  },
  itemsPrice: { type: Number, default: 0 },
  shippingPrice: { type: Number, default: 0 },
  totalPrice: { type: Number, default: 0 },
  isPaid: { type: Boolean, default: false },
  paidAt: { type: Date },
  isDelivered: { type: Boolean, default: false },
  deliveredAt: { type: Date },
  status: {
    type: String,
    enum: ['Processing', 'Confirmed', 'Shipped', 'Delivered', 'Cancelled'],
    default: 'Processing'
  }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);