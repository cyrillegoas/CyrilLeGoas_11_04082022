import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ApartmentsContext } from "../ApartmentsContext";
import { Layout } from "../components/Layout";
import { Slider } from "../components/Slider";

export const Apartment = (props) => {
  const apartments = useContext(ApartmentsContext);
  const { apartmentId } = useParams();
  const ApartmentDetails = apartments.find((item) => item.id === apartmentId);

  return (
    <Layout>
      <Slider pictures={ApartmentDetails.pictures} />
    </Layout>
  );
};
