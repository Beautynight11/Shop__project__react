import React, { useState } from 'react';
import Button from "../../UI/Button/Button";
import CartModel from "../CartModel/CartModel";

import './CartWindow.css'

const CartWindow = ({ object, closeWindow, goToCheckout, isEmpty, deleteItem }) => {
    const [price, setPrice] = useState(0);
    // const [total, selTotal] = useState(0);

    // const t = () => {
    //     console.log(price)
    // }


    return (
        <div className='cartWindow' onClick={(e) => e.stopPropagation()}>
            <div className='cartWindow__content'>
                <div className='cartWindow__title'>
                    <span>Cart</span>
                </div>
                {isEmpty &&
                object.map((item, index) => (
                    <CartModel
                        deleteItem={deleteItem}
                        key={(index + 1) * Date.now()}
                        item={item}
                        setPrice={() => setPrice}
                    />
                    ))
                }
                {!isEmpty && <div className='cartWindow__empty'>Cart is empty</div>}
                <div className='cartWindow__total'>Total price: {price}</div>
                <div className='cartWindow__buttons'>
                    <Button
                        className='cartWindow__button cartWindow__button--cancel'
                        name='Cancel'
                        onClick={closeWindow}
                    />
                    <Button
                        className='cartWindow__button cartWindow__button--checkout'
                        name='Checkout'
                        onClick={goToCheckout}
                    />
                </div>
            </div>
        </div>
    );
};

export default CartWindow;