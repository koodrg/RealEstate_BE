const express = require("express");
const router = express.Router();
const RealEstate = require("../models/RealEstate");

const getAllRealEstate = require("../controllers/realestate/getAllRealEstate");
const getRealEstateByCate = require("../controllers/realestate/getRealEstateByCate");
const {
  getRealEstateById,
  getRealEstateByIDElasticSearch,
} = require("../controllers/realestate/getRealEstateByID");

const getRecommendRealEstate = require('../controllers/realestate/getRecommendRealEstate')

const getRealEstateByQuery = require('../controllers/realestate/getRealEstateByQuery')
// const { response } = require("express");

// RealEstate.createMapping((err, mapping) => {
//     if (err) {
//         console.log("error creating mapping");
//         console.log(err);
//     } else {
//         console.log("mapping created");
//         console.log(mapping);
//     }
// })

// var stream = RealEstate.synchronize();
// var count = 0;

// stream.on('data', () => {
//     count++;
// })

// stream.on('close', () => {
//     console.log("Indexed " + count + " documents");
// })

// stream.on('error', (err) => {
//     console.log(err);
// })

router.get("/all-real-estate", getAllRealEstate);

router.get("/get-by-category/:category", getRealEstateByCate);

router.get("/get-by-id/:id", getRealEstateById);

router.get("/get-by-id-elastic/:id", getRealEstateByIDElasticSearch);

router.get("/recommend/:q/:category/:price_max/:price_min", getRecommendRealEstate);

router.get("/api/_search", getRealEstateByQuery);

module.exports = router;