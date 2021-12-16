const mongoose = require('mongoose')

const User = mongoose.Schema(
    {
        username:{
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        phoneNumber:{
            type: String,
            require: true
        },
        address:{
            ward: {
                type: String,
            },
            district: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            }
        },
        fullAddress: {
            type: String,
        },
        avatarUrl: {
            type: String,
            default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU"
        },
        userType:{
            type: Number,
            require: true
        }
    },
    {
        timestamps: {
            createdAt: "created_date",
            updatedAt: "updated_date",
        },
    }
)

module.exports = mongoose.model('user', User)