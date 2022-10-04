import React from 'react';
import Blurb, {HouseInfo} from './Blurb'

import '../App.css';

type PropsType = {
    houses: HouseInfo[],
};

const Blurbs = ({houses}: PropsType) => {
    return <>
            {
                houses.map(({name, blurb, imagePath}: HouseInfo) =>
                  <>
                  <Blurb name={name} blurb={blurb} imagePath={imagePath}/>
                  <br/>
                  </>
                )
            }
    </>;
}

export default Blurbs