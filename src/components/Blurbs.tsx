import React from 'react';
import Blurb, {HouseInfo} from './Blurb'

import '../App.css';

type PropsType = {
    houses: HouseInfo[],
};

const Blurbs = ({houses}: PropsType) => {
    return <>
        <div className="blurbs">
            {
                houses.map((house, index) =>
                  <Blurb house={house} index={index}/>
                )
            }
        </div>
    </>;
}

export default Blurbs