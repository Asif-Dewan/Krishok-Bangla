const mongoose = require('mongoose')

/**
 * A market schema
 */
const marketSchema = new mongoose.Schema({
    
    farmName : {
        type : String,
        required : true,
        trim : true,
        maxLength : 30,
        unique : true
    },
    productPrice : {
        type : number,
        required: true,
        min: 0,
        maxLength: 6
    },
    imgSource : {
        type : String,
        required : true

    },
    productName : {
        type : String,
        required : true,
        trim : true,
        maxLength : 30,
        unique : true
    }
})

const Product = mongoose.model('Product',productSchema)

module.exports = Product