const express = require("express");
const router = express.Router();
const upload = require('../utils/multer');


const requireLogin = require('../middleware/requireLogin')
const requireRoleAdmin = require('../middleware/requireRoleAdmin')

const getAllRealEstate = require("../controllers/realestate/getAllRealEstate");
const getRealEstateByCate = require("../controllers/realestate/getRealEstateByCate");
const getRealEstateById = require("../controllers/realestate/getRealEstateByID");
const getRecommendRealEstate = require('../controllers/realestate/getRecommendRealEstate')
const getRealEstateByQuery = require('../controllers/realestate/getRealEstateByQuery')
const getAllRecommend = require('../controllers/realestate/getAllRecommend')
const updateRealEstate = require('../controllers/realestate/updateRealEstate')
const postRealEstate = require('../controllers/realestate/postRealEstate')
const getUnconfirmedRealEstate = require('../controllers/realestate/getUnconfirmedRealEstate')
const deleteRealEstateById = require('../controllers/realestate/deleteRealEstate')


router.get("/all-real-estate", getAllRealEstate);

router.get("/get-by-category/:category", getRealEstateByCate);

router.get("/get-by-id/:id", getRealEstateById);

router.get("/recommend/:q/:category/:price_max/:price_min", getRecommendRealEstate);

router.get("/api/_search", getRealEstateByQuery);

router.get('/api/recommend/:userId', getAllRecommend);

router.post('/update/:realEstateId', requireLogin, requireRoleAdmin, updateRealEstate);

router.post('/post', requireLogin, postRealEstate);

router.get('/unconfirmed', getUnconfirmedRealEstate);

router.delete('/delete/:id', deleteRealEstateById)

module.exports = router;