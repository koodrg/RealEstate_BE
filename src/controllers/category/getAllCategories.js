const {Categories} = require('../../models');

const getAllCategories = async (req, res) =>{
    try {
        const categories = await Categories.find({});
        res.set({
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET, POST,   ",
        "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
        "Access-Control-Allow-Origin": "*",
        });
        res.status(200).json({data:categories});
    } catch(err) {
        res.status(404).json({message: err});
    }
}

module.exports = getAllCategories;