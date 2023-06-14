import { useEffect, useState } from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import container from "../styles/container.module.css"
import section from "../styles/sections.module.css"
import styles from "../styles/coleccion.module.css"
import useFademet from "../hooks/useFademet";

export default function Coleccion({ coleccion }) {

  const { ocultarNav } = useFademet()

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [slideNumber]);

  const handleOpenModal = (i) => {
    setSlideNumber(i)
    setOpenModal(true)
    ocultarNav()
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    ocultarNav()
  };

  const prevSlide = () => {
    slideNumber === 0 ?
      setSlideNumber(coleccion.length - 1)
      : setSlideNumber(slideNumber - 1)
  };

  const nextSlide = () => {
    slideNumber + 1 === coleccion.length ?
      setSlideNumber(0)
      : setSlideNumber(slideNumber + 1)
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 37) {
      return prevSlide();
    } else if (event.keyCode === 39) {
      return nextSlide()
    } else if (event.keyCode === 27) {
      return handleCloseModal()
    }
  };

  return (
    <div className={styles.trabajos}>
      <div className="trabajos-wrapper m-snav animate__animated animate__fadeIn">
        {
          openModal &&
          <div className={styles.sliderWrap}>
            <div className={styles.btnClose} onClick={handleCloseModal}>
              <i className="fa-sharp fa-solid fa-circle-xmark fa-2x"></i>
            </div>
            <div className={styles.btnPrev} onClick={prevSlide}>
              <i className="fa-solid fa-circle-left fa-2x"></i>
            </div>
            <div className={styles.btnNext} onClick={nextSlide}>
              <i className="fa-solid fa-circle-right fa-2x"></i>
            </div>
            <div className={`${styles.fullScreenImage} animate__animated animate__fadeInDown`}>
              <div className={styles.fullScreenImage__container}>
                <img
                  src={coleccion[slideNumber]?.attributes.imagen.data.attributes.url}
                  alt={coleccion[slideNumber]?.attributes.titulo} />

                <footer className={styles.fullScreenImage__footer}>
                  {coleccion[slideNumber]?.attributes.titulo} - {coleccion[slideNumber].attributes.ubicacion}
                </footer>
              </div>
            </div>
          </div>
        }
        <div className={styles.trabajosContainer}>
          <div className={section.sectionTitle}>
            <h1>Galería</h1>
            <h3>Algunas fotografías tomadas de los trabajos realizados</h3>
          </div>
        </div>

        <div className={container.container}>
          <div className={styles.trabajos__galleryContainer}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1350: 4 }}>
              <Masonry gutter="15px">
                {coleccion.map((imagenes, i) => (
                  <img
                    key={i}
                    width={550}
                    height={300}
                    loading="lazy"
                    className={styles.coleccionImage}
                    src={imagenes.attributes.imagen.data.attributes.formats.large.url}
                    alt={imagenes.attributes.titulo}
                    onClick={() => handleOpenModal(i)}
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>

        </div>
      </div>
    </div>
  )
}