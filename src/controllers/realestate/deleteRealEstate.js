const { RealEstate } = require("../../models");

const deleteRealEstateById = async function (req, res) {
  try {
    const deleteRealEstate = await RealEstate.remove({
      _id: req.params.id,
    });
    res.status(200).json(deleteRealEstate);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = deleteRealEstateById;