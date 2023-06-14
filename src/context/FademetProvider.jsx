import { useState, createContext, useEffect } from "react";

export const FademetContext = createContext();

export const FademetProvider = ({ children }) => {

  const [carrusel, setCarrusel] = useState([])
  const [coleccion, setColeccion] = useState([])
  const [proyectos, setProyectos] = useState([])
  const [proyecto, setProyecto] = useState([])
  const [hideNav, setHideNav] = useState(true)

  const fademetApi = import.meta.env.VITE_API

  const ocultarNav = () => {
    setHideNav(!hideNav)
  }

  useEffect(() => {
    getProyecto()
  }, [])

  const getCarrusel = async () => {
    try {
      const urlCarrusel = await fetch(`${fademetApi}/carrusel?populate=imagenes`)
      const { data: carruselApi } = await urlCarrusel.json()
      setCarrusel(carruselApi)
    } catch (error) {
      console.log(error);
    }
  }

  const getColeccion = async () => {
    try {
      const urlColeccion = await fetch(`${fademetApi}/coleccions?populate=imagen`)
      const { data: coleccionApi } = await urlColeccion.json()
      setColeccion(coleccionApi)
    } catch (error) {
      console.log(error);
    }
  }

  const getProyectos = async () => {
    try {
      const urlProyectos = await fetch(`${fademetApi}/proyectos?populate=fotos`)
      const { data: proyectosApi } = await urlProyectos.json()
      setProyectos(proyectosApi)
    } catch (error) {
      console.log(error);
    }
  }

  const getProyecto = async (url) => {
    try {
      const urlProyecto = await fetch(`${fademetApi}/proyectos?filters[url]=${url}&populate=fotos`)
      const { data: proyectoApi } = await urlProyecto.json()
      setProyecto(proyectoApi[0])
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <FademetContext.Provider
      value={{
        carrusel,
        getCarrusel,
        coleccion,
        getColeccion,
        proyectos,
        getProyectos,
        proyecto,
        getProyecto,
        hideNav,
        ocultarNav
      }}
    >
      {children}
    </FademetContext.Provider>)
}