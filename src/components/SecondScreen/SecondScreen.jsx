import React from 'react';

import './SecondScreen.css'

const SecondScreen = () => {
    return (
        <div className='secondScreen'>
            <div className='container'>
                <div className='secondScreen__title'>free shipping <span>from $ 5</span></div>
                <div className='secondScreen__title secondScreen__title--subtitle'>Make an order and get a gift</div>
            </div>
        </div>
    );
};

export default SecondScreen;