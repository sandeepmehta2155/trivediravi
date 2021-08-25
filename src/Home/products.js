import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export const ProductImg = () => {
  return (
    <>
      <div className="products">
        <AliceCarousel autoPlay autoPlayInterval="3000">
          <img
            src="https://trivediravi.com/wp-content/uploads/2020/04/career-home.png"
            className="sliderimg"
            alt=""
          />
          <img
            src="https://trivediravi.com/wp-content/uploads/2020/04/horoscope-home.png"
            className="sliderimg"
            alt=""
          />
          <img
            src="https://trivediravi.com/wp-content/uploads/2020/04/office-vastu-home.png"
            className="sliderimg"
            alt=""
          />
          <img
            src="https://trivediravi.com/wp-content/uploads/2020/04/numerology-home.png"
            className="sliderimg"
            alt=""
          />
          <img
            src="https://trivediravi.com/wp-content/uploads/2020/04/vastu-home.png"
            className="sliderimg"
            alt=""
          />
        </AliceCarousel>{" "}
      </div>
    </>
  );
};
