import React, {useEffect, useState} from 'react';
import {Blurb} from './components/Blurb';
import {HouseInfo} from './types';
import {useWindowWidth} from '@react-hook/window-size'
import './App.css';
import houses from './data/db.json'

const App = () => {
  const width = useWindowWidth()

  const [blurbWidth, setBlurbWidth] = useState(350)

  useEffect(() => {
    if (width < 350) {
      setBlurbWidth(width)
    } 
  }, [width, setBlurbWidth])

  
  


  return <>
    <div className="app" style={{height: "100vh", display: 'flex', flexDirection:'row', flexWrap: 'wrap'}}>
    {
                Object.entries(houses).map(([name, house]: [string, HouseInfo]) => {
                  const {title, blurb, imagePaths, housingApplication, calendar, contactLink } = house
                  console.log(house)
                  if (house !== undefined) {
                    return <div key={`${title}-blurb`} style={{margin: 'auto', padding: '5px'}}>
                    <Blurb name={name} blurbWidth={blurbWidth} title={title} blurb={blurb} imagePaths={imagePaths} housingApplication={housingApplication} calendar={calendar} contactLink={contactLink}/>
                  
                  </div>
                  }
                })
            }
    </div>
  </>;
}

export default App;
