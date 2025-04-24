// import React from 'react';

// import CertificateData from '../../Data//SkillData/SkillsData'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from "swiper/modules";


// // Import Swiper styles
// import 'swiper/css';


// const responsive = {
//     0: { items: 1 },
//     568: { items: 1 },
//     1024: { items: 1 },
// };


// const CustomSlider = () => {
    
//     const items = CertificateData.map((certificate) => (
//         <div className="item" key={certificate.id} data-value={certificate.id}>
//           <img 
//             src={certificate.image} 
//             alt='' 
//             style={{ width: '100%', height: '400px', objectFit: 'contain' }}
//           />
//           <h3>{certificate.title}</h3>
//         </div>
//       ));
//     return(


//     <>
//    <Swiper
//     dir="rtl"
//   spaceBetween={30}
//   modules={[Autoplay]}
//   autoplay={{
//     delay: 3000,
//     disableOnInteraction: false,
//   }}
//   loop={true}
//   breakpoints={{
//     320: {
//       slidesPerView: 4,
//     },
//     768: {
//       slidesPerView: 5,
//     },
//     1024: {
//       slidesPerView: 5,
//     },
//   }}
// >
//   {CertificateData.map((certificate) => (
//     <SwiperSlide
//       className="item  mb-20 flex justify-center w-[100px] h-[100px]"
//       key={certificate.id}
//       data-value={certificate.id}
//     >
//       <img
//         src={certificate.img}
//         alt=""
//         style={{ width: "100%", height: "100%", objectFit: "contain" }}
//       />
//       <h3>{certificate.title}</h3>
//     </SwiperSlide>
//   ))}
// </Swiper>

    
//     </>
// );

// }
// export default CustomSlider;



import React from 'react';
import CertificateData from '../../Data/SkillData/SkillsData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const CustomSlider = () => {
  return (
    <section className="py-10 bg-black text-white">
      <h1 className="text-center text-3xl font-bold text-orange-500 mb-8 spooky-font">
        ⚡ My Skills ⚡
      </h1>

      <Swiper
        dir="rtl"
        spaceBetween={30}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        className="px-4"
      >
        {CertificateData.map((certificate) => (
          <SwiperSlide
            key={certificate.id}
            className="flex flex-col items-center justify-center w-[100px] h-[100px] hover:scale-110 transition-transform duration-300"
          >
            <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center shadow-md shadow-orange-500 p-2">
              <img
                src={certificate.img}
                alt={certificate.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-sm text-center mt-2 text-orange-200 font-semibold">
              {certificate.title}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CustomSlider;
