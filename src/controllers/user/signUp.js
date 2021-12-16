const User = require('../../models/User')
const bcrypt = require("bcryptjs")

const signUp = (req,res)=>{
    console.log(req.body)
    const {name,username,password,fullAddress, phoneNumber, address} = req.body;
    console.log(address)
    if(!username || !password || !name){
        res.status(422).json({error:"Please fill all the field"})
    }
    User.findOne({username:username})
    .then((saveUser)=>{
        if(saveUser){
            res.status(422).json({error:"User already exists with that email"});
            return;
        }
        bcrypt.hash(password,12)
        .then(hashedPassword => {
            console.log(address)
            const user = new User({
                username,
                name,
                password: hashedPassword,
                phoneNumber,
                address,
                fullAddress
            })
    
            user.save()
            .then(user =>{
                res.json({message:"Save successfully"})
            })
            .catch(err => {
                console.log(err)
            })
            
        })
    })
    .catch(err => {
        console.log(err)
    })

}

module.exports = signUp;