import styles from "./PeriodicTable.module.css";
import Header from "./../../components/Header";
import Container from "./../../components/Container";
import Footer from "./../../components/Footer";
import SectionFamily from "./../../components/SectionFamily";
import PeriodicTableComponent from "../../components/PeriodicTableComponent";

function PeriodicTable() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.PeriodicTable}>
          <PeriodicTableComponent />
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default PeriodicTable;
