import React, {useEffect, useState} from 'react';
import Basket from "../Basket/Basket";
import { Link } from "react-router-dom";

import Select from "../Select/Select";
import Logo from "../Logo/Logo";

import './Header.css';

const Header = ({ count }) => {

    const select = ['For men', 'For women', 'For kids'];
    const params =['Payment', 'Delivery'];
    const [scroll, setScroll] = useState('header');

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        function handleScroll () {
            setScroll((window.pageYOffset > 40) ? 'header header--fixed' : 'header');
        }
    })


    return (
        <div className={scroll}>
            <div className='container'>
                <div className='header__menu'>
                    {select.map((item, index) => {
                        return <Select name={item} key={index * new Date()}/>
                    })}
                    <Link to='/' className='header__link'>
                        <Logo className='header__title' classNameImg='header__logoImg'/>
                    </Link>
                    <div className='header__params'>
                        {params.map((param, index) => {
                            return <div className='header__param' key={index* new Date()}>{param}</div>
                        })}
                    </div>
                    <Basket count={count}/>
                </div>
            </div>
        </div>
    );
};

export default Header;