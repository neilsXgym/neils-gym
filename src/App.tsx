import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';
import Home from './components/home/Home';
import WeightCalculator from './components/weight-calculator/WeightCalculator';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/calculator">
                        <WeightCalculator/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;
