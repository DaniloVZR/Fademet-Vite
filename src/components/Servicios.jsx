import { servicesList } from "../helpers"
import { useEffect } from "react"
import BtnCotizacion from "./BtnCotizacion"
import AOS from "aos"
import 'aos/dist/aos.css'
import section from "../styles/sections.module.css"
import styles from "../styles/servicios.module.css"

export default function Servicios() {
  useEffect(() => {
    AOS.init({
      duration: 1000 // Duración de la animación
    });
  }, []);

  return (
    <section className={styles.servicios} id="servicios">
      <div className={styles.servicios__photo}>
        <div className={styles.servicios__photo_overlay}>
          <div className={styles.servicios__photo_text}>
            <h1 data-aos="fade-up">
              Diseño,<br />
              fabricación <br />
              y montaje <br />
              de estructuras <br />
              metálicas.
            </h1>
            <BtnCotizacion />
          </div>
        </div>
      </div>
      <div className={styles.servicios_container}>
        <div className={section.sectionTitle}>
          <h1>Nuestros Servicios</h1>
          <h3>En Fademet contamos con los siguientes servicios:</h3>
        </div>
        <div className={styles.servicios_content}>
          <ul data-aos="fade-up">
            {servicesList.slice(0, Math.ceil(servicesList.length / 2)).map((service, i) => {
              return (
                <li key={i} className={styles.servicio_option}>{service}</li>
              )
            })}
          </ul>
          <ul data-aos="fade-up">
            {servicesList.slice(Math.ceil(servicesList.length / 2), servicesList.length).map((service, i) => {
              return (
                <li key={i} className={styles.servicio_option}>{service}</li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}