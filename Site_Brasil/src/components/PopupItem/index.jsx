/* eslint-disable react/prop-types */
import styles from "./PopupItem.module.css";

function PopupItem({ link }) {
  let displayName = link;
  if (link.includes("wikipedia")) {
    displayName = "Wikipédia";
  } else  if (link.includes("brasilescola")) {
    displayName = "Brasil Escola";
  } else  if (link.includes("todoestudo")) {
    displayName = "Todo estudo";
  } else  if (link.includes("mundoeducacao")) {
    displayName = "Mundo Educação";
  } else  if (link.includes("todamateria")) {
    displayName = "Toda Matéria";
  } else  if (link.includes("infoescola")) {
    displayName = "Info Escola";
  } else  if (link.includes("suapesquisa")) {
    displayName = "Sua pesquisa";
  } else  if (link.includes("escolaeducacao")) {
    displayName = "Escola Educação";
  } else  if (link.includes("youtu")) {
    displayName = "Youtube";
  }
  return (
    <span className={styles.PopupItem}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-world-search"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M21 12a9 9 0 1 0 -9 9" />
        <path d="M3.6 9h16.8" />
        <path d="M3.6 15h7.9" />
        <path d="M11.5 3a17 17 0 0 0 0 18" />
        <path d="M12.5 3a16.984 16.984 0 0 1 2.574 8.62" />
        <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        <path d="M20.2 20.2l1.8 1.8" />
      </svg>
      <a href={link}>{ displayName }</a>
    </span>
  );
}

export default PopupItem;
