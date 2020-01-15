import React from 'react';
import './Buttons.css'
import Button from "./Button";

class Buttons extends React.Component {



    onIncButton = () => {
        let value = this.props.state.numberCurrent;
        this.props.incButton(value);
    }

    onResetButton = () => {
        let value = this.props.state.numberCurrent;
        this.props.resetButton(value);
    }

    onsetButton = () => {
        this.props.onsetButton()
    }

    render = () => {
        let positionInc
        let positionReset
        if(this.props.state.numberCurrent === this.props.state.maxnumber ){
             positionInc = true;
        } else {
             positionInc = false;
        } ;
        if(this.props.state.numberCurrent === this.props.state.minnumber){
             positionReset = true;
        } else {
             positionReset = false;
        };
        return (
            <div className="Buttons">
                <Button text='inc' onClick={this.onIncButton} valueDisable={positionInc}/>
                <Button text='reset' onClick={this.onResetButton} valueDisable={positionReset}/>
            </div>
        );
    }
}

export default Buttons;