/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./ProfileMenu.module.css";

function ProfileMenu({ isLogged }) {
  if (isLogged)
    return (
      <nav className={styles.nav}>
        <ul>
          <li>Perfil</li>
          <li><Link to="/CreateAccount">Criar conta</Link></li>
        </ul>
      </nav>
    );
  return (
    <nav className={styles.nav}>
      <ul>
        <li><Link to="/Login">Entrar</Link></li>
      </ul>
    </nav>
  );
}

export default ProfileMenu;
