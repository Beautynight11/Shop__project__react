import React from 'react';
import CollectionInfo from "../CollectionInfo/CollectionInfo";
import { MenCollections as men } from "../../constants/clothesCollections";
import { WomenCollections as women } from "../../constants/clothesCollections";


import './Collections.css'


const Collections = ({ getCount }) => {

    return (
        <div className='collections'>
            <div className='container'>
                <div className='collections__content'>
                    {men.map((item) => {
                        return <CollectionInfo
                            name={item.name}
                            title={item.title}
                            collection={item.collection}
                            image={item.photo}
                            key={item.id * Date.now()}
                            getCount={getCount}
                            array={item.collections}
                        />
                    })}
                    {women.map((item) => {
                        return <CollectionInfo
                            name={item.name}
                            title={item.title}
                            collection={item.collection}
                            image={item.photo}
                            key={item.id * Date.now()}
                            getCount={getCount}
                            array={item.collections}
                        />
                    })}
                </div>
            </div>
        </div>
    );
};

export default Collections;