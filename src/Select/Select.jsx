import React, {useState} from 'react';

import './Select.css'

const Select = ({name}) => {
    const items = ['Shirts', 'Jeans', 'Shoes'];

    const [isList, setIsList] = useState(false);

   return (
       <div className='select'>
           <div className='content' onClick={() => setIsList(!isList)}>
               <div className='title'>{name}</div>
               <div className='arrow'/>
           </div>
           {isList &&
           <div className='list'>
               {items.map((item, index) => {
                   return <div className='item' key={index}>{item}</div>
               })
               }
           </div>
           }
       </div>
   )
};

export default Select;