const Order = require('../models/orderModel');

// @desc Create order
const createOrder = async (req, res) => {
  try {
    const { items, shippingAddress, paymentMethod, itemsPrice, shippingPrice, totalPrice } = req.body;
    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'No order items' });
    }
    const order = await Order.create({
      user: req.user._id,
      items,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      totalPrice
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get my orders
const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get order by ID
const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('user', 'name email');
    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get all orders (admin)
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate('user', 'name email')
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Update order status (admin)
const updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.status = req.body.status || order.status;
      if (req.body.status === 'Delivered') {
        order.isDelivered = true;
        order.deliveredAt = Date.now();
      }
      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createOrder,
  getMyOrders,
  getOrderById,
  getAllOrders,
  updateOrderStatus
};