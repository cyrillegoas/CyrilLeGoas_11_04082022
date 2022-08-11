import styles from "./index.module.css";

export const Owner = ({ name, picture }) => (
  <div className={styles.owner}>
    <span className={styles.owner__name}>{name}</span>
    <img className={styles.owner__picture} src={picture} alt="" />
  </div>
);
