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