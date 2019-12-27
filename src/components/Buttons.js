import React from 'react';
import './Buttons.css'
import Button from "./Button";

class Buttons extends React.Component {



    onIncButton = () => {
        let value = this.props.numberElement
        this.props.incButton(value);
    }

    onResetButton = () => {
        let value = this.props.numberElement
        this.props.resetButton(value);
    }

    render = () => {
        let positionInc
        let positionReset
        if(this.props.numberElement === 5){
             positionInc = true;
        } else {
             positionInc = false
        } ;
        if(this.props.numberElement === 0){
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