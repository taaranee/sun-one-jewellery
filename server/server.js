const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/categories', require('./routes/categoryRoutes'));
app.use('/api/reviews', require('./routes/reviewRoutes'));
app.use('/api/wishlist', require('./routes/wishlistRoutes'));
app.use('/api/upload', require('./routes/uploadRoutes'));

app.get('/', (req, res) => {
  res.send('Sun One Jewellery API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});