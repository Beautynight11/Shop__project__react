import React, {useEffect, useState} from 'react';
import CartIcon from "../CartIcon/CartIcon";
import { Link } from "react-router-dom";


import SubMenu from "../SubMenu/SubMenu";
import Logo from "../Logo/Logo";

import './Header.css';

const select = ['For men', 'For women', 'For kids'];
const params =['Payment', 'Delivery'];
const items = ['Shirts', 'Jeans', 'Shoes'];

const Header = ({ count, openCart }) => {

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        function handleScroll () {
            if(window.pageYOffset > 40) {
                document.getElementById('headerMenu').classList.add('header--fixed');
            } else {
                document.getElementById('headerMenu').classList.remove('header--fixed');
            }
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    });


    return (
        <div id='headerMenu' className='header'>
            <div className='container'>
                <div className='header__menu'>
                    {select.map((item, index) => (
                        <SubMenu
                            key={index}
                            list={items}
                            title={item}
                            linkClassName='header__subMenu'
                        />
                    ))}
                    <Link to='/' className='header__link'>
                        <Logo className='header__title' classNameImg='header__logoImg'/>
                    </Link>
                    <div className='header__params'>
                        {params.map((param, index) => {
                            return <div className='header__param' key={index* new Date()}>{param}</div>
                        })}
                    </div>
                        <CartIcon count={count} openCart={openCart}/>
                </div>
            </div>
        </div>
    );
};

export default Header;