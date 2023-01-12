import './App.css';
import {HeroSection} from "./components/MainPage/HeroSection";
import {Route, Switch} from "react-router-dom";
import {Nav} from "./components/UI/Nav";
import {NewsPage} from "./components/NewsPage/NewsPage";
import {TrendsPage} from "./components/TrendsPage/TrendsPage";
import {InsiderPage} from "./components/InsiderPage/InsiderPage";
import {CompanyNews} from "./components/CompanyNews/CompanyNews";
import {Footer} from "./components/UI/Footer";
import {ScrollToTopOnMount} from "./components/UI/ScrollToTopOnMount";

function App() {
    return (
        <Switch>
            <div className={'App'}>
                <ScrollToTopOnMount/>
                <Nav/>
                <Route path={'/'} exact>
                    <HeroSection/>
                </Route>
                <Route path={'/news'} exact>
                    <NewsPage/>
                </Route>
                <Route path={'/company-news/:symbol'}>
                    <CompanyNews/>
                </Route>
                <Route path={'/trends'} exact>
                    <TrendsPage/>
                </Route>
                <Route path={'/insider-info'} exact>
                    <InsiderPage/>
                </Route>
                <Footer/>
            </div>
        </Switch>
    );
}

export default App;
