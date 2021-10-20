const mongoose = require('mongoose');

const UtilitiesSchema = mongoose.Schema(
    {
        name :{
            type: String,
            required : true 
        },
        type: {
            type: String,
            required: true
        }
    }
)


module.exports = mongoose.model('utilities', UtilitiesSchema)