// json-ის დაკავშირება და ინფორმაციის წამოღება
async function populate() {

    let requestURL = 'https://raw.githubusercontent.com/ikunamana/khulatest/main/js/products.json';
    let request = new Request(requestURL);

    let response = await fetch(request);
    let superHeroes = await response.json();

    populateProduktebi(superHeroes);

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
        var kalataDiv = document.createElement('div');
        var kalata = document.createElement('p');
        var kalataimg = document.createElement('img')
        var br = document.createElement('br');
        var hr = document.createElement('br');





        // myDiv.setAttribute("class", "allproduct");
        firstDiv.setAttribute("class", "productform");
        imgDiv.setAttribute("class", "productimg");
        imgOfFirstDiv.setAttribute("class", "productimg1");
        imgOfFirstDiv.setAttribute("src", `${komponenti.img}`);
        secondDiv.setAttribute("class", "producttext");
        btnshekvetaII.setAttribute("class", "butshekv");
        btnshekveta.setAttribute("class", "btnshekvetapro");
        kalataDiv.setAttribute("class", "cartdiv");
        kalataimg.setAttribute ("class", "cartimg");
        kalataimg.setAttribute("src","../images/cart1.png");
        nameOfOProductII.setAttribute('class', "shop-item-title");
        actualPriceII.setAttribute('class', "shop-item-price" );

        kalata.innerHTML = "კალათა";
        dasaxelebaII.innerHTML = "<strong>დასახელება:</strong>";
        btnshekveta.innerHTML = "შეკვეთა";
        fasiCharchoII.innerHTML = "<strong>ფასი (ც):</strong>";

            

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
        btnshekvetaII.append(kalataDiv);
        kalataDiv.append(kalataimg);
        section.append(firstDiv);
    }

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
    // var addToCartButtons = document.getElementsByClassName('btnshekvetapro');
    // for (var i = 0; i < addToCartButtons.length; i++) {
    //     var gilaki = addToCartButtons[i];

    //     gilaki.addEventListener('click', localStorageFunction);
    // }

    var quantityInputs = document.getElementsByClassName('item-quantity')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
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
cartNumber()

function cartNumber() {
    var redCircle = document.getElementById('redCircle');
    var cartItems = document.getElementsByClassName('cart-items')[0]
    redCircle.innerText = (cartItems.children.length);
}
cartNumber()

function orderClicked() {
    alert('მადლობა, თქვენი შეკვეთა წარმატებით გაიგზავნა!')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    cartIsEmpty()
    updateCartTotal()
    cartNumber()
}


function orderClear() {
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    cartIsEmpty()
    updateCartTotal()
}


function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
    quantityChanged()
}


function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();

    cartIsEmpty()
    updateCartTotal()
    cartNumber()

}


function addToCartClicked(event) {
    var gilaki = event.target;
    var product = gilaki.parentElement.parentElement.parentElement;
    var title = product.getElementsByClassName('shop-item-title')[0].innerText;
    var price = product.getElementsByClassName('shop-item-price')[0].innerText;
    var imageSrc = product.getElementsByClassName('productimg1')[0].src;
    addItemToCart(title, price, imageSrc);
    cartIsEmpty()
    updateCartTotal()
    cartNumber()

}

// function localStorageFunction(event){
//     var gilaki = event.target;
//     var product = gilaki.parentElement.parentElement.parentElement;
//     var title = product.getElementsByClassName('shop-item-title')[0].innerText;
//     var price = product.getElementsByClassName('shop-item-price')[0].innerText;
//     var imageSrc = product.getElementsByClassName('productimg1')[0].src;
  
//         localStorage.setItem('name', `${title}`)
//     console.log(localStorage.getItem('name'))
//     addToCartClicked()
// }


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
        updateCartTotal()
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
    localStorage.setItem('cart', `${cartRowContents}`)
    var cartDiv1 = document.createElement('div');
    cartDiv1.innerHTML = localStorage.getItem('cart');
    cartItems.append(cartDiv1);
    cartRow.getElementsByClassName('remove-button')[0].addEventListener('click', removeCartItem);
    updateCartTotal()
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

var dropbtn = document.getElementById("cartbtn");
var dropupmenu1 = document.getElementById("cart-content");

dropbtn.onclick = function cartmenu() {
    dropupmenu1.classList.toggle("cart-content-active");
    dropbtn.classList.toggle("cart-button-active");
    cartIsEmpty()
    updateCartTotal()
    cartNumber()
}
}


populate();
