import React, { useState } from 'react';
import CartWindow from "../CartWindow/CartWindow";
import Checkout from "../Checkout/Checkout";

import './ModalWindow.css'

const ModalWindow = ({ closeWindow, object, isEmpty, deleteItem }) => {
    const [checkout, setCheckout] = useState(false)

    const goToCheckout = () => (
        setCheckout(true)
    )

    return (
        <div className='modalWindow' onClick={closeWindow}>
            {!checkout && <CartWindow
                object={object}
                closeWindow={closeWindow}
                goToCheckout={goToCheckout}
                isEmpty={isEmpty}
                deleteItem={deleteItem}
            />}
            {checkout && <Checkout/>}
        </div>
    );
};

export default ModalWindow;