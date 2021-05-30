import React from 'react';
import './Alerting.css';

const Alerting = (props) => {
    console.log(props.text)
    return (
        <div className="tn-box tn-box-color-1">
            <p>{props.text}</p>
            <div className="tn-progress"></div>
        </div>
    )
}

export default Alerting;
