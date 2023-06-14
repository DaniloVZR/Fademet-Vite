import { useEffect } from "react"
import ProyectoCard from "../components/ProyectoCard"
import useFademet from "../hooks/useFademet"
import styles from "../styles/proyectos.module.css"
import container from "../styles/container.module.css"
import section from "../styles/sections.module.css"

export default function Proyectos() {
  const { getProyectos, proyectos } = useFademet()

  useEffect(() => {
    document.title = "FADEMET - Proyectos"

    getProyectos()
  }, [])

  console.log(proyectos);

  return (
    <section className={`${container.container} ${container.margin_nav} ${styles.proyectos} animate__animated animate__fadeIn`}>
      <div className={section.sectionTitle}>
        <h1>Proyectos</h1>
        <h3>Estos fueron algunos de los proyectos realizados a nuestros clientes</h3>
      </div>
      <div className={styles.ProyectoBox}>
        {
          proyectos.map((proyecto) => (
            <ProyectoCard
              key={proyecto.attributes.url}
              proyecto={proyecto.attributes}
            />
          ))
        }
      </div>
    </section>
  );
};
