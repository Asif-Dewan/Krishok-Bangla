const User = require('../models/userModel')

exports.signupGetController = (req,res,next) =>{
    res.render('pages/auth/signup', {title : 'Register Your Account'})
}
exports.signupPostController = async (req,res,next) =>{
    
    let {name,phone,address,nid,role,email,password} = req.body
    try{
        let user = new User({
            name,
            phone,
            address,
            nid,
            role,
            email,
            password
        })
       let createdUser = await user.save() 
       console.log('user created successfully',createdUser)
       res.render('pages/auth/signup', {title : 'Register Your Account'})
    }catch(err){
        console.log(err)
        next(err)
    }
}