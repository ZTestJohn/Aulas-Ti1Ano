/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./SearchArea.module.css";
import ProductsList from "../ProductsList";

function removeAccents(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function filterProducts(products, searchText) {
  const normalizedSearchText = removeAccents(searchText.toLowerCase());
  return products.filter((product) =>
    removeAccents(product.nome.toLowerCase()).includes(normalizedSearchText)
  );
}

function SearchArea({ title, productsDB, initialText }) {
  const [searchText, setSearchText] = useState(initialText);
  const foundProducts = filterProducts(productsDB, searchText);
  let productsCount = Array(foundProducts)[0].length;

  const productsCountText = productsCount > 0
  ? `Foram encontrados ${productsCount} ${productsCount > 1 ? "produtos" : "produto"}`
  : "Nenhum produto encontrado";

  return (
    <div className={styles.SearchArea}>
      <h1>Busque um produto que deseje</h1>
      <div className={styles.search}>
      <h2>{productsCountText}</h2>
        <div className={styles.searchbox}>
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
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
          <input
            type="search"
            placeholder="Digite o produto..."
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
        </div>
      </div>
      <div>
          <ProductsList title={title} productsArray={foundProducts} />
        </div>
    </div>
  );
}
export default SearchArea;
