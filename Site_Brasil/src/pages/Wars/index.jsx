import Header from "./../../components/Header";
import Container from "./../../components/Container";
import styles from "./Wars.module.css";
import Footer from "../../components/Footer";
import Timeline from "../../components/Timeline";
import TimelinePoint from "../../components/TimelinePoint";

function Wars() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.WarsSection}>
          <section className={styles.timelineSection}>
            <div>
              <h2 className={styles.title}>
                Linha do tempo das principais Guerras do Brasil
              </h2>
            </div>
            <div>
              <Timeline>
                <TimelinePoint
                  date={1900}
                  nameOfWar="Participação do Brasil na 2GM"
                />
              </Timeline>
            </div>
            <div>
              <p className={styles.TimelineHelp}>
                Clique no ponto da linha do tempo que queira ir
              </p>
            </div>
            <div className={styles.Indicator}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="downIconicon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 9l6 6l6 -6" />
              </svg>
            </div>
          </section>
          <section style={{ backgroundColor: "tomato" }}></section>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Wars;
