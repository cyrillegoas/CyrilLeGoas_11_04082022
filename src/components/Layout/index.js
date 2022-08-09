import { Header } from "../Header";
import { KasaFooter } from "../KasaFooter";

import styles from "./index.module.css";

export const Layout = ({ children }) => (
  <>
    <div className={styles.wrapper}>
      <Header logoPath="images/kasa_logo.svg" />
      <main>{children}</main>
    </div>
    <KasaFooter />
  </>
);
