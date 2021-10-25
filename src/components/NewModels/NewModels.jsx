import React from 'react';
import { Link } from "react-router-dom";
import Model from "../Model/Model";
import ModelInfo from "../../Store/ModelInfo";

import './NewModels.css'

const NewModels = ({title}) => {

    return (
        <div className='newModels'>
            <div className='container'>
                <div className='newModels__title'>{title}</div>
                <div className='newModels__content'>
                    {ModelInfo.map((item, index) => {
                        return <Model key={index} title={item.title} price={item.price}/>
                    })}
                </div>
                <Link to='/models' className='newModels__btn'>
                    all models
                    {/*<Button name='All models' clName='newModels__btn'/>*/}
                </Link>
            </div>
        </div>
    );
};

export default NewModels;