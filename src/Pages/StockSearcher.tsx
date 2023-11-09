import { FormEvent, useState } from "react";
import axios from "axios";

function StockSearcher() {
    const [stockcode, setStockcode] = useState("");

    const handleClick = async (e: FormEvent) => {
        e.preventDefault();

        const alphaVantageParams = {
            function: "TIME_SERIES_INTRADAY",
            symbol: stockcode,
            interval: "5min",
            apiKey: "0ZXV1UFYPYXPLADU"

        }

        try {
            const response = await axios.get("https://www.alphavantage.co/query", {
                params: alphaVantageParams
            })

            const timeSeries = response ?.data["Time Series (5 mins)"];
            if (timeSeries) {
                const latesttime = Object.keys(timeSeries)[0];
                console.log(latesttime);
            } else {
                throw Error("invald Response Format")
            }

        } catch (error) { };

    }

    return (
        <>
            <form onSubmit={handleClick}>
                <label htmlFor="stockcode">Stock Code</label>
                <input type="text" id="stockcode" autoComplete="off" onChange={e => setStockcode(e.target.value)} value={stockcode} />
                <button>Submit</button>
            </form>

        </>

    )
}

export default StockSearcher;