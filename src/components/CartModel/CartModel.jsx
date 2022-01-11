import React from 'react';
import { decreaseQuantityCart, removeFromCart } from "../../actions/cart";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../actions/cart";

import './CartModel.css'

const CartModel = ({ item }) => {
    const dispatch = useDispatch();
    const checkPrice = item.price * item.quantity;

  const increaseQuantity = () => {
    dispatch(addToCartAction(item))
  }

  const decreaseQuantity = (quantity) => {
    dispatch(decreaseQuantityCart(item));
    if (quantity < 2) {
      dispatch(removeFromCart(item))
    }
  }
  
  const removeFromCartList = () => {
    dispatch(removeFromCart(item))
  }

    return (
        <div className='cartModel__info'>
            <div className='cartModel__delete'>
                <div className='cartModel__image' onClick={() => removeFromCartList()}/>
            </div>
            <div className='cartModel__name'>{item.name}</div>
            <div className='cartModel__model'>
                <div className='cartModel__img' style={{backgroundImage:`url(${item.image})`}}/>
            </div>
            <div className='cartModel__quantity'>
                <div
                    className='cartModel__btn cartModel__btn--minus' onClick={() => decreaseQuantity(item.quantity)}/>
                <div className='cartModel__current'>{item.quantity}</div>
                <div className='cartModel__btn cartModel__btn--plus' onClick={() => increaseQuantity()}/>
            </div>
            <div
                className='cartModel__price'>
                {checkPrice + '$'}
            </div>
        </div>
    );
};

export default CartModel;