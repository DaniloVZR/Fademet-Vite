import { useState } from "react";
import { Link } from "react-router-dom";
import { scrollToTop, scrollTo } from "../helpers";
import Logo from "./FademetLogo";
import container from "../styles/container.module.css"
import flex from "../styles/flex.module.css"
import styles from "../styles/header.module.css"
import useFademet from "../hooks/useFademet";

const Header = () => {
  const [menu, setMenu] = useState(false)
  const { hideNav } = useFademet()

  const closeMenuAndScroll = () => {
    setMenu(false);
    scrollToTop();
  }

  return (
    <header className={`${styles.header} ${hideNav ? styles.headerShow : styles.headerHidden}`}>
      <div className={`${container.container} ${flex.flexbox}`}>
        <Logo />

        <nav className={styles.nav}>
          <Link onClick={scrollToTop} to="/">Inicio</Link>
          <Link onClick={scrollToTop} to="/Proyectos">Proyectos</Link>
          <Link onClick={scrollToTop} to="/Galería">Galería</Link>
          <Link onClick={() => scrollTo("about")} to="/">Nosotros</Link>
          <Link onClick={() => scrollTo("contactanos")} to="/">Contáctanos</Link>
        </nav>

        <div
          className={styles.responsive}
          onClick={() => setMenu(prevState => !prevState)}
        >
          {menu ? <i className="fa-solid fa-x fa-2xl"></i> : <i className="fa-solid fa-bars fa-2xl"></i>}
        </div>

        {menu && (
          <nav className={`${styles.menu_nav} animate__animated animate__slideInRight`}>
            <ul>
              <li>
                <Link
                  onClick={closeMenuAndScroll}
                  to="/"
                >Inicio</Link>
              </li>
              <li>
                <Link onClick={closeMenuAndScroll} to="/Proyectos">Proyectos</Link>
              </li>
              <li>
                <Link onClick={closeMenuAndScroll} to="/Galería">Galería</Link>
              </li>
              <li>
                <Link onClick={() => {
                  scrollTo("about"),
                    setMenu(prevState => !prevState)
                }
                } to="/">Nosotros</Link>
              </li>
              <li>
                <Link onClick={() => {
                  scrollTo("contactanos"),
                    setMenu(prevState => !prevState)
                }} to="/">Contáctanos</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;