import Header from "./../../components/Header";
import Container from "./../../components/Container";
import Footer from "./../../components/Footer";
import svgQuestion from "../../img/brasilWars.svg";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <big style={{ position: "absolute" }}></big>
      <Header />
      <Container className={styles.fundo}>
        <big style={{ position: "absolute" }}></big>
        <main className={styles.Main}>
          <div className={styles.texts_content}>
            <div className={styles.texts}>
              <p>
                Venha explorar as principais Guerras que o <span>Brasil</span>{" "}
                teve em sua história!
              </p>
              <Link to="Wars">Saiba Mais</Link>
            </div>
          </div>
          <div>
            <img
              className={styles.svgPergunta}
              src={svgQuestion}
              alt="Icone de um tanque de guerra em frente ao brasil"
            />
          </div>
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
