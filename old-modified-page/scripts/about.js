// refer to question 3 before development starts for scope document

// About Page

// On the about page. Replace the word “Magic” with the “Something” in all the text inside the div with “aboutText” ID attached to it.
let aboutText = document.getElementById("aboutText")

aboutText.textContent = aboutText.textContent.replace(new RegExp("Magic", "g"), "Something")

// Also on the about us page there is a div with and ID “moreInfoTrigger” it should look like the image at the bottom.
// Blue div
document.getElementById("moreInfoTrigger").addEventListener("click", f =>{

    // If you click on this heading it should toggle display: block and display none on the div with the “moreInfoContent” ID attached to it.
    // If style is display block it should look like the image below:
    // Display block
    let moreInfoContent = document.getElementById("moreInfoContent")
    if(moreInfoContent.style.display == "block"){
        moreInfoContent.style.display = "none"
    }else{
        moreInfoContent.style.display = "block"
    }

})

// Please write all JavaScript in the about.js file.