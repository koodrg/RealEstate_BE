const express = require('express');

const router = express.Router();

const getAllUtilities = require('../controllers/utility/getAllUtilities')
const getUtilNameByID = require('../controllers/utility/getUtilNameByID')

router.get('/all-utilities', getAllUtilities);

router.get('/name/:id', getUtilNameByID)

module.exports = router;