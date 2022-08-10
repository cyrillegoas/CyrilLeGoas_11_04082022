import { useState } from "react";
import styles from "./index.module.css";

export const Slider = ({ pictures }) => {
  const [index, setIndex] = useState(0);
  const nbOfPicture = pictures.length;

  function handleClickNext() {
    const newIndex = index < nbOfPicture - 1 ? index + 1 : 0;
    setIndex(newIndex);
  }

  function handleClickPrev() {
    const newIndex = index === 0 ? nbOfPicture - 1 : index - 1;
    setIndex(newIndex);
  }

  return (
    <div className={styles.slider}>
      <img className={styles.slider__slide} src={pictures[index]} alt="" />
      {nbOfPicture > 1 && (
        <>
          <div className={styles.controls}>
            <button
              className={`${styles.controls__btn} ${
                styles[`controls__btn--prev`]
              }`}
              onClick={handleClickPrev}
            >
              <img
                className={styles.controls__arrow}
                src="/images/arrow.svg"
                alt=""
              />
            </button>
            <button
              className={`${styles.controls__btn} ${
                styles[`controls__btn--next`]
              }`}
              onClick={handleClickNext}
            >
              <img
                className={styles.controls__arrow}
                src="/images/arrow.svg"
                alt=""
              />
            </button>
          </div>
          <div className={styles.counter}>
            <span className={styles.counter__text}>
              {index + 1}/{nbOfPicture}
            </span>
          </div>
        </>
      )}
    </div>
  );
};
