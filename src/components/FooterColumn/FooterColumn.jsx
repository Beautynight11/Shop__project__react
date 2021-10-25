import React from 'react';
import FooterLinks from "../../Store/FooterLinks";

import './FooterColumn.css'

const FooterColumn = () => {
    return (
        <div className='footerColumn'>
            {FooterLinks.map(item => {
                return <div  key={item.id} className='footerColumn__content'>
                    <div className='footerColumn__title'>{item.title}</div>
                    {item.links.map(el => {
                    return <a
                        key={el}
                        href='/'
                        className='footerColumn__link'
                    >
                        {el}
                    </a>
                    })}
                </div>
            })}
        </div>
    );
};

export default FooterColumn;