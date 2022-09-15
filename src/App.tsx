import React from 'react';
import Blurbs from './components/Blurbs';
import {HouseInfo} from './components/Blurb';

import './App.css';

const App = () => {
  const houses: HouseInfo[] = [
    {
      name: "Yolohouse",
      blurb: "Yolo is great.",
    },
    {
      name: "Casa Bonita",
      blurb: "We're a hacienda!",
    }
  ]

  return <>
    <div className="app">
      <Blurbs houses={houses}/>
    </div>
  </>;
}

export default App;
