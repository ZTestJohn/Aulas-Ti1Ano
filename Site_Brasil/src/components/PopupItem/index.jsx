/* eslint-disable react/prop-types */
import styles from "./PopupItem.module.css";

function PopupItem({ children }) {
  return <span className={styles.PopupItem}>{children}</span>;
}

export default PopupItem;
