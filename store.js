if(document.readyState== 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
}
else{
    ready()
}
function ready(){
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')

for(var i=0;i<removeCartItemButtons.length;i++){
    var button= removeCartItemButtons[i]
    button.addEventListener('click',function(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
    })
}
var addToCartButton = document.getElementsByClassName('shop-item-button')
for(var i=0; i< addToCartButton.length; i++){
    var button = addToCartButton[i]
    button.addEventListener('click', addToCart)
}

}

function addToCart(event){
var button = event.target
var shopItem = button.parentElement
var title = shopItem.getElementById('title1').innerText
console.log(title)

}



function updateCartTotal(){
    var cartItemContainer= document.getElementsByClassName('cart-items')[0]
    var cartRows= cartItemContainer.getElementsByClassName('cart-row')
    var total =0
    for(var i=0;i<cartRows.length;i++){
        var cartRow= cartRows[i]
        var priceElement= cartRow.getElementsByClassName('cart-price cart-column')[0]
        var quantityElement= cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price= parseFloat(priceElement.innerText.replace('tk',''))
        var quantity= quantityElement.value
        total = total + (price * quantity)
    }
    total= Math.round(total * 100)/100
    document.getElementsByClassName('cart-total-price')[0].innerText = total+ " tk"
}

var quantityInputs = document.getElementsByClassName('cart-quantity-input')
for(var i=0; i<quantityInputs.length; i++){
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
}

function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value<=0){
        input.value= 1
    }
    updateCartTotal()
}
