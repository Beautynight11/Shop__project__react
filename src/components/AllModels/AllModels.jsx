import React from 'react';
import ModelInfo from "../../constants/modelInfo";
import Model from "../Model/Model";

import './AllModels.css'


const AllModels = () => {
    return (
        <div className='models'>
            <div className='container'>
                <div className='models__title'>All models</div>
                <div className='models__info'>
                    {ModelInfo.map((item, index) => {
                        return <Model key={index} title={item.title} price={item.price}/>
                    })}
                    {ModelInfo.map((item, index) => {
                        return <Model key={index} title={item.title} price={item.price}/>
                    })}
                    {ModelInfo.map((item, index) => {
                        return <Model key={index} title={item.title} price={item.price}/>
                    })}
                    {ModelInfo.map((item, index) => {
                        return <Model key={index} title={item.title} price={item.price}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default AllModels;