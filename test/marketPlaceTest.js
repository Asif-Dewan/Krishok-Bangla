const assert = require('chai').assert;
const addItemToCart= require ('../functions/MarketPlace').addItemToCart
const updateCartTotal= require ('../functions/MarketPlace').updateCartTotal
const removeCartItem= require ('../functions/MarketPlace').removeCartItem
const handhandleSubmit= require('../functions/addPost').handhandleSubmit

describe('Feild Test', function(){
    
    it('postButtonClicked should return true', function(){
       let result = addItemToCart(title, price, imageSrc);
       assert.equal(result,'true');
    });
    it('updateCartTotal should return true', function(){
        let result = updateCartTotal();
        assert.equal(result,'true');
    });

    it('removeCartItem should return true', function(){
        let result = removeCartItem();
        assert.equal(result,'true');
    });

    it('postHandleTest', function(){
        let result = handhandleSubmit();
        assert.equal(result,'true');
    });

});