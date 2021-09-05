/**
 * This function retrives the submitted values
 * from the add post form. 
 * 
 */


function handleSubmit ()
{
const farmName = document.getElementById('frName').value
const productName=  document.getElementById('pName').value
const productPrice=  document.getElementById('pPrice').value
const productImg=  document.getElementById('imgSrc').value

localStorage.setItem("farmNameOut",farmName);
localStorage.setItem("productNameOut",productName);
localStorage.setItem("productPriceOut",productPrice);
localStorage.setItem("productImgOut",productImg);


}

    
