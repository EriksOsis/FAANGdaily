import './App.css';
import {LeaderBoard} from "./components/MainPage/LeaderBoard";
import {Route, Switch} from "react-router-dom";
import {Nav} from "./components/UI/Nav";
import {NewsPage} from "./components/NewsPage/NewsPage";
import {TrendsPage} from "./components/TrendsPage/TrendsPage";
import {InsiderPage} from "./components/InsiderPage/InsiderPage";

function App() {
    return (
        <Switch>
            <div className={'App'}>
                <Nav/>
                <Route path={'/'} exact>
                    <LeaderBoard/>
                </Route>
                <Route path={'/news'} exact>
                    <NewsPage/>
                </Route>
                <Route path={'/trends'} exact>
                    <TrendsPage/>
                </Route>
                <Route path={'/insider-info'} exact>
                    <InsiderPage/>
                </Route>
            </div>
        </Switch>
    );
}

export default App;
