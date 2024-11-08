import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Login.module.css";
import gifAccount from "./createaccount.gif";

function Login() {
  return (
    <main className={styles.main}>
      <Header />
      <Container>
        <section className={styles.CreateAccount}>
          <div className={styles.CreateAccountBox}>
            <div className={styles.AllTextDiv}>
              <h2>Entrar</h2>
              <form className={styles.formCreate}>
                <div className={styles.inputsAndLabels}>
                  <div>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required={true}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      required={true}
                    />
                    <button type="submit">Entrar</button>
                    <span>
                      Não tem uma conta? <Link to="/CreateAccount">Criar conta</Link>
                    </span>
                  </div>
                </div>
              </form>
            </div>
            <div className={styles.svgDiv}>
              <img src={gifAccount} alt="icone" />
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </main>
  );
}

export default Login;
