import styles from "../styles/btnCotizacion.module.css"

export default function BtnCotizacion() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=573147561960&amp;text&amp;type=phone_number&amp;app_absent=0"
      target="_blank"
      className={styles.btnCotizacion}>
      Cotiza Con Nosotros &nbsp;
      <i className="fa-solid fa-pencil fa-bounce"></i>
    </a>
  )
}