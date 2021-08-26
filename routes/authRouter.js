const express = require('express')
 
 
const authController = require('../controllers/authController')
const router = express.Router()
 
router.get('/signup',authController.signupGetController)
router.post('/signup',authController.signupPostController)

router.get('/login',authController.loginGetController)
router.post('/login',authController.loginPostController)
 

module.exports = router
