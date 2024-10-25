import styles from "./BannerImg.module.css";
function BannerImg({ImgPath}) {
  return (
    <div className={styles.ImgBannnerDiv} style={{ backgroundImage: `url("${ImgPath}")` }}>
    </div>
  );
}

export default BannerImg;
