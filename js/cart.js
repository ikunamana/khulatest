if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready(){
    var remCartItemButtons = document.getElementsByClassName('remove-button')
    for (var i=0; i < remCartItemButtons.length; i++){
        var button = remCartItemButtons[i]
            button.addEventListener('click', removeCartItem)
    }
}

function removeCartItem(event) {
    var buttonClicked = event.target 
        buttonClicked.parentElement.parentElement.remove()
}



var dropbtn = document.getElementById("cartbtn");
var dropupmenu1 = document.getElementById("cart-content");

dropbtn.onclick = function dropupmenu(){
    dropupmenu1.classList.toggle("cart-content-active");
    dropbtn.classList.toggle("cart-button-active");
}
