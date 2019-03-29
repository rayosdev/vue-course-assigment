// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards

// On the index page the API is provided please connect to the URL provided.
// https://api.magicthegathering.io/v1/cards
// Convert the results to JSON format
// Create a function, that takes the JSON Object as an argument.
// Call the function from the method that returns the JSON data and pass in the JSON data.
// Inside the function that you just created, append all the data to the div with the “cards” ID attached to it
// Styles will be provided for you; the result will mimic the following design.
// The HTML for the card above is in the index.html file, use this as a base to display all the cards. They should all follow the same design pattern. When done delete the hard coded card.
// You will need the following keys to achieve this: name, imageUrl and id.
// If you look at the “View More” button the id is used and passed in as a query string in the URL.
// Don’t worry about the query string for the next page as there will be a function that will strip the URL and return the ID to you.
// Above all the cards is a search a box.
// The search box should work in the following way, the search button will trigger a click event. This event will delete all the HTML inside the div that has the ID “cards” attached to it.
// It should then get the value from the search text box, make a call to the api get all the results back. Thereafter it should filter through all the results by the value that was in the textbox.
// If it finds any results it should be added to a new array and the new array should be display as HTML like you did with all the cards but it should only return what the user searched for. If the application doesn’t find any results a suitable message should be displayed.
// Please write all js in the script.js file.

// let script = document.createElement('script')
// console.log(script.src = url.src("https://api.magicthegathering.io/v1/cards"))


function getCards()
{
    return fetch("https://api.magicthegathering.io/v1/cards")
    .then(response => response.json())
    // .then(data => data.results[0])
}
