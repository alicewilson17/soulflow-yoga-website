import { useState, useEffect } from "react";
import axios from "axios";

export default function QuoteApi() {
  const [quote, setQuote] = useState([]);
  const url = "https://api.api-ninjas.com/v1/quotes?category=inspirational";
  const apiKey = "82LR3vFxmxSbCxaBZboR1A==klk5DJIPJqwJWR4R"

  useEffect(() => {
    function fetchQuote() {
      axios.get(url, {
        headers: {
            'X-Api-Key': apiKey
        }
      }).then((res) => {setQuote(res.data[0].quote)})
      .catch((error => console.log(error)))
    }
    fetchQuote()
  }, []);

  return <p className="quote">"{quote}"</p>;
}
