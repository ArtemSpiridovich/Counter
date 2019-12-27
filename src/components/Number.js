import React from 'react';
import './Number.css'

class Number extends React.Component {
    render = () => {
    let classForNumber = this.props.numberElement === 5 ? 'filterNumber' : '';
        return (
            <div className="Number">
                <div className={classForNumber}>
                {this.props.numberElement}
                </div>
            </div>
        );
    }
}

export default Number;