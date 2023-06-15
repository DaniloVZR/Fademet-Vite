import BtnCotizacion from "./BtnCotizacion"
import { scrollTo } from "../helpers"
import styles from "../styles/heroContent.module.css"

export default function HeroContent() {
  return (
    <div className={styles.heroContent}>
      <div className={`${styles.heroInfo} animate__animated animate__fadeInLeft`}>
        <h1>Fademet</h1>
        <h3>"Soldando Sueños"</h3>
        <p>Somos una empresa domiciliada y creada en la ciudad de Medellín, con el fin de ofrecer productos y servicios metalmecánicos, estamos especializados en el diseño, fabricación y montaje de estructuras metálicas para el sector industrial y doméstico.</p>
      </div>

      <div className={`${styles.heroBtns} animate__animated animate__fadeInLeft`}>
        <a className={styles.heroButton} onClick={() => scrollTo('eligenos')}>¿Por qué Elegirnos?</a>
        <a className={styles.heroButton} onClick={() => scrollTo('servicios')}> Nuestros Servicios</a>
        <BtnCotizacion />
      </div>
    </div >
  )
}