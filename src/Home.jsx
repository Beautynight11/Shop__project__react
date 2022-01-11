import React from 'react';
import FirstScreen from "./components/FirstScreen/FirstScreen";
import SecondScreen from "./components/SecondScreen/SecondScreen";
import Collections from "./components/Collections/Collections";
import NewModels from "./components/NewModels/NewModels";
import Feedback from "./components/Feedback/Feedback";

import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <FirstScreen/>
            <SecondScreen/>
            <Collections/>
            <NewModels title='New Models'/>
            <Feedback/>
            <NewModels title='discounts up to 90%'/>
        </div>
    );
};

export default Home;