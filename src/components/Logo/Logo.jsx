import React from 'react';
import './Logo.css'

const Logo = ({ className, classNameImg }) => {
    return (
        <div className='logo'>
            <div className={classNameImg}>
                <div className='logo__img'/>
            </div>
            <div className={className}>The Loop</div>
        </div>
    );
};

export default Logo;
