const { Utilities } = require("../../models");

const postUtils = async (req, res) => {
  //console.log(req.body);
  const utilities = new Utilities({
    name: req.body.name,
    type: req.body.type,
  });
  try {
    const saveUtilities = await utilities.save();
    res.status(200).json(saveUtilities);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};
module.exports = postUtils;