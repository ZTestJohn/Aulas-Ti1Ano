import { useState } from "react";
import styles from "./ProfileButton.module.css";
import ProfileMenu from "../ProfileMenu";

function ProfileButton() {
  const [isLogged, setLogged] = useState(false);
  const [isActive, setActive] = useState(false);
  function alternateStatesProfile() {
    setActive(!isActive);
  }

  return (
    <div className={styles.MenuDiv}>
      <button onClick={alternateStatesProfile} className={styles.buttonProfile}>
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
          className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
        </svg>
      </button>
      <aside className={isActive ? styles.OpenedMenu : styles.ClosedMenu}>
        <ProfileMenu isLogged={isLogged} />
      </aside>
    </div>
  );
}

export default ProfileButton;
