import Header from "./../../components/Header";
import Container from "./../../components/Container";
import Footer from "./../../components/Footer";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <big style={{ position: "absolute" }}></big>
      <Header />
      <Container className={styles.fundo}>
        <h1>Hello</h1>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
