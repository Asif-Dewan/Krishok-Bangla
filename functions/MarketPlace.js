
var productPrice=""
var productName=""
var imgSource=""
var farmName=""

window.addEventListener('load', ()=>{
    productPrice= localStorage.getItem('productPriceOut');
    productName=localStorage.getItem('productNameOut');
    imgSource= localStorage.getItem('productImgOut');
    farmName= localStorage.getItem('farmNameOut');


    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
    
    
    var postButton= document.getElementsByClassName('postButton')
    for (var i = 0; i < postButton.length; i++) {
        var button = postButton[i]
        button.addEventListener('click', postButtonClicked)
    
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }


})

   
var purchaseConfirmedClick= document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)

/**
 * This function will confirm the purchase 
 */

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}
/**
 * This function will remove the items from cart 
 * @param {object} event object containing information about the 
 * action that just happened
 */
module.exports={
 removeCartItem:function(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
},

/**
 * This function will update the cart total as the quantity changes
 * @param {object} event object containing information about the 
 * action that just happened
 */

 quantityChanged:function(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
},
/**
 * 
 * @param {object} event object containing information about the 
 * action that just happened
 */

 addToCartClicked: function(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
},
 
/**
 * This function adds the item to cart 
 * @param {string} title this is the tile of the product
 * @param {string} price this is the price of the product
 * @param {string} imageSrc this is the image source of the product
 * @returns {string} returns a string
 */


 addItemToCart: function(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('shop-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="shop-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)

return "Add to cart done!!"
},


/**
 * This function updates the cart total
 * @returns {boolean} returns a boolean
 */

 
 updateCartTotal:function() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = total + 'TK'
    return true;
},



/**
 This function replaces the inner html 
 * files with given inputs in the add post page
 * @param {object} event object containing information about the 
 * action that just happened
 * @returns {boolean} returns a boolean
 */
 postButtonClicked:function(event){
    console.log(productName +" "+"btn working!!")

    
    document.getElementsByClassName('shop-item-info')[5].innerHTML= farmName;
    document.getElementsByClassName('shop-item-price')[5].innerHTML= productPrice;
    document.getElementsByClassName('shop-item-image')[5].src= imgSource;
    document.getElementsByClassName('shop-item-title')[5].innerHTML= productName;

    return true;
   
}

}