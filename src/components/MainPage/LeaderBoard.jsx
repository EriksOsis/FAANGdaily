import {StockCard} from "./StockCard";
import './LeaderBoard.css';
import {Newsletter} from "../Newsletter/Newsletter";

export function LeaderBoard() {
    return (
        <div className={'container'}>
            <div className={'cards'}>
                <div className={'item1'}>
                    <StockCard symbol={'META'}/>
                </div>
                <div className={'item2'}>
                    <StockCard symbol={'AAPL'}/>
                </div>
                <div className={'item3'}>
                    <StockCard symbol={'AMZN'}/>
                </div>
                <div className={'item4'}>
                    <StockCard symbol={'NFLX'}/>
                </div>
                <div className={'item5'}>
                    <StockCard symbol={'GOOGL'}/>
                </div>
            </div>
            <div>
                <Newsletter/>
            </div>
        </div>
    )
}