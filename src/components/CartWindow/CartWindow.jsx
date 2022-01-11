import React from 'react';
import Button from "../UI/Button/Button";
import CartModel from "../CartModel/CartModel";

import './CartWindow.css'

const CartWindow = ({ cart, closeWindow, goToCheckout }) => {
    const isEmpty = cart.length === 0;

    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)


    return (
        <div className='cartWindow' onClick={(e) => e.stopPropagation()}>
            <div className='cartWindow__content'>
                <div className='cartWindow__title'>
                    <span>Cart</span>
                </div>
                {!isEmpty &&
                cart.map((item, index) => (
                    <CartModel
                        key={(index + 1) * Date.now()}
                        item={item}
                    />
                    ))
                }
                {isEmpty && <div className='cartWindow__empty'>Cart is empty</div>}
                {!isEmpty && <div className='cartWindow__total'>Total price: {totalPrice}$</div>}
                <div className='cartWindow__buttons'>
                    <Button
                        className='cartWindow__button cartWindow__button--cancel'
                        title='Cancel'
                        onClick={closeWindow}
                    />
                    <Button
                        className='cartWindow__button cartWindow__button--checkout'
                        title='Checkout'
                        onClick={goToCheckout}
                        disabled={isEmpty}
                    />
                </div>
            </div>
        </div>
    );
};

export default CartWindow;