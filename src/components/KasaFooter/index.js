import styles from "./index.module.css";

export const KasaFooter = () => (
  <footer className={styles.footer}>
    <img
      className={styles.footer__logo}
      src="images/kasa_logo.svg"
      alt="logo"
    />
    <p className={styles.footer__smallprint}>
      <small>© 2020 Kasa. All rights reserved</small>
    </p>
  </footer>
);
