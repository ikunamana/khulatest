if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var remCartItemButtons = document.getElementsByClassName('remove-button')
    for (var i = 0; i < remCartItemButtons.length; i++) {
        var button = remCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var addToCartButtons = document.getElementById('shekvetabtn')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var gilaki = addToCartButtons[i]
        gilaki.addEventListener('click', addToCartClicked)
    }
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
}

function addToCartClicked(event) {
    var gilaki = event.target
    var product = button.parentElement.parentElement.parentElement.parentElement
    var title = product.getElementsByClassName('cart-item-title')[0].innerText
    var price = product.getElementsByClassName('cart-item-price')[0].innerText
    var imageSrc = product.getElementsByClassName('productimg1')[0].src
    addItemToCart(title, price, imageSrc)
}


function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = document.getElementsByClassName('cart-item-title')
        // for (var i = 0; i < cartItemNames.length; i++) {
        //     if (cartItemNames[i].innerText == title) {
        //         alert('ეს პროდუქტი უკვე არის თქვენს კალათაში!')
        //         return


}

var cartRowContents = `
    <div class="cart-item">
        <img class="cart-item-image " src="${imageSrc}" alt=" ">
        <span class="cart-item-name ">${title}</span>
    </div>
    <span class="cart-item-price "> ${price} </span>
    <div class="cart-item-quantity ">
    <input class="item-quantity " value="1 " type="number ">
    <button class="remove-button ">წაშლა</button>
    </div>`
cartRow.innerHTML = cartRowContents
cartItems.append(cartRow)
cartRow.getElementsByClassName('remove-button')[0].addEventListener('click', removeCartItem)




var dropbtn = document.getElementById("cartbtn");
var dropupmenu1 = document.getElementById("cart-content");

dropbtn.onclick = function dropupmenu() {
    dropupmenu1.classList.toggle("cart-content-active");
    dropbtn.classList.toggle("cart-button-active");
}