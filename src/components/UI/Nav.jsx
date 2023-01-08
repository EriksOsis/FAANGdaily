import './Nav.css';
import {NavLink} from "react-router-dom";

export function Nav() {
    return (
        <nav className={'header'}>
            <div className={'menu'}>
                <ul className={'menu-options'}>
                    <li>
                        <NavLink to={'/news'} exact className={'menu-option'}>News</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/trends'} exact className={'menu-option'}>Trends</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/insider-info'} exact className={'menu-option'}>Insider Info</NavLink>
                    </li>
                </ul>
            </div>
            <div className={'logo'}>
                <img src={'FAANGdaily(1).png'} alt={'FAANGdaily logo'}/>
            </div>
        </nav>
    )
}