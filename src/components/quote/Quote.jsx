import { useEffect, useState } from "react";
import axios from 'axios';
import './Quote.css'


const Quote = () => {
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(
                    'https://api.api-ninjas.com/v1/quotes',
                    {
                        headers: { 'X-Api-Key': 'JOqC/qW02IzEdgFgk0slOA==9Z81hhe4bl9DTwci' },
                    }
                );
                if (Array.isArray(data) && data.length > 0) {
                    setQuote(data[0]);
                } else {
                    throw new Error('No quote found.');
                }
            } catch (err) {
                const fallbackQuotes = [
                    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
                    { quote: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
                ];
                setQuote(fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)]);
            }
        })();
    }, []);

    return (
        <div className="quote">
            {quote ? (
                <p className="quote-text">
                    {quote.quote} ~{quote.author ? `By ${quote.author}` : 'By unknown'}
                </p>
            ) : (
                <p className="quote-text">Loading...</p>
            )}
        </div>
    );
}

export {Quote};