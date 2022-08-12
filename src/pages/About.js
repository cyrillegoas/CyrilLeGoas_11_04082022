import { Layout } from "../components/Layout";
import { Banner } from "../components/Banner";
import { KasaAboutContent } from "../components/KasaAboutContent";

export const About = (props) => (
  <Layout page="about">
    <Banner image="/images/background2.png" />
    <KasaAboutContent />
  </Layout>
);
