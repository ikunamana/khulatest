var contactdiv = document.getElementById("hiddencontactdiv")
var arrowdiv = document.getElementById("hiddencontact")
var arrow = document.getElementById("hiddenarrow")
        // arrowdiv.onclick = function (contact){
        //     contactdiv.style.marginLeft = "0px";
        //     arrowdiv.style.marginLeft = "260px";
        //     arrow.style.transform = "rotate(180deg)"
        // }
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
    function mobilemenu1(){
        if(mobilemenu.style.width === "70px"){
            mobilenav.style.display = "flex";
            mobilemenu.style.width = "380px";
            menuimg.style.display="none";
           
        } else{
            mobilenav.style.display = "none";
            mobilemenu.style.width = "70px";
            menuimg.style.display="block";

           
        }
    }