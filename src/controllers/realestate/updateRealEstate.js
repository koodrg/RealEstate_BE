const { RealEstate } = require("../../models");

const updateRealEstate = async (req, res) => {
  try {
    const id = req.params.realEstateId;
    const updates = req.body;
    const option = { new: true };

    const result = await RealEstate.findByIdAndUpdate(id, updates, option);
    res.status(200).send(result);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = updateRealEstate;