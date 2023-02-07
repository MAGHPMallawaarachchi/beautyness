import react, {useState} from 'react';
import styles from '../style';
import {features} from '../constants';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const FeatureCard = ({id, image, title, content}) => (
  <div className='flex-row'>
    <div className='flex flex-col gap-[26px]'>
      <img src={image} alt="" className='min-w-[330px] min-h-[253px]' />
      <h2 className='font-playfair_display font-bold text-dullBlack text-[26px] leading-[120%]'>{title}</h2>
      <p className={`${styles.paragraph} max-w-[330px]`}>{content}</p>
      <a href="" className='font-manrope uppercase text-[14px] leading-[125%] font-extrabold tracking-[0.12em] pb-[19px] pt-[18px] px-[18px] border-[2px] max-w-[180px] max-h-[55px] text-center border-dullBlue2'>read more</a>
    </div>
  </div>
)

const Features = () => (
  <section className={`sm:px-16 ${styles.paddingX} ${styles.paddingY} flex justify-center mx-4`}>
    <div className='md:flex hidden gap-[105px] flex-wrap justify-center'>
      {features.map((feature, index)=>(
        <FeatureCard key={feature.id}{...feature}/>
      ))}
    </div>

    <Swiper 
      className='flex flex-col md:hidden gap-[105px] items-center justify-center pb-12'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {features.map((feature, index)=>(
        <SwiperSlide>
          <FeatureCard key={feature.id}{...feature}/>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
)

export default Features