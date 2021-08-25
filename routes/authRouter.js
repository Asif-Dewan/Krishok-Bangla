const express = require('express')
 
 
const authController = require('../controllers/authController')
const router = express.Router()
 
router.get('/signup',authController.signupGetController)

module.exports = router
