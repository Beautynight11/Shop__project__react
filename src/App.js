import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./components/Header/Header";
import AllModels from "./components/AllModels/AllModels";
import ModalWindow from "./components/ModalWindow/ModalWindow";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const [isCart, setIsCart] = useState(false);
    const [cart, setCart] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);
    const [scrollButton, setScrollButton] = useState('btnToTop')


    const getParams = (id, image, name, price) => {
        setCart([...cart,
                {
                    id: id,
                    name: name,
                    price: price,
                    image: image
                }
            ]
        )
        setIsEmpty(true);
    };

    const deleteItem = (item) => {
        setCart(cart.filter(elem => item.id !== elem.id));
        setCount(count - 1);
        if (cart.length === 1) {
            setIsEmpty(false);
        }
        console.log(cart.length, count)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollClass);

        function handleScrollClass () {
            setScrollButton((window.pageYOffset > 120) ? 'btnToTop btnToTop--active' : 'btnToTop');
        }
    })

    const returnToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }


    return (
        <div className="App">
            <Router>
                <Header count={count} openCart={() => setIsCart(true)}/>
                <ScrollToTop/>
                <Switch>
                    <Route exact path='/'>
                        <Home
                            getCount={() => setCount(count + 1)}
                            getParams={getParams}
                        />
                    </Route>
                    <Route path='/models'>
                        <AllModels/>
                    </Route>
                </Switch>
            </Router>
            {isCart && <ModalWindow
                closeWindow={() => setIsCart(false)}
                object={cart}
                isEmpty={isEmpty}
                deleteItem={deleteItem}
            />}
            <div className={scrollButton} onClick={() => returnToTop()}/>
        </div>
    );
}

export default App;
