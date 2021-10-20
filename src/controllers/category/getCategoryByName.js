const Categories = require('../../models/Categories')

const getCategoryIDByName = async (req, res) => {
    //const {name} = req.body
    await Categories.findOne({"cate_type": req.params.type}, (err, category) => {
        if(err) {
            console.log(err)
        } 
        res.status(200).json(category._id)
    })
};

module.exports = getCategoryIDByName