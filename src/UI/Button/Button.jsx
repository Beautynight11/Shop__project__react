import React from 'react';
import './Button.css'

const Button = ({name, clName}) => {
    return (
        <button className={clName}>{name}</button>
    );
};

export default Button;