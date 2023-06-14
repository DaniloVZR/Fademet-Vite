import ContactForm from "./ContactForm"
import styles from "../styles/contact.module.css"
import section from "../styles/sections.module.css"

const Contact = () => {
  return (
    <section className={styles.Contactanos} id="contactanos">
      <div className={styles.Contactanos__container}>
        <div className={section.sectionTitle}>
          <h1>Contáctanos!</h1>
          <h3>Si deseas cotizar algún proyecto, no dudes en escribirnos o enviarnos un correo</h3>
        </div>
        <div className={styles.contactanos__content}>
          <ContactForm />
          <div className={styles.contactanos__medios}>
            <p>También puedes contactarnos a tráves de nuestras redes sociales o via celular:</p>
            <div className={styles.contactanos__medios_celrs}>
              <div>
                <p><strong>Cel:</strong> 314-7561960</p>
                <p><strong>Cel:</strong> 317-5030339</p>
              </div>
              <div className={styles.contactanos_social}>
                <a href="https://api.whatsapp.com/send/?phone=573147561960&text&type=phone_number&app_absent=0" target="_blank" className="footer-social__wpp">
                  <i className={`fa-brands fa-whatsapp fa-2x ${styles.contact_icon} ${styles.wpp}`}></i>
                </a>
                <a href="https://www.instagram.com/fademetmontajes/?hl=es" target="_blank" className="footer-social__ig">
                  <i className={`fa-brands fa-instagram fa-2x ${styles.contact_icon} ${styles.ig}`}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Contact;