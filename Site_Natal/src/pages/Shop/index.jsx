import Header from "./../../components/Header";
import Container from "./../../components/Container";
import Footer from "./../../components/Footer";
import styles from "./Shop.module.css";

function Shop() {
  return (
    <>
      <Header />
      <Container className={styles.Shop}>
        <h1>Hello</h1>
      </Container>
      <Footer />
    </>
  );
}

export default Shop;
