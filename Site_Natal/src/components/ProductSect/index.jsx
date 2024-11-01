import styles from "./ProductSect.module.css";
import { Link, useParams } from "react-router-dom";
import db from "../../json/produtosDB.json";
import SliderImgs from "../SliderImgs";
import { useState } from "react";

function ProductSect() {
  const params = useParams();
  const product = db.find((e) => e.codigo_unico === params.id);
  let price = Number(product.preco);
  let priceBefore = price + price * 0.3;

  let [Quantity, setQuantity] = useState(1);
  function sumQuantity(){
    setQuantity(Quantity+=1)
    controlCount()
  }
  function subQuantity(){
    setQuantity(Quantity-=1)
    controlCount()
  }
  function controlCount(){
    if (Quantity > 15 || Quantity <= 0) {
      setQuantity(1);
    }
  }

  return (
    <section className={styles.ProductSect}>
      <nav>
        <ol>
          <li className={styles.Links}>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon icon-tabler icons-tabler-filled icon-tabler-home"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z" />
              </svg>
              Home
            </Link>
            <p>/</p>
            <Link to={`/Shop/${product.categoria}`}>{product.categoria}</Link>
          </li>
        </ol>
      </nav>
      <div className={styles.productSect}>
        <SliderImgs product_url_image={product.url_imagem} />
        <div className={styles.ShopAreaAndInformations}>
          <div>
            <h2 className={styles.NameOfProduct}>{product.nome}</h2>
            <span className={styles.UniqueCode}>{product.codigo_unico}</span>
          </div>
          <p className={styles.description}>{product.descricao}</p>
          <span className={styles.Line}></span>
          <div className={styles.PriceArea}>
            <div className={styles.PricesBeforeAndAfter}>
              <span className={styles.OffPrice}>
                R$ {priceBefore.toFixed(2)}
              </span>
              <h3 className={styles.Price}>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(price.toFixed(2))}
              </h3>
              <h4>
                Ou até 6x de R$ {((price + price * 0.15) / 6).toFixed(2)},
                totalizando R$ {(price + price * 0.15).toFixed(2)} reais.
              </h4>
            </div>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/011/654/480/small/discount-30-percent-off-in-surprise-opened-red-gift-box-golden-ribbon-3d-style-free-png.png"
              alt=""
            />
          </div>
          <div className={styles.Cart}>
            <form className={styles.Cart}>
              <button type="submit" className={styles.AddToCart}>
                Adiconar ao carrinho
              </button>
              <div className={styles.QuantityButtons}>
                <button onClick={subQuantity}>+</button>
                <h2>{Quantity}</h2>
                <button onClick={subQuantity}>-</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSect;
