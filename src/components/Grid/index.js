import styles from "./index.module.css";

export const Grid = ({ children }) => (
  <div className={styles.grid}>
    <ul className={styles.grid__list}>{children}</ul>
  </div>
);
