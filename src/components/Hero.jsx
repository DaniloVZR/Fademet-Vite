import HeroContent from "./HeroContent"
import HeroSwiper from "./HeroSwiper"
import styles from "../styles/hero.module.css"

export default function Hero() {

  return (
    <main className={styles.hero} id="hero">
      <HeroContent />
      <HeroSwiper

      />
    </main>
  )
}