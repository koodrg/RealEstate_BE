const { RealEstate } = require("../../models");

const getRealEstateById = async (req, res) => {
  //let response = { success: 0, data: [], message: "" };
  //const id = req.params.id;
  const realEstate = await RealEstate.findById(req.params.id)
    .populate('utilsList', 'name')
    .exec(async (err, realEstate)=>{
      if(err) {
        res.json(err);
      }
      else {
        //response.success = 1;
        //data = realEstate //=== [] ? realEstate : await getRealEstateByIDElasticSearch(id);
        console.log(realEstate)
        res.status(200).json(realEstate);
      }
    });  
};


module.exports = getRealEstateById;