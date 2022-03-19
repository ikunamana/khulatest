//------- MAKING AN ORDER -------//

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

//------- END -------//


//------- SCROLL FUNCTIONS -------//

window.onscroll = function () { btt(); };
    function btt() {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
                headermain.style.boxShadow = "3px 8px 15px -11px black"; 
                headermain.style.height = "50px";
        } else {
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

//------- END -------//


//------- SIGN IN & REGISTRATION -------//

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
    signclick.onclick = function(sign){
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

//------- END -------//

//------- GREETING ON S&R PAGE -------//

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

//------- END -------//

//------- RESPONSIVE INTERFACE WITH SOUNDS -------//

function playSound(click){
    document.getElementById(click).play();
}

//------- END -------//

//------- I CALL IT DROPUP MENU -------//

var dropbtn = document.getElementById("dropupbtn");
var dropupmenu1 = document.getElementById("dropupitems");

dropbtn.onclick = function dropupmenu(){
    dropupmenu1.classList.toggle("dropupcontent1");
}

//------- END -------//

//------- HIDDEN CONTACT DIV -------//

var contactdiv = document.getElementById("hiddencontactdiv")
var arrowdiv = document.getElementById("hiddencontact")
var arrow = document.getElementById("hiddenarrow")
    function contact(){
        if(contactdiv.style.marginLeft === "-300px"){
                contactdiv.style.marginLeft = "0px";
                arrowdiv.style.marginLeft = "260px";
                arrow.style.transform = "rotate(180deg)"
        } else{
                contactdiv.style.marginLeft = "-300px";
                arrowdiv.style.marginLeft = "0px";
                arrow.style.transform = "rotate(0)"
            }
        }
//------- END -------//

//------- MOBILE MENU -------//

    function mobilemenu1(){
        if(mobilemenu.style.width === "70px"){
                mobilenav.style.display = "flex";
                mobilemenu.style.width = "380px";
                menuimg.style.display="none";
                spanmenu.style.display = "none"
                arrowimgclose.style.display = "block"
           
        } else{
                mobilenav.style.display = "none";
                mobilemenu.style.width = "70px";
                menuimg.style.display="block";
                spanmenu.style.display = "block"
                arrowimgclose.style.display = "none"
        }
    }
//------- END -------//

//------- MAKING AN ORDER -------//


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

//------- END -------//

