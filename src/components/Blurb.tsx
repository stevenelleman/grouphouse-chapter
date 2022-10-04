import React, {useState} from 'react';
// import Card from '@mui/material/Card'
import { CardMedia, Card, CardContent, CardHeader, MobileStepper } from '@mui/material';
// import { CardContent } from '@mui/material';
import '../App.css';

export type HouseInfo = {
    name: string,
    blurb: string,
    imagePath: string,
    calendar_link?: string, // TODO: add a link type for validation
    application_link?: string,
}

type TBlurb = {
    house: HouseInfo,
    index: number,
};

const Blurb = ({name, blurb, imagePath}: HouseInfo) => {
    
    const [i, setI] = useState<number>(0)

    return <>

        {/* <MobileStepper */}
          {/* variant='text' */}
          {/* steps={imagePaths.length} */}
        {/* /> */}
        <Card sx={{maxWidth: 360}}>
            <CardHeader
                title={name}
            />
            <CardMedia
                component="img"
                height="200"
                image={imagePath}
            />
            <CardContent>
                {blurb}
            </CardContent>
        </Card>
    </>;
}

export default Blurb