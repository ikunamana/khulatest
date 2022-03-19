// order function

var maindiv = document.getElementById("maindiv");
var btn = document.getElementById("shekvetabtn")
var span = document.getElementById ("close");

btn.onclick = function(shekveta){
    maindiv.style.display = "block";
}

span.onclick = function (daxurva){
    maindiv.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == maindiv) {
    maindiv.style.display = "none";
    }
};

// scroll functions

window.onscroll = function () { btt(); };
function btt() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150)
    
    { 
        headermain.style.boxShadow = "3px 8px 15px -11px black"; 
        headermain.style.height = "50px";
    }


    else 
    {
        headermain.style.boxShadow = "none"; 
        headermain.style.height = "80px";

    }
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5){
        mobiletop.style.height = "60px"
        mobiletop.style.flexDirection = "row"


    } else {
        mobiletop.style.flexDirection = "column"
        mobiletop.style.height = "80px"
    }
};

// sign in Animation

var regclick = document.getElementById("registrationclick");
var shesvla = document.getElementById("shesvla");
var registracia = document.getElementById("registracia");
var signclick = document.getElementById("signinclick")
var formsig = document.getElementById("formsig")
    regclick.onclick = function (regist) {
        formreg.style.transform = "scale(1)";
        formreg.style.zIndex = "1";
        formsig.style.transform = "scale(0.8)";
        formsig.style.pointerEvents = "none";
        formsig.style.filter = "blur(30px)";
        shesvla.style.transform = "translateX(0)";
        registracia.style.transform = "scale(1)";
        mogesalmebit.style.marginRight = "700px";
    }
    signclick.onclick === function(sign){
        // formsig.classList.toggle('classtogglesign');
        formreg.style.transform = "scale(0)";
        formreg.style.zIndex = "-1";
        formsig.style.transform = "scale(1)";
        formsig.style.filter = "blur(0px)";
        formsig.style.pointerEvents = "auto";
        shesvla.style.transform = "translateX(1)";
        registracia.style.transform = "scale(0)";
        mogesalmebit.style.marginRight = "-700px";
    }

// sign in greeting

const dro = new Date().getHours();
    tarigi = new Date().getFullYear()
    let misalmeba;
        if (dro < 18 ){
            misalmeba = "მოგესალმებით! </br> <br> Khula • ხულა" + tarigi;
        }
        else {
            misalmeba = "საღამომშვიდობისა! </br> <br> Khula • ხულა" + tarigi;
        }
        document.getElementById("mogesalmebit").innerHTML = misalmeba;
        
// hidden contact div //
function playSound(click){
    document.getElementById(click).play();
}

var dropbtn = document.getElementById("dropupbtn");
var dropupmenu1 = document.getElementById("dropupitems");

dropbtn.onclick = function dropupmenu(){
    dropupmenu1.classList.toggle("dropupcontent1");
    // dropupmenu1.classList.remove("dropup-content");

}

// function dropupmenu(){
//     var dropupmenu = document.getElementById("dropupitems");
//     dropupmenu.classList.toggle("dropupcontent1");
// }
