const {Categories} = require('../../models')

const deleteCateById = async (req,res)=>{
    try{
        const deleteCategory = await Categories.deleteOne({
            _id: req.params.id,
        });
        res.status(200).json(deleteCategory) 
    } catch(err) {
        res.status(404).json({message: err})
    }
};

module.exports = deleteCateById