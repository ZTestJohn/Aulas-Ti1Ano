import Header from "./../../components/Header";
import Container from "./../../components/Container";
import Footer from "./../../components/Footer";
import styles from "./Home.module.css";
import SliderComponent from "../../components/SliderComponent";
import BannerJson from "./../../json/banner_imgs.json";
import BannerImg from "../../components/BannerImg";
import Category from "../../components/Category";
import products from "../../json/produtosDB.json";
import Card from "../../components/Card";

function Home() {
  const categories = [
    "Decoração de Natal",
    "Decoração de Natal Externa",
    "Roupas de Natal",
    "Decoração de Natal Interna",
    "Roupas de Casa",
    "Aromatizantes de Natal",
    "Decoração de Árvore",
    "Presentes",
    "Utensílios de Natal",
    "Decoração de Mesa",
    "Embalagens",
    "Aromatizantes",
  ];
  function filterCategory(id) {
    return products.filter((e) => e.categoria === categories[id]);
  }

  return (
    <>
      <Header />
      <Container className={styles.fundo}>
        <SliderComponent>
          {BannerJson.map((e) => {
            return <BannerImg key={e} ImgPath={e.url} />;
          })}
        </SliderComponent>
        {categories.map((category, index) => (
          <Category title={category} key={index}>
            {filterCategory(index).map((e) => (
              <Card
                key={e.codigo_unico}
                img={e.url_imagem}
                titulo={e.nome}
                price={e.preco}
                id={e.codigo_unico}
              />
            ))}
          </Category>
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default Home;
