const express = require('express')
 
const signupValidator = require('../validator/auth/signupValidator')
const loginValidator = require('../validator/auth/loginValidator')
const authController = require('../controllers/authController') 
const router = express.Router()
 const authMiddleware = require('../middleware/authMiddleware')

 
router.get('/signup',authMiddleware.isUnAuthenticated, authController.signupGetController)
router.post('/signup',authMiddleware.isUnAuthenticated,signupValidator,authController.signupPostController)
 
router.get('/login',authMiddleware.isUnAuthenticated,authController.loginGetController)
router.post('/login',authMiddleware.isUnAuthenticated,loginValidator,authController.loginPostController)
 
router.get('/logout',authController.logoutController)
 
module.exports = router
 
 
