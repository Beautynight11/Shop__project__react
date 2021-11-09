import React from 'react';

import './Input.css'

const Input = ({ placeholder, className, value, onChange, error, ...props }) => {
    return (
        <div className='inputForm'>
            <input
                className={`input ${!!error ? 'input--error' : ''} ${className}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...props}
            />
            {(error) && <div className='input__error'>{error}</div>}
        </div>
    );
};

export default Input;