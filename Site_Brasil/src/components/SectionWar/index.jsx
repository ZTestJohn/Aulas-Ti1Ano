/* eslint-disable react/prop-types */
import styles from "./SectionWar.module.css";
import { useState, useEffect } from "react";
import "reactjs-popup/dist/index.css";
import PopupComponent from "../PopupComponent";
import PopupItem from "../PopupItem";
import Carousel from "../Carousel";
import FlipCard from "../FlipCard";

function SectionWar({
  warImgUrl,
  imgMap,
  nameOfWar,
  warDescription,
  battles,
  id,
  arrayWebsites,
  YoutubeVideo,
  funFacts,
}) {
  if (typeof battles === "string") {
    battles = [battles];
  }
  const [currentImage, setCurrentImage] = useState(warImgUrl);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentImage((prevImage) =>
          prevImage === warImgUrl ? imgMap : warImgUrl
        );
        setFade(false);
      }, 500);
    }, 5000);

    return () => clearInterval(imageInterval);
  }, [warImgUrl, imgMap]);

  return (
    <section id={id} className={styles.SectionWar}>
      <span className={styles.VoltarAoTopo}><a href="#timeline">Voltar ao topo</a></span>
      <div className={styles.contentSection}>
        <div className={styles.titleAndDescription}>
          <h2>{nameOfWar}</h2>
          <p>{warDescription}</p>
        </div>
        <div className={styles.extraDiv}>
          <div className={styles.battles}>
            <h2>Principais Batalhas:</h2>
            <ul className={styles.lista}>
              {battles.map((e, index) => {
                if (typeof e === "string") {
                  return <li key={index}>{e}</li>;
                } else {
                  let data = `(${e.data})`;
                  if (data === "(undefined)") {
                    data = "";
                  }
                  return (
                    <li key={index}>
                      {e.nome} {data}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div className={styles.Slider}>
            <Carousel>
                {funFacts.map((e, index) => {
                  return <FlipCard content={e} key={index} />;
                })}
            </Carousel>
          </div>
          <PopupComponent>
            <div>
              <h2>Fontes:</h2>
              {arrayWebsites.map((e, index) => {
                console.log(YoutubeVideo);
                return <PopupItem link={e} key={index} />;
              })}
            </div>
            <div>
              <h2>Vídeo do Youtube para apoio:</h2>
              <PopupItem link={YoutubeVideo} key={YoutubeVideo} />
            </div>
          </PopupComponent>
        </div>
      </div>
      <img
        src={currentImage}
        className={`${styles.imgDiv} ${fade ? styles.fadeOut : styles.fadeIn}`}
        alt="Imagem referente à Guerra"
      />
    </section>
  );
}

export default SectionWar;
