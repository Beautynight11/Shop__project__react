import React, {useState} from 'react';
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

import './Feedback.css'


const Feedback = () => {
    const [valueInput, setValueInput] = useState('');

    const handleChange = (e) => {
        setValueInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted!');
    }

    return (
        <form className='feedback' onSubmit={handleSubmit}>
            <div className='container'>
                <div className='feedback__content'>
                    <div className='feedback__title'>receive gifts and discounts</div>
                    <Input
                        placeholder='Your e-mail'
                        name='feedback__input'
                        value={valueInput}
                        onChange={handleChange}
                    />
                    <Button className='feedback__btn' name='Subscribe' type='submit' />
                </div>
            </div>
        </form>
    );
};

export default Feedback;