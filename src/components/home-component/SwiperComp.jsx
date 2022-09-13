import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import images from '../../assets/images';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './SwiperComp.css'

const imagesBlock = [
  {
    imgSrc: images.firstImg
  },
  {
   imgSrc: images.secondImg
  },
  {
   imgSrc: images.thirdImg
  },
  {
   imgSrc: images.fourthImg
  },
  {
   imgSrc: images.fifthImg
  },
  {
   imgSrc: images.sixthImg
  },
]

const SwiperComp = () => {
  return (
    <Swiper
    modules={[Pagination, Scrollbar, A11y, Autoplay]}
    loop={true}
    spaceBetween={50}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    slidesPerView={1}
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
      {
        imagesBlock.map((source, index) => {
          const { imgSrc } = source;
          return (
            <SwiperSlide key={index}>
              <img src={imgSrc} alt="samsung-S22"/>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}

export default SwiperComp