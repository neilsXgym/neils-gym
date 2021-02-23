import React from 'react';
import baseNeil from '../../assets/base_neil.jpeg';
import './Home.css';
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={baseNeil} className="App-logo" alt="logo"/>
                <span>
                    Welcome to Neil's Gym... That's me, above.
                </span>
                <span>
                    Workout with me and you'll look just as cool as I do!
                </span>
                <Link to="/calculator">Go to calculator!</Link>
            </header>
        </div>
    );
}

export default Home;
