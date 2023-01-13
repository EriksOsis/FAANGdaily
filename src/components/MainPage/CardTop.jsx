import React, {useState} from "react";
import {useFetchData} from "../../hooks/useFetchData";
import './StockCard.css';
import CircularProgress from '@mui/material/CircularProgress';


export const CardTop = (props) => {
    const [stock, setStock] = useState({});

    const dataLoaded = useFetchData(`https://finnhub.io/api/v1/stock/profile2?symbol=${props.symbol}&token=c83cnhiad3ift3bm6ue0`, setStock, props.symbol);

    return (
        !dataLoaded ? <CircularProgress/> :
        <div className={'card-top'}>
            <img className={'card-logo'} src={stock.logo} alt={stock.name + 'logo'}/>
            <p className={'title'}>{stock.name}</p>
            <div>
                <p className={'price'}>${props.numbers.c.toFixed(2)}</p>
            </div>
        </div>
    )
}