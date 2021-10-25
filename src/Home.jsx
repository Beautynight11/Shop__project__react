import React from 'react';
import FirstScreen from "./components/FirstScreen/FirstScreen";
import SecondScreen from "./components/SecondScreen/SecondScreen";
import Collections from "./components/Collections/Collections";
import NewModels from "./components/NewModels/NewModels";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";

import './Home.css'

const Home = ({ count, setCount }) => {
    return (
        <div className='home'>
            <FirstScreen/>
            <SecondScreen/>
            <Collections getCount={() => setCount(count + 1)}/>
            <NewModels title='New Models'/>
            <Feedback/>
            <NewModels title='discounts up to 90%'/>
            <Footer/>
        </div>
    );
};

export default Home;