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

const getRealEstateByIDElasticSearch =  async (req,res,next) => { 
  await RealEstate.esSearch({
    "query" : {
      "match":{
         "_id": req.params.id
      }
    }}, (err, result) => {
      if (err) return next(err);
      // const data = result.hits.hits.map((hit) => {
      //     return hit[0];
      // })
      const data = { data: result.hits.hits[0]._source };
      console.log(data)
      res.status(200).json(data) //data
    })
}

module.exports = { getRealEstateById, getRealEstateByIDElasticSearch };