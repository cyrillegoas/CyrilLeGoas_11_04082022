import styles from "./index.module.css";

export const Score = ({ score, maxScore }) => {
  const stars = Array.from({ length: maxScore }, (item, index) => {
    const modifier = index < score ? "filled" : "empty";
    const imageSrc = `/images/star_${modifier}.svg`;
    const imageAlt = `${modifier} star`;
    return <img className={styles.score__star} src={imageSrc} alt={imageAlt} />;
  });

  return <div className={styles.score}>{stars}</div>;
};
