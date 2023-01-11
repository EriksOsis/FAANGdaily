import {useEffect, useState} from "react";
import './StockCard.css';
import MovingIcon from '@mui/icons-material/Moving';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import {Link} from "react-router-dom";

export function StockCard(props) {
    const [stock, setStock] = useState({});
    const [numbers, setNumbers] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://finnhub.io/api/v1/stock/profile2?symbol=${props.symbol}&token=c83cnhiad3ift3bm6ue0`
            );
            const data = await response.json();
            setStock(data);
        };

        fetchData();
    }, [props.symbol]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://finnhub.io/api/v1/quote?symbol=${props.symbol}&token=c83cnhiad3ift3bm6ue0`
            );
            const data = await response.json();
            setNumbers(data);
        };

        fetchData();
    }, [props.symbol]);

    return (
        <div className={'card'}>
            <div className={'card-inner'}>
                <div className={'card-top'}>
                    <img className={'card-logo'} src={stock.logo} alt={stock.name + 'logo'}/>
                    <p className={'title'}>{stock.name}</p>
                    <div>
                        <p className={'price'}>${numbers.c}</p>
                    </div>
                </div>
                <div className={'card-bottom'}>
                    <p className={`percent ${numbers.dp < 0 ? 'red' : 'green'}`}>
                        <MovingIcon fontSize={"medium"} className={numbers.dp < 0 && 'rotate'}/> {numbers.dp}%
                    </p>
                    <p className={'high green'}><CandlestickChartIcon fontSize={"medium"}/> Today`s high: ${numbers.h}
                    </p>
                    <p className={'low red'}><CandlestickChartIcon fontSize={"medium"}/> Today`s low: ${numbers.l}</p>
                    <Link to={`/company-news/${props.symbol}`} className={'company-news-link'}>{stock.name} news</Link>
                </div>
            </div>
        </div>
    )
}