const mongoose = require('mongoose');

const RealEstateCategories = mongoose.Schema(
    {
        cate_name:{
            type: String,
            required: true
        },
        cate_type:{
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model('categories', RealEstateCategories)