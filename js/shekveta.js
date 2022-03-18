var maindiv1 = document.getElementById("maindiv1")
var btnsh = document.getElementById("shekvetabtn")
var span = document.getElementById ("close");
var shekvetadiv = document.getElementById ("shekvetadiv")
var contfull = document.getElementById("contfull")
var mtavari = document.getElementById("headermain")

btnsh.onclick = function (shekvetamtavari){
    maindiv1.style.display = "block";
    contfull.style.transform = "scale(0.9)"
    contfull.style.pointerEvents = "none"
    contfull.style.overflowY = "hidden"
    contfull.style.objectFit = "cover"
    mobilemenu.style.opacity = "0.5"
}

span.onclick = function (daxurva){
    maindiv1.style.display = "none";
    contfull.style.transform = "scale(1)"
    mtavari.style.position = "fixed"
    contfull.style.pointerEvents = "auto"
    contfull.style.overflowY = "auto"
    contfull.style.objectFit = "auto"
    mobilemenu.style.opacity = "1"

}

window.onclick = function(event) {
    if (event.target == maindiv1) {
        maindiv1.style.display = "none";
        contfull.style.transform = "scale(1)"
        mtavari.style.position = "fixed"
        contfull.style.pointerEvents = "auto"
        contfull.style.overflowY = "auto"
        contfull.style.objectFit = "auto"
        mobilemenu.style.opacity = "1"

    }
}

function myFunction(){
    var x = document.getElementById("product").value;
        y = document.getElementById("tsona").value;
            document.getElementById("jami").innerHTML ="ჯამი:" + x*y + "+" + 3;
            document.getElementById("fasi").innerHTML ="ფასი:" + x;
} 
