import styles from "./PeriodicTable.module.css";
import Header from "./../../components/Header";
import Container from "./../../components/Container";
import Footer from "./../../components/Footer";
import SectionFamily from "./../../components/SectionFamily";
import PeriodicTableComponent from "../../components/PeriodicTableComponent";
import tabelaPortugues from "../../json/categoryUtilities.json";
import tabelaPtBrCompleta from "../../json/csvjson.json";
import tabelaIngles from "../../json/PeriodicTableJSON.json";
import FlipCard from "../../components/FlipCard";

function PeriodicTable() {
  const categories = [
    "Halogênios",
    "Gases nobres",
    "Metais alcalinos",
    "Metais alcalinoterrosos",
    "Semimetais",
    "Não metais",
    "Metais pós-transição",
    "Metal de transição",
    "Lantanídeos",
    "Actinídeo",
    "desconhecidos, provavelmente Metal de transição",
    "desconhecido",
    "desconhecidos, provavelmente Metais pós-transição",
    "desconhecidos, provavelmente Semimetais",
    "desconhecidos, previsto como Gas nobre",
  ];

  function categoryDefault(e) {
    if (e.includes("desconhecido")) {
      return "Desconhecidos";
    } else return e;
  }

  function filterFunction(categoryName) {
    return tabelaPortugues.elements.filter(
      (e) => e.category === categoryName
    );
  }

  return (
    <>
      <Header />
      <Container>
        <section className={styles.PeriodicTable}>
          <PeriodicTableComponent />
        </section>
        {
          categories.slice(0, 11).map((elementeCategory) => (
            <SectionFamily
              key={elementeCategory}
              familyName={categoryDefault(elementeCategory)}
            >
              {
                filterFunction(elementeCategory).map((result, index) => (
                  <FlipCard
                    key={result.name}
                    categoryName={tabelaIngles.elements[index].category}
                    elementName={tabelaPtBrCompleta[index].nome}
                    elementSymbol={tabelaIngles.elements[index].symbol}
                    mass={tabelaIngles.elements[index].atomic_mass}
                    number={tabelaIngles.elements[index].number}
                    urlModelo3D={tabelaIngles.elements[index].bohr_model_3d}
                  />
                ))
              }
            </SectionFamily>
          ))
        }
      </Container>
      <Footer />
    </>
  );
}

export default PeriodicTable;
