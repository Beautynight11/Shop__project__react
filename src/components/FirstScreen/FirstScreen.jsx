import React from 'react';
import SwiperSlider from "../../UI/SwiperSlider/SwiperSlider";
import discount from "../../Store/FirstScreenStore";

import './FirstScreen.css'

const FirstScreen = () => {
    return (
        <div className='firstScreen'>
            <div className='firstScreen__content'>
                <SwiperSlider array={discount}/>
            </div>
        </div>
    );
};

export default FirstScreen;