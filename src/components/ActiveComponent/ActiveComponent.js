import React from 'react';
import './ActiveComponent.css'

const ActiveComponent = ({text, className}) => {
    return (
        <div className={className}>
            <div className='activeComponent__text'>{text}</div>
        </div>
    );
};

export default ActiveComponent;