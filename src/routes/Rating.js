const express = require("express");
const router = express.Router();

const requireLogin = require("../middleware/requireLogin");
const { getRating, postRating, updateRating} = require("../controllers/ratings");

router.post('/post', requireLogin, postRating)

router.post('/update/:ratingId', requireLogin, updateRating)

router.get('/:realEstateId', requireLogin, getRating)

module.exports = router