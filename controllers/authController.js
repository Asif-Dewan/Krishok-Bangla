const bcrypt = require('bcrypt')
const {validationResult} = require('express-validator')

const errorFormatter = require('../utils/validationErrorFormatter')

const User = require('../models/userModel')
/**
 * This is the controller for getting the signup page. It will render the signup page for * the User
 * @module controller/signupGetController
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */


exports.signupGetController = (req,res,next) =>{
    res.render('pages/auth/signup', {
        title : 'Register Your Account' , 
        error : {}, 
        value : {}
    })
}
/**
* This is the controller for handling signup requests. It will validate if the user's 
* provide wrong input. We are hashing the password for security purpose. And will 
* redirect the user if the signup process is successful. And if there is an Error, it  
* will catch error globally.
* @module controller/signupPostController
* @param {Object} req - Express request object
* @param {Object} res - Express response object
* @param {Function} next - Express next middleware function
*/

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

/**
 * This is the controller for getting the login page. It will render the login page for 
 * the User.
 * @module controller/LoginGetController
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */

exports.loginGetController = (req,res,next) =>{
    res.render('pages/auth/login', {title : 'Login Your Account'})
}

/**
 * This is the controller for handling login request. It will validate if the user's input 
 * is relevant with the data saved in the database. And then will fetch the user's 
 * credentials from the database to check if the user's credential is matched with the 
 * given input. If the request is successful it will redirect the User to respective pages 
 * based on their roles. And if any errors occurs, it will be handled by global error 
 * handler.
 * @module controller/LoginPostController
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */

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

/**
 * This is the controller for logout page. It will render the login page for the User
 * and destroy session from the database
 * @module controller/LogoutController
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
 

exports.logoutController = (req,res,next) => {
    console.log(req.session)
    req.session.destroy( err =>{
        if(!err){
            
            return res.redirect('/auth/login')
            
        }
        return next(err)
            
    })
}
 
 
