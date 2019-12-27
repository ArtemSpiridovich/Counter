import React from 'react';
import './App.css';
import Number from "./components/Number";
import Buttons from "./components/Buttons";


class App extends React.Component {

    state = {
        numberCurrent: 0
    }

    incButton = (value) => {
        if (value < 5) {
            let a = value + 1;
            this.setState({
                numberCurrent: a,
            })
        }
    };

    resetButton = (value) => {
        if (value !== 0) {
            value = 0;
            let a = value;
            this.setState({
                numberCurrent: a
            })
        }
    };

    render = () => {
        return (
            <div className="App">
                <div className='components'>
                    <Number numberElement={this.state.numberCurrent}/>
                    <Buttons numberElement={this.state.numberCurrent}
                             incButton={this.incButton}
                             resetButton={this.resetButton}
                    />
                </div>
            </div>
        );
    }
}

export default App;
