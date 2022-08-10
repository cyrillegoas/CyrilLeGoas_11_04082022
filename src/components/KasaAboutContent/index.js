import { Accordion } from "../Accordion";
import styles from "./index.module.css";

export const KasaAboutContent = () => (
  <div className={styles.aboutContent}>
    <Accordion name="Fiabilité">
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, hic
      voluptate! Dicta officia, totam expedita obcaecati ex, minus consectetur,
      nam illum vero odit voluptate inventore. Quam voluptatem ad fuga vitae!"
    </Accordion>
    <Accordion name="Respect">
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
      comportement discriminatoire ou de perturbation du voisinage entraînera
      une exclusion de notre plateforme."
    </Accordion>
    <Accordion name="Service">
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, hic
      voluptate! Dicta officia, totam expedita obcaecati ex, minus consectetur,
      nam illum vero odit voluptate inventore. Quam voluptatem ad fuga vitae!"
    </Accordion>
    <Accordion name="Responsabilité">
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, hic
      voluptate! Dicta officia, totam expedita obcaecati ex, minus consectetur,
      nam illum vero odit voluptate inventore. Quam voluptatem ad fuga vitae!"
    </Accordion>
  </div>
);
