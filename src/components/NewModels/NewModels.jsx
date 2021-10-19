import React from 'react';
import Model from "../Model/Model";
import ModelInfo from "../../Store/ModelInfo";
import Button from "../../UI/Button/Button";

import './NewModels.css'

const NewModels = () => {
    return (
        <div className='newModels'>
            <div className='container'>
                <div className='newModels__title'>New models</div>
                <div className='newModels__content'>
                    {ModelInfo.map((item, index) => {
                        return <Model key={index} title={item.title} price={item.price}/>
                    })}
                </div>
                <Button name='All models' clName='newModels__btn'/>
            </div>
        </div>
    );
};

export default NewModels;