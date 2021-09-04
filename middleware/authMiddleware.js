const User = require('../models/userModel')
 
/**
 * This middleware function will bind the user with request object.
 * @function authMiddleware/bindUser
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * 
 */
exports.bindUserWithRequest = () =>{
    return async (req,res,next) => {
        if(!req.session.isLoggedIn){
            return next()
        }
 
        try{
            let user =await User.findById(req.session.user._id)
            req.user = user
            next()
        }
        catch (e) {
            console.log(e)
            next()
        }
 
    }
}
/**
 * This middleware function will check if the user is authenticated or not.
 * @function authMiddleware/isAuthenticated
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * 
 */
 
exports.isAuthenticated = (req,res,next) =>{
    if(!req.session.isLoggedIn){
        return res.redirect('/auth/login')
    }
    next()
}
 /**
 * This middleware function will check if the user is Unauthenticated or not.
 * @function authMiddleware/isUnAuthenticated
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * 
 */

exports.isUnAuthenticated = (req,res,next) =>{
    if(req.session.isLoggedIn){
        return res.redirect('/dashboard')
    }
    next()
}
