// refer to question 2 before development starts for scope document
// get URL query string

// Card Specific Page
// There is a page called card-specific.html if you click on the view more button on the index page you will notice “?id=xxxxxxxxxxxxxxxx” at the end of the URL, it will link to this page.
// Inside the JavaScript file specific.js from lines 1 – 4 there is prewritten JavaScript that returns the value of the id in the Query String.
function getQueryStringValue (key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
// variable for the id
var id = getQueryStringValue("id");

// Take that value and make an API call to but append the ID to end of the API Call. The URL should look as follows:https://api.magicthegathering.io/v1/cards/c353618d9f76c03a0c7d549f2d877f9533112d0c (Links to an external site.)Links to an external site.
// If you open up the URL above it will only give return details to you for that specific ID.
let fetchCard = fetch("https://api.magicthegathering.io/v1/cards/" + id)

fetchCard
.then(unparsedCard => unparsedCard.json())
.then( jsonCard => {
    // Append the image to the div called “cardImage”, set the width of the image to 100%.
    let card = jsonCard.card
    document.getElementById("cardImage").innerHTML += 
        `
            <img style="width:100%;" src="${card.imageUrl}"></img>        
        `
        // Please get the following keys: imageUrl, name, text, rarity and colors. Display their values.
        // The specific card should look as follows:
        // Specific card
        // The HTML for the card template will be inside the card-specific.html file please delete it once you are pulling data from the API.

    document.getElementById("cardDetails").innerHTML += 
        `
            <h2>${card.name}</h2>
                <div> <b>About:  </b> ${card.text}</div>
                <div> <b>Rarity: </b> ${card.rarity}</div>
                <div> <b>Color: </b> ${card.colors}</div>
        `
})
.catch(failed => {
    // Test to see if there is no query string if there isnt display a suitable message.
    
    console.log("FAIL")
    document.getElementById("cardDetails").innerHTML = 
                `
                    <div id="search-not-found" class="fade-in">
                        No cards could be found matching the ID: "${id}"
                    </div>
                `
})


// Please write all js in the specific .js file.

 