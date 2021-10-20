const {Categories} = require('../../models')

const postCategory = async (req, res) => {
    const category = new Categories({
        cate_name: req.body.cate_name,
        cate_type: req.body.cate_type
    });
    try {
        const saveCategory = await category.save();
        res.status(200).json(saveCategory)
    } catch(err){
        res.status(404).json({message: err})
    }
}

module.exports = postCategory;