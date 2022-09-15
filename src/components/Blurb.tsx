import React from 'react';

import '../App.css';

export type HouseInfo = {
    name: string,
    blurb: string,
    calendar_link?: string, // TODO: add a link type for validation
    application_link?: string,
}

type PropsType = {
    house: HouseInfo,
    index: number,
};

const Blurb = ({house}: PropsType) => {
    return <>
        <div className="blurb">
            <div className="blurb-title">
               {house.name}
            </div>
            <div className="blurb-content">
                {house.blurb}
            </div>
        </div>
    </>;
}

export default Blurb