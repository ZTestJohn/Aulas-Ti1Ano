import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";
import Sidebar from "../Sidebar";

function Header() {
  const [sidebar, setSidebar] = useState(false);
  function menuFunction() {
    setSidebar(!sidebar);
  }

  return (
    <>
      <Sidebar active={sidebar} setActive={setSidebar} />
      <header className={styles.header}>
        <div>
          <button onClick={menuFunction}>
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
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </button>
          <div>
            <img
              src="../../public/brasil.png"
              alt="Logo"
              width="38px"
            />
            <Link to="/">
              <span>Natalshop</span>
            </Link>
          </div>
        </div>
        <nav className={styles.linksNav}>
          <Link to="/">Página inicial</Link>
          <Link to="/Shop">Loja</Link>
        </nav>
      </header>
    </>
  );
}
export default Header;
