import React, {useState} from 'react';

import './Select.css'

const Select = ({ name, classNameList, array, classNameSelectContent, classNameItem }) => {
    const [isList, setIsList] = useState(false);

   return (
       <div className='select'>
           <div className={`content ${classNameSelectContent}`} onClick={() => setIsList(!isList)}>
               <div className='title'>{name}</div>
               <div className='arrow'/>
           </div>
           {isList &&
           <div className={`list ${classNameList}`}>
               {array.map((item, index) => {
                   return <div className={`item ${classNameItem}`} key={index}>{item}</div>
               })
               }
           </div>
           }
       </div>
   )
};

export default Select;