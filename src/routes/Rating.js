const express = require("express");
const router = express.Router();

const requireLogin = require("../middleware/requireLogin");
const { getRating, postRating } = require("../controllers/ratings");

router.post('/rate/:realEstateId', requireLogin, postRating)

router.get('/:realEstateId', requireLogin, getRating)

module.exports = router