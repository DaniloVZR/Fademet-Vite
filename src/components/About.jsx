import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import styles from "../styles/about.module.css"
import section from "../styles/sections.module.css"

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <section className={styles.about} id="about">
      <div className={styles.about__container}>
        <div className={styles.about__mv}>
          <div className={`${styles.aboutSection} ${section.sectionTitle}`} data-aos="flip-up">
            <h1>Misión<i className="fa-regular fa-compass"></i></h1>
            <p>El objetivo de FADEMET, es suministrar soluciones integrales a las necesidades de cada cliente logrando desarrollar, producir y distribuir nuestros servicios metalmecánicos de alta calidad, para ello hemos desarrollado un gran y capacitado equipo de trabajo con la finalidad de brindar la mejor y más completa asesoría, logrando la satisfacción del cliente y la mejora continua de nuestros propios productos, llegando de esta manera a ser más competitivos en el mercado.</p>
          </div>
          <div className={`${styles.aboutSection} ${section.sectionTitle}`} data-aos="flip-up">
            <h1>Visión<i className="fa-sharp fa-regular fa-eye"></i></h1>
            <p>En FADEMET para el 2025 pretendemos consolidar nuestra empresa como líder en el mercado y sector metalmecánico, brindando por medio de  nuestros productos confianza, calidad, cumplimiento en tiempos de entrega,  logrando de esta forma la satisfacción de todos nuestros clientes y  empleados.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
