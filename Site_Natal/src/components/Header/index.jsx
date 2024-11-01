import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";
import Sidebar from "../Sidebar";

function Header() {
  const [sidebar, setSidebar] = useState(false);
  const [SearchBarContent, setSearchBarContent] = useState("")
  function getSearchAreaContent(event){
    setSearchBarContent(event.target.value)
  }
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
            <img src="/natal.png" alt="Logo" width="38px" />
            <Link to="/">
              <span>Natalshop</span>
            </Link>
          </div>
        </div>
        <div className={styles.SearchArea}>
          <input
            type="text"
            name="buscar"
            placeholder="Digite o queira buscar"
            onChange={getSearchAreaContent}
          />
          <Link to={`/SearchPage/${SearchBarContent}`}>
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-search"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </Link>
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
