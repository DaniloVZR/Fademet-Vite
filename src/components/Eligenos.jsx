import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import section from "../styles/sections.module.css"
import styles from "../styles/eligenos.module.css"

export default function Eligenos() {
  useEffect(() => {
    AOS.init({
      duration: 1000 // Duración de la animación
    });
  }, []);

  return (
    <section className={styles.eligenos} id="eligenos">
      <div className={styles.eligenos__container}>
        <div className={section.sectionTitle}>
          <h1>¿Por qué Elegirnos?</h1>
        </div>
        <div className={styles.eligenos__panels} data-aos="fade-up">
          <p className={styles.eligenos__panels_element}><i className="fa-sharp fa-solid fa-star fa-beat" />&nbsp; Experiencia y compromiso con la calidad en cada proyecto.</p>
          <p className={styles.eligenos__panels_element}><i className="fa-sharp fa-solid fa-star fa-beat" />&nbsp; Soluciones personalizadas para satisfacer las necesidades únicas de cada cliente.</p>
          <p className={styles.eligenos__panels_element}><i className="fa-sharp fa-solid fa-star fa-beat" />&nbsp; Precios competitivos y atención al cliente excepcional.</p>
        </div >
      </div >

      <div className={styles.eligenos__photo}>
        <div className={styles.eligenos__photo_overlay}>
          <div className={styles.eligenos__photo_text}>
            <div className={styles.eligenos__element} data-aos="fade-up">
              <i className="fa-sharp fa-solid fa-pen fa-3x"></i>
              <h4>Diseño</h4>
              <p>Llevamos tus ideas a la realidad</p>
            </div>
            <div className={styles.eligenos__element} data-aos="fade-up">
              <i className="fa-solid fa-screwdriver-wrench fa-3x"></i>
              <h4>Fabricación</h4>
              <p>Elaboramos con amor y dedicación</p>
            </div>
            <div className={styles.eligenos__element} data-aos="fade-up">
              <i className="fa-sharp fa-solid fa-phone fa-3x"></i>
              <h4>Asesoría</h4>
              <p>Te orientamos en la elaboración de tu proyecto</p>
            </div>
            <div className={styles.eligenos__element} data-aos="fade-up">
              <i className="fa-solid fa-helmet-safety fa-3x"></i>
              <h4>Reparación</h4>
              <p>Restauramos tus estructuras metálicas</p>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}