import HeroContent from "./HeroContent"
import HeroSwiper from "./HeroSwiper"
import styles from "../styles/hero.module.css"
import useFademet from "../hooks/useFademet"
import { useEffect } from "react"

export default function Hero() {
  const { carrusel, getCarrusel } = useFademet()

  useEffect(() => {
    getCarrusel()
  }, [])

  return (
    <main className={styles.hero} id="hero">
      <HeroContent />
      <HeroSwiper
        carrusel={carrusel}
      />
    </main>
  )
}