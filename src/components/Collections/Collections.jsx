import React from 'react';
import CollectionInfo from "../CollectionInfo/CollectionInfo";

//TODO dynamic pictures
import photo1 from '../../images/men.png'
import photo2 from '../../images/Women.png'

import './Collections.css'


const Collections = () => {
    const people = [
        {
            name: 'Men',
            title: 'collection',
            collection: 'Shoes, pullovers, costumes',
            photo: photo1
        },
        {
            name: 'Women',
            title: 'collection',
            collection: 'Shoes, pullovers, costumes',
            photo: photo2
        }
    ]

    return (
        <div className='collections'>
            <div className='container'>
                <div className='collections__content'>
                    {people.map((item, index) => {
                        return <CollectionInfo
                            name={item.name}
                            title={item.title}
                            collection={item.collection}
                            image={item.photo}
                            key={item.name}
                        />
                    })}
                </div>
            </div>
        </div>
    );
};

export default Collections;