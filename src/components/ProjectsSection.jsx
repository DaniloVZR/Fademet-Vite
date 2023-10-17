import { Link } from 'react-router-dom'
import styles from "../styles/projectsSection.module.css"
import section from "../styles/sections.module.css"
import { proyectosArray } from '../helpers/imagesProyectos';

export default function ProjectsSection() {

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className={styles.ProjHome} id='ProjHome'>
      <div className={`${section.sectionTitle} ${styles.ProjHomeTitle}`}>
        <h1>Proyectos</h1>
        <h3>Estos fueron algunos de los proyectos que hicimos realidad a nuestros clientes</h3>
      </div>
      <div className={styles.ProjHome__cards__container}>
        {
          proyectosArray.slice(0, 3).map((proyecto) => (
            <Link
              onClick={handleClick}
              className={styles.ProjLink}
              to={`/Proyectos`}
              key={proyecto.id}
            >
              <section className={styles.ProjHome__card}>
                <div className={styles.ProjImg}>
                  <div className={styles.ProjHome__img_overlayer} />
                  <img
                    src={proyecto.imagenes[0]}
                    alt={proyecto.titulo}
                  />
                  <footer className={styles.ProjHome__imgText}>
                    <div>
                      <h4>{proyecto.titulo}</h4>
                      <p><i className="fa-sharp fa-solid fa-location-dot fa-lg"></i>&nbsp;
                        <span>{proyecto.ubicacion}</span></p>
                    </div>
                  </footer>
                </div>
              </section>
            </Link>
          ))
        }
      </div>
    </section>
  );
}