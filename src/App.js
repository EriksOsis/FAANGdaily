import './App.css';
import {LeaderBoard} from "./components/MainPage/LeaderBoard";
import {Route, Switch} from "react-router-dom";
import {Nav} from "./components/UI/Nav";
import {NewsPage} from "./components/NewsPage/NewsPage";
import {TrendsPage} from "./components/TrendsPage/TrendsPage";
import {InsiderPage} from "./components/InsiderPage/InsiderPage";
import {CompanyNews} from "./components/CompanyNews/CompanyNews";
import {Footer} from "./components/UI/Footer";

function App() {
    return (
        <Switch>
            <div className={'App'}>
                <Nav/>
                <Route path={'/'} exact>
                    <header className={'main-title'}>
                        <h1>Trading Stars</h1>
                        <p>No charts. Only important information.</p>
                    </header>
                    <LeaderBoard/>
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
