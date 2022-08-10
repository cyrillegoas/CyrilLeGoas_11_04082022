import { useState } from "react";
import styles from "./index.module.css";

export const Accordion = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${styles.accordion} ${
        isOpen ? styles["accordion--open"] : ""
      }`}
    >
      <button
        className={styles.accordion__btn}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.accordion__btnText}>
          {name}
          <img
            className={styles.accordion__arrow}
            src="/images/arrow.svg"
            alt=""
          />
        </span>
      </button>
      <div className={styles.accordion__content}>{children}</div>
    </div>
  );
};
