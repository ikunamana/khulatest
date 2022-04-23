//------- HIDDEN CONTACT DIV -------//

var contactdiv = document.getElementById("hiddencontactdiv")
var arrowdiv = document.getElementById("hiddencontact")
var arrow = document.getElementById("hiddenarrow")
for ( var i = 0; i < arrow.length; i++) { 
    var clickedArrow = arrow[i];
arrow.addEventListener('click', contact)
}

    function contact(){
        if(contactdiv.style.marginLeft = "-300px"){
            contactdiv.style.marginLeft = "-300px";
            arrowdiv.style.marginLeft = "0px";
            arrow.style.transform = "rotate(0)"
        } else{
                
                contactdiv.style.marginLeft = "0px";
                arrowdiv.style.marginLeft = "200px";
                arrow.style.transform = "rotate(180deg)"
            }
        }
//------- END -------//