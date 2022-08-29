const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(quote => displayQuotes(quote))
}

function displayQuotes(quote) {
    const blockquotes = document.getElementById('quote');
    blockquotes.innerText = quote.quote;
}
