import React, {useState} from 'react';

import './Clothes.css'
import Button from "../../UI/Button/Button";
import ActiveComponent from "../ActiveComponent/ActiveComponent";

const Clothes = ({ image, name, getCount, price }) => {

    const [isActive, setIsActive] = useState(false);


    const addToCart = () => {
        getCount();
        setIsActive(true)
    };
    const addingToCart = isActive ? 'clothes__active clothes__active--active' : 'clothes__active'

    return (
        <div className='clothes' >
            <ActiveComponent className={addingToCart} text='Added to cart'/>
            {!isActive &&
            <div className='clothes__info'>
                <div className='clothes__content'>
                    <div className='clothes__photo'>
                        <div className='clothes__img' style={{backgroundImage:`url(${image})`}}/>
                    </div>
                    <div className='clothes__name'>
                        {name}
                        <div className='clothes__price'>{price + '$'}</div>
                    </div>
                </div>
                <Button name='Add' className='clothes__btn' onClick={addToCart} />
            </div>}
        </div>
    );
};

export default Clothes;