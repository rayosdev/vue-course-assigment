// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards


// On the index page the API is provided please connect to the URL provided.
// https://api.magicthegathering.io/v1/cards
// Convert the results to JSON format


let cardsApi = fetch("https://api.magicthegathering.io/v1/cards")


cardsApi
.then(unparsedCards => unparsedCards.json())
.then( jsonCards => {
    cardHandler(jsonCards)
})

// Create a function, that takes the JSON Object as an argument.
// Call the function from the method that returns the JSON data and pass in the JSON data.

// Inside the function that you just created, append all the data to the div with the “cards” ID attached to it
// Styles will be provided for you; the result will mimic the following design.
// Card


function cardHandler(jsonCards) {
    
    // console.log(JSON.stringify(jsonCards, null, 2))
    // console.log("QUE EN EL MUNDO")

    let cardsDiv = document.getElementById("cards")
    
    let cardArray = []

    for (const card of jsonCards.cards) {
        cardArray.push(card)
        if(cardArray.length == 3)
        {   
            let cardBatch = ""
            cardArray.forEach(_card => {
                cardBatch += creatHtmlCard(_card)
            });
            
            cardsDiv.innerHTML += cardBatch
            cardArray = []
        }

        
    }
    
    let cardBatch = ""
    cardArray.forEach(_card => {
        cardBatch += creatHtmlCard(_card)
    });
    
    cardsDiv.innerHTML += cardBatch

}


// The HTML for the card above is in the index.html file, use this as a base to display all the cards. They should all follow the same design pattern. When done delete the hard coded card.
// You will need the following keys to achieve this: name, imageUrl and id.
// If you look at the “View More” button the id is used and passed in as a query string in the URL.
// Don’t worry about the query string for the next page as there will be a function that will strip the URL and return the ID to you.


function creatHtmlCard(card) {
    let newCard = 
    `
    <div class="col-sm-4">
        <div class="card-container">
            <h4>${card.name}</h4>
            <img src="${card.imageUrl}" width="100%">
            <a href="card-specific.html?id=${card.id}" class="btn btn-success">View More</a>
        </div>
    </div>
    `
    return newCard
}





// Above all the cards is a search box.
// The search box should work in the following way, the search button will trigger a click event. This event will delete all the HTML inside the div that has the ID “cards” attached to it.
// It should then get the value from the search text box, make a call to the api get all the results back. Thereafter it should filter through all the results by the value that was in the textbox.


document.getElementById("searchButton").addEventListener("click", e => {
    let textBox = document.getElementById("search")
    if(textBox.value == ""){
        return
    }
    let searchString = textBox.value
    
    let cardsDiv = document.getElementById("cards")
    cardsDiv.innerHTML = ""

    fetch("https://api.magicthegathering.io/v1/cards")
        .then(unparsedCards => unparsedCards.json())
        .then( jsonCards => {
            let cardsFound = []
            let regSerach = new RegExp(searchString, "i")
            for (const card of jsonCards.cards) {
                if(card.name.search(regSerach) > -1){
                    cardsFound.push(card)
                }
            }
            cardsFound.sort(e => {
                return e.name.search(regSerach)
            })
            let _jsonCards = {"cards":cardsFound}
            cardHandler(_jsonCards)

            // If it finds any results it should be added to a new array and the new array should be display as HTML like you did with all the cards but it should only return what the user searched for. If the application doesn’t find any results a suitable message should be displayed.
            if(cardsFound.length == 0){
                cardsDiv.innerHTML = 
                `
                    <div id="search-not-found" class="fade-in">
                        No cards could be found matching the search: "${searchString}"
                    </div>
                `

            }
    })

})


// Please write all js in the script.js file.


document.getElementById("search").addEventListener("input", e => {
    // console.log(e)
    if(document.getElementById("search").value == ""){
        document.getElementById("cards").innerHTML = ""
        fetch("https://api.magicthegathering.io/v1/cards")
        .then(unparsedCards => unparsedCards.json())
        .then( jsonCards => {
            cardHandler(jsonCards)
        })
    }
})

// let test = document.getElementById("test-a")
// console.log(test)
// document.getElementById("test-a").addEventListener("click", e => {
//     console.log("tester dette")
// })

document.readyState = function test(params) {
    console.log("CLICKED")
}