import React from 'react';

import './Select.css'

const Select = ({ defaultName, className, list, onChange, error, ...props }) => {
   return (
       <div className='select'>
           <select
               className={`list ${!!error ? 'select--error' : ''} ${className}`}
               onChange={onChange}
               {...props}
           >
               {list.map((item, index) => (
                   <option
                       key={index}
                       value={item}
                   >
                       {item}
                   </option>
               ))
               }
           </select>
           {error && <div className='select__error'>{error}</div>}
       </div>
   )
};

export default Select;