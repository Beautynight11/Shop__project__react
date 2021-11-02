import React from 'react';

import './CartIcon.css'

const CartIcon = ({ count, openCart }) => {

    return (
        <div className='cartIcon'>
            <div className='cartIcon__image' onClick={openCart}>
                <div className='cartIcon__img'/>
            </div>
            <div className='cartIcon__amount'>
                <div className='cartIcon__count'>{count}</div>
            </div>
        </div>
    );
};

export default CartIcon;