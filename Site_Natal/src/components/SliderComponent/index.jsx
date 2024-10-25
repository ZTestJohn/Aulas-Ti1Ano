/* eslint-disable react/prop-types */
import "./SliderComponent.css";
import Slider from "react-slick";

function SliderComponent({ children }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
