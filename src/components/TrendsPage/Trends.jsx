import './Trends.css';

export function Trends(props) {
    const {trends} = props;

    return (
        <div>{trends.map(trend =>
            <ul className={'trend-container'} key={`${trend.symbol}${trend.period}`}>
                <li>
                    <p>{trend.period}</p>
                </li>
                <li className={'trend-item-container s-buy'}>
                    <p className={'trend-item'}>STRONG BUY</p><span>{trend.strongBuy}</span>
                </li>
                <li className={'trend-item-container buy'}>
                    <p className={'trend-item'}>BUY</p><span>{trend.buy}</span>
                </li>
                <li className={'trend-item-container hold'}>
                    <p className={'trend-item'}>HOLD</p><span>{trend.hold}</span>
                </li>
                <li className={'trend-item-container sell'}>
                    <p className={'trend-item'}>SELL</p><span>{trend.sell}</span>
                </li>
                <li className={'trend-item-container s-sell'}>
                    <p className={'trend-item'}>STRONG SELL</p><span>{trend.strongSell}</span>
                </li>
            </ul>
        )}</div>
    )
}