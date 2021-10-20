const { User } = require("../../models");

const getAllUsers = async (req, res) => {
    User.find()
        .exec()
        .then(users => {
            const response = {
                count: users.length,
                users: users.map(user => {
                    console.log(user.phoneNumber)
                    return {
                        _id: user._id,
                        name: user.name,
                        phoneNumber: user.phoneNumber,
                        fullAddress: user.fullAddress,
                        avatarUrl: user.avatarUrl,
                    }
                })
            };
            res.status(200).json(response);
        }).catch(err => {
        console.log(err);
        res.status(400).json({
            success: false
        })
    })
};

module.exports = getAllUsers;