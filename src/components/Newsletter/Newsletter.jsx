import './Newsletter.css';
import Button from "@mui/material/Button";

export function Newsletter() {
    return (
        <div className={'newsletter-container'} id={'newsletter'}>
            <div className={'cta'}>
                <header className={'cta-text'}>
                    <h1>Become smarter in just 5 minutes</h1>
                    <p>Get the daily email that makes reading the news enjoyable. Stay informed and entertained, for
                        free.</p>
                </header>
                <form className={'cta-form'}>
                    <input className={'cta-input'} placeholder={'john.smith@email.com'}/>
                    <Button variant="contained" color="warning" className={'cta-form-btn'}>Subscribe</Button>
                </form>
            </div>
            <div className={'cta-img-container'}>
                <img className={'cta-img'}
                     src={'https://u3j7m9h7.rocketcdn.me/wp-content/uploads/2021/10/stock-market-news-1-1.jpg'}
                     alt={'random stock charts and prices'}/>
            </div>
        </div>
    )
}