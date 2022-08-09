import styles from "./index.module.css";
import { Link } from "react-router-dom";

export const Error = () => (
  <div className={styles.error}>
    <p className={styles.error__code}>404</p>
    <p className={styles.error__text}>
      Oups! La page que vous demandez n'existe pas.
    </p>
    <Link className={styles.error__link} to="/">
      Retourner sur la page d’accueil
    </Link>
  </div>
);
