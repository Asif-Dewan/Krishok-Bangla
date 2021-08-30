const express = require('express')
const signupValidator = require('../validator/auth/signupValidator')
const loginValidator = require('../validator/auth/loginValidator')
const authMiddleware = require('../middleware/authMiddleware')
 
const authController = require('../controllers/authController')
const router = express.Router()
 
router.get('/signup',authMiddleware.isUnAuthenticate,authController.signupGetController)
router.post('/signup',authMiddleware.isUnAuthenticate,signupValidator,authController.signupPostController)
router.get('/login',authMiddleware.isUnAuthenticate,authController.loginGetController)
router.post('/login',authMiddleware.isUnAuthenticate,loginValidator,authController.loginPostController)

router.get('/logout',authController.logoutController)
 
module.exports = router
