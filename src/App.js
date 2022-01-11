import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./Home";
import Header from "./components/Header/Header";
import AllModels from "./components/AllModels/AllModels";
import ModalWindow from "./components/ModalWindow/ModalWindow";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Footer from "./components/Footer/Footer";

import './App.css';

function App() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const cart = useSelector(state => state.cart.list);

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
                <Header
                  count={cart.length}
                  openCart={() => setIsCartOpen(true)}
                />
                <ScrollToTop/>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/models'>
                        <AllModels />
                    </Route>
                </Switch>
                <Footer/>
            </Router>
            {isCartOpen && (
              <ModalWindow
                closeWindow={() => setIsCartOpen(false)}
                cart={cart}
              />
            )}
            <div id='scrollToTop' className='btnToTop' onClick={() => returnToTop()}/>
        </div>
    );
}

export default App;
