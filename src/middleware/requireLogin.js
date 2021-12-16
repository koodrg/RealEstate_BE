const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../../keys')
const User = require('../models/User')

const requireLogin = (req,res,next)=>{
    const { authorization } = req.headers
    if (!authorization) {
        res.status(401).json({error:"Token null"})
    }
    const token = authorization.replace("Bearer ","")
    jwt.verify(token, JWT_SECRET, (err,payload) => {
        if(err){
            return res.status(401).json({error:"Invalid token"})
        }
         
        const {_id} = payload
        User.findById(_id).then(userdata => {
            req.user = userdata
            next()
        })
        
    })
}

module.exports = requireLogin