var dropbtn = document.getElementById("cartbtn");
var dropupmenu1 = document.getElementById("cart-content");

dropbtn.onclick = function dropupmenu(){
    dropupmenu1.classList.toggle("cart-content");
    dropbtn.classList.toggle("cart-contnet-active");
}
