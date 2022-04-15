
//------- SCROLL FUNCTIONS -------//

window.onscroll = function () {
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






//------- RESPONSIVE INTERFACE WITH SOUNDS -------//

function playSound(click){
    document.getElementById(click).play();
}

//------- END -------//

//------- I CALL IT DROPUP MENU -------//

var dropbtn1 = document.getElementById("dropupbtn");
var dropupmenu2 = document.getElementById("dropupitems");

dropbtn1.onclick = function dropupmenu9(){
    dropupmenu2.classList.toggle("dropupcontent1");
    dropbtn1.classList.toggle("dropupbtnactive");
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

