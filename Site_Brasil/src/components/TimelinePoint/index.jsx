/* eslint-disable react/prop-types */
import styles from "./TimelinePoint.module.css";

function TimelinePoint({ nameOfWar, date, position }) {
  return (
    <li className={styles.TimelinePoint}>
      <h2 className={styles.name}>{nameOfWar}</h2>
      <span className={styles.date}>{date}</span>
    </li>
  );
}

export default TimelinePoint;
