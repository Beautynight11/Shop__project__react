import React from 'react';

import './Basket.css'

const Basket = ({ count }) => {

    return (
        <div className='basket'>
            <div className='basket__image'>
                <div className='basket__img'/>
            </div>
            <div className='basket__amount'>
                <div className='basket__count'>{count}</div>
            </div>
        </div>
    );
};

export default Basket;