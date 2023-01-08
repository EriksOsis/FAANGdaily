import {useEffect, useState} from "react";
import './CryptoCard.css';
import MovingIcon from '@mui/icons-material/Moving';

export function CryptoCard(props) {
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
            <div className={'flip-card-inner'}>
                <div className={'card-front'}>
                    <img src={stock.logo} alt={stock.name + 'logo'}/>
                    <p className={'title'}>{stock.name}</p>
                    <div>
                        <p className={'price'}>${numbers.c}</p>
                    </div>
                </div>
                <div className={'card-back'}>
                    <p className={numbers.dp < 0 ? 'red' : 'green'}>
                        <MovingIcon fontSize={"large"}
                                    className={`trend-icon ${numbers.dp < 0 && 'rotate'}`}/> {numbers.dp}%
                    </p>
                    <p className={'green'}>Today`s high: ${numbers.h}</p>
                    <p className={'red'}>Today`s low: ${numbers.l}</p>
                    <a href={'#'}>{stock.name} News</a>
                </div>
            </div>
        </div>
    )
}