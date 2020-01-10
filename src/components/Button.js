import React from 'react';

class Button extends React.Component {
    render = () => {
        return (
            <div className="Button">
                <button
                    onClick={this.props.onClick}
                    disabled={this.props.valueDisable}>{this.props.text}</button>
            </div>
        );
    }
}

export default Button;