import {StockCard} from "./StockCard";
import './HeroSection.css';
import {Newsletter} from "../Newsletter/Newsletter";
import Button from '@mui/material/Button';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import {Link, useLocation} from "react-router-dom";
import {useEffect} from "react";

export function HeroSection() {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({behavior: "smooth"});
                window.history.replaceState({}, document.title, window.location.pathname);
            }
        }
    }, [location.hash]);

    return (
        <div className={'hero-page'}>
            <div className={'hero-container'}>
                <div className={'description-container'}>
                    <div className={'hero-text-container'}>
                        <h1 className={'hero-heading'}>Unlock the Power of the Stock Market with <span
                            className={'color-gold'}>Trading Stars</span>:
                            Comprehensive News, Analysis, and
                            Insights</h1>
                        <p className={'hero-description'}>Trading Stars is a comprehensive stock market news and
                            analysis
                            website that provides investors with
                            the latest information on the stock market, including market trends, stock recommendations
                            from
                            analysts, and company insider transactions. Whether you're a seasoned investor or
                            new to the stock market, Trading Stars has everything you need to make informed investment
                            decisions.</p>
                        <Link to={'#newsletter'} className={'hero-btn'}>
                            <Button sx={{fontFamily: 'Trebuchet MS', fontSize: '1.2rem', textTransform: 'lowercase'}} variant="contained">
                                Subscribe for daily news<MarkEmailReadIcon/>
                            </Button>
                        </Link>
                    </div>
                    <img className={'hero-img'} src={require('../../TradingStars.png')}
                         alt={'Trading Stars footer logo'}/>
                </div>
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
                <Newsletter/>
            </div>
        </div>
    )
}