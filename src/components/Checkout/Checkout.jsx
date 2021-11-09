import React, { useEffect, useState } from 'react';
import Select from "../UI/Select/Select";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import * as validators from '../../validators';

import './Checkout.css'

const payment = ['Payment method', 'Credit card', 'Cash', 'Apple Pay', 'Google Pay'];

const INITIAL_STATE = {
    name: '',
    phone: '',
    email: '',
    payment: '',
};

const INITIAL_DIRTY_STATE = {
    name: false,
    phone: false,
    email: false,
    payment: false,
};

const Checkout = ({ setIsSend }) => {
    const [form, setForm] = useState(INITIAL_STATE);
    const [dirty, setDirty] = useState(INITIAL_DIRTY_STATE);
    const [error, setError] = useState(INITIAL_STATE);

    useEffect(() => {
        const calculatedErrors = {};
        Object.keys(error).forEach(key => {
            calculatedErrors[key] = validators[key](error[key]);
        });
        setError(calculatedErrors);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setForm(INITIAL_STATE);
        setIsSend(true);
    };

    const handleInputChange = ({ target: { name, value } }) => {
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }))
        setDirty(prevDirty => ({
            ...prevDirty,
            [name]: true
        }))
        setError(prevError => ({
            ...prevError,
            [name]: validators[name](value)
        }));
    }

    const hasError = Object.values(error).reduce((acc, value) => acc || !!value, false);
    const isDirty = Object.values(dirty).reduce((acc, value) => acc || value, false)

    const disabled = !isDirty || hasError;

    return (
        <div className='checkout__container' onClick={(e) => e.stopPropagation()}>
            <div className='checkout__info'>
                <div className='checkout__title'>Checkout</div>
            </div>
            <form className='checkout__form' onSubmit={handleSubmit}>
                    <div className='checkout__content'>
                        <Input
                            placeholder='Enter your name'
                            value={form.name}
                            onChange={handleInputChange}
                            onBlur={handleInputChange}
                            name='name'
                            error={dirty.name && error.name}
                        />
                    </div>
                    <div className='checkout__content'>
                        <Input
                            placeholder='Enter your phone'
                            value={form.phone}
                            onChange={handleInputChange}
                            onBlur={handleInputChange}
                            name='phone'
                            error={dirty.phone && error.phone}
                        />
                    </div>
                    <div className='checkout__content'>
                        <Input
                            placeholder='Enter your email'
                            value={form.email}
                            onChange={handleInputChange}
                            onBlur={handleInputChange}
                            name='email'
                            error={dirty.email && error.email}
                        />
                    </div>
                <div className='checkout__content'>
                    <Select
                        list={payment}
                        defaultName='Payment methods'
                        name='payment'
                        value={form.payment}
                        error={(dirty.payment && error.payment)}
                        onChange={handleInputChange}
                        onBlur={handleInputChange}
                        className='checkout__select'
                    />
                </div>
                <Button type='submit' className='checkout__btn' title='Send' disabled={disabled} />
            </form>
        </div>
    );
};

export default Checkout;