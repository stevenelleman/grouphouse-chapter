import React from 'react';
// import Card from '@mui/material/Card'
// import { CardContent } from '@mui/material';
import {createStyles, Image, Card, Text} from '@mantine/core'
import {Carousel} from '@mantine/carousel';

import '../App.css';
import type {IBlurb} from '../types'

const useStyles = createStyles((theme:any, _params:any, getRef:any) => ({
    price: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  
    carousel: {
      '&:hover': {
        [`& .${getRef('carouselControls')}`]: {
          opacity: 1,
        },
      },
    },
  
    carouselControls: {
      ref: getRef('carouselControls'),
      transition: 'opacity 150ms ease',
      opacity: 0,
    },
  
    carouselIndicator: {
      width: 4,
      height: 4,
      transition: 'width 250ms ease',
  
      '&[data-active]': {
        width: 16,
      },
    },


  }));

export const Blurb = ({title, blurb, imagePaths, blurbWidth, calendar, housingApplication, contactLink, name}: IBlurb) => {
    const {classes} = useStyles({param: undefined})
    console.log(imagePaths)
    const slides = imagePaths.map((image:string) => (
        <Carousel.Slide key={image}>

            <Image src={`/houses/${name}/${image}`}></Image>
        </Carousel.Slide>
    ))
    return <>

       <Card radius="md" withBorder p="xl" style={{width: blurbWidth}}>
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
        </Carousel>
      </Card.Section>

      <div style={{display: 'flex', flexDirection: "column", alignItems: "start", margin: "auto"}}>
        <Text weight={500} size="lg">
          {title}
        </Text>

        
        { housingApplication && 
            <Text size={"md"}>
            <a href={housingApplication}>Housing Application</a>
        </Text>
        }
        { 
            calendar && <Text size='md'>
                <a href={calendar}>House Calendar</a>
            </Text>
        }

        {
            contactLink && <Text size='md'>
                <a href={contactLink}>Contact Us</a>
            </Text>
        }
      </div>

      <Text size="sm" color="dimmed" mt="sm">
        {blurb}
      </Text>

    </Card>
    </>;
}
