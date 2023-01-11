import React, {useEffect, useState} from "react";
import {Transaction} from "./Transaction";

export function InsiderPage() {
    // const [symbol, setSymbol] = useState('TSLA');
    const [transactions, setTransactions] = useState({});

    // useEffect(() => {
    //     fetch(`https://finnhub.io/api/v1/stock/insider-transactions?symbol=AAPL&limit=20&token=c83cnhiad3ift3bm6ue0`)
    //         .then(response => response.json())
    //         .then(data => {
    //             setTransactions(data);
    //         })
    //         .catch(error => {
    //             return <p>{error}</p>;
    //         });
    // }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://finnhub.io/api/v1/stock/insider-transactions?symbol=AAPL&limit=20&token=c83cnhiad3ift3bm6ue0`
            );
            const data = await response.json();
            setTransactions(data);
        };

        fetchData();
    }, []);
    //todo create custom hook useFetch() and update all other components

    console.log(transactions);
    return (
        <div>
            <Transaction transactions={transactions}/>
        </div>

    )
}