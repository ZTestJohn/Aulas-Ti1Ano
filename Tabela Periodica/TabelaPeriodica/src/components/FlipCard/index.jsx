/* eslint-disable react/prop-types */
import styles from "./FlipCard.module.css";
import verifyColor from "../ElementPeriodicTable/verifyColor";
import "@google/model-viewer";

function FlipCard({ categoryName, elementName, elementSymbol, number, mass, urlModelo3D }) {
  const color = verifyColor(categoryName);
  return (
    <>
      <div id={elementSymbol} className={styles.flip_card}>
        <div className={styles.flip_card_inner}>
          <div
            className={styles.flip_card_front}
            style={{ backgroundColor: color }}
          >
            <div className={styles.flip_card_front_decor}>
              <span className={styles.Number}>{number}</span>
              <p className={styles.Symbol}>{elementSymbol}</p>
              <h2 className={styles.Name}>{elementName}</h2>
              <span className={styles.mass}>{mass}</span>
            </div>
          </div>
          <div
            className={styles.flip_card_back}
            style={{ backgroundColor: color }}
          >
            <div className={styles.modelo}>
              <model-viewer
                src={urlModelo3D}
                alt="Um modelo 3D"
                auto-rotate
                camera-controls
                ar
                style={{ width: 100% }}
              ></model-viewer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FlipCard;
