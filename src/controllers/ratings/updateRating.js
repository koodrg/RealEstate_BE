  
const { Rating } = require("../../models");

const updateRating = async (req, res, next) => {
  try {
    const id = req.params.ratingId;
    const updates = req.body;
    const option = { new: true };

    const result = await Rating.findByIdAndUpdate(id, updates, option);
    res.status(200).send(result);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = updateRating;