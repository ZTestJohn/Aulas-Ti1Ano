/* eslint-disable react/prop-types */
import styles from "./SectionWar.module.css";
import { React, useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Slider from "react-slick";

function SectionWar({
  warImgUrl,
  imgMap,
  nameOfWar,
  warDescription,
  battles,
  id,
}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
          <div>
          </div>
          <Popup
            trigger={
              <button>
                <div className={styles.extras}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-books"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                    <path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                    <path d="M5 8h4" />
                    <path d="M9 16h4" />
                    <path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z" />
                    <path d="M14 9l4 -1" />
                    <path d="M16 16l3.923 -.98" />
                  </svg>
                </div>
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <div className={styles.modal}>
                <button className={styles.close} onClick={close}>
                  &times;
                </button>
                <button
                  className={styles.button}
                  onClick={() => {
                    close();
                  }}
                ></button>
              </div>
            )}
          </Popup>
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
