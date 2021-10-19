import React from 'react';
import SwiperSlider from "../../UI/SwiperSlider/SwiperSlider";

import './FirstScreen.css'

const FirstScreen = () => {
    return (
        <div className='firstScreen'>
            <div className='firstScreen__content'>
                <SwiperSlider/>
            </div>
        </div>
    );
};

export default FirstScreen;