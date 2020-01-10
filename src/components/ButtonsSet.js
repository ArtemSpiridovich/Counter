import React from 'react';
import './ButtonsSet.css'
import Button from "./Button";

class ButtonsSet extends React.Component {

    onSetClickButton = () => {
        this.props.setButton()
    }

    render = () => {

        return (
            <div className="Buttons">
                <Button text='Set' className='set'
                        valueDisable={this.props.state.settingmode || !this.props.state.correctValue}
                        onClick={this.onSetClickButton}/>
            </div>
        );
    }
}

export default ButtonsSet;