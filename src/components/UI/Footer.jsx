import {Link} from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Footer.css';


export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="logo-col">
                    <Link to={'/'} className="footer-logo">
                        <img className={'footer-img'} src={require('../../TradingStars.png')}
                             alt={'Trading Stars footer logo'}/>
                    </Link>
                    <ul className="social-links">
                        <li><a href="https://www.facebook.com" className="footer-link">
                            <FacebookIcon/>
                        </a></li>
                        <li><a href="https://www.instagram.com/eeriks_osis/" className="footer-link">
                            <InstagramIcon/>
                        </a></li>
                        <li><a href="https://twitter.com" className="footer-link">
                            <TwitterIcon/>
                        </a></li>
                    </ul>
                    <p className="copyright">Copyright &copy; 2023 by Trading Stars Inc. All Rights Reserved</p>
                </div>
                <div className="address-col">
                    <p className="footer-heading">Contact Us</p>
                    <address className="contacts">
                        <p className="address">623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
                        <p><a href="tel:415-201-6370" className="footer-link">415-201-6370</a></p>
                        <p><a href="mailto:info@tradingstars.com" className="footer-link">info@tradingstars.com</a></p>
                    </address>
                </div>
                <nav className="nav-col">
                    <p className="footer-heading">Account</p>
                    <ul className="footer-nav">
                        <li><a href="#" className="footer-link">Create account</a></li>
                        <li><a href="#" className="footer-link">Sign in</a></li>
                        <li><a href="#" className="footer-link">iOS app</a></li>
                        <li><a href="#" className="footer-link">Android app</a></li>
                    </ul>
                </nav>
                <nav className="nav-col">
                    <p className="footer-heading">Company</p>
                    <ul className="footer-nav">
                        <li><a href="#" className="footer-link">About Trading Stars</a></li>
                        <li><a href="#" className="footer-link">For Business</a></li>
                        <li><a href="#" className="footer-link">Careers</a></li>
                    </ul>
                </nav>
                <nav className="nav-col">
                    <p className="footer-heading">Resources</p>
                    <ul className="footer-nav">
                        <li><a href="#" className="footer-link">Company directory</a></li>
                        <li><a href="#" className="footer-link">Help center</a></li>
                        <li><a href="#" className="footer-link">Privacy & terms</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}