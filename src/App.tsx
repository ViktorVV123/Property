import React from 'react';
import './App.css';
import {Main} from "./Components/Main/Main";
import {Menu} from "./Components/Menu/Menu";
import {PanelOne} from "./Components/PanelOne/PanelOne";
import {Footer} from "./Components/Footer/Footer";


function App() {
  return (

    <div >
        <Menu/>
        <PanelOne/>
<Main/>
        <Footer/>
    </div>

  );
}

export default App;
