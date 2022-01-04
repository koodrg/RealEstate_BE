const Rating = require('../../models/Rating')
const ObjectId = require('mongodb').ObjectId; 

const getRating = async (req, res )=>{
    try{
        let currentUser = req.user
        console.log("currentUser:" + currentUser._id)
        let rating = await Rating.find({ 
            userId: ObjectId(currentUser._id + ''), 
            realEstateId: ObjectId(req.params.realEstateId)
        }) 
        console.log(rating)
        res.status(200).send(rating)
    }
    catch (err){
        console.log(err)
        res.status(400).send(err);
    }
}

module.exports = getRating