import React from 'react';
import baseNeil from '../../assets/base_neil.jpeg';
import './Home.css';
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <span className="home-text">
                    Welcome to Neil's Gym!
                </span>
                <img src={baseNeil} className="neils-image" alt="logo"/>
                <span>
                    That's me, above.
                </span>
                <span className="home-text">
                    Workout with me and you'll<br />look just as cool as I do!
                </span>
                <Link className="calculator-link" to="/calculator">I'm in! Take me to the weights calculator!</Link>
            </header>
        </div>
    );
}

export default Home;
