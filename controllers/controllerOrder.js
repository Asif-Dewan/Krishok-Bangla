const Market = require('../models/OrderInfo')

exports.OrderInfoGetController = (res) =>{
    res.render('pages/auth/PlaceOrder', {
        title : 'PlaceOrder' , 
        error : {}, 
        value : {}
    })
}
