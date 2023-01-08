import {CryptoCard} from "./CryptoCard";
import './LeaderBoard.css';

export function LeaderBoard() {
    return (
        <div className={'container'}>
            <div className={'cards'}>
                <div className={'item3'}>
                    <CryptoCard symbol={'META'}/>
                </div>
                <div className={'item1'}>
                    <CryptoCard symbol={'AAPL'}/>
                </div>
                <div className={'item5'}>
                    <CryptoCard symbol={'AMZN'}/>
                </div>
                <div className={'item2'}>
                    <CryptoCard symbol={'NFLX'}/>
                </div>
                <div className={'item4'}>
                    <CryptoCard symbol={'GOOGL'}/>
                </div>
            </div>
        </div>
    )
}