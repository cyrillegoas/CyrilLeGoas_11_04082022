import { Layout } from "../components/Layout";
import { Banner } from "../components/Banner";
import { Accordion } from "../components/Accordion";

export const About = (props) => (
  <Layout>
    <Banner image="images/background2.png" />
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
  </Layout>
);
