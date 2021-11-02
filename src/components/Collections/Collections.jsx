import React from 'react';
import CollectionInfo from "../CollectionInfo/CollectionInfo";
import MenCollection from "../../Store/MenCollection";
import WomenCollection from "../../Store/WomenCollection";


import './Collections.css'


const Collections = ({ getCount, getParams }) => {

    return (
        <div className='collections'>
            <div className='container'>
                <div className='collections__content'>
                    {MenCollection.map((item) => {
                        return <CollectionInfo
                            name={item.name}
                            title={item.title}
                            collection={item.collection}
                            image={item.photo}
                            key={item.id * Date.now()}
                            getCount={getCount}
                            array={item.collections}
                            getParams={getParams}
                        />
                    })}
                    {WomenCollection.map((item) => {
                        return <CollectionInfo
                            name={item.name}
                            title={item.title}
                            collection={item.collection}
                            image={item.photo}
                            key={item.id * Date.now()}
                            getCount={getCount}
                            array={item.collections}
                            getParams={getParams}
                        />
                    })}
                </div>
            </div>
        </div>
    );
};

export default Collections;