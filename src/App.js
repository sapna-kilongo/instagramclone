import React from 'react'
import Header from './componets/Header'
import Content from "./componets/Content"
import Favorite from './page/Favorite';
import Inbox from './page/Inbox';
import Explore from './page/Explore';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App" >
                <Switch>
                    <Route exact path="/">
                        <Header />
                        <Content />
                    </Route>
                    <Route path="/favorite">
                        <Favorite />
                    </Route>
                    <Route path="/inbox">
                        <Inbox />
                    </Route>
                    <Route path="/explore">
                        <Explore />
                    </Route>

                </Switch>
            </div>
        </Router>
    )
}

export default App
