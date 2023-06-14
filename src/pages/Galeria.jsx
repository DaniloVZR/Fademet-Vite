import { useEffect } from "react";
import Coleccion from "../components/Coleccion"
import useFademet from "../hooks/useFademet";
import container from "../styles/container.module.css"

export default function Galeria() {
  const { coleccion, getColeccion } = useFademet()

  useEffect(() => {
    document.title = "FADEMET - Galería"

    getColeccion()
  }, [])

  return (
    <div className={container.margin_nav}>
      <Coleccion
        coleccion={coleccion}
      />
    </div>

  )
}