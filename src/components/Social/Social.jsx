import React from 'react';
import SocialStore from "../../constants/socialStore";


import './Social.css'
import SocialElement from "../SocialElement/SocialElement";

const Social = () => {
    return (
        <div className='social'>
            {SocialStore.map(item =>{
                return <div key={item.title} className='social__content'>
                    <div className='social__title'>{item.title}</div>
                    {item.links.map(el => {
                        return <SocialElement img={el.logo} name={el.name} key={el.name}/>
                    })}
                </div>
            })}
        </div>
    );
};

export default Social;