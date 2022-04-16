import { useEffect, useState } from "react";
import axios from 'axios';
import './Quote.css'

const Quote = () => {
    const [quote, setQuote] = useState([]);
    
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(
            'https://run.mocky.io/v3/61c4d479-3446-425b-940e-1a00de296aea'
            );
            const allQuotes = data;
            setQuote(allQuotes[Math.floor(Math.random() * allQuotes.length)]);
        })();
        }, []);

    return (
        <div className="quote">
            <p className="quote-text">
                {quote.text} ~{quote.author == null ? `By unknown` : `By ${quote.author}`};
            </p>
        </div>
    )
}

export {Quote};