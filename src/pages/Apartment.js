import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ApartmentsContext } from "../ApartmentsContext";
import { Layout } from "../components/Layout";
import { Slider } from "../components/Slider";
import { ApartmentInfo } from "../components/ApartmentInfo";

export const Apartment = (props) => {
  const navigate = useNavigate();
  const apartments = useContext(ApartmentsContext);
  const { apartmentId } = useParams();
  const ApartmentDetails = apartments.find((item) => item.id === apartmentId);

  useEffect(() => {
    ApartmentDetails || navigate("/notfound", { replace: true });
  });

  return ApartmentDetails ? (
    <Layout page="apartment">
      <Slider pictures={ApartmentDetails.pictures} />
      <ApartmentInfo />
    </Layout>
  ) : null;
};
