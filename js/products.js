// json-ის დაკავშირება და ინფორმაციის წამოღება
async function populate() {

    let requestURL = 'https://raw.githubusercontent.com/ikunamana/khulatest/main/js/products.json';
    let request = new Request(requestURL);

    let response = await fetch(request);
    let khulaProducts = await response.json();

    populateProduktebi(khulaProducts);

}
// პროდუქტების სექციისა და ელემენტების შექმნა, პროდუქტის დივების გამრავლება
function populateProduktebi(obj) {
    var section = document.getElementById('section');
    var produkti = obj['production'];


    for (var komponenti of produkti) {
        // const myDiv = document.createElement('div');
        var firstDiv = document.createElement('div');
        var imgDiv = document.createElement('div');
        var imgOfFirstDiv = document.createElement('img');
        var secondDiv = document.createElement('div');
        var dasaxelebaII = document.createElement('p');
        var nameOfOProductII = document.createElement('p');
        var fasiCharchoII = document.createElement('p');
        var actualPriceII = document.createElement('h2');
        var btnshekvetaII = document.createElement('div');
        var btnshekveta = document.createElement('button');
        // var kalataDiv = document.createElement('div');
        // var kalata = document.createElement('p');
        // var kalataimg = document.createElement('img')
        var br = document.createElement('br');
        var hr = document.createElement('br');

        // myDiv.setAttribute("class", "allproduct");
        firstDiv.setAttribute("class", "productform");
        imgDiv.setAttribute("class", "productimg");
        imgOfFirstDiv.setAttribute("class", "productimg1");
        imgOfFirstDiv.setAttribute("src", `../images${komponenti.img}`);
        secondDiv.setAttribute("class", "producttext");
        btnshekvetaII.setAttribute("class", "butshekv");
        btnshekveta.setAttribute("class", "btnshekvetapro");
        // kalataDiv.setAttribute("class", "cartdiv");
        // kalataimg.setAttribute ("class", "cartimg");
        // kalataimg.setAttribute("src","../images/cart1.png");
        nameOfOProductII.setAttribute('class', "shop-item-title");
        nameOfOProductII.setAttribute('id',`${komponenti.id}`);
        
        actualPriceII.setAttribute('class', "shop-item-price" );

        // kalata.innerHTML = "კალათა";
        dasaxelebaII.innerHTML = "<strong>დასახელება:</strong>";
        btnshekveta.innerHTML = "კალათა";
        fasiCharchoII.innerHTML = "<strong>ფასი (" + '<span class="product-item-type">' + `${komponenti.type}` + '</span>' + "):</strong>";

    // json-ის ინფორმაციის ჩაშენება html-ში

        // nameOfOProductII.textContent = `${komponenti.name}`;
        // actualPriceII.textContent = `${komponenti.price}`;
        nameOfOProductII.innerHTML =  `${komponenti.name}`;
        actualPriceII.innerHTML = `${komponenti.price}` + " ₾ " + `<br><br><br><br>`;

        // myDiv.append(firstDiv);
        firstDiv.append(imgDiv);
        imgDiv.append(imgOfFirstDiv);
        firstDiv.append(secondDiv);
        secondDiv.append(dasaxelebaII);
        secondDiv.append(nameOfOProductII);
        secondDiv.append(fasiCharchoII);
        fasiCharchoII.append(br)
        fasiCharchoII.append(hr)
        fasiCharchoII.append(br)
        fasiCharchoII.append(br)

        secondDiv.append(actualPriceII);
        secondDiv.append(btnshekvetaII);
        btnshekvetaII.append(btnshekveta);
        // btnshekvetaII.append(kalataDiv);
        // kalataDiv.append(kalataimg);
        section.append(firstDiv);
    }

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready()
}

function ready() {
    var quantityInputs = document.getElementsByClassName('item-quantity')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('keyup', quantityChanged)
    }

    var remCartItemButtons = document.getElementsByClassName('remove-button');
    for (var i = 0; i < remCartItemButtons.length; i++) {
        var button = remCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    var plusButton = document.getElementsByClassName('cart-quantity-plus');
    for (var i = 0; i < plusButton.length; i++) {
        var plusButtonF = plusButton[i];
        plusButtonF.addEventListener('click', plusButtonClicked);
    }

    var addToCartButtons = document.getElementsByClassName('btnshekvetapro');
    for (var i = 0; i < addToCartButtons.length; i++) {
        var gilaki = addToCartButtons[i];

        gilaki.addEventListener('click', addToCartClicked);
    }
    

    document.getElementsByClassName('order-button')[0].addEventListener('click', orderClicked)
    document.getElementsByClassName('order-clear')[0].addEventListener('click', orderClear)
}

// function buttonDisabled() {

//     var emptyCart = document.getElementById('emptycart')
//     var orderButton = document.getElementById('orderButton')

//     if (emptyCart.style.display == "flex") {

//         orderButton.classList.add('order-clear');
//     } else {
//         orderButton.classList.remove('order-clear');

//     }
// }

// function cartBtnCheck() {
//     var dropupmenu1 = document.getElementById("cart-content");
//     var redCircle = document.getElementById('redCircle');
//     if (dropupmenu1.style.pointerEvents = "visible") {
//         redCircle.style.transform = "scale(0)"

//     } else {
//         redCircle.style.transform = "scale(1)"

//     }
// }

// var cartbtn = document.getElementById('cartbtn');
// var redCircle = document.getElementById('redCircle');

// cartbtn.onclick = function cartBtnCheck() {
//     redCircle.classList.toggle('scaleReduce');
// }

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
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function plusButtonClicked(event){
    var plusButtonF = event.target;
    var targetedInput = plusButtonF.parentElement
    var quantityInput = plusButtonF.getElementsByName('item-quantity');
    var quantityInputValue = quantityInput.value;

   quantityInputValue = quantityInputValue++
    
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

function addToCartClicked(event) {
    var gilaki = event.target;
    var product = gilaki.parentElement.parentElement.parentElement;
    var title = product.getElementsByClassName('shop-item-title')[0].innerText;
    var price = product.getElementsByClassName('shop-item-price')[0].innerText;
    var productID = product.getElementsByClassName('shop-item-title')[0].id;
    var imageSrc = product.getElementsByClassName('productimg1')[0].src;
    var productItemType = product.getElementsByClassName('product-item-type')[0].innerHTML;
//      var obj =[]
//     localStorage.setItem("localTitle", title)
//     localStorage.setItem("localPrice", price)
//     localStorage.setItem("localProductID", productID)
//     localStorage.setItem("localImageSrc", imageSrc)
//     localStorage.setItem("localProductItemType", productItemType)

// //     let cartDivInside = {
// //         localTitle: `${komponenti.name}`,
// //         localPrice: `${komponenti.price}`,
// //         localProductID: `${komponenti.id}`,
// //         localImageSrc:`${komponenti.img}`,
// //         localProductItemType:`${komponenti.type}`
// // }
// //     let cartDivString = JSON.stringify(cartDivInside);
// //     localStorage.setItem("cartDivString", cartDivString)
// //     let cartDivString2 = JSON.parse(localStorage.getItem("cartDivString"));
// //     console.log(JSON.parse(localStorage.getItem("localTitle")))
//     var gilaki = event.target;
//     var product = gilaki.parentElement.parentElement.parentElement;
//     var title = localStorage.getItem("localTitle");
//     var price = localStorage.getItem("localPrice");
//     var productID = localStorage.getItem("localProductID");
//     var imageSrc = localStorage.getItem("localImageSrc");
//     var productItemType = localStorage.getItem("localProductItemType");
    addItemToCart(title, price, imageSrc, productID, productItemType);
    updateCartTotal()
    cartNumber()
    hideCircle()
}

function addItemToCart(title, price, imageSrc, productID, productItemType) {
    var cartRow = document.createElement('div')
        cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = document.getElementsByClassName('cart-item-name')
    var notification = document.getElementById('notification')
    var errorMessage = `<div class="warningNotification" id="warningNotification">
    <img class="notificationImg" src="../images/info.png" >
    <span class="warningText">ეს პროდუქტი უკვე არის თქვენს კალათაში.</span>
    <span id="warningX" class="warningX">&times;</span>
    </div>
    `

    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            notification.innerHTML = errorMessage
            notification.style.top = "40px"
                 
                 var close = document.getElementsByClassName("warningX")
                    for (var i = 0; i < close.length; i++){
                        var closeX = close[i];
                    closeX.addEventListener('click', warningClose);
                }
                    function warningClose(event){
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
        
               return
                }
        updateCartTotal()
    }

    var cartRowContents = `
    <div id="${productID}" class="cart-item">
        <img class="cart-item-image " src="${imageSrc}" alt="${title}">
        <span class="cart-item-name">${title}</span>
    </div>
    <span class="cart-item-price "> ${price}</span>
    <div class="cart-item-quantity ">
        <span class="cart-quantity-plus"><img width="30px" src="../images/plus.png" alt="plus"></span>
        <span class="cart-quantity-minus"><img  width="30px" src="../images/minus.png" alt="minus"></span>
        <input class="item-quantity" name="item-quantity"  value="1" type="number">
        <span class="cart-item-type">${productItemType}</span>
        <button class="remove-button">წაშლა</button>
    </div>`

    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    // localStorage.setItem('cart', `${cartRowContents}`)
    // var cartDiv1 = document.createElement('div');
    // cartDiv1.innerHTML = localStorage.getItem('cart');
    // cartItems.append(cartDiv1);
    cartRow.getElementsByClassName('remove-button')[0].addEventListener('click', removeCartItem);
    var cartItemsHtml = cartItems.innerHTML;
    localStorage.setItem('cart', cartItemsHtml)
    updateCartTotal()
    cartIsEmpty()
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
populate();
