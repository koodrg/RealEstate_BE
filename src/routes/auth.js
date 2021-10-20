const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
// const User = require('../models/User')
// const bcrypt = require("bcryptjs")
// const jwt = require('jsonwebtoken')
// const {JWT_SECRET} = require('../../keys')
const requireLogin = require('../middleware/requireLogin')
const signUp = require('../controllers/user/signUp')
const signIn = require('../controllers/user/signIn')

router.get('/protected', requireLogin, (req,res)=>{
    res.redirect("http://localhost:3000/")
})

router.post('/signup',signUp)

router.post('/signin',signIn)

module.exports = router
