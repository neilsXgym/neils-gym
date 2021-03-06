import React, {PureComponent} from 'react';
import './WeightCalculator.css';

interface Weights {
    hundredFifty: Weight
    hundredFortyFive: Weight
    hundredForty: Weight
    hundredThirtyFive: Weight
    hundredThirty: Weight
    hundredTwentyFive: Weight
    hundredTwenty: Weight
    hundredFifteen: Weight
    hundredTen: Weight
    hundredFive: Weight
    hundred: Weight
    ninetyFive: Weight
    ninety: Weight
    eightyFive: Weight
    eighty: Weight
    seventyFive: Weight
    seventy: Weight
    sixtyFive: Weight
    sixty: Weight
    fiftyFive: Weight
    // fifty: Weight
    // fortyFive: Weight
    // forty: Weight
    // thirtyFive: Weight
    // thirty: Weight
    // twentyFive: Weight
    // twenty: Weight
}

interface IWeightProps {
    selectedWeight: Weight
}


type Weight =
    {
        seventeenAndHalf: number;
        fourteenAndHalf: number;
        ten: number;
        eight: number;
        four: number;
        five: number;
        three: number;
        actualWeight: number;
    }

const weights: Weights = {
    hundredFifty: {
        seventeenAndHalf: 1,
        fourteenAndHalf: 1,
        ten: 2,
        eight: 0,
        four: 1,
        five: 2,
        three: 1,
        actualWeight: 148.6
    },
    hundredFortyFive: {
        seventeenAndHalf: 1,
        fourteenAndHalf: 1,
        ten: 2,
        eight: 0,
        four: 1,
        five: 2,
        three: 0,
        actualWeight: 142.6
    },
    hundredForty: {
        seventeenAndHalf: 1,
        fourteenAndHalf: 1,
        ten: 2,
        eight: 0,
        four: 0,
        five: 2,
        three: 1,
        actualWeight: 139.8
    },
    hundredThirtyFive: {
        seventeenAndHalf: 1,
        fourteenAndHalf: 1,
        ten: 2,
        eight: 0,
        four: 0,
        five: 2,
        three: 0,
        actualWeight: 133.8
    },
    hundredThirty: {
        seventeenAndHalf: 1,
        fourteenAndHalf: 1,
        ten: 2,
        eight: 0,
        four: 0,
        five: 1,
        three: 1,
        actualWeight: 129.8
    },
    hundredTwentyFive: {
        seventeenAndHalf: 1,
        fourteenAndHalf: 1,
        ten: 2,
        eight: 0,
        four: 0,
        five: 1,
        three: 0,
        actualWeight: 123.8
    },
    hundredTwenty: {
        seventeenAndHalf: 1,
        fourteenAndHalf: 1,
        ten: 2,
        eight: 0,
        four: 0,
        five: 0,
        three: 1,
        actualWeight: 119.8
    },
    hundredFifteen: {
        seventeenAndHalf: 1,
        fourteenAndHalf: 1,
        ten: 2,
        eight: 0,
        four: 0,
        five: 0,
        three: 0,
        actualWeight: 113.8
    },
    hundredTen: {
        seventeenAndHalf: 1,
        fourteenAndHalf: 1,
        ten: 1,
        eight: 0,
        four: 0,
        five: 1,
        three: 1,
        actualWeight: 109.8
    },
    hundredFive: {
        seventeenAndHalf: 1,
        fourteenAndHalf: 1,
        ten: 1,
        eight: 0,
        four: 0,
        five: 1,
        three: 0,
        actualWeight: 103.8
    },
    hundred: {
        seventeenAndHalf: 1,
        fourteenAndHalf: 1,
        ten: 1,
        eight: 0,
        four: 0,
        five: 0,
        three: 1,
        actualWeight: 99.8
    },
    ninetyFive: {
        seventeenAndHalf: 1,
        fourteenAndHalf: 1,
        ten: 1,
        eight: 0,
        four: 0,
        five: 0,
        three: 0,
        actualWeight: 93.8
    },
    ninety: {
        seventeenAndHalf: 1,
        fourteenAndHalf: 1,
        ten: 0,
        eight: 0,
        four: 0,
        five: 1,
        three: 1,
        actualWeight: 89.8
    },
    eightyFive: {
        seventeenAndHalf: 1,
        fourteenAndHalf: 1,
        ten: 0,
        eight: 0,
        four: 0,
        five: 1,
        three: 0,
        actualWeight: 83.8
    },
    eighty: {
        seventeenAndHalf: 1,
        fourteenAndHalf: 1,
        ten: 0,
        eight: 0,
        four: 0,
        five: 0,
        three: 1,
        actualWeight: 79.8
    },
    seventyFive: {
        seventeenAndHalf: 1,
        fourteenAndHalf: 1,
        ten: 0,
        eight: 0,
        four: 0,
        five: 0,
        three: 0,
        actualWeight: 73.8
    },
    seventy: {
        seventeenAndHalf: 1,
        fourteenAndHalf: 0,
        ten: 0,
        eight: 0,
        four: 1,
        five: 1,
        three: 1,
        actualWeight: 70
    },
    sixtyFive: {
        seventeenAndHalf: 1,
        fourteenAndHalf: 0,
        ten: 0,
        eight: 0,
        four: 1,
        five: 1,
        three: 0,
        actualWeight: 64
    },
    sixty: {
        seventeenAndHalf: 1,
        fourteenAndHalf: 0,
        ten: 0,
        eight: 0,
        four: 1,
        five: 0,
        three: 1,
        actualWeight: 60
    },
    fiftyFive: {
        seventeenAndHalf: 1,
        fourteenAndHalf: 0,
        ten: 0,
        eight: 0,
        four: 0,
        five: 1,
        three: 0,
        actualWeight: 55.2
    },
    // fifty: {
    //     blackVinyl: 1,
    //     silverVinyl: 1,
    //     bronzeVinyl: 0,
    //     smallSilverVinyl: 0,
    //     blackMetal: 0,
    //     smallBlackMetal: 0,
    //     actualWeight: 0
    // },
    // fortyFive: {
    //     blackVinyl: 1,
    //     silverVinyl: 1,
    //     bronzeVinyl: 0,
    //     smallSilverVinyl: 0,
    //     blackMetal: 0,
    //     smallBlackMetal: 0,
    //     actualWeight: 0
    // },
    // forty: {
    //     blackVinyl: 1,
    //     silverVinyl: 1,
    //     bronzeVinyl: 0,
    //     smallSilverVinyl: 0,
    //     blackMetal: 0,
    //     smallBlackMetal: 0,
    //     actualWeight: 0
    // },
    // thirtyFive: {
    //     blackVinyl: 1,
    //     silverVinyl: 1,
    //     bronzeVinyl: 0,
    //     smallSilverVinyl: 0,
    //     blackMetal: 0,
    //     smallBlackMetal: 0,
    //     actualWeight: 0
    // },
    // thirty: {
    //     blackVinyl: 1,
    //     silverVinyl: 1,
    //     bronzeVinyl: 0,
    //     smallSilverVinyl: 0,
    //     blackMetal: 0,
    //     smallBlackMetal: 0,
    //     actualWeight: 0
    // },
    // twentyFive: {
    //     blackVinyl: 1,
    //     silverVinyl: 1,
    //     bronzeVinyl: 0,
    //     smallSilverVinyl: 0,
    //     blackMetal: 0,
    //     smallBlackMetal: 0,
    //     actualWeight: 0
    // },
    // twenty: {
    //     blackVinyl: 1,
    //     silverVinyl: 1,
    //     bronzeVinyl: 0,
    //     smallSilverVinyl: 0,
    //     blackMetal: 0,
    //     smallBlackMetal: 0,
    //     actualWeight: 0
    // },
}

function WeightCounts({selectedWeight}: IWeightProps) {

    return (
        <div className="App">
            <div className="weights-container">

                <table>
                    <thead><td>Weight</td><td>Count</td></thead>
                    <tr><td className="right-align">17.5 lbs (8 kg)</td><td>{selectedWeight.seventeenAndHalf}</td></tr>
                    <tr><td className="right-align">14.5 lbs (6.5 kg)</td><td>{selectedWeight.fourteenAndHalf}</td></tr>
                    <tr><td className="right-align">10 lbs (4.5 kg)</td><td>{selectedWeight.ten}</td></tr>
                    <tr><td className="right-align">8 lbs (3.5 kg)</td><td>{selectedWeight.eight}</td></tr>
                    <tr><td className="right-align">5 lbs</td><td>{selectedWeight.five}</td></tr>
                    <tr><td className="right-align">4.4 lbs (2 kg)</td><td>{selectedWeight.four}</td></tr>
                    <tr><td className="right-align">3 lbs</td><td>{selectedWeight.three}</td></tr>
                </table>

                <span className="asterisk">(the count is for one side of the bar)</span>

            </div>
        </div>
    )


}

export default class WeightCalculator extends PureComponent {

    state = {
        selectedWeight: weights["hundredFifty"]
    }

    handleWeightSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value);
        this.setState({selectedWeight: weights[event.target.value as keyof Weights]});
        this.render();
    }

    render() {

        return (
            <div className="App">
                <header className="App-header">

                    <span className="selector-container">
                    <label>Neil's Weight - </label>
                    <select className="weight-selector" onChange={this.handleWeightSelection}>
                        <option value="hundredFifty">150 lbs</option>
                        <option value="hundredFortyFive">145 lbs</option>
                        <option value="hundredForty">140 lbs</option>
                        <option value="hundredThirtyFive">135 lbs</option>
                        <option value="hundredThirty">130 lbs</option>
                        <option value="hundredTwentyFive">125 lbs</option>
                        <option value="hundredTwenty">120 lbs</option>
                        <option value="hundredFifteen">115 lbs</option>
                        <option value="hundredTen">110 lbs</option>
                        <option value="hundredFive">105 lbs</option>
                        <option value="hundred">100 lbs</option>
                        <option value="ninetyFive">95 lbs</option>
                        <option value="ninety">90 lbs</option>
                        <option value="eightyFive">85 lbs</option>
                        <option value="eighty">80 lbs</option>
                        <option value="seventyFive">75 lbs</option>
                        <option value="seventy">70 lbs</option>
                        <option value="sixtyFive">65 lbs</option>
                        <option value="sixty">60 lbs</option>
                        <option value="fiftyFive">55 lbs</option>
                    </select>
                    </span>

                    <WeightCounts selectedWeight={this.state.selectedWeight}/>

                    <span className="actual-container">Actual Weight - {this.state.selectedWeight.actualWeight}</span>

                </header>
            </div>
        );
    }
}
