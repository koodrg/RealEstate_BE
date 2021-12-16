const User = require('../../models/User')
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('./../../../keys')
//const requireLogin = require('../middleware/requireLogin')


const signIn = (req,res) =>{
    const {username, password} = req.body;
    console.log(req.body)
    if(!username || !password){
        return res.status(422).json({error: "Username or password can not be empty"})
    }
    User.findOne({username:username})
    .then(saveUser => {
        if(!saveUser){
            return res.status(422).json({error:"Invalid username or password"})
        }
        bcrypt.compare(password, saveUser.password)
        .then(doMatch => {
            if (doMatch){
                //res.json({message:"successfully signed in"})
                const token = jwt.sign({_id: saveUser._id, userType: saveUser.userType, name: saveUser.name},JWT_SECRET)
                const { _id, name, username, userType } = saveUser
                console.log({token, user:{ _id, name, username, userType }})
                res.json({token, user: { _id,name,username, userType }, message: "Successfully signed in"})
            }
            else {
                return res.status(422).json({error:"Invalid username or password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
}

module.exports = signIn;