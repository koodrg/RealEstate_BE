const { RealEstate } = require("../../models");
const ObjectId = require('mongodb').ObjectId; 

const getRealEstateByQuery = async (req, res) => {
    let { q, category, price_max, price_min, offset, skip} = req.query;
    console.log(req.query)
    var response = [];
    if(q=='undefined' || q == 'null') q=''
    if(category == 'undefined' || category == 'null') category =''
    if(price_max == 'undefined') price_max = 20000000000
    if(price_min == 'undefined') price_min = 0 
    console.log(price_max, price_min)
    response = await RealEstate.find({
        $and: [
            {
                $or: [
                    { "full_address": { $regex: q || "" } },
                    { "name": { $regex: q || "" }}
                ]
            },
            {
                $and: [
                    { "price_by_num": { $lte: price_max || 100000000000 } },
                    { "price_by_num": { $gte: price_min || 0} }
                ]
            },
        ]
    })
    if(typeof category !== 'undefined' && category !== ""){
        response = response.filter(x=>x.id_category == category)
    }
    res.status(200).send(response);
    
}

module.exports = getRealEstateByQuery;