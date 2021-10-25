import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay,
    Pagination
} from 'swiper';
import Button from "../Button/Button";

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import './SwiperSlider.css';

//TODO dynamic picture
import img from '../../images/running_shoes_PNG5823.png';

SwiperCore.use([Pagination, Autoplay]);

const SwiperSlider = ({ array }) => (
    <Swiper
        autoplay={{
            "delay": 4000,
            "disableOnInteraction": false,
        }}
        pagination={{
            "clickable": true,
        }}
        className="mySwiper"
    >
        {array.map((item) => (
            <SwiperSlide
                key={item.id}>
                <div className='container'>
                    <div className='slide'>
                        <div className='slide__info'>
                            <div className='slide__title'>{item.name}</div>
                            <div className='slide__title slide__title--discount'>{item.title}</div>
                            <Button name='See models' className='btn'/>
                        </div>
                        <div className='slide__image'>
                            <div className='slide__img' style={{backgroundImage: `url(${img})`}}/>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>
)

export default SwiperSlider;
