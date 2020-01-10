import React from 'react';
import './Settings.css'

class Settings extends React.Component {

    onChangeInputMax = (e) => {
        this.props.changeStatusMax(Number(e.currentTarget.value))
    }

    onChangeInputMin = (e) => {
        this.props.changeStatusMin(Number(e.currentTarget.value))
    }

    render = () => {
        let classError = this.props.state.correctValue ? '' : 'error'
        return (
            <div className="Number">
                <div className='inputs'>
                    <div className='maxv'>Max value: <input type='number' onChange={this.onChangeInputMax}
                                                            className='maxvalue' className={classError}
                                                            value={this.props.state.maxnumber}/></div>
                    <div className='minv'>Min value: <input type='number' onChange={this.onChangeInputMin}
                                                            className='minvalue' className={classError}
                                                            value={this.props.state.minnumber}/></div>
                </div>
            </div>
        );
    }
}

export default Settings;