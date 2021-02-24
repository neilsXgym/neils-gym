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
        blackVinyl: number;
        silverVinyl: number;
        bronzeVinyl: number;
        smallSilverVinyl: number;
        blackMetal: number;
        smallBlackMetal: number;
        actualWeight: number;
    }

const weights: Weights = {
    hundredFifty: {
        blackVinyl: 1,
        silverVinyl: 1,
        bronzeVinyl: 2,
        smallSilverVinyl: 1,
        blackMetal: 2,
        smallBlackMetal: 1,
        actualWeight: 148.6
    },
    hundredFortyFive: {
        blackVinyl: 1,
        silverVinyl: 1,
        bronzeVinyl: 2,
        smallSilverVinyl: 1,
        blackMetal: 2,
        smallBlackMetal: 0,
        actualWeight: 142.6
    },
    hundredForty: {
        blackVinyl: 1,
        silverVinyl: 1,
        bronzeVinyl: 2,
        smallSilverVinyl: 0,
        blackMetal: 2,
        smallBlackMetal: 1,
        actualWeight: 139.8
    },
    hundredThirtyFive: {
        blackVinyl: 1,
        silverVinyl: 1,
        bronzeVinyl: 2,
        smallSilverVinyl: 0,
        blackMetal: 2,
        smallBlackMetal: 0,
        actualWeight: 133.8
    },
    hundredThirty: {
        blackVinyl: 1,
        silverVinyl: 1,
        bronzeVinyl: 2,
        smallSilverVinyl: 0,
        blackMetal: 1,
        smallBlackMetal: 1,
        actualWeight: 129.8
    },
    hundredTwentyFive: {
        blackVinyl: 1,
        silverVinyl: 1,
        bronzeVinyl: 2,
        smallSilverVinyl: 0,
        blackMetal: 1,
        smallBlackMetal: 0,
        actualWeight: 123.8
    },
    hundredTwenty: {
        blackVinyl: 1,
        silverVinyl: 1,
        bronzeVinyl: 2,
        smallSilverVinyl: 0,
        blackMetal: 0,
        smallBlackMetal: 1,
        actualWeight: 119.8
    },
    hundredFifteen: {
        blackVinyl: 1,
        silverVinyl: 1,
        bronzeVinyl: 2,
        smallSilverVinyl: 0,
        blackMetal: 0,
        smallBlackMetal: 0,
        actualWeight: 113.8
    },
    hundredTen: {
        blackVinyl: 1,
        silverVinyl: 1,
        bronzeVinyl: 1,
        smallSilverVinyl: 0,
        blackMetal: 1,
        smallBlackMetal: 1,
        actualWeight: 109.8
    },
    hundredFive: {
        blackVinyl: 1,
        silverVinyl: 1,
        bronzeVinyl: 1,
        smallSilverVinyl: 0,
        blackMetal: 1,
        smallBlackMetal: 0,
        actualWeight: 103.8
    },
    hundred: {
        blackVinyl: 1,
        silverVinyl: 1,
        bronzeVinyl: 1,
        smallSilverVinyl: 0,
        blackMetal: 0,
        smallBlackMetal: 1,
        actualWeight: 99.8
    },
    ninetyFive: {
        blackVinyl: 1,
        silverVinyl: 1,
        bronzeVinyl: 1,
        smallSilverVinyl: 0,
        blackMetal: 0,
        smallBlackMetal: 0,
        actualWeight: 93.8
    },
    ninety: {
        blackVinyl: 1,
        silverVinyl: 1,
        bronzeVinyl: 0,
        smallSilverVinyl: 0,
        blackMetal: 1,
        smallBlackMetal: 1,
        actualWeight: 89.8
    },
    eightyFive: {
        blackVinyl: 1,
        silverVinyl: 1,
        bronzeVinyl: 0,
        smallSilverVinyl: 0,
        blackMetal: 1,
        smallBlackMetal: 0,
        actualWeight: 83.8
    },
    eighty: {
        blackVinyl: 1,
        silverVinyl: 1,
        bronzeVinyl: 0,
        smallSilverVinyl: 0,
        blackMetal: 0,
        smallBlackMetal: 1,
        actualWeight: 79.8
    },
    seventyFive: {
        blackVinyl: 1,
        silverVinyl: 1,
        bronzeVinyl: 0,
        smallSilverVinyl: 0,
        blackMetal: 0,
        smallBlackMetal: 0,
        actualWeight: 73.8
    },
    seventy: {
        blackVinyl: 1,
        silverVinyl: 0,
        bronzeVinyl: 0,
        smallSilverVinyl: 1,
        blackMetal: 1,
        smallBlackMetal: 1,
        actualWeight: 70
    },
    sixtyFive: {
        blackVinyl: 1,
        silverVinyl: 0,
        bronzeVinyl: 0,
        smallSilverVinyl: 1,
        blackMetal: 1,
        smallBlackMetal: 0,
        actualWeight: 64
    },
    sixty: {
        blackVinyl: 1,
        silverVinyl: 0,
        bronzeVinyl: 0,
        smallSilverVinyl: 1,
        blackMetal: 0,
        smallBlackMetal: 1,
        actualWeight: 60
    },
    fiftyFive: {
        blackVinyl: 1,
        silverVinyl: 0,
        bronzeVinyl: 0,
        smallSilverVinyl: 0,
        blackMetal: 1,
        smallBlackMetal: 0,
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

                <div>Black Vinyl Count: {selectedWeight.blackVinyl}</div>
                <div>Silver Vinyl Count: {selectedWeight.silverVinyl}</div>
                <div>Bronze Vinyl Count: {selectedWeight.bronzeVinyl}</div>
                <div>Small Silver Vinyl Count: {selectedWeight.smallSilverVinyl}</div>
                <div>Black Metal Count: {selectedWeight.blackMetal}</div>
                <div>Small Black Metal Count: {selectedWeight.smallBlackMetal}</div>

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
                        <option value="fifty">50 lbs</option>
                        <option value="fortyFive">45 lbs</option>
                        <option value="forty">40 lbs</option>
                        <option value="thirtyFive">35 lbs</option>
                        <option value="thirty">30 lbs</option>
                        <option value="twentyFive">25 lbs</option>
                        <option value="twenty">20 lbs</option>
                    </select>
                    </span>

                    <WeightCounts selectedWeight={this.state.selectedWeight}/>

                    <span className="actual-container">Actual Weight - {this.state.selectedWeight.actualWeight}</span>

                </header>
            </div>
        );
    }
}
