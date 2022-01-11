import React, { useState } from 'react';
import CartWindow from "../CartWindow/CartWindow";
import Checkout from "../Checkout/Checkout";

import './ModalWindow.css'

const ModalWindow = ({ closeWindow, cart }) => {
    const [checkout, setCheckout] = useState(false);
    const [isSend, setIsSend] = useState(false);

    const goToCheckout = () => (
        setCheckout(true)
    )

    return (
        <div className='modalWindow' onClick={closeWindow}>
            {!checkout && <CartWindow
                cart={cart}
                closeWindow={closeWindow}
                goToCheckout={goToCheckout}
            />}
            {(checkout && !isSend)&& <Checkout setIsSend={setIsSend}/>}
            {isSend && <div className='modalWindow__end'>Thank you!</div> }
        </div>
    );
};

export default ModalWindow;