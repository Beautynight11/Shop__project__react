import React from 'react';
import './Button.css'

const Button = ({ title, className, type = 'button', ...props }) => {
    return (
        <button
            type={type}
            className={`button ${className}`}
            {...props}
        >
            {title}
        </button>
    );
};

export default Button;