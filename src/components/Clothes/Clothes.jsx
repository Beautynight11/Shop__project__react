import React from 'react';

import './Clothes.css'

const Clothes = ({image, name}) => {
    return (
        <div className='clothes'>
            <div className='clothes__info'>
                <div className='clothes__content'>
                    <div className='clothes__photo'>
                        <div className='clothes__img' style={{backgroundImage:`url(${image})`}}/>
                    </div>
                    <div className='clothes__name'>
                        {name}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clothes;