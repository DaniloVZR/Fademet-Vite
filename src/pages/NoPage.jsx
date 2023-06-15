import styles from "../styles/noPage.module.css"
import container from "../styles/container.module.css"
import section from "../styles/sections.module.css"
import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function NoPage() {

  useEffect(() => {
    document.title = "FADEMET - Error 404"
  }, [])

  return (
    <div className={`${container.margin_nav} ${section.sectionTitle} ${styles.noPage}`}>
      <h1>ERROR 404 - Página no encontrada</h1>
      <p>Lo sentimos, pero la página que estás buscando no existe o se ha eliminado.</p>
      <Link to='/'>Volver al Inicio</Link>
    </div>
  )
}