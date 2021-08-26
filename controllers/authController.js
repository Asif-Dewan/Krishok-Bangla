const bcrypt = require('bcrypt')
const User = require('../models/userModel')

exports.signupGetController = (req,res,next) =>{
    res.render('pages/auth/signup', {title : 'Register Your Account'})
}

exports.loginGetController = (req,res,next) =>{
    res.render('pages/auth/login', {title : 'Login Your Account'})
}

exports.signupPostController = async (req,res,next) =>{
    console.log(req.body)
    let {name,phone,address,nid,role,email,password} = req.body
    try{
        let hashedPassword = await bcrypt.hash(password,11)
        let user = new User({
            name,
            phone,
            address,
            nid,
            role,
            email,
            password :hashedPassword
        })
       let createdUser = await user.save() 
       console.log('user created successfully',createdUser)
       res.render('pages/auth/signup', {title : 'Register Your Account'})
    }catch(err){
        console.log(err)
        next(err)
    }
}
exports.loginPostController = async (req,res,next) =>{
    let {email, password} = req.body
 
    try{
        let user = await User.findOne({email})
        if(!user){
            return res.status(404).json({
                status: 'Failed',
                message : 'Invalid Credentials'
            })
        }
        console.log('Successfully logged In',user)
        console.log(`Your are logged in as a ${user.role}`)
        res.render('pages/auth/login' , {title : 'Login Your Account'})
 
    }catch(err){
        console.log(err)
        next(err)
    }
}