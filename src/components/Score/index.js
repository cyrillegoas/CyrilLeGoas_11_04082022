import styles from "./index.module.css";

export const Score = ({ score, maxScore }) => {
  let stars = [];

  for (let i = 0; i < score; i++) {
    stars.push(
      <img
        className={styles.score__star}
        src="/images/star_filled.svg"
        alt="filled star"
      />
    );
  }
  for (let i = 0; i < maxScore - score; i++) {
    stars.push(
      <img
        className={styles.score__star}
        src="/images/star_empty.svg"
        alt="empty star"
      />
    );
  }

  return <div className={styles.score}>{stars}</div>;
};
