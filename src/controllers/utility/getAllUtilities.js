const { Utilities } = require("../../models");

const getAllUtilities = async function (req, res) {
  try {
    //console.log(123);
    const utilities = await Utilities.find({});
    res.set({
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET, POST,   ",
      "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
      "Access-Control-Allow-Origin": "*",
    });
    res.status(200).json({data: utilities});
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = getAllUtilities;