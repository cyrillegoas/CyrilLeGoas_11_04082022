import { Header } from "../Header";
import { KasaFooter } from "../KasaFooter";
import { apartmentsData } from "../../apartmentsData";
import { ApartmentsContext } from "../../ApartmentsContext";

import styles from "./index.module.css";

export const Layout = ({ children }) => (
  <>
    <div className={styles.wrapper}>
      <Header logoPath="images/kasa_logo.svg" />
      <ApartmentsContext.Provider value={apartmentsData}>
        <main>{children}</main>
      </ApartmentsContext.Provider>
    </div>
    <KasaFooter />
  </>
);
