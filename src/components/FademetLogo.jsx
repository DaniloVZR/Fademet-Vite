import { Link } from "react-router-dom";
import imgLogo from "../assets/img/logo.webp"
import { scrollToTop } from "../helpers";
import styles from "../styles/header.module.css"

const FademetLogo = () => {
  return (
    <Link onClick={scrollToTop} to='/'>
      <div className={styles.logo}>
        <img
          onMouseOver={(e) => e.currentTarget.classList.add("fa-spin")}
          onMouseOut={(e) => e.currentTarget.classList.remove("fa-spin")}
          src={imgLogo}
          alt="Logo Fademet"
          height={70}
          width={70}
        />
        <h1 className={styles.logo_text}><span>Fade</span>met</h1>
      </div>
    </Link>
  );
};

export default FademetLogo;