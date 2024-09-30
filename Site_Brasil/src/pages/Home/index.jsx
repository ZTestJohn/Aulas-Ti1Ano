import Header from "./../../components/Header";
import Container from "./../../components/Container";
import svgQuestion from "../../img/questions.svg";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <Container>
        <main className={styles.Main}>
          <div className={styles.texts}>
            <p>
              Venha explorar as Guerras que o <span>brasil</span> teve em sua
              história!
            </p>
            <Link to="Wars">Saiba Mais</Link>
          </div>
          <div>
            <img className={styles.svgPergunta} src={svgQuestion} alt="" />
          </div>
        </main>
      </Container>
    </>
  );
}

export default Home;
