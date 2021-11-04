const { RealEstate } = require("../../models");

const getAllRealEstate = async function (req, res) {
  try{
    const result = await RealEstate.find({});
    res.set({
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET, POST,   ",
      "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
      "Access-Control-Allow-Origin": "*",
    });
    const response = {
      count: result.length,
      data: result
    }
    res.status(200).send(response);
  }
  catch(err){
    console.log(err);
  }
}

module.exports = getAllRealEstate;