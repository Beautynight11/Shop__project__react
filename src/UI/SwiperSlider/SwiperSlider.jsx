import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import discount from '../../Store/FirstScreenStore'
//TODO dynamic picture
import img from '../../images/running_shoes_PNG5823.png'


import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import './SwiperSlider.css'

import SwiperCore, {
    Autoplay,
    Pagination
} from 'swiper';

import Button from "../Button/Button";

SwiperCore.use([Pagination, Autoplay]);


export default function SwiperSlider() {
    const pagination = {
        "clickable": true,
    }

    return (
        <>
            <Swiper
                autoplay={{
                    "delay": 4000,
                    "disableOnInteraction": false,
                }}
                pagination={pagination}
                className="mySwiper"
            >
                {discount.map((item) => {return <SwiperSlide
                        key={item.id}>
                        <div className='slide'>
                            <div className='slide__info'>
                                <div className='slide__title'>{item.name}</div>
                                <div className='slide__title slide__title--discount'>{item.title}</div>
                                <Button name='See models' clName='btn'/>
                            </div>
                            <div className='slide__image'>
                                <div className='slide__img' style={{backgroundImage:`url(${img})`}}/>
                            </div>
                        </div>
                    </SwiperSlide>
                    })}
            </Swiper>
        </>
    )
}