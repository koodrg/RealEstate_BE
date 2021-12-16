const { RealEstate, Categories} = require("../../models");

const getRealEstateByCate = async (req,res) => {
    let categoryType = req.params.category;
    try{
        const category = await findCategoryByType(categoryType);
        console.log(category)
        const realEstate = await RealEstate.find({id_category: category})
        //console.log(realEstate)
        res.status(200).json(realEstate)
    } catch(err){
        res.status(404).json({message: err})
    }
}

const findCategoryByType = async(type)=>{
    try{
        const category =await Categories.findOne({cate_type: type});
        return category._id;
    } catch (err) {
        console.log(err);
    }
}

module.exports = getRealEstateByCate