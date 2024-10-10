/* eslint-disable react/prop-types */
import styles from "./FlipCard.module.css";

function FlipCard({content}) {
  return (
    <>
      <div className={styles.alignItemDiv}>
      <div className={styles.flip_card}>
        <div className={styles.flip_card_inner}>
          <div className={styles.flip_card_front}>
            <div className={styles.flip_card_front_decor}></div>
          </div>
          <div className={styles.flip_card_back}>
            {content}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default FlipCard;
