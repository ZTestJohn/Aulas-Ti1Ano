/* eslint-disable react/prop-types */
import styles from "./BannerImg.module.css";

function BannerImg({ ImgPath }) {
  return (
    <div className={styles.divBanner}>
      <img className={styles.banner} src={ImgPath} alt="" />
    </div>
  );
}

export default BannerImg;
