import React from 'react';
import Button from "../../UI/Button/Button";
import ClothesCollection from "../ClothesCollection/ClothesCollection";

import './CollectionInfo.css';

const CollectionInfo = ({ name, title, collection, image, getCount, array, getParams }) => {

    // const [dress, setDress] = useState(clothes);

    // const removeItem = (array) => {
    //     setDress(dress.filter((el) => el.id !== array.id))
    // };

    return (
        <div className='collectionInfo'>
            <div className='collectionInfo__info'>
                <div className='collectionInfo__content'>
                    <div className='collectionInfo__title'><span>{name}</span> {title}</div>
                    <div className='collectionInfo__subtitle'>{collection}</div>
                    <Button className='collection__btn'/>
                </div>
                <div className='collectionInfo__image'>
                    <div className='collectionInfo__img' style={{ backgroundImage:`url(${image})` }}/>
                </div>
            </div>
            <ClothesCollection
                array={array}
                getCount={getCount}
                getParams={getParams}
            />
        </div>
    );
};

export default CollectionInfo;