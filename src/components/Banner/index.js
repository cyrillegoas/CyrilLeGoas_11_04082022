import styles from "./index.module.css";

export const Banner = ({ image, imagePosition, tagline }) => (
  <div className={styles.banner}>
    <img
      className={styles.banner__image}
      src={image}
      style={imagePosition}
      alt=""
    />
    {tagline ? <h2 className={styles.banner__tagline}>{tagline}</h2> : null}
  </div>
);
