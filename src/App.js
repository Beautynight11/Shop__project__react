import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./components/Header/Header";
import AllModels from "./components/AllModels/AllModels";
import ModalWindow from "./components/ModalWindow/ModalWindow";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import './App.css';
import Footer from "./components/Footer/Footer";

function App() {
    const [count, setCount] = useState(0);
    const [isCart, setIsCart] = useState(false);
    const [cart, setCart] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);


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
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollClass);

        function handleScrollClass () {
            if (window.pageYOffset > 120) {
                document.getElementById('scrollToTop').classList.add('btnToTop--active')
            } else {
                document.getElementById('scrollToTop').classList.remove('btnToTop--active')
            }
        }

        return () => {
            window.removeEventListener('scroll', handleScrollClass);
        }
    })

    const returnToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
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
                <Footer/>
            </Router>
            {isCart && <ModalWindow
                closeWindow={() => setIsCart(false)}
                object={cart}
                isEmpty={isEmpty}
                deleteItem={deleteItem}
            />}
            <div id='scrollToTop' className='btnToTop' onClick={() => returnToTop()}/>
        </div>
    );
}

export default App;
