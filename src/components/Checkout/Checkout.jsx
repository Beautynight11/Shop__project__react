import React from 'react';
import Input from "../../UI/Input/Input";
import Select from "../../UI/Select/Select";
import Button from "../../UI/Button/Button";

import './Checkout.css'

const Checkout = () => {
    const payment = ['Credit card', 'Cash', 'Apple Pay', 'Google Pay'];

    return (
        <div className='checkout__container' onClick={(e) => e.stopPropagation()}>
            <div className='checkout__info'>
                <div className='checkout__title'>Checkout</div>
            </div>
            <form className='checkout__form'>
                <Input className='checkout__input' placeholder='Enter your name'/>
                <Input className='checkout__input' placeholder='Enter your phone'/>
                <Input className='checkout__input' placeholder='Enter your address'/>
                <Select
                    array={payment}
                    classNameList='checkout__select'
                    classNameSelectContent='checkout__content'
                    classNameItem='checkout__item'
                    name='Payment methods'
                />
                <Button type='submit' className='checkout__btn' name='Send'/>
            </form>
        </div>
    );
};

export default Checkout;