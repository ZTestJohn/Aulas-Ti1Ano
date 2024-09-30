/* eslint-disable react/prop-types */
import styles from "./SectionFamily.module.css";

function SectionFamily ({ familyName, children }){
    return (
        <section className={styles.SectionFamily}>
            <div className={styles.textBar}>
                <h2>{familyName}</h2>
                <a href="#">Ir ao topo</a>
            </div>
            <div className={styles.cards}>
                {children}
            </div>
        </section>
    );
};

export default SectionFamily;