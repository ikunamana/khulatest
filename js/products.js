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

// JS-ის ფაილი იტვირთება გვერდის პარალელურად, გვერდის ჩატვირთვისას გაეშვება ფუნქცია

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready()
}

function ready() {
    // Event-ები ჩატვირთული გვერდის ელემენტებზე
    
    // პროდუქტის რაოდენობის Input-ის მნიშვნელობის ცვლილების Event
    var quantityInputs = document.getElementsByClassName('item-quantity')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged)
    }

    // პროდუქტის რაოდენობის გამზრდელი ღილაკის, (+) - ის Event
    var plusButton = document.getElementsByClassName('cart-quantity-plus');
    for (var i = 0; i < plusButton.length; i++) {
        var plusButtonF = plusButton[i];
        plusButtonF.addEventListener('click', plusButtonClicked);
    }

    var minusButton = document.getElementsByClassName('cart-quantity-minus');
    for (var i = 0; i < minusButton.length; i++) {
        var minusButtonF = minusButton[i];
        minusButtonF.addEventListener('click', minusButtonClicked);
    }

    // პროდუქტის ამოსაშლელი ღილაკის, (წაშლა)-ის Event
    var remCartItemButtons = document.getElementsByClassName('remove-button');
    for (var i = 0; i < remCartItemButtons.length; i++) {
        var button = remCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    
    // პროდუქტის კალათაში დასამატებელი ღილაკის, (კალათა)-ის Event
    var addToCartButtons = document.getElementsByClassName('btnshekvetapro');
    for (var i = 0; i < addToCartButtons.length; i++) {
        var gilaki = addToCartButtons[i];

        gilaki.addEventListener('click', addToCartClicked);
    }
    
    // კალათაში არსებული პროდუქტების შეკვეთა/ერთიანად წაშლის ღილაკების Event
    document.getElementsByClassName('order-button')[0].addEventListener('click', orderClicked)
    document.getElementsByClassName('order-clear')[0].addEventListener('click', orderClear)
}

// როცა კალათაში არ არის პროდუქტი, კალათის შიგთავსი იცლება Div-ით, რომელიც ატყობინებს მომხმარებელს, რომ კალათა ცარიელია.
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

// კალათის ღილაკის მარჯვენა ზედა კუთხეში არსებული რაოდენობის მაჩვენებელი წითელი წრე ქრება, როცა კალათა ღიაა.
function hideCircle(){
    var dropupmenu1 = document.getElementById("cart-content");

    if (dropupmenu1.classList.contains(("cart-content-active")) || cartItems.children.length < 1 ){
        redCircle.style.transform = "scale(0)"
    } else {
        redCircle.style.transform = "scale(1)"
    }
}

// კალათაში არსებული პროდუქტების რაოდენობა
function cartNumber() {
    var redCircle = document.getElementById('redCircle');
    var cartItems = document.getElementsByClassName('cart-items')[0]
    redCircle.innerText = (cartItems.children.length);
}
cartNumber()
cartIsEmpty()

// შეკვეთის ღილაკზე Click Event და შეტყობინების Div-ის გამოსვლა ეკრანზე.
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

    // შეტყობინების Div-ის დახურვა X ღილაკზე კლიკით.
        x.onclick = function warningClose(){
            notification.style.top = "-300px"
                    }
    // შეტყობინების Div-ის დახურვა სქროლით.
        window.onscroll = function notificationCloseViaScroll() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
                notification.style.top = "-300px"
            }
        }
    // შეტყობინების Div-ის დახურვა ავტომატურად, 5 წამში.
        setTimeout(() => {
                notification.style.top = "-300px"
                }, 5000)


                var cartItems = document.getElementsByClassName('cart-items')[0]
                var cartRow = cartItems.getElementsByClassName('cart-row');
                for (var i = 0; i < cartRow.length; i++) {
                    var cartRowF = cartRow[i];

                var orderedItems = cartRowF.getElementsByClassName('cart-item-name')[0].innerHTML
                var orderedQuantity = cartRowF.getElementsByClassName('item-quantity')[0].value
                var orderedType = cartRowF.getElementsByClassName('cart-item-type')[0].innerHTML
                var orderedPrice = cartRowF.getElementsByClassName('cart-item-price')[0].innerHTML
                var finalOrder = document.createElement('div');
                var order =[{
                        name: orderedItems,
                        raodeonoba: orderedQuantity,
                        type: orderedType,
                        price: orderedPrice}]

                // orderObj = JSON.stringify(order)
                
                // finalOrder.innerHTML = orderObj
                localStorage.setItem(order[i], JSON.stringify(order))
        }


    // კალათაში არსებული პროდუქტების ერთიანად წაშლა შეკვეთის ღილაკზე კლიკის შემდეგ.
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    // ცარიელი კალათის LocalStorage-ში დამახსოვრება.
    var cartItemsHtml = cartItems.innerHTML;
    localStorage.setItem('cart', cartItemsHtml)
    cartNumber()
    cartIsEmpty()
    updateCartTotal()
}

// კალათის გასუფთავება, ყველა პროდუქტის ერთიანად წაშლა ღილაკზე "გასუფთავება" დაჭერით.
function orderClear() {
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }

    // ცარიელი კალათის LocalStorage-ში დამახსოვრება.
    var cartItemsHtml = cartItems.innerHTML;
    localStorage.setItem('cart', cartItemsHtml)
    cartIsEmpty()
    updateCartTotal()
    hideCircle()
}

// პროდუქტის რაოდენობის გაზრდა პლუს (+) ღილაკზე დაჭერით.
function plusButtonClicked(event){
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var plusButtonF = event.target;
    var inputFather = plusButtonF.parentElement.nextSibling.nextElementSibling;
    var quantityValue = parseInt(inputFather.value, 10);
        quantityValue = isNaN(quantityValue) ? 0 : quantityValue;
    if(quantityValue<10) {
        quantityValue++;
        inputFather.value = quantityValue;
        inputFather.setAttribute('value', quantityValue)
        var cartItemsHtml = cartItems.innerHTML;
        localStorage.setItem('cart', cartItemsHtml)    
    }
    updateCartTotal()
}

function minusButtonClicked(event){
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var minusButtonF = event.target;
    var inputFather = minusButtonF.parentElement.previousSibling.previousElementSibling.previousElementSibling;
    var quantityValue = parseInt(inputFather.value, 10);
        quantityValue = isNaN(quantityValue) ? 0 : quantityValue;
    if(quantityValue>1) {
        quantityValue--;
        inputFather.value = quantityValue;
        inputFather.setAttribute('value', quantityValue)
        var cartItemsHtml = cartItems.innerHTML;
        localStorage.setItem('cart', cartItemsHtml)
    }
    updateCartTotal()
}

// რაოდენობის შეზღუდვა, რაოდენობა არ უნდა იყოს <= 0;
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

// კალათიდან პროდუქტის ამოშლა ღილაკზე "წაშლა" კლიკით.
function removeCartItem(event) {
    var buttonClicked = event.target;
    var cartItems = document.getElementById('cartItems')
    buttonClicked.parentElement.parentElement.remove();
    // კალათის LocalStorage-ში დამახსოვრება.
    var cartItemsHtml = cartItems.innerHTML;
    localStorage.setItem('cart', cartItemsHtml)
    cartNumber()
    updateCartTotal()
    cartIsEmpty()
    hideCircle()
}

// პროდუქტის დამატება კალათაში, გვერდზე არსებული პროდუქტების ცალკეული მონაცემების აღება.
function addToCartClicked(event) {
    var gilaki = event.target;
    var product = gilaki.parentElement.parentElement.parentElement;
    var title = product.getElementsByClassName('shop-item-title')[0].innerText;
    var price = product.getElementsByClassName('shop-item-price')[0].innerText;
    var productID = product.getElementsByClassName('shop-item-title')[0].id;
    var imageSrc = product.getElementsByClassName('productimg1')[0].src;
    var productItemType = product.getElementsByClassName('product-item-type')[0].innerHTML;

    addItemToCart(title, price, imageSrc, productID, productItemType);
    updateCartTotal()
    cartNumber()
    hideCircle()
}

// გვერდზე აღებული ცალკეული მონაცემების გადატანა კალათაში.
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
    // თუ გვერდზე არსებული პროდუქტის სახელი ემთხვევა კალათაში არსებული პროდუქტის სახელს, შეწყდეს გადატანის პროცესი და ეკრანზე გაჩნდეს შეტყობინება.
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
        <span class="cart-quantity-plus"><img src="../images/plus.png" alt="plus"></span>
        <input class="item-quantity" name="item-quantity"  value="1" type="" disabled>
        <span class="cart-item-type">${productItemType}</span>
        <span class="cart-quantity-minus"><img src="../images/minus.png" alt="minus"></span>
        <button class="remove-button">წაშლა</button>
    </div>`

    cartRow.setAttribute('class', 'cart-row')
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    // localStorage.setItem('cart', `${cartRowContents}`)
    // var cartDiv1 = document.createElement('div');
    // cartDiv1.innerHTML = localStorage.getItem('cart');
    // cartItems.append(cartDiv1);
    cartRow.getElementsByClassName('remove-button')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-plus')[0].addEventListener('click', plusButtonClicked);
    cartRow.getElementsByClassName('cart-quantity-minus')[0].addEventListener('click', minusButtonClicked);
    cartRow.getElementsByClassName('item-quantity')[0].addEventListener('click', quantityChanged);
    var cartItemsHtml = cartItems.innerHTML;
    localStorage.setItem('cart', cartItemsHtml)
    updateCartTotal()
    cartIsEmpty()
}

// კალათაში არსებული პროდუქტების ჯამური ფასის განახლება.
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
    // ჯამური ფასის .00 - მდე დამრგვალება.
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
