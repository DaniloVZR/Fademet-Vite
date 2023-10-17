import { useEffect } from "react";
import Coleccion from "../components/Coleccion"
import container from "../styles/container.module.css"

export default function Galeria() {

  useEffect(() => {
    document.title = "FADEMET - Galería"
  }, [])

  return (
    <div className={container.margin_nav}>
      <Coleccion />
    </div>

  )
}