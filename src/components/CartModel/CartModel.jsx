import React, { useState } from 'react';

import './CartModel.css'

const CartModel = ({ deleteItem, item, setPrice }) => {
    const [current, setCurrent] = useState(1);

    const checkPrice = item.price * current;

    const increase = () => {
        setCurrent(current + 1);
    };

    return (
        <div className='cartModel__info'>
            <div className='cartModel__delete'>
                <div className='cartModel__image' onClick={() => deleteItem(item)}/>
            </div>
            <div className='cartModel__name'>{item.name}</div>
            <div className='cartModel__model'>
                <div className='cartModel__img' style={{backgroundImage:`url(${item.image})`}}/>
            </div>
            <div className='cartModel__quantity'>
                <div
                    className='cartModel__btn cartModel__btn--plus'
                    onClick={() => increase()}
                />
                <div className='cartModel__current'>{current}</div>
                <div className='cartModel__btn cartModel__btn--minus'
                     onClick={() => current !== 1 ? setCurrent(current - 1) : 1}
                />
            </div>
            <div
                className='cartModel__price'>
                {checkPrice + '$'}
            </div>
        </div>
    );
};

export default CartModel;