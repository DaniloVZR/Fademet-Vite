// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import styles from "../styles/heroSwiper.module.css"

export default function HeroSwiper({ carrusel }) {
  const ImagenesArray = carrusel?.attributes?.imagenes?.data

  return (
    <Swiper
      loop={true}
      navigation={{
        nextEl: '.swiper-button-next',
        nextEl: '.swiper-button-next',
      }}
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false
      }}
      className={`${styles.carousel} animate__animated animate__fadeIn`}
    >
      {
        ImagenesArray?.map(imagen => (
          <SwiperSlide key={imagen?.id}>
            <img
              className={styles.carousel_img}
              src={imagen?.attributes?.url}
              alt={imagen?.attributes?.name}
              width={1200}
              height={1000}
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}
