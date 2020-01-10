import React from 'react';
import './App.css';
import Number from "./components/Number";
import Buttons from "./components/Buttons";
import Settings from "./components/Settings";
import ButtonsSet from "./components/ButtonsSet";

class App extends React.Component {

    state = {
        correctValue: true,
        numberCurrent: 0,
        maxnumber: 5,
        minnumber: 0,
        settingmode: true,
        settingview: false
    }

    componentDidMount() {
        this.restoreState()
    }

    saveState = () => {
        let saveAsString = JSON.stringify(this.state)
        localStorage.setItem('out-state', saveAsString)
    }

    restoreState = () => {
        let state = {
            correctValue: true,
            numberCurrent: 0,
            maxnumber: 5,
            minnumber: 0,
            settingmode: true,
            settingview: false
        }
        let stateAsString = localStorage.getItem('out-state');
        if (stateAsString !== null) {
            state = JSON.parse(stateAsString)
        }
        this.setState(state)
    }

    incButton = (value) => {
        if (value < this.state.maxnumber) {
            let a = value + 1;
            this.setState({
                numberCurrent: a,
            }, () => {
                this.saveState()
            })
        }
    };

    resetButton = (value) => {
        if (value !== this.state.minnumber) {
            value = this.state.minnumber;
            let a = value;
            this.setState({
                numberCurrent: a
            }, () => {
                this.saveState()
            })
        }
    };

    errorvalue = (max, min) => {
        if (min > max || min < 0 || max === min) {
            this.setState({
                correctValue: false
            })
        } else {
            this.setState({
                correctValue: true
            })
        }
    }

    changeStatusMax = (maxval) => {
        // let a = true
        // if(this.state.minnumber>=this.state.maxnumber || maxval<0) {
        //     a = false;
        // }
        this.setState({
            maxnumber: maxval,
            settingmode: false,
        }, () => {
            this.errorvalue(maxval, this.state.minnumber)
            this.saveState()
        })
    }

    changeStatusMin = (minval) => {
        // let a = true
        // if(this.state.minnumber>=this.state.maxnumber || minval<0) {
        //     a = false;
        // }
        this.setState({
            minnumber: minval,
            settingmode: false,
        }, () => {
            this.errorvalue(this.state.maxnumber,minval)
            this.saveState()
        })
    }

    setButton = () => {
        this.setState({
            numberCurrent: this.state.minnumber,
            settingmode: true,
            settingview: false
        })
    };

    onsetButton = () => {
        this.setState({
            settingview: true
        })
    }

    render = () => {
        return (
            <div className="App">
                {this.state.settingview
                    ? <div className='components'>
                        <Settings state={this.state}
                                  changeStatusMax={this.changeStatusMax}
                                  changeStatusMin={this.changeStatusMin}/>
                        <ButtonsSet state={this.state}
                                    setButton={this.setButton}
                        />
                    </div>
                    : <div className='components'>
                        <Number state={this.state}/>
                        <Buttons state={this.state}
                                 incButton={this.incButton}
                                 resetButton={this.resetButton}
                                 onsetButton={this.onsetButton}
                        />
                    </div>}
            </div>
        );
    };
};
export default App;
