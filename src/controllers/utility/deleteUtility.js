const { Utilities } = require("../../models");

const deleteUtilsById = async function (req, res) {
  try {
    const deleteUtilities = await Utilities.remove({
      _id: req.params.id,
    });
    res.status(200).json(deleteUtilities);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = deleteUtilsById;