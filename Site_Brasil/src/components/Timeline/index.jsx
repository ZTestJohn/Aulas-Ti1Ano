/* eslint-disable react/prop-types */
import styles from "./Timeline.module.css";
function Timeline({ children }) {
  return (
    <div id="TimelineBar" className={styles.Timeline}>
      <ol>{children}</ol>
    </div>
  );
}

export default Timeline;
