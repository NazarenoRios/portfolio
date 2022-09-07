import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Juana Perez',
    review: 'I made this as an example to add to my portfolio in the future'
  },
  {
    avatar: AVTR2,
    name: 'Juan Perez',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae velit corporis eius qui aut quasi laboriosam! Facere ipsa veniam ipsam fugit eligendi voluptates, porro quidem voluptatem nam provident omnis voluptate.'
  },
  {
    avatar: AVTR3,
    name: 'Juan Carlos Perez',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae velit corporis eius qui aut quasi laboriosam! Facere ipsa veniam ipsam fugit eligendi voluptates, porro quidem voluptatem nam provident omnis voluptate.'
  },
  {
    avatar: AVTR4,
    name: 'Juana Carla Perez',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae velit corporis eius qui aut quasi laboriosam! Facere ipsa veniam ipsam fugit eligendi voluptates, porro quidem voluptatem nam provident omnis voluptate.'
  }
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review about me</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review},index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="person__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className='person__name'>{name}</h5>
                <small className='person__review'> {review} </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials

