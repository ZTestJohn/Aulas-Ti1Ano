/* eslint-disable react/prop-types */
import styles from "./TimelinePoint.module.css";

function TimelinePoint({ nameOfWar, date, position, quantity }) {
  let timelinePointPosition = (90 / (quantity - 1)) * position;
  return (
    <a className={styles.link} href={`#${position}`}>
      <li
      style={{
        left: `calc(${timelinePointPosition}vw - 15px)`,
      }}
      className={styles.TimelinePoint}
    >
      <h2 className={styles.name}>{nameOfWar}</h2>
      <span className={styles.date}>{date}</span>
    </li>
    </a>
  );
}

export default TimelinePoint;
