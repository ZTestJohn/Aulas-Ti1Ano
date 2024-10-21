/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./SidebarItem.module.css";

function SidebarItem({ link, textLink }) {
  return (
    <Link className={styles.link} to={`/${link}`}>
      <div className={styles.SidebarItem}>{textLink}</div>
    </Link>
  );
}

export default SidebarItem;
