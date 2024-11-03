/* eslint-disable react/prop-types */
// eslint-disable react/prop-types

import Category from "../Category";
import styles from "./ProductsList.module.css";
import Card from "../Card";

function ProductsList({ title, productsArray }) {
  return (
    <section className={styles.ProductsList}>
      <Category title={title}>
        {productsArray.map((e) => {
          return(
            <Card
            key={e.codigo_unico}
            img={e.url_imagem}
            titulo={e.nome}
            price={e.preco}
            id={e.codigo_unico}
          />
          )
        })}
      </Category>
    </section>
  );
}
export default ProductsList;
