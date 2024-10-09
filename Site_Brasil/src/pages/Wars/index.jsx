import Header from "./../../components/Header";
import Container from "./../../components/Container";
import styles from "./Wars.module.css";
import Timeline from "../../components/Timeline";
import TimelinePoint from "../../components/TimelinePoint";
import db from "../../json/db.json";
import SectionWar from "../../components/SectionWar";

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
            <div className={styles.timelineDiv}>
              <Timeline>
                {db.map((e, index) => {
                  return (
                    <TimelinePoint
                      date={e.data}
                      nameOfWar={e.nome}
                      position={index}
                      quantity={db.length}
                      key={index}
                    />
                  );
                })}
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
          {db.map((e, index) => {
            return (
              <SectionWar
                id={index}
                key={index}
                nameOfWar={e.nome}
                warDescription={e.descricao_detalhada}
                battles={e.principais_batalhas}
                warImgUrl={e.url_imagem}
                imgMap={e.imagem_mapa}
                arrayWebsites={e.fonte}
                YoutubeVideo={e.link_video}
              />
            );
          })}
        </section>
      </Container>
    </>
  );
}

export default Wars;
