const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { protect, admin } = require('../middleware/authMiddleware');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', protect, admin, upload.single('image'), async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString('base64');
    const dataURI = `data:${req.file.mimetype};base64,${b64}`;
    const result = await cloudinary.uploader.upload(dataURI, {
      folder: 'sunone_jewellery'
    });
    res.json({ url: result.secure_url });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;