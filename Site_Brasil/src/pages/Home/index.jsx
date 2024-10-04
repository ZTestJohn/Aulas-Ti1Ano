import Header from "./../../components/Header";
import Container from "./../../components/Container";
import Footer from "./../../components/Footer";
<<<<<<< HEAD
=======
import svgQuestion from "../../img/questions.svg";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
>>>>>>> b7e0c5c4e204492158e57fb56320bf13f4cd8552

function Home() {
  return (
    <>
      <Header />
<<<<<<< HEAD
      <Container>
=======
      <Container className={styles.fundo}>
        <big style={{ position: "absolute" }}></big>
        <main className={styles.Main}>
          <div className={styles.texts_content}>
            <div className={styles.texts}>
              <p>
                Venha explorar as principais Guerras que o <span>brasil</span> teve em sua
                história!
              </p>
              <Link to="Wars">Saiba Mais</Link>
            </div>
          </div>
          <div>
            <img className={styles.svgPergunta} src={svgQuestion} alt="" />
          </div>
        </main>
>>>>>>> b7e0c5c4e204492158e57fb56320bf13f4cd8552
      </Container>
      <Footer />
    </>
  );
}

export default Home;
