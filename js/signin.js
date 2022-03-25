//------- SIGN IN & REGISTRATION -------//

var regclick = document.getElementById("registrationclick");
var shesvla = document.getElementById("shesvla");
var registracia = document.getElementById("registracia");
var signclick = document.getElementById("signinclick")
var formsig = document.getElementById("formsig")
    regclick.onclick = function regist() {
        formreg.style.transform = "scale(1)";
        formreg.style.zIndex = "1";
        formsig.style.transform = "scale(0.8)";
        formsig.style.pointerEvents = "none";
        formsig.style.filter = "blur(30px)";
        shesvla.style.transform = "translateX(0)";
        registracia.style.transform = "scale(1)";
        mogesalmebit.style.marginRight = "700px";
    }
    signclick.onclick = function sign(){
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