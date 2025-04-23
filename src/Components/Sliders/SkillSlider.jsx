import React from 'react';
import CertificateData from '../../Data//SkillData/SkillsData'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";


// Import Swiper styles
import 'swiper/css';


const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
};


const CustomSlider = () => {
    
    const items = CertificateData.map((certificate) => (
        <div className="item" key={certificate.id} data-value={certificate.id}>
          <img 
            src={certificate.image} 
            alt='' 
            style={{ width: '100%', height: '400px', objectFit: 'contain' }}
          />
          <h3>{certificate.title}</h3>
        </div>
      ));
    return(


    <>
   <Swiper
    dir="rtl"
  spaceBetween={30}
  modules={[Autoplay]}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  loop={true}
  breakpoints={{
    320: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 5,
    },
  }}
>
  {CertificateData.map((certificate) => (
    <SwiperSlide
      className="item  mb-20 flex justify-center w-[100px] h-[100px]"
      key={certificate.id}
      data-value={certificate.id}
    >
      <img
        src={certificate.img}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
      <h3>{certificate.title}</h3>
    </SwiperSlide>
  ))}
</Swiper>

    
    </>
);

}
export default CustomSlider;