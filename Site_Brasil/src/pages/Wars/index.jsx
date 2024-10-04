import Header from "./../../components/Header";
import Container from "./../../components/Container";
import styles from "./Wars.module.css";
import Footer from "../../components/Footer";

function Wars() {
  return (
    <>
      <Header />
      <Container>
        <section
        className={styles.WarsSection}
        ></section>
      </Container>
      <Footer />
    </>
  );
}

export default Wars;
