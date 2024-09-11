/* eslint-disable react/prop-types */
import styles from "./SectionStructure.module.css";

function SectionStructure({ children, imgpath, title }) {
  return (
    <section className={styles.SectionStructure}>
      <div className={styles.textArea}>
        <h2>{title}</h2>
        <div className={styles.content}>{children}</div>
      </div>
      <div className={styles.imgdiv}>
        <img src={imgpath} alt="Imagem relacionada ao texto" />
      </div>
    </section>
  );
}

export default SectionStructure;
