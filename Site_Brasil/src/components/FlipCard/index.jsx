/* eslint-disable react/prop-types */
import styles from "./FlipCard.module.css";

function FlipCard({ content }) {
  return (
    <>
      <div className={styles.alignItemDiv}>
        <div className={styles.flip_card}>
          <div className={styles.flip_card_inner}>
            <div className={styles.flip_card_front}>
              <div className={styles.flip_card_front_decor}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-zoom-question"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                  <path d="M21 21l-6 -6" />
                  <path d="M10 13l0 .01" />
                  <path d="M10 10a1.5 1.5 0 1 0 -1.14 -2.474" />
                </svg>

                <svg viewBox="0 0 500 500">
                  <path
                    id="curve"
                    d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
                    fill="none"
                  />
                  <text width="500" >
                    <textPath xlinkHref="#curve">
                      Curiosidades
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
            <div className={styles.flip_card_back}>{content}</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FlipCard;
