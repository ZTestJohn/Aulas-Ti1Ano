import styles from "./Shop.module.css";
import Header from "./../../components/Header";
import Container from "./../../components/Container";
import Footer from "./../../components/Footer";
import FilterProducts from "../../components/FilterProducts";
import SearchArea from "../../components/SearchArea";
import { useFilteredProductsContext } from "../../contexts/FilteredProducts";

function Shop() {
  const { filteredProducts } = useFilteredProductsContext();
  return (
    <>
      <Header />
      <Container>
        <section className={styles.ShopContainer}>
          <section className={styles.ShopSections}>
            <div className={styles.filterPart}>
              <FilterProducts />
            </div>
            <div className={styles.searchPart}>
              <SearchArea
                title=" "
                productsDB={filteredProducts}
                initialText=""
              />
            </div>
          </section>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Shop;
