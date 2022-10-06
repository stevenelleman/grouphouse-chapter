import React, {useEffect, useState} from 'react';
import {Blurb} from './components/Blurb';
import {HouseInfo} from './types';
import {useWindowWidth} from '@react-hook/window-size'
import './App.css';

const App = () => {
  const width = useWindowWidth()

  const [blurbWidth, setBlurbWidth] = useState(350)
  const [blurbsPerRow, setBlurbsPerRow] = useState(1)

  const maxBlurbs = 4;

  useEffect(() => {
    if (width < 350) {
      setBlurbWidth(width)
    } 
  }, [width, setBlurbWidth])

  
  

  const defaultHouses: HouseInfo[] = [
    {
      name: "Yolohouse",
      blurb: "Yolo is great.",
      imagePaths: [1,2,3,4,5,6,7].map(i => `/houses/yolo/${i}.jpeg`)

    },
    
  ]
  const [houses, setHouses] = useState<any>(defaultHouses)
  const onClick = () => {
    setHouses((prevState:any) => [...prevState, defaultHouses[0]])
  }

  return <>
    <div className="app" style={{height: "100vh", display: 'flex', flexDirection:'row', flexWrap: 'wrap'}}>
    {
                houses.map(({name, blurb, imagePaths}: HouseInfo) =>
                  <>
                  <div style={{margin: 'auto', padding: '5px'}}>
                    <Blurb blurbWidth={blurbWidth} name={name} blurb={blurb} imagePaths={imagePaths}/>
                  
                  </div>
                    
                  </>
                )
            }
    </div>
    <button style={{position:'absolute', top:10, right:10}} onClick={onClick}>click to add</button>
  </>;
}

export default App;
