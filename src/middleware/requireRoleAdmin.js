const requiRoleAdmin = (req, res, next) => {
    let user = req.user;
    let userType = user.userType
    //admin: 0
    //client : 1
    if(type == 1){
        res.status(200).send("Permission denied")
    }
    if(type ==0) next()
}