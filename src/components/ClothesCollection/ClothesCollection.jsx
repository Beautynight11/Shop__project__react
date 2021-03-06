import React from 'react';
import Clothes from "../Clothes/Clothes";

import './ClothesCollections.css'
// import ActiveComponent from "../ActiveComponent/ActiveComponent";

const ClothesCollection = ({ array, getCount, getParams }) => {

    return (
        <div className='clothesCollections'>
            {array.map((item, index) => {
                return <Clothes
                    key={index}
                    image={item.img}
                    name={item.name}
                    getCount={getCount}
                    item={item}
                    price={item.price}
                    getParams={getParams}
                    id={item.id}
                />
            })}
        </div>
    );
};

export default ClothesCollection;