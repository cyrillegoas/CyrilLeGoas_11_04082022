import { Link } from "react-router-dom";
import styles from "./index.module.css";

export const Card = ({ id, imagePath, title }) => (
  <Link className={styles.card} to={`/apartment/${id}`}>
    <img className={styles.card__image} src={imagePath} alt="" />
    <h2 className={styles.card__title}>{title}</h2>
  </Link>
);
