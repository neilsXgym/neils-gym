import React from 'react';
import baseNeil from './assets/base_neil.jpeg';
import './App.css';

function App() {
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
            </header>
        </div>
    );
}

export default App;
