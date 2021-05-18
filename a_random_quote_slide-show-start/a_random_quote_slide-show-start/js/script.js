/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 ***/

const quotes = [{
        quote: "When we strive to become better than we are, everything around us becomes better too.",
        source: "Paulo Coelho",
        citation: "The Alchemist",
        year: "2014"
    },
    {
        quote: "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.",
        source: "Maya Angelou",
        citation: "The Very Hungry Caterpillar",
        year: "2010"
    },
    {
        quote: "We become not a melting pot but a beautiful mosaic. Different people, different beliefs, different yearnings, different hopes, different dreams.",
        source: "Jimmy Carter",
        citation: "Speech on Multiculturalism",
        year: "2002"
    },
    {
        quote: "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
        source: "Steve Jobs",
        citation: "Commencement Address at Stanford",
        year: "2005"
    },
    {
        quote: "Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny.",
        source: "Lao Tze",
        citation: "Tao Te Ching",
        year: "3rd Century"
    }
]

function getRandomQuote(array) {
    // 1. Create a variable that generates a random number
    // between zero and the last index in the `quotes` array
    var quoteIndex = Math.floor(Math.random() * (quotes.length));

    // 2. Use the random number variable and bracket notation
    // to grab a random object from the `quotes` array, and
    // store it in a variable
    for (var i = 0; i < array.length; i++) {
        var randomQuote = array[quoteIndex];
    }

    // 3. Return the variable storing the random quote object
    return randomQuote;
}
let RandomQuote = getRandomQuote();
var result = getRandomQuote(quotes);

console.log(result);

function printQuote() {
    // 1. Create a variable that calls the getRandomQuote()
    // function
    let randomQuote = getRandomQuote();

    // 2. Create a variable that initiates your HTML string with
    // the first two <p></p> elements, their classNames,
    // and the quote and source properties, but leave off
    // the second closing `</p>` tag for now
    let ProHTML1 = "<p class='quote'> " + randomQuote.quote + " </p>";
    ProHTML1 += "<p class='source'> " + randomQuote.source;

    // 3. Use an if statement to check if the citation property
    // exists, and if it does, concatenate a <span></span>
    // element, appropriate className, and citation property
    // to the HTML string
    if ("citation" in randomQuote) {
        ProHTML1 += "<span class='citation'> " + randomQuote.citation + "</span>";
    }

    // 4. Use an if statement to check of the year property exists,
    // and if it does, concatenate a <span></span> element,
    // appropriate className, and year property to the HTML
    //string
    if ("year" in randomQuote) {
        ProHTML1 += "<span class='year'> " + randomQuote.year + "</span>";
    }

    // 5. After the two if statements, concatenate the closing </p>
    // tag to the HTML string
    ProHTML1 += `< /p>`;

    // 6. set the innerHTML of the quote-box div to equal the
    // complete HTML string}
    document.getElementById("quote-box").innerHTML = ProHTML1;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);