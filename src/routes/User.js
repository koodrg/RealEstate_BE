const express = require('express');

const router = express.Router();

const getAllUsers = require('../controllers/user/getAllUsers');

router.get("/", getAllUsers);

module.exports = router;