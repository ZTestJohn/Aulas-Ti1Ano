/* eslint-disable react/prop-types */
import "./SliderComponent.css";
import Slider from "react-slick";

function SliderComponent({ children }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    pauseOnHover: true,
    cssEase: "linear"
  };
  return (
    <div className="SliderConfig">
      <div className="slider-container">
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  );
}
export default SliderComponent;
