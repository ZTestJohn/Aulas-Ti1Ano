import Header from "./../../components/Header";
import Container from "./../../components/Container";
import Footer from "./../../components/Footer";
import styles from "./SearchPage.module.css";
import SliderComponent from "../../components/SliderComponent";
import BannerJson from "./../../json/banner_imgs.json";
import BannerImg from "../../components/BannerImg";
import SearchArea from "../../components/SearchArea";
import products from "../../json/produtosDB.json";
import { useParams } from "react-router-dom";

function SearchPage() {
  
  const params = useParams();

  return (
    <>
      <Header />
      <Container className={styles.fundo}>
        <SliderComponent>
          {BannerJson.map((e) => {
            return(
              <BannerImg key={e} ImgPath={e.url} />
            );
          })
          }
        </SliderComponent>
        <section className={styles.searchConteiner}>
          <SearchArea productsDB={products} initialText={params.text}/>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default SearchPage;
