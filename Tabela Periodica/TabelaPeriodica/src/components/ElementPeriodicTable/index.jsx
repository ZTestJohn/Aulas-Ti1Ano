/* eslint-disable react/prop-types */
import styles from "./ElementPeriodicTable.module.css";
import verifyColor from "./verifyColor";

function ElementPeriodicTable({
  xpos,
  ypos,
  symbol,
  category,
  number,
  atomicMass,
  nomeElemento,
}) {
  let color = verifyColor(category);
  function scrollar() {
    const cardLocal = document.getElementById(symbol)
    if (cardLocal) {
      cardLocal.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <button
      className={styles.ElementPeriodicTable}
      style={{ gridColumn: xpos, gridRow: ypos, backgroundColor: color }}
      onClick={scrollar}
    >
      <h1>{symbol}</h1>
      <span className={styles.number}>{number}</span>
      <span className={styles.atomicMass}>{atomicMass.toFixed(3)}</span>
      <span className={styles.Name}>{ nomeElemento }</span>
    </button>
  );
}
export default ElementPeriodicTable;
