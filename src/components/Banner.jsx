import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './Banner.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default function Banner() {
    const slides = [
        {
          id: 1,
          image: "https://i.pinimg.com/474x/b6/08/af/b608affc2e826a12a1e34989c70aa3df.jpg",
          title: "Savor the Flavor of Every Bite",
          subtitle: "Step into a world where culinary passion meets impeccable taste. Indulge in a dining experience that brings together the freshest ingredients, exquisite flavors, and a warm, inviting ambiance.",
        },
        {
          id: 2,
          image: "https://i.pinimg.com/236x/1c/36/a8/1c36a83358084318eed118188b7378d2.jpg",
          title: "Join Our Culinary Family",
          subtitle: "Discover the joy of gathering around the table with friends and family. From our signature dishes to our chef's seasonal specials, every meal is crafted to create lasting memories.",
        },
        {
          id: 3,
          image: "https://i.pinimg.com/236x/5b/df/53/5bdf53e7ceb36073cc1886806183ac2a.jpg",
          title: "Celebrate Food, Life, and Togetherness",
          subtitle: "Immerse yourself in a celebration of flavors, aromas, and textures. Whether it’s a special occasion or a casual night out, we’re here to make every moment deliciously unforgettable.",
        },
      ];
  return (
    <>
      <Swiper
       
        navigation={true} 
        loop={true}   
        keyboard={true}
        pagination={{
            clickable: true,
          }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
           {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-[60vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex  ">
                <div className='flex flex-col justify-center items-start text-left text-white px-20 w-3/4'>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-sm md:text-xl">{slide.subtitle}</p>
                </div>
                <div>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
