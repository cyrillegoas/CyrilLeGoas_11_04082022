import { useContext } from "react";
import { ApartmentsContext } from "../../ApartmentsContext";
import { Card } from "../Card";
import styles from "./index.module.css";

export const Grid = () => {
  const apartments = useContext(ApartmentsContext);

  return (
    <div className={styles.grid}>
      <ul className={styles.grid__list}>
        {apartments.map((item) => (
          <li key={item.id}>
            <Card id={item.id} imagePath={item.cover} title={item.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};
