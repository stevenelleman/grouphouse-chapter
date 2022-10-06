import React, {useState} from 'react';
// import Card from '@mui/material/Card'
// import { CardContent } from '@mui/material';
import {createStyles, Image, Card, Text, Group, Button} from '@mantine/core'
import {Carousel} from '@mantine/carousel';

import '../App.css';
import type {HouseInfo} from '../types'

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

export const Blurb = ({name, blurb, imagePaths, blurbWidth}: HouseInfo & {blurbWidth: number}) => {
    const {classes} = useStyles({param: undefined})

    const slides = imagePaths.map((image:string) => (
        <Carousel.Slide key={image}>

            <Image src={image}></Image>
        </Carousel.Slide>
    ))
    return <>

       <Card radius="md" withBorder p="xl" style={{width: 350}}>
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

      <Group position="apart" mt="lg">
        <Text weight={500} size="lg">
          {name}
        </Text>

        {/* <Group spacing={5}>
          <IconStar size={16} />
          <Text size="xs" weight={500}>
            4.78
          </Text>
        </Group> */}
      </Group>

      <Text size="sm" color="dimmed" mt="sm">
        {blurb}
      </Text>

      {/* <Group position="apart" mt="md">
        <div>
          <Text size="xl" span weight={500} className={classes.price}>
            397$
          </Text>
          <Text span size="sm" color="dimmed">
            {' '}
            / night
          </Text>
        </div>

        <Button radius="md">Book now</Button>
      </Group> */}
    </Card>
    </>;
}
