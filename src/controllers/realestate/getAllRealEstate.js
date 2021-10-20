const { RealEstate } = require("../../models");

const getAllRealEstate = async function (req, res) {
  try {
    let perPage = 15;
    let page = req.params.page || 1; 
    console.log(page)
    res.set({
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET, POST,   ",
      "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
      "Access-Control-Allow-Origin": "*",
    });
    const count = RealEstate.find({}).count;
    RealEstate.find({})
      .skip((perPage*page)- perPage)
      .limit(perPage)
      .exec((err, realestates) => {
        const response = {
          count,
          data: realestates
        }
        res.status(200).send(response)
      })
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = getAllRealEstate;