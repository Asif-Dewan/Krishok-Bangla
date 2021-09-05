const Market = require('../models/marketPlaceModel')

exports.marketPlaceGetController = (res) =>{
    res.render('pages/auth/marketPlace', {
        title : 'MarketPlace' , 
        error : {}, 
        value : {}
    })
}


exports.addPostGetController = (res) =>{
    res.render('pages/auth/addPost', {title : 'Add Post'})
}



exports.addPostPostController = async (req,res,next) =>{
    let {farmName, productName, productPrice, imgSource} = req.body
 
   try{
        console.log('Successfully posted In',Market)
        console.log(`You have as a ${user.role}`)
        res.render('pages/auth/addPost' , {title : 'Add post'})
 
    }catch(err){
        console.log(err)
        next(err)
    }
}