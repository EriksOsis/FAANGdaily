import React, {useEffect, useState} from "react";
import {Transaction} from "./Transaction";

export function InsiderPage() {
    // const [symbol, setSymbol] = useState('TSLA');
    const [transactions, setTransactions] = useState({});



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

    console.log(transactions);
    return (
        <div>
            {/*<Transaction transactions={transactions}/>*/}
            {/*{transactions.data.map(transactions => transactions.id)}*/}
        </div>

    )
}