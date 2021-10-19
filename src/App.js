import Header from "./components/Header/Header";
import FirstScreen from "./components/FirstScreen/FirstScreen";
import SecondScreen from "./components/SecondScreen/SecondScreen";
import Collections from "./components/Collections/Collections";
import NewModels from "./components/NewModels/NewModels";

import './App.css';

function App() {
  return (
    <div className="App">
        <div className="container">
            <Header/>
            <FirstScreen/>
        </div>
        <SecondScreen/>
        <Collections/>
        <NewModels/>
    </div>
  );
}

export default App;
