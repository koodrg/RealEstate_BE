const express = require('express');

const router = express.Router();

const getAllCategory = require('../controllers/category/getAllCategories');
const getCategoryIDByName = require('../controllers/category/getCategoryByName')

router.get('/all-category', getAllCategory);

router.get('/get-id-by-type/:type', getCategoryIDByName);

module.exports = router;
