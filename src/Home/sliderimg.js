import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export const SliderImg = () => {
  return (
    <>
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img
          src="https://trivediravi.com/wp-content/uploads/2020/04/horoscope-slider-1920x500.jpg"
          className="sliderimg"
          alt=""
        />
        <img
          src="https://trivediravi.com/wp-content/uploads/2020/04/Ask-a-Question-slider-1920x500.jpg"
          className="sliderimg"
          alt=""
        />
        <img
          src="https://trivediravi.com/wp-content/uploads/2020/02/slider3-1920x500.jpg"
          className="sliderimg"
          alt=""
        />
        <img
          src="https://trivediravi.com/wp-content/uploads/2020/02/slider1-1920x500.jpg"
          className="sliderimg"
          alt=""
        />
      </AliceCarousel>{" "}
    </>
  );
};
