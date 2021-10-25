import React from 'react';

import './SocialElement.css'

const SocialElement = ({img, name}) => {
    return (
        <div className='socialElement'>
            <div className='socialElement__logo'>
                <div
                    className='socialElement__img'
                    style={{backgroundImage:`url(${img})`}}
                />
            </div>
            <a href='/' className='socialElement__link'>{name}</a>
        </div>
    );
};

export default SocialElement;