import styles from "./PeriodicTable.module.css";
import Header from "./../../components/Header";
import Container from "./../../components/Container";
import Footer from "./../../components/Footer";

function PeriodicTable() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.PeriodicTable}></section>
      </Container>
      <Footer />
    </>
  );
}

export default PeriodicTable;
