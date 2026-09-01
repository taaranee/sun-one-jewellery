import axios from 'axios';

const API = axios.create({
  baseURL: 'https://sun-one-jewellery.onrender.com/api'
});

API.interceptors.request.use((req) => {
  const user = localStorage.getItem('sunoneUser');

  if (user) {
    req.headers.Authorization = `Bearer ${JSON.parse(user).token}`;
  }

  return req;
});

// Auth
export const loginUser = (data) => API.post('/users/login', data);
export const registerUser = (data) => API.post('/users/register', data);
export const getUserProfile = () => API.get('/users/profile');
export const updateUserProfile = (data) => API.put('/users/profile', data);

// Products
export const getProducts = (params) => API.get('/products', { params });
export const getProductById = (id) => API.get(`/products/${id}`);
export const getFeaturedProducts = () => API.get('/products/featured');
export const getTrendingProducts = () => API.get('/products/trending');
export const createProduct = (data) => API.post('/products', data);
export const updateProduct = (id, data) => API.put(`/products/${id}`, data);
export const deleteProduct = (id) => API.delete(`/products/${id}`);

// Categories
export const getCategories = () => API.get('/categories');
export const createCategory = (data) => API.post('/categories', data);

// Orders
export const createOrder = (data) => API.post('/orders', data);
export const getMyOrders = () => API.get('/orders/myorders');
export const getOrderById = (id) => API.get(`/orders/${id}`);
export const getAllOrders = () => API.get('/orders');
export const updateOrderStatus = (id, status) =>
  API.put(`/orders/${id}`, { status });

// Reviews
export const getProductReviews = (id) => API.get(`/reviews/${id}`);
export const createReview = (data) => API.post('/reviews', data);

// Wishlist
export const getWishlist = () => API.get('/wishlist');
export const addToWishlist = (productId) =>
  API.post('/wishlist', { productId });
export const removeFromWishlist = (productId) =>
  API.delete(`/wishlist/${productId}`);

// Upload
export const uploadImage = (data) => API.post('/upload', data);

export default API;