// json-ის დაკავშირება და ინფორმაციის წამოღება
async function populate() {

    const requestURL = 'https://raw.githubusercontent.com/ikunamana/khulatest/main/js/products.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const superHeroes = await response.json();

    populateProduktebi(superHeroes);

}
// პროდუქტების სექციისა და ელემენტების შექმნა, პროდუქტის დივების გამრავლება
function populateProduktebi(obj) {
    let section = document.getElementById('section');
    let produkti = obj['production'];


    for (const komponenti of produkti) {
        // const myDiv = document.createElement('div');
        let firstDiv = document.createElement('div');
        let imgDiv = document.createElement('div');
        let imgOfFirstDiv = document.createElement('img');
        let secondDiv = document.createElement('div');
        let dasaxelebaII = document.createElement('p');
        let nameOfOProductII = document.createElement('p');
        let fasiCharchoII = document.createElement('p');
        let actualPriceII = document.createElement('h2');
        let btnshekvetaII = document.createElement('div');
        let btnshekveta = document.createElement('button');
        let kalataDiv = document.createElement('div');
        let kalata = document.createElement('p');
        let kalataimg = document.createElement('img');


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
        nameOfOProductII.innerHTML =  `${komponenti.name}` + "<br><hr><br><br>";
        actualPriceII.innerHTML = `${komponenti.price}` + " ₾ " + "<br><br><br><br>";

        // myDiv.append(firstDiv);
        firstDiv.append(imgDiv);
        imgDiv.append(imgOfFirstDiv);
        firstDiv.append(secondDiv);
        secondDiv.append(dasaxelebaII);
        secondDiv.append(nameOfOProductII);
        secondDiv.append(fasiCharchoII);
        secondDiv.append(actualPriceII);
        secondDiv.append(btnshekvetaII);
        btnshekvetaII.append(btnshekveta);
        btnshekvetaII.append(kalataDiv);
        kalataDiv.append(kalataimg);
        section.append(firstDiv);
    }
}
//         function ready() {
//     var remCartItemButtons = document.getElementsByClassName('remove-button');
//     for (var i = 0; i < remCartItemButtons.length; i++) {
//         var button = remCartItemButtons[i];
//         button.addEventListener('click', removeCartItem);
//     }

//     var addToCartButtons = document.getElementsByClassName('btnshekvetapro');
//     for (var i = 0; i < addToCartButtons.length; i++) {
//         var gilaki = addToCartButtons[i];

//         gilaki.addEventListener('click', addToCartClicked);
//     }

//     var quantityInputs = document.getElementsByClassName('item-quantity')
//     for (var i = 0; i < quantityInputs.length; i++) {
//         var input = quantityInputs[i]
//         input.addEventListener('change', quantityChanged)
//     }

//     document.getElementsByClassName('order-button')[0].addEventListener('click', orderClicked)
//     document.getElementsByClassName('order-clear')[0].addEventListener('click', orderClear)
//     }

// function cartIsEmpty() {
//     var cartItems = document.getElementsByClassName('cart-items')[0]
//     var emptyCart = document.getElementById('emptycart')
//     if (cartItems.children.length > 0) {
//         emptyCart.style.display = "none";
//     } else {
//         emptyCart.style.display = "flex";
//     }
// }

// function quantityChanged(event) {
//     var input = event.target;
//     if (isNaN(input.value) || input.value <= 0) {
//         input.value = 1
//     }
//     updateCartTotal()
//     quantityChanged()
// }

// function orderClicked() {
//     alert('მადლობა, თქვენი შეკვეთა წარმატებით გაიგზავნა!')
//     var cartItems = document.getElementsByClassName('cart-items')[0]
//     while (cartItems.hasChildNodes()) {
//         cartItems.removeChild(cartItems.firstChild)
//     }
//     cartIsEmpty()
//     updateCartTotal()
// }


// function orderClear() {
//     var cartItems = document.getElementsByClassName('cart-items')[0]
//     while (cartItems.hasChildNodes()) {
//         cartItems.removeChild(cartItems.firstChild)
//     }
//     cartIsEmpty()
//     updateCartTotal()
// }




// function removeCartItem(event) {
//     var buttonClicked = event.target;
//     buttonClicked.parentElement.parentElement.remove();

//     cartIsEmpty()
//     updateCartTotal()

// }

// function addToCartClicked(event) {
//     var gilaki = event.target;
//     var product = gilaki.parentElement.parentElement.parentElement;
//     var title = product.getElementsByClassName('shop-item-title')[0].innerText;
//     var price = product.getElementsByClassName('shop-item-price')[0].innerText;
//     var imageSrc = product.getElementsByClassName('productimg1')[0].src;
//     addItemToCart(title, price, imageSrc);
//     cartIsEmpty()
//     updateCartTotal()

// }


// function addItemToCart(title, price, imageSrc) {
//     var cartRow = document.createElement('div')
//     cartRow.classList.add('cart-row')
//     var cartItems = document.getElementsByClassName('cart-items')[0]
//     var cartItemNames = document.getElementsByClassName('cart-item-name')
//     for (var i = 0; i < cartItemNames.length; i++) {
//         if (cartItemNames[i].innerText == title) {
//             alert('ეს პროდუქტი უკვე არის თქვენს კალათაში!')
//             return
//         }
//         updateCartTotal()
//     }


//     var cartRowContents = `
//     <div class="cart-item">
//         <img class="cart-item-image " src="${imageSrc}" alt=" ">
//         <span class="cart-item-name ">${title}</span>
//     </div>
//     <span class="cart-item-price "> ${price} </span>
//     <div class="cart-item-quantity ">
//         <input class="item-quantity " value="1 " type="number ">
//         <button class="remove-button ">წაშლა</button>
//     </div>`
//     cartRow.innerHTML = cartRowContents;
//     cartItems.append(cartRow);
//     cartRow.getElementsByClassName('remove-button')[0].addEventListener('click', removeCartItem);
//     updateCartTotal()

// }
// function updateCartTotal() {
//     var allCartItems = document.getElementsByClassName('cart-items')[0]
//     var cartRows = allCartItems.getElementsByClassName('cart-row')
//     var total = 0
//     for (var i = 0; i < cartRows.length; i++) {
//         var cartRow = cartRows[i];
//         var priceElement = cartRow.getElementsByClassName('cart-item-price')[0]
//         var quantityElement = cartRow.getElementsByClassName('item-quantity')[0]
//         var price = parseFloat(priceElement.innerText.replace('GEL', ''))
//         var quantity = quantityElement.value
//         total = total + (price * quantity)
//     }
//     total = Math.round(total * 100) / 100
//     document.getElementsByClassName('cart-total-price')[0].innerText = total + 'GEL'
// }

// var dropbtn = document.getElementById("cartbtn");
// var dropupmenu1 = document.getElementById("cart-content");

// dropbtn.onclick = function cartmenu() {
//     dropupmenu1.classList.toggle("cart-content-active");
//     dropbtn.classList.toggle("cart-button-active");}


populate();
