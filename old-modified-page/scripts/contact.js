// refer to question 4 before development starts for scope document

// Contact Form
// Validate the contact form on the contact.html page.
function validateForm() {
    let isFormValid = true

    // The name and last name textboxes shouldn’t be empty.
    let firstName = document.getElementById("firstName")
    if(firstName.value == ""){
        document.getElementById("firstNameError").style.display = "block"
        isFormValid = false
    }else{
        document.getElementById("firstNameError").style.display = "none"
    }
    

    let lasttName = document.getElementById("lastName")
    if(lastName.value == ""){
        document.getElementById("lastNameError").style.display = "block"
        isFormValid = false
    }else{
        document.getElementById("lastNameError").style.display = "none"
    }
    
    // The email textbox should have a valid email address inside it.
    let email = document.getElementById("email")
    let emailRegx = /^([a-zA-Z0-9_\.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9_\.]{2,5})$/
    if(emailRegx.test(email.value) == false){
        document.getElementById("emailError").style.display = "block"
        isFormValid = false
    }else{
        document.getElementById("emailError").style.display = "none"
    }

    // The number format should be as follows:
    // xxx xxx xxxx
    // xxx-xxx-xxxx
    // xxx.xxx.xxxx

    let phone = document.getElementById("phone")
    let phoneRegx = /^([0-9]{3})+([ \.-]{1})+([0-9]{3})+([ \.-]{1})+([0-9]{4})$/
    if(phoneRegx.test(phone.value) == false){
        document.getElementById("phoneError").style.display = "block"
        isFormValid = false
    }else{
        document.getElementById("phoneError").style.display = "none"
    }

    
    // There are error messages inside the HTML display these messages if there is an issue with the values for each textbox respectively.
    // If the value of the textbox is valid, hide the error message.

    return isFormValid

}

// All this should happen after a user clicks the submit button.
document.getElementById("submitContact").addEventListener("click", f => {
    if(validateForm()){
        console.log("FORM DONE")
        alert("FORM DONE")
    }
    else{
        console.log("FORM FAILED")
    }

})

// Please write all JavaScript in the contact.js file
