function openForm() {
    console.log("OPENIGN FORM")
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


  var formPopUp = document.querySelector('#myForm')

  window.addEventListener('click', function(evt){
    
  })

  window.addEventListener('keydown', function (evt) {
    if (evt.key === "Escape") {
        formPopUp.style.data.autoHide=true;
    }
})


//response to contact information 

var form = document.getElementById("#contactButton");
var firstNameLastName = document.getElementById("#name");

form.addEventListener("submit", function(evt){
  document.getElementById("#contactResponse").innerHTML = "Thank you " + firstNameLastName + " for contacting us.  We will respond to your inquiry within 24 hours."; 
})
