const mongoose = require('mongoose')

/**
 * Schema for Order Information
 */
const orderInformation = new mongoose.Schema({
    
    customerName : {
        type : String,
        required : true,
        trim : true,
        maxLength : 30,
        unique : true
    },

    customerPhone : {
        type : Int16Array,
        require : true,
        maxLength : 15,
        unique : true
    },

    customerEmail : {
        type : String,
        require : true,
        maxLength : 100,
        unique : true
    },

    customerAddress : {
        type: String,
        require : true,
        maxLength : 300,
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