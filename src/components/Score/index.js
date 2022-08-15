import styles from "./index.module.css";

export const Score = ({ score, maxScore }) => {
  const stars = Array.from({ length: maxScore }, (item, index) => {
    const modifier = index < score ? "filled" : "empty";
    const imageSrc = `/images/star_${modifier}.svg`;
    return (
      <img className={styles.score__star} src={imageSrc} alt="" key={index} />
    );
  });

  return <div className={styles.score}>{stars}</div>;
};
