import Header from "./../../components/Header";
import Container from "./../../components/Container";
import Footer from "./../../components/Footer";
import styles from "./Home.module.css";
import SliderComponent from "../../components/SliderComponent";

function Home() {
  return (
    <>
      <big style={{ position: "absolute" }}></big>
      <Header />
      <Container className={styles.fundo}>
        <SliderComponent>
          
        </SliderComponent>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
