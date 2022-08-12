import { Header } from "../Header";
import { KasaFooter } from "../KasaFooter";

import styles from "./index.module.css";

export const Layout = ({ page = "default", children }) => (
  <>
    <div className={styles.wrapper}>
      <Header logoPath="/images/kasa_logo.svg" />
      <main className={styles[`main--${page}`]}>{children}</main>
    </div>
    <KasaFooter />
  </>
);
