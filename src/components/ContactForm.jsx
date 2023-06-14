import { useState } from "react"
import emailjs from "@emailjs/browser"
import styles from "../styles/contact.module.css"

const ContactForm = () => {

  const [contactForm, setcontactForm] = useState({
    name: "",
    subject: "",
    email: "",
    celular: "",
    message: "",
  });

  const [messageForm, setMessageForm] = useState("");
  const [messageDone, setMessageDone] = useState(false)

  const handleContactForm = (e) => {
    const { name, value } = e.target;
    setcontactForm({
      ...contactForm, [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contactForm.name === "") return setMessageForm("Debes escribir tu nombre")
    if (contactForm.subject === "") return setMessageForm("Debes escribir un asunto")
    if (contactForm.email === "") return setMessageForm("Debes escribir tu correo electrónico")
    if (contactForm.celular === "" || contactForm.celular.length <= 9) return setMessageForm("Debes escribir tu número celular")
    if (!/^[0-9]+$/.test(contactForm.celular)) setMessageForm("El número celular solo debe contener números")
    if (contactForm.message === "") return setMessageForm("El correo debe contener un mensaje")

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_PUBLIC_KEY
    )
      .then(function (response) {
        console.log('success', response.status, response.text);
        setMessageForm("El mensaje se ha enviado correctamente");
        setMessageDone(true)
        setcontactForm({
          name: "",
          subject: "",
          email: "",
          celular: "",
          message: "",
        })

      }), function (error) {
        console.log('failed', error);
      }

    setTimeout(() => {
      setMessageForm("")
      setMessageDone(false)
    }, 5000)
  };


  return (
    <form className={styles.contact__form} onSubmit={handleSubmit}>
      {
        messageForm.length ?
          <div className={`${styles.form__error} ${messageDone ? styles.done : styles.undone}`}>
            {messageForm}
          </div> : null
      }
      <div className={styles.form__section}>
        <label htmlFor="subject">Nombre:</label>
        <input
          type="text"
          className={styles.form__input}
          name="name"
          value={contactForm.name}
          onChange={handleContactForm}
        />
      </div>

      <div className={styles.form__section}>
        <label htmlFor="subject">Asunto:</label>
        <input
          type="text"
          className={styles.form__input}
          name="subject"
          value={contactForm.subject}
          onChange={handleContactForm}
        />
      </div>

      <div className={styles.form__section}>
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          name="email"
          className={styles.form__input}
          value={contactForm.email}
          onChange={handleContactForm}
        />
      </div>

      <div className={styles.form__section}>
        <label htmlFor="celular">Número Celular:</label>
        <input
          type="text"
          name="celular"
          className={styles.form__input}
          value={contactForm.celular}
          onChange={handleContactForm}
          min={0}
        />
      </div>

      <div className={styles.form__section}>
        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          className={`${styles.form__input} ${styles.textarea_input}`}
          value={contactForm.message}
          onChange={handleContactForm}
        />
      </div>

      <div className={styles.form__section}>
        <button type="submit" className={styles.form__submit}>Enviar <i className="fa-solid fa-paper-plane iconplane"></i></button>
      </div>
    </form>
  )
}

export default ContactForm;