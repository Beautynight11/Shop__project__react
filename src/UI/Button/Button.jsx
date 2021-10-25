import React from 'react';
import './Button.css'

const Button = ({ name, className, type = 'button', ...props }) => {
    return (
        <button
            type={type}
            className={`button ${className}`}
            {...props}
        >
            {name}
        </button>
    );
};

export default Button;