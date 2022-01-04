const { RealEstate } = require("../../models");

const getUnconfirmedRealEstate = async (req, res) => {
    try{
        let response = await RealEstate.find({isConfirmed: false});
        res.status(200).send(response)
    }
    catch(err){
        console.log(err)
    }
}

module.exports = getUnconfirmedRealEstate;