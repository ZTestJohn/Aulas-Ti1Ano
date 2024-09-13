import styles from "./SectionFamily.module.css";

function SectionFamily ({ familyName, children }){
    return (
        <section className={styles.SectionFamily}>
            <h2>{familyName}</h2>
            <div className={styles.cards}>
                {children}
            </div>
        </section>
    );
};

export default SectionFamily;