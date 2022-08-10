import { useLocation, matchPath } from "react-router-dom";
import { Header } from "../Header";
import { KasaFooter } from "../KasaFooter";
import { apartmentsData } from "../../apartmentsData";
import { ApartmentsContext } from "../../ApartmentsContext";

import styles from "./index.module.css";

export const Layout = ({ children }) => {
  let modifier = "";
  const location = useLocation().pathname;
  if (matchPath("/", location)) {
    modifier = "home";
  } else if (matchPath("/about", location)) {
    modifier = "about";
  } else if (matchPath("/apartment/:apartmentId", location)) {
    modifier = "apartment";
  } else modifier = "error";

  return (
    <>
      <div className={styles.wrapper}>
        <Header logoPath="images/kasa_logo.svg" />
        <ApartmentsContext.Provider value={apartmentsData}>
          <main className={styles[`main--${modifier}`]}>{children}</main>
        </ApartmentsContext.Provider>
      </div>
      <KasaFooter />
    </>
  );
};
