// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper'
// Import Carrusel Images
import { carruselArray } from '../helpers/imagesCarrusel'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import styles from "../styles/heroSwiper.module.css"

export default function HeroSwiper() {

  return (
    <Swiper
      loop={true}
      navigation={{
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
        carruselArray?.map(foto => (
          <SwiperSlide key={foto?.id}>
            <img
              className={styles.carousel_img}
              src={foto?.imagen}
              alt="Imagen Carrusel"
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}
