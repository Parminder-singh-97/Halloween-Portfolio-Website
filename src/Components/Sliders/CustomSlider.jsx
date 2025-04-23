import React from 'react';
import CertificateData from '../../Data/cerificateData/CerificateData'
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
    // <>
    // <AliceCarousel
    //     mouseTracking
    //     disableButtonsControls
    //     disableDotsControls
    //     disableSlideInfo
    //     autoPlay
    //     autoPlayInterval={3000}
    //     infinite
    //     items={items}
    //     responsive={responsive}
    //     controlsStrategy="alternate"
    // />
    
    // </>

    <>
   <Swiper
  spaceBetween={30}
  modules={[Autoplay]}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  loop={true}
  breakpoints={{
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }}
>
  {CertificateData.map((certificate) => (
    <SwiperSlide
      className="item"
      key={certificate.id}
      data-value={certificate.id}
    >
      <img
        src={certificate.image}
        alt=""
        style={{ width: "100%", height: "400px", objectFit: "contain" }}
      />
      <h3>{certificate.title}</h3>
    </SwiperSlide>
  ))}
</Swiper>

    
    </>
);

}
export default CustomSlider;