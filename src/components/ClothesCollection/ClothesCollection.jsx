import React from 'react';
import Clothes from "../Clothes/Clothes";

import './ClothesCollections.css'

const ClothesCollection = ({array}) => {
    return (
        <div className='clothesCollections'>
            {array.map((item, index) => {
                return <Clothes key={index} image={item.img} name={item.name}/>
            })}
        </div>
    );
};

export default ClothesCollection;