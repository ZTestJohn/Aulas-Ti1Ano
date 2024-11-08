import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./CreateAccount.module.css";
import gifAccount from "./createaccount.gif";
import users from "../../json/users.json";

// Este código não é seguro, o correto seria fazer de outra forma sem usar dados locais, este código é apenas para fins de exemplo e demostração.

function CreateAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function changeValueName(e) {
    setName(e.target.value);
  }
  function changeValueEmail(e) {
    setEmail(e.target.value);
  }
  function changeValuePassword(e) {
    setPassword(e.target.value);
  }
  function changeValuePasswordRepeat(e) {
    setPasswordRepeat(e.target.value);
  }
  function verifyEmail(email) {
    if (users.find((user) => user.email === email)) {
      setErrorMessage("O email já está cadastrado!");
      return false;
    }
    setErrorMessage("");
    return true;
  }
  function verifyPassword(password, passwordRepeat, name) {
    if (!(password === passwordRepeat)) {
      setErrorMessage("As senhas não se coincidem.");
      return false;
    }
    if (password === name){
      setErrorMessage("A senha não pode ser igual ao nome.");
      return false
    }
    if (password.lenght < 8){
      setErrorMessage("A senha deve ter no mínimo 8 caracteres.");
      return false
    }
    window.alert(password.lenght)
    setErrorMessage("");
    return true;
  }
  function verifyAccount(email, password, passwordRepeat, name) {
    if (verifyEmail(email) && verifyPassword(password, passwordRepeat, name)) {
      window.alert("Tudo certo");
    }
  }
  function submitButton(e) {
    e.preventDefault();
    verifyAccount(email, password, passwordRepeat, name);
  }

  return (
    <main className={styles.main}>
      <Header />
      <Container>
        <section className={styles.CreateAccount}>
          <div className={styles.CreateAccountBox}>
            <div className={styles.AllTextDiv}>
              <h2>Criar conta</h2>
              <span className={styles.AlertError}>{errorMessage}</span>
              <form onSubmit={submitButton} className={styles.formCreate}>
                <div className={styles.inputsAndLabels}>
                  <div>
                    <label htmlFor="first_name">Nome:</label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      required={true}
                      onChange={changeValueName}
                      value={name}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required={true}
                      onChange={changeValueEmail}
                      value={email}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      required={true}
                      onChange={changeValuePassword}
                      value={password}
                    />
                  </div>
                  <div>
                    <label htmlFor="password_repeat">Repita a senha:</label>
                    <input
                      type="password"
                      name="password_repeat"
                      id="password_repeat"
                      required={true}
                      onChange={changeValuePasswordRepeat}
                      value={passwordRepeat}
                    />
                    <button type="submit">Criar conta</button>
                    <span>
                      Já tem uma conta? <Link to="/Login">Entrar</Link>
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

export default CreateAccount;
