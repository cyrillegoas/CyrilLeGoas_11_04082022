import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ApartmentsContext } from "../../ApartmentsContext";
import { Score } from "../Score";
import { Owner } from "../Owner";
import { Tag } from "../Tag";
import { Accordion } from "../Accordion";
import styles from "./index.module.css";

export const ApartmentInfo = () => {
  const apartments = useContext(ApartmentsContext);
  const { apartmentId } = useParams();
  const ApartmentDetails = apartments.find((item) => item.id === apartmentId);

  return (
    <div>
      <div className={styles.apartmentInfo}>
        <div>
          <h2 className={styles.apartmentInfo__title}>
            {ApartmentDetails.title}
          </h2>
          <h3 className={styles.apartmentInfo__location}>
            {ApartmentDetails.location}
          </h3>
          <div className={styles.apartmentInfo__tags}>
            {ApartmentDetails.tags.map((tag) => (
              <Tag key={tag} name={tag} />
            ))}
          </div>
        </div>
        <div className={styles[`apartmentInfo__owner-score`]}>
          <Owner
            name={ApartmentDetails.host.name}
            picture={ApartmentDetails.host.picture}
          />
          <div className={styles[`score-wrapper`]}>
            <Score score={ApartmentDetails.rating} maxScore={5} />
          </div>
        </div>
      </div>
      <div className={styles.accordions}>
        <Accordion name="Description">{ApartmentDetails.description}</Accordion>
        <Accordion name="Équipements">
          <ul>
            {ApartmentDetails.equipments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Accordion>
      </div>
    </div>
  );
};
