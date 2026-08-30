const Product = require('../models/productModel');

// @desc Get all products
const getProducts = async (req, res) => {
  try {
    const pageSize = 12;
    const page = Number(req.query.page) || 1;
    const keyword = req.query.keyword
      ? { name: { $regex: req.query.keyword, $options: 'i' } }
      : {};
    const category = req.query.category ? { category: req.query.category } : {};
    const count = await Product.countDocuments({ ...keyword, ...category });
    const products = await Product.find({ ...keyword, ...category })
      .populate('category', 'name')
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .sort({ createdAt: -1 });
    res.json({ products, page, pages: Math.ceil(count / pageSize), total: count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get single product
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('category', 'name');
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get featured products
const getFeaturedProducts = async (req, res) => {
  try {
    const products = await Product.find({ isFeatured: true })
      .populate('category', 'name')
      .limit(8);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get trending products
const getTrendingProducts = async (req, res) => {
  try {
    const products = await Product.find({ isTrending: true })
      .populate('category', 'name')
      .limit(8);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Create product (admin)
const createProduct = async (req, res) => {
  try {
    const {
      name, description, price, originalPrice,
      category, stock, images, isFeatured,
      isTrending, tags, material, weight
    } = req.body;
    const product = await Product.create({
      name, description, price, originalPrice,
      category, stock, images, isFeatured,
      isTrending, tags, material, weight
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Update product (admin)
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      Object.assign(product, req.body);
      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Delete product (admin)
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.deleteOne();
      res.json({ message: 'Product removed' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  getFeaturedProducts,
  getTrendingProducts,
  createProduct,
  updateProduct,
  deleteProduct
};