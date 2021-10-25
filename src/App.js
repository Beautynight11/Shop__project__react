import './App.css';
import { useState } from "react";
import Home from "./Home";
import Header from "./components/Header/Header";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AllModels from "./components/AllModels/AllModels";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Router>
                <Header count={count}/>
                <ScrollToTop/>
                <Switch>
                    <Route exact path='/'>
                        <Home count={count} setCount={setCount}/>
                    </Route>
                    <Route path='/models'>
                        <AllModels/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
