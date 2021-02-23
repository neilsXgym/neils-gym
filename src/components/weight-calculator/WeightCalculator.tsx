import React from 'react';
import baseNeil from '../../assets/base_neil.jpeg';
import './WeightCalculator.css';

function WeightCalculator() {
    return (
        <div className="App">
            <header className="App-header">
                <form>
                    <div>Black Vinyl Count: <input/> </div>
                    <div>Silver Vinyl Count: <input/> </div>
                    <div>Bronze Vinyl Count: <input/> </div>
                    <div>Small Vinyl Count: <input/> </div>
                    <div>Black Metal Count: <input/> </div>
                    <div>Small Black Metal Count: <input/> </div>
                </form>
            </header>
        </div>
    );
}

export default WeightCalculator;
