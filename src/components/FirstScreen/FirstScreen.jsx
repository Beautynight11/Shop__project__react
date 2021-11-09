import React from 'react';
import SwiperSlider from "../UI/SwiperSlider/SwiperSlider";
import discount from "../../constants/firstScreenStore";

import img from '../../images/running_shoes_PNG5823.png';

import './FirstScreen.css'

const FirstScreen = () => {
    return (
        <div className='firstScreen'>
            <div className='firstScreen__content'>
                <SwiperSlider list={discount} img={img}/>
            </div>
        </div>
    );
};

export default FirstScreen;