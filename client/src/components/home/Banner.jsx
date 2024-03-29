import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {styled} from '@mui/material'
import { bannerData } from '../../constants/data';

const Image = styled('img')(({theme}) => ({
  width: '100%',
  height: 280,
  [theme.breakpoints.down('md')] :{
    objectFit: 'cover',
    height: 180,
  }
}));
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Banner = () => {
  return (
    <Carousel 
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={3000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    dotListClass="custom-dot-list-style"
    >
      {
        bannerData.map(data =>(
          <Image src={data.url} alt="banner" />
        ))
      }
    </Carousel>
  )
}

export default Banner
