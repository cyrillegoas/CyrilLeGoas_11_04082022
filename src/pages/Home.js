import { Layout } from "../components/Layout";
import { Banner } from "../components/Banner";
import { Grid } from "../components/Grid";

export const Home = (props) => (
  <Layout>
    <Banner
      image="/images/background1.png"
      tagline="Chez vous, partout et ailleurs"
      imagePosition={{ objectPosition: "50% 100%" }}
    />
    <Grid />
  </Layout>
);
