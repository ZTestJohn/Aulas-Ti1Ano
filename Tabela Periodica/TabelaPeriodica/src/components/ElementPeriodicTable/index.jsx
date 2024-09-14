/* eslint-disable react/prop-types */
import styles from "./ElementPeriodicTable.module.css";

function ElementPeriodicTable({
  xpos,
  ypos,
  symbol,
  category,
  number,
  atomicMass,
  nomeElemento,
}) {
  let color = "";
  switch (category) {
    case "diatomic nonmetal":
      color = "#244D57";
      break;
    case "noble gas":
      color = "#523E1B";
      break;
    case "alkali metal":
      color = "#613B28";
      break;
    case "alkaline earth metal":
      color = "#622E39";
      break;
    case "metalloid":
      color = "#2A4165";
      break;
    case "polyatomic nonmetal":
      color = "#46474C";
      break;
    case "post-transition metal":
      color = "#433C65";
      break;
    case "transition metal":
      color = "#623842";
      break;
    case "lanthanide":
      color = "#2F4D47";
      break;
    case "actinide":
      color = "#004A77";
      break;
    default:
      color = "#84049e";
      break;
  }
  return (
    <div
      className={styles.ElementPeriodicTable}
      style={{ gridColumn: xpos, gridRow: ypos, backgroundColor: color }}
    >
      <h1>{symbol}</h1>
      <span className={styles.number}>{number}</span>
      <span className={styles.atomicMass}>{atomicMass.toFixed(3)}</span>
      <span className={styles.Name}>{ nomeElemento }</span>
    </div>
  );
}
export default ElementPeriodicTable;
