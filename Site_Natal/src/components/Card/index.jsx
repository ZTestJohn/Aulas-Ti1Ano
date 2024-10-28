/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ img, titulo, id, price }) {
  price = Number(price);
  let priceBefore = price + price*0.3;
  return (
    <Link to={`/Product/${id}`} rel="noopener noreferrer">
      <div className={styles.Card}>
        <img src={img} alt="Imagem do produto"></img>
        <h2>{titulo}</h2>
        <span className={styles.priceBefore}>R$ {priceBefore.toFixed(2)}</span>
        <p className={styles.priceFinale}>
          R$ 
          <span>{price.toFixed(2)}</span>
          \un
        </p>
      </div>
    </Link>
  );
}

export default Card;
