import React from 'react';

import './Footer.css'
import Logo from "../Logo/Logo";
import FooterColumn from "../FooterColumn/FooterColumn";
import Social from "../Social/Social";
import { Link } from "react-router-dom";

const Footer = () => {
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus egestas elit, at eleifend elit ornare ut.'

    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer__container'>
                    <div className='footer__content'>
                        <Link to='/' className='footer__link'>
                            <Logo className='footer__logo' classNameImg='footer__logoImg'/>
                        </Link>
                        <div className='footer__text'>
                            {text}
                        </div>
                    </div>
                    <FooterColumn/>
                    <Social/>
                </div>
            </div>
        </div>
    );
};

export default Footer;