import Header from "./../../components/Header";
import Container from "./../../components/Container";
import Footer from "./../../components/Footer";
import styles from "./SearchPage.module.css";
import SliderComponent from "../../components/SliderComponent";
import BannerJson from "./../../json/banner_imgs.json";
import BannerImg from "../../components/BannerImg";
import Category from "../../components/Category";
import products from "../../json/produtosDB.json";
import Card from "../../components/Card";

function SearchPage() {
  
  const params = useParams();

  return (
    <>
      <Header />
      <Container className={styles.fundo}>
        <SliderComponent>
          {BannerJson.map((e) => {
            return <BannerImg key={e} ImgPath={e.url} />;
          })}
        </SliderComponent>
        
      </Container>
      <Footer />
    </>
  );
}

export default SearchPage;
