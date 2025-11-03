//  https://api.quotable.io/random
    // "_id": "abc123",
    // "content": "Be yourself; everyone else is already taken.",
    // "author": "Oscar Wilde"
import { useState, useEffect } from "react";

const RandomQuoteGenerator = () => {
    const [quote, setQuote] = useState({"_id": "abc123",
    "quote": "Be yourself; everyone else is already taken.",
    "author": "Oscar Wilde"})
    const seeQuote = () => {
        fetch("https://dummyjson.com/quote/random")
        .then((response) => response.json())
        .then((quote) => setQuote(quote))
        .catch(() => (alert("Error Occured,Please wait for some time")))

    }
    return(
        <>
            <h1 style={{marginLeft:"300px"}}>"{quote.quote}"</h1>
            <h2 style={{marginLeft:"800px"}}>~{quote.author}</h2>
            <button style={{marginLeft:"800px"}} onClick={seeQuote}>NEXT QUOTE</button>
        </>

    )
}
export default RandomQuoteGenerator
//followup=> we want random quote on intial render