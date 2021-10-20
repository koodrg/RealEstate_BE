const User = require('../../models/User')
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('./../../../keys')
//const requireLogin = require('../middleware/requireLogin')


const signIn = (req,res) =>{
    const {username,password} = req.body;
    if(!username || !password){
        res.status(422).json({error: "Please fill all the field"})
    }
    User.findOne({username:username})
    .then(saveUser => {
        if(!saveUser){
            res.status(422).json({error:"Invalid username or password"})
        }
        bcrypt.compare(password, saveUser.password)
        .then(doMatch => {
            if (doMatch){
                //res.json({message:"successfully signed in"})
                const token = jwt.sign({_id: saveUser._id},JWT_SECRET)
                const {_id,name,email} = saveUser
                console.log({token, user:{_id,name,username}})
                res.json({token, user: {_id,name,username}, message: "successfully signed in"})
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