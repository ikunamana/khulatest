function ready() {
    var remCartItemButtons = document.getElementsByClassName('remove-button');
    for (var i = 0; i < remCartItemButtons.length; i++) {
        var button = remCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    var quantityInputs = document.getElementsByClassName('item-quantity')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
    document.getElementsByClassName('order-button')[0].addEventListener('click', orderClicked)
    document.getElementsByClassName('order-clear')[0].addEventListener('click', orderClear)
}

function cartIsEmpty() {
    var dropupmenu1 = document.getElementById("cart-content");
    var redCircle = document.getElementById('redCircle');
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var emptyCart = document.getElementById('emptycart')
    var orderButton = document.getElementById('orderButton')
    var redCircle = document.getElementById('redCircle')
        if (cartItems.children.length > 0) {
            emptyCart.style.display = "none";
            orderButton.classList.remove('order-clear');
            orderButton.style.pointerEvents = "auto";
            redCircle.style.transform = "scale(1)";
        } else {
            emptyCart.style.display = "flex";
            orderButton.classList.add('order-clear');
            orderButton.style.pointerEvents = "none";
            redCircle.style.transform = "scale(0)";
        }
        
}
updateCartTotal()
cartIsEmpty()
var dropupmenu1 = document.getElementById("cart-content");

function hideCircle(){
    if (dropupmenu1.classList.contains(("cart-content-active")) || cartItems.children.length < 1 ){
        redCircle.style.transform = "scale(0)"
    } else {
        redCircle.style.transform = "scale(1)"

}
}
function cartNumber() {
    var redCircle = document.getElementById('redCircle');
    var cartItems = document.getElementsByClassName('cart-items')[0]
    redCircle.innerText = (cartItems.children.length);
}
cartNumber()
cartIsEmpty()

function orderClicked() {
    var notification = document.getElementById('notification')
    var succsesMessage = `<div class="succsesNotification" id="succsesNotification">
    <img class="notificationImg" src="../images/success.png" >
    <span class="successText">თქვენი შეკვეთა წარმატებით გაიგზავნა!</span>
    <span id="warningX" class="warningX">&times;</span>
    </div>`
    notification.innerHTML = succsesMessage;
    notification.style.top = "40px"
    var x = document.getElementById("warningX");

        x.onclick = function warningClose(){
            notification.style.top = "-300px"
                    }

        window.onscroll = function notificationCloseViaScroll() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
                notification.style.top = "-300px"
                        }
                    }
                    setTimeout(() => {
                        notification.style.top = "-300px"
                    }, 5000)
                    
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    var cartItemsHtml = cartItems.innerHTML;
    localStorage.setItem('cart', cartItemsHtml)
    cartNumber()
    cartIsEmpty()
    updateCartTotal()
}

function orderClear() {
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    var cartItemsHtml = cartItems.innerHTML;
    localStorage.setItem('cart', cartItemsHtml)
    cartIsEmpty()
    updateCartTotal()
    hideCircle()
}

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0 || input.valuec) {
        input.value = 1
    }
    updateCartTotal()
    quantityChanged()
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    var cartItems = document.getElementById('cartItems')
    buttonClicked.parentElement.parentElement.remove();
    var cartItemsHtml = cartItems.innerHTML;
    localStorage.setItem('cart', cartItemsHtml)
    cartNumber()
    updateCartTotal()
    cartIsEmpty()
    hideCircle()
}

function updateCartTotal() {
    var allCartItems = document.getElementsByClassName('cart-items')[0]
    var cartRows = allCartItems.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-item-price')[0]
        var quantityElement = cartRow.getElementsByClassName('item-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace('GEL', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = total + 'GEL'
}
var dropupmenu1 = document.getElementById("cart-content");
var dropbtn = document.getElementById("cartbtn");

    dropbtn.onclick = function cartmenu() {
    dropupmenu1.classList.toggle("cart-content-active");
    dropbtn.classList.toggle("cart-button-active");
    updateCartTotal()
    cartNumber()
    cartIsEmpty()
    hideCircle()
}

function savedCartCall(){
    var cartItems = document.getElementById('cartItems');
    var savedCart = localStorage.getItem('cart')

    cartItems.innerHTML = savedCart;
}
function cartNumber() {
    var redCircle = document.getElementById('redCircle');
    var cartItems = document.getElementsByClassName('cart-items')[0]
    redCircle.innerText = (cartItems.children.length);
}

function cartIsEmpty() {
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var emptyCart = document.getElementById('emptycart')
    var orderButton = document.getElementById('orderButton')
    var redCircle = document.getElementById('redCircle')
    var dropbtn = document.getElementById("cartbtn");
    var dropupmenu1 = document.getElementById("cart-content");

    if (cartItems.children.length > 0) {
        emptyCart.style.display = "none";
        orderButton.classList.remove('order-clear');
        orderButton.style.pointerEvents = "auto";
        redCircle.style.transform = "scale(1)";
    } else {
        emptyCart.style.display = "flex";
        orderButton.classList.add('order-clear');
        orderButton.style.pointerEvents = "none";
        redCircle.style.transform = "scale(0)";
    }
}

savedCartCall()
cartNumber()
cartIsEmpty()
ready()