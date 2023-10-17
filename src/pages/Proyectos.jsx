import { useEffect } from "react"
import ProyectoCard from "../components/ProyectoCard"
import styles from "../styles/proyectos.module.css"
import container from "../styles/container.module.css"
import section from "../styles/sections.module.css"
import { proyectosArray } from "../helpers/imagesProyectos"

export default function Proyectos() {

  useEffect(() => {
    document.title = "FADEMET - Proyectos"
  }, [])

  return (
    <section className={`${container.container} ${container.margin_nav} ${styles.proyectos} animate__animated animate__fadeIn`}>
      <div className={section.sectionTitle}>
        <h1>Proyectos</h1>
        <h3>Estos fueron algunos de los proyectos realizados a nuestros clientes</h3>
      </div>
      <div className={styles.ProyectoBox}>
        {
          proyectosArray.map((proyecto) => (
            <ProyectoCard
              key={proyecto.id}
              proyecto={proyecto}
            />
          ))
        }
      </div>
    </section>
  );
};
