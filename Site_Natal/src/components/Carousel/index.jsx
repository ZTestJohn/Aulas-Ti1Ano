/* eslint-disable react/prop-types */
import styles from "./Carousel.module.css";
import Slider from "react-slick";
import "./botoes.css";

function Carousel({ children }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };
  return (
      <>
      <div className={styles.DivSlider}>
        <Slider id="SliderP" {...settings}>
          {children}
        </Slider>
      </div>
    </>
  );
}

export default Carousel;
