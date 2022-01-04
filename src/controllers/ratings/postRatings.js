const { Rating } = require("../../models"); 

const postRating = async (req, res) => {
    try {
        const {realEstateId, rating} = req.body;
        console.log(realEstateId, rating)
        const currentUser = req.user
        const newRating = new Rating({
            userId: currentUser._id,
            realEstateId: realEstateId,
            rating
        });
        const saveRating = await newRating.save();
        console.log(saveRating)
        res.status(200).json(saveRating);
    } catch (err) {
        res.status(404).json({ message: err });
    }
};



module.exports = postRating;