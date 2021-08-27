const express = require('express')
const signupValidator = require('../validator/auth/signupValidator')
 
const authController = require('../controllers/authController')
const router = express.Router()
 
router.get('/signup',authController.signupGetController)
router.post('/signup',signupValidator,authController.signupPostController)

router.get('/login',authController.loginGetController)
router.post('/login',authController.loginPostController)
 

module.exports = router
