  
const { Rating } = require("../../models");

const updateRating = async (req, res, next) => {
  try {
    const id = req.params.ratingId;
    console.log(id)
    const updates = req.body;
    console.log(req.body)
    const option = { new: true };

    const result = await Rating.findByIdAndUpdate(id, updates, option);
    res.status(200).send(result);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = updateRating;