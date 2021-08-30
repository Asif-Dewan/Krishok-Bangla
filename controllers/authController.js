const bcrypt = require('bcrypt')
const {validationResult} = require('express-validator')

const errorFormatter = require('../utils/validationErrorFormatter')

const User = require('../models/userModel')

exports.signupGetController = (req,res,next) =>{
    res.render('pages/auth/signup', {
        title : 'Register Your Account' , 
        error : {}, 
        value : {}
    })
}
exports.signupPostController = async (req,res,next) =>{
    let {name,phone,address,nid,role,email,password} = req.body
    let errors = validationResult(req).formatWith(errorFormatter)
 
    if(!errors.isEmpty()){
        return res.render('pages/auth/signup', 
        {
            title : 'Register Your Account',
            error : errors.mapped(),
            value : {
                name,phone,address,nid,email,password
            }
            
        })
    }
 
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


exports.loginGetController = (req,res,next) =>{
    res.render('pages/auth/login', {title : 'Login Your Account'})
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
        req.session.isLoggedIn = true
        req.session.user = user
        res.setHeader ('set-Cookie', 'isLoggedIn=true')
        res.render('pages/auth/login' , {title : 'Login Your Account'})
 
    }catch(err){
        console.log(err)
        next(err)
    }
}

exports.logoutController = (req,res,next) => {
    console.log(req.session)
    req.session.destroy( err =>{
        if(!err){
            
            return res.redirect('/auth/login')
            
        }
        return next(err)
            
    })
}
 
 
