const express = require('express')
 
 
const authController = require('../controllers/authController')
const router = express.Router()
 
router.get('/signup',authController.signupGetController)
router.post('/signup',authController.signupPostController)

router.get('/login',authController.loginGetController)
 

module.exports = router
