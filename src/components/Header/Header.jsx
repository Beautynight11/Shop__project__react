import React from 'react';

import Select from "../Select/Select";
import Logo from "../Logo/Logo";

import './Header.css';

const Header = () => {

    const select = ['For men', 'For women', 'For kids'];
    const params =['Payment', 'Delivery'];

    return (
        <div className='header'>
            <div className='header__menu'>
                {select.map((item, index) => {
                        return <Select name={item} key={index * new Date()}/>
                    })}
                <Logo/>
                <div className='header__params'>
                    {params.map((param, index) => {
                       return <div className='header__param' key={index* new Date()}>{param}</div>
                    })}
                </div>
                <div className='header__basket'>
                    <div className='header__image'>
                        <div className='header__img'/>
                    </div>
                    <div className='header__amount'>
                        <div className='header__number'>9</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;