import React from 'react';

import './Input.css'

const Input = ({ placeholder, className, value, onChange }) => {
    return (
        <input
            type='text'
            className={`input ${className}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;