import { Link } from "react-router-dom"
import Logo from "./FademetLogo"
import container from "../styles/container.module.css"
import styles from "../styles/footer.module.css"
import { scrollToTop, scrollTo } from "../helpers"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={container.container}>
        <div className={styles.footer_content}>

          <div className={styles.logoContent}>
            <Logo />
            <p>
              Somos una empresa domiciliada y creada en la ciudad de Medellín, con el fin de ofrecer productos y servicios metalmecánicos, estamos especializados en el diseño, fabricación y montaje de estructuras metálicas para el sector industrial y doméstico.
            </p>
          </div>

          <div className={styles.footerInfo}>
            <div>
              <h3>Menú</h3>
              <nav className={styles.footerNav}>
                <Link onClick={scrollToTop} to="/">Inicio</Link>
                <Link onClick={scrollToTop} to="/Proyectos">Proyectos</Link>
                <Link onClick={scrollToTop} to="/Galería">Galería</Link>
                <Link onClick={() => scrollTo("about")} to="/">Nosotros</Link>
                <Link onClick={() => scrollTo("contactanos")} to="/">Contáctanos</Link>
              </nav>
            </div>

            <div>
              <h3>Horario de Atención</h3>
              <p><strong>Lunes a Viernes:</strong></p>
              <p>7:00 - 5:00 pm</p>
              <p><strong>Sábado:</strong></p>
              <p>8:00 - 12:00 pm</p>
              <p><strong>Domingos y Festivos:</strong></p>
              <p>Cerrado</p>
            </div>

            <div>
              <h3>Dirección</h3>
              <div>
                <p>Calle 61 A # 55 A 29</p>
                <p>Barrio Chagualo</p>
                <p>Medellín - Colombia</p>
              </div>
            </div>

            <div>
              <h3>Contacto</h3>
              <p><strong>Teléfono:</strong></p>
              <p>+57 314 756 1960 </p>
              <p>+57 317 503 0339 </p>
              <p><strong>Correo:</strong></p>
              <p className={styles.correo}>fademetasesorias@gmail.com </p>
              <div className={styles.socialMedia}>
                <a href="https://api.whatsapp.com/send/?phone=573147561960&text&type=phone_number&app_absent=0" target="_blank" className="footer-social-i wpp">
                  <i className="fa-brands fa-whatsapp fa-2x"></i>
                </a>
                <a href="https://www.instagram.com/fademetmontajes/?hl=es" target="_blank" className="footer-social-i ig">
                  <i className="fa-brands fa-instagram fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className={styles.copyright}>Todos los derechos reservados {new Date().getFullYear()}.</p>
      </div>

    </footer>
  )
}