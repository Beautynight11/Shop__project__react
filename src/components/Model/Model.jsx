import React from 'react';

import './Model.css'

const Model = ({title, price}) => {
    return (
        <div className='model'>
            <div className='model__top model__top--left'/>
            <div className='model__top model__top--right'/>
            <div className='model__info'>
                <div className='model__image'>
                    <div className='model__img'/>
                </div>
                <div className='model__title'>{title}</div>
                <div className='model__price'>{price}</div>
            </div>
            <div className='model__bottom model__bottom--left'/>
            <div className='model__bottom model__bottom--right'/>
        </div>
    );
};

export default Model;