/* eslint-disable react/prop-types */
import styles from "./FlipCard.module.css";
import verifyColor from "../ElementPeriodicTable/verifyColor";
import "@google/model-viewer";

function FlipCard({
  categoryName,
  elementName,
  elementSymbol,
  number,
  mass,
  urlModelo3D,
  discoverBy,
  density,
  sumary,
}) {
  const color = verifyColor(categoryName);
  return (
    <>
      <div id={number} className={styles.flip_card}>
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
                style={{ width: "300px", height: "200px" }}
                src={urlModelo3D}
                alt="Um modelo 3D"
                auto-rotate
                camera-controls
                ar
              ></model-viewer>
            </div>
            <div className={styles.Info}>
              <p>
                Descoberto por:
                <span>
                  <strong> {discoverBy} </strong>
                </span>
              </p>
              <p>
                Densidade:
                <span>
                  <strong> {density} </strong>
                </span>
              </p>
              <br />
              <div className={styles.Resumo}>
                <p>{sumary}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FlipCard;
