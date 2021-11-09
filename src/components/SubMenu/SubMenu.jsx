import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './SubMenu.css';

const SubMenu = ({ title, list, linkClassName }) => {
    const [isContent, setIsContent] = useState(false);


    return (
        <div className='subMenu'>
            <div className='subMenu__container'>
                <div className='subMenu__title' onClick={() => setIsContent(!isContent)}>{title}</div>
                {isContent &&
                <div id='content' className='subMenu__content'>
                    {list.map((item, index) => (
                        <Link key={index} className={`subMenu__link ${linkClassName}`} to='/'>
                            <div className='subMenu__item' onClick={() => setIsContent(false)}>{item}</div>
                        </Link>
                    ))}
                </div>
                }
            </div>
        </div>
    );
};

export default SubMenu;