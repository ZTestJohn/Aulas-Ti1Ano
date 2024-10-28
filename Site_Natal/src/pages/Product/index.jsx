import Header from "./../../components/Header";
import Container from "./../../components/Container";
import Footer from "./../../components/Footer";
import styles from "./Product.module.css";
// import products from "../../json/produtosDB.json";
import ProductSect from "../../components/ProductSect";

function Product() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.globalSect}>
          <ProductSect />
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Product;
