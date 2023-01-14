import React, {useState} from "react";
import './StockCard.css';
import MovingIcon from '@mui/icons-material/Moving';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import {Link} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import {useFetchData} from "../../hooks/useFetchData";
import {CardTop} from "./CardTop";

export function StockCard(props) {
    const [numbers, setNumbers] = useState({});

    const dataLoaded = useFetchData(`https://finnhub.io/api/v1/quote?symbol=${props.symbol}&token=c83cnhiad3ift3bm6ue0`, setNumbers, props.symbol);

    return (
        !dataLoaded ? <CircularProgress/> : <div className={'card'}>
            <div className={'card-inner'}>
                <CardTop numbers={numbers} symbol={props.symbol}/>
                <div className={'card-bottom'}>
                    <p className={`percent ${numbers.dp < 0 ? 'red' : 'green'}`}>
                        <MovingIcon fontSize={"medium"}
                                    className={`${numbers.dp < 0 && 'rotate'}`}/> {numbers.dp.toFixed(2)}%
                    </p>
                    <p className={'high green'}><CandlestickChartIcon fontSize={"medium"}/> Today`s high:
                        ${numbers.h.toFixed(2)}
                    </p>
                    <p className={'low red'}><CandlestickChartIcon fontSize={"medium"}/> Today`s low:
                        ${numbers.l.toFixed(2)}</p>
                    <Link to={`/company-news/${props.symbol}`} className={'company-news-link'}>Company news</Link>
                </div>
            </div>
        </div>
    )
}