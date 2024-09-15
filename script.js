import { quotes } from "./quotes.js";


function randomQuote() {
    const index = Math.floor(Math.random() * quotes.length)
    return index;
}

function displayRandomQuote() {
    document.body.addEventListener('keydown', (event) => {
        const key = event.key;
        if (key === 'Enter') {
            const quoteBox = document.querySelector('.quote-container-js');
            const authorPictureBox = document.querySelector('.author-picture-container-js');
            const authorBox = document.querySelector('.author-name-container-js');
            const index = randomQuote();
            quoteBox.innerHTML = quotes[index].quote;
            authorBox.innerHTML = quotes[index].author;
            authorPictureBox.innerHTML = `<img src="${quotes[index].picture}">`;
        }
    } )
}
displayRandomQuote();

function displaySpecificQuote() {
    const specificQuoteContainer = document.querySelector('.specific-quotes-container-js');
    specificQuoteContainer.addEventListener('click', (event) => {
        if (event.target && event.target.matches('span')) {
            const specificQuoteType = event.target.className;

            //Filters the specfic quotes into the specificQuoteArray
            const specificQuoteArray = quotes.filter(quote => quote.type === specificQuoteType);
            console.log(specificQuoteArray)

            //Select a random quote from the filtered quote array 
            const index = Math.floor(Math.random() * specificQuoteArray.length);
            const selectedRandomQuote = specificQuoteArray[index];

            //Display the selected quote
            const quoteBox = document.querySelector('.quote-container-js');
            const authorPictureBox = document.querySelector('.author-picture-container-js')
            const authorBox = document.querySelector('.author-name-container-js');
            quoteBox.innerHTML = selectedRandomQuote.quote;
            authorPictureBox.innerHTML = `<img src="${selectedRandomQuote.picture}">`;
            authorBox.innerHTML = selectedRandomQuote.author;

        }
        
    })
}
displaySpecificQuote();

