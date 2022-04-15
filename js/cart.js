if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready()
}

function ready() {
    var remCartItemButtons = document.getElementsByClassName('remove-button');
    for (var i = 0; i < remCartItemButtons.length; i++) {
        var button = remCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    var addToCartButtons = document.getElementsByClassName('btnshekvetapro');
    for (var i = 0; i < addToCartButtons.length; i++) {
        var gilaki = addToCartButtons[i];

        gilaki.addEventListener('click', addToCartClicked);
    }
    // var clearCart = document.getElementsByClassName('order-clear');
    // for (var i = 0; i < clearCart.length; i++) {
    //     var clearCartBtn = clearCart[i];
    //     clearCartBtn.addEventListener('click', clearCartFun);
    // }
    document.getElementsByClassName('order-button')[0].addEventListener('click', orderClicked)
    document.getElementsByClassName('order-clear')[0].addEventListener('click', orderClear)

}

function cartIsEmpty() {
    var cartItems = document.getElementsByClassName('cart-items')
    var emptyCart = document.getElementById('emptycart')
    if (cartItems.hasChildNodes()) {
        emptyCart.style.display = "none";
    } else {
        emptyCart.style.display = "flex";
    }
}

function orderClicked() {
    alert('მადლობა, თქვენი შეკვეთა წარმატებით გაიგზავნა!')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    cartIsEmpty()
}


function orderClear() {
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    cartIsEmpty()
}





function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
}
cartIsEmpty()


function addToCartClicked(event) {
    var gilaki = event.target;
    var product = gilaki.parentElement.parentElement.parentElement;
    var title = product.getElementsByClassName('shop-item-title')[0].innerText;
    var price = product.getElementsByClassName('shop-item-price')[0].innerText;
    var imageSrc = product.getElementsByClassName('productimg1')[0].src;
    addItemToCart(title, price, imageSrc);
}
cartIsEmpty()


function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = document.getElementsByClassName('cart-item-name')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('ეს პროდუქტი უკვე არის თქვენს კალათაში!')
            return
        }

        cartIsEmpty()
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
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('remove-button')[0].addEventListener('click', removeCartItem);

}
cartIsEmpty()

var dropbtn = document.getElementById("cartbtn");
var dropupmenu1 = document.getElementById("cart-content");

dropbtn.onclick = function cartmenu() {
    dropupmenu1.classList.toggle("cart-content-active");
    dropbtn.classList.toggle("cart-button-active");
}
cartIsEmpty()