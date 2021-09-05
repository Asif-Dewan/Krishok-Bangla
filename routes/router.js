const express = require('express')
const marketPlace = require('../functions/marketPlace')
 
const authController = require('../controllers/controller.js')
const router = express.Router()
 
router.get('/marketPlace',controller.marketPlaceGetController)

router.get('/addPost',controller.addPostGetController)
router.post('/addPost',controller.addPostPostController)
 

module.exports = router