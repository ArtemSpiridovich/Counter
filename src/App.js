import React from 'react';
import './App.css';
import Number from "./components/Number";
import Buttons from "./components/Buttons";
import Settings from "./components/Settings";
import ButtonsSet from "./components/ButtonsSet";
import {connect} from "react-redux";
import {incButtonAC, resetButtonAC} from "./redux/store";

class App extends React.Component {

    // state = {
    //     correctValue: true,
    //     numberCurrent: 0,
    //     maxnumber: 5,
    //     minnumber: 0,
    //     settingmode: true
    // }

    incButton = (value) => {
        if (value < this.props.maxnumber) {
            // this.setState({
            //     numberCurrent: a,
            // })
            this.props.incButton(value)
        }
    };

    resetButton = (value) => {
        if (value !== this.props.minnumber) {
            // this.setState({
            //     numberCurrent: a
            // })
            this.props.resetButton(value)
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
            this.errorvalue(maxval, this.props.minnumber)
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
            this.errorvalue(this.props.maxnumber, minval)
        })
    }

    setButton = () => {
        this.setState({
            numberCurrent: this.props.minnumber,
            settingmode: true,
            settingview: false
        })
    };


    render = () => {
        debugger
        return (
            <div className="App">
                <div className='components'>
                    <Settings state={this.props}
                              changeStatusMax={this.changeStatusMax}
                              changeStatusMin={this.changeStatusMin}/>
                    <ButtonsSet state={this.props}
                                setButton={this.setButton}
                    />
                </div>
                <div className='components'>
                    <Number state={this.props}/>
                    <Buttons state={this.props}
                             incButton={this.incButton}
                             resetButton={this.resetButton}
                             onsetButton={this.onsetButton}
                    />
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return state
};
/**/
const mapDispatchToProps = (dispatch) => {
    return {
        incButton: (value) => {
            dispatch(incButtonAC(value));
        },
        resetButton: (valuer) => {
            dispatch(resetButtonAC(valuer))
        }
    }
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default ConnectedApp
