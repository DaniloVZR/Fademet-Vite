import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from "swiper/react"
import styles from "../styles/proyectoCard.module.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";

const ProyectoCard = ({ proyecto }) => {

  useEffect(() => {
    AOS.init({
      duration: 1000 // Duración de la animación
    });
  }, []);

  const { titulo, ubicacion, descripcion, fotos } = proyecto

  return (
    <div className={styles.ProyectoCard} data-aos="fade-up">
      <div className={styles.CardContent}>
        <h3>{titulo}</h3>
        <span><i className="fa-sharp fa-solid fa-location-dot fa-lg"></i>&nbsp;{ubicacion}</span>
        <p>{descripcion}</p>
      </div>

      <Swiper
        loop={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={`${styles.swiperImage} mySwiper`}
      >
        {fotos.data.map((foto) => (
          <SwiperSlide>
            <img
              src={foto.attributes.url}
              alt={titulo}
              className={styles.slideImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProyectoCard;