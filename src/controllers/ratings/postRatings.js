const Rating = require("../../models");

const postRating = async (req, res) => {
    let {realEstateId, rating} = req.query;
    let currentUser = req.user;
    let newRating = new Rating({
        userId: currentUser._id,
        realEstateId,
        rating
    });

    try {
        const saveRating = await newRating.save();
        res.status(200).json(saveUser);
    } catch (err) {
        res.status(404).json({ message: err });
    }
};



module.exports = postRating;