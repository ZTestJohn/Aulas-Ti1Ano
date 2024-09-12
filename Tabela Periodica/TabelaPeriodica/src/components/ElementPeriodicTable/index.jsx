/* eslint-disable react/prop-types */
import styles from "./ElementPeriodicTable.module.css";

function ElementPeriodicTable({ xpos, ypos, symbol, group }) {
  group = Number(group) - 1;
  const colors = [
    "#244D57",
    "#523E1B",
    "#613B28",
    "#622E39",
    "#2A4165",
    "#46474C",
    "#433C65",
    "#623842",
    "#2F4D47",
    "#004A77",
  ];
  let color = colors[group];
  return (
    <div
      className={styles.ElementPeriodicTable}
      style={{ gridColumn: xpos, gridRow: ypos, backgroundColor: color }}
    >
      {symbol}
    </div>
  );
}
export default ElementPeriodicTable;
