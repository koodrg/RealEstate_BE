const express = require("express");
const router = express.Router();
const upload = require('../utils/multer');

const uploadToCloudinary = require('../controllers/images/uploadImage');
const requireLogin = require("../middleware/requireLogin");

router.post('/upload', requireLogin, upload.single('image'), uploadToCloudinary)

module.exports = router