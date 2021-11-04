const mongoose = require('mongoose');
const User = require('./User');
const RealEstate = require('./RealEstate')

const Rating = mongoose.Schema(
    {
        userId:{
            type: mongoose.SchemaTypes.ObjectId,
            ref: User,
        },
        realEstateId:{
            type: mongoose.SchemaTypes.ObjectId,
            ref: RealEstate,
        },
        rating: {
            type: Number,
            require: true
        }
    }
)

module.exports = mongoose.model('rating', Rating)