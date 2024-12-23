import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/lib/animate/animate.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";
import BASE_URL from "../config"; // Import BASE_URL for API calls

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <i className="fa fa-chevron-right"></i>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <i className="fa fa-chevron-left"></i>
    </div>
  );
};

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch testimonials data from backend
    axios.get(`${BASE_URL}/testimonials`)
      .then((response) => {
        console.log("Testimonials fetched:", response.data);
        setTestimonials(response.data);
      })
      .catch((error) => {
        console.error("Error fetching testimonials:", error);
      });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h6 className="text-primary">Testimonial</h6>
          <h1 className="mb-4">What Our Clients Say!</h1>
        </div>
        <Slider
          {...sliderSettings}
          className="wow fadeInUp testimonial-slider"
          data-wow-delay="0.1s"
        >
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card-container" key={testimonial._id}>
              <div className="testimonial-item">
                <div className="testimonial-img position-relative">
                  <img
                    className="img-fluid rounded-circle mx-auto"
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{ width: "100px", height: "100px" }}
                  />
                  <div
                    className="btn-square bg-primary rounded-circle position-absolute"
                    style={{
                      bottom: "-20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <i className="fa fa-quote-left text-white"></i>
                  </div>
                </div>
                <div className="testimonial-text-card bg-white p-4 rounded shadow text-center">
                  <p className="mb-3">{testimonial.text}</p>
                  <h5 className="mb-1">{testimonial.name}</h5>
                  <span className="fst-italic">{testimonial.profession}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSection;
