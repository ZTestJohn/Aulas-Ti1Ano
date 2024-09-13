import styles from "./PeriodicTableComponent.module.css";
import tabelajson from "../../json/csvjson.json";
import tabelaEnUS from "../../json/PeriodicTableJSON.json";

import ElementPeriodicTable from "../ElementPeriodicTable";

function PeriodicTableComponent() {
  return (
    <>
      <section className={styles.PeriodicTableGrid}>
        {
          tabelaEnUS.elements.map((e) => {
            return (
              <ElementPeriodicTable
                key={e.symbol}
                symbol={e.symbol}
                xpos={e.xpos}
                ypos={e.ypos}
                category={e.category}
                number={e.number}
                atomicMass={e.atomic_mass}
              />
            );
          })
          // Literalmente elemento
        }
      </section>
    </>
  );
}
export default PeriodicTableComponent;
