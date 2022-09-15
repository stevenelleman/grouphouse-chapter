import React, {useState} from 'react';
import Blurbs from './components/Blurbs';
import {HouseInfo} from './components/Blurb';

import './App.css';

const App = () => {
  const defaultHouses: HouseInfo[] = [
    {
      name: "Yolohouse",
      blurb: "Yolo is great.",
    },
    {
      name: "Casa Bonita",
      blurb: "We're a hacienda!",
    }
  ]
  const [houses, setHouses] = useState<any>(defaultHouses)
  const onClick = () => {
    setHouses((prevState:any) => [...prevState, defaultHouses[0]])
  }

  return <>
    <div className="app">
      <Blurbs houses={houses}/>
    </div>
    <button style={{position:'absolute', top:10, right:10}} onClick={onClick}>click to add</button>
  </>;
}

export default App;
