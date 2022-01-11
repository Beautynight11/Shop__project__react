import React, { useState } from 'react';
import Button from "../UI/Button/Button";
import ActiveComponent from "../ActiveComponent/ActiveComponent";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../actions/cart";

import './Clothes.css'

const Clothes = ({ image, name, price, id }) => {
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();

  const addToCart = () => {
    setIsActive(true);
    dispatch(addToCartAction({ id, image, name, price }))
    setTimeout(() => setIsActive(false), 1000);
  };

  return (
    <div className="clothes">
      {isActive ? (
        <ActiveComponent text="Added to cart" />
      ) : (
        <div className="clothes__info">
          <div className="clothes__content">
            <div className="clothes__photo">
              <div className="clothes__img" style={{ backgroundImage: `url(${image})` }} />
            </div>
            <div className="clothes__name">
              {name}
              <div className="clothes__price">{price + '$'}</div>
            </div>
          </div>
          <Button title="Add" className="clothes__btn" onClick={addToCart} />
        </div>
      )}
    </div>
  );
};

export default Clothes;