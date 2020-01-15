import React from 'react';
import './Number.css'

class Number extends React.Component {
    render = () => {
        let classForError = this.props.state.correctValue ? '' : 'filtererror';
        let classForNumber = (this.props.state.numberCurrent === this.props.state.maxnumber && this.props.state.settingmode===true) ? 'filterNumber' : '';
        let x = this.props.state.correctValue
                ? this.props.state.settingmode
                        ? this.props.state.numberCurrent
                        : 'enter value and press "Set"'
                :<span className={classForError}>INCORRECT VALUE!</span>
        return (
            <div className="Number">
                <div className={classForNumber}>
                    {x}
                </div>
            </div>
        );
    }
}

export default Number;