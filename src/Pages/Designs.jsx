import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { IoIosArrowDropdownCircle } from "react-icons/io";



export default function Designs() {
  // Dynamically import all images in the folder
  const images = import.meta.glob('../assets/Designs/*.{jpg,jpeg,svg}', { eager: true });

  return (
    <>
    <div className="flex justify-center items-center">
         <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Object.values(images).map((img, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-row-2 flex-wrap gap-x-5 gap-y-8  justify-center items-center'>
            <img 
              src={img.default}
              alt={`img-${index}`}
             // Adjust styles as needed
            />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


      
     
    </div>
   
   </>
  );
}
