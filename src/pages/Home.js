import { useContext } from "react";
import { ApartmentsContext } from "../ApartmentsContext";
import { Layout } from "../components/Layout";
import { Banner } from "../components/Banner";
import { Grid } from "../components/Grid";
import { Card } from "../components/Card";

export const Home = (props) => {
  const apartments = useContext(ApartmentsContext);

  return (
    <Layout>
      <Banner
        image="/images/background1.png"
        tagline="Chez vous, partout et ailleurs"
        imagePosition={{ objectPosition: "50% 100%" }}
      />
      <Grid>
        {apartments.map((item) => (
          <li key={item.id}>
            <Card id={item.id} imagePath={item.cover} title={item.title} />
          </li>
        ))}
      </Grid>
    </Layout>
  );
};
