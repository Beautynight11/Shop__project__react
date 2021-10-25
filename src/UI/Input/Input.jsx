import React from 'react';

import './Input.css'

const Input = ({ placeholder, name, value, onChange }) => {
    return (
        <input
            type='text'
            className={`input ${name}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;