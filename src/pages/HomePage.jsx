import React, { useEffect } from "react";
import Slider from "react-slick";
import CountUp from "react-countup";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WOW from "wowjs";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css"; 
import "../assets/lib/animate/animate.min.css";
import "../assets/lib/lightbox/css/lightbox.min.css";


const HomePage = () => {
  useEffect(() => {
    new WOW.WOW().init(); // Initialize WOW.js for animations
  }, []);

  const carouselItems = [
    {
      img: "/assets/img/carousel-1.jpg",
      title: "Pioneers Of Solar And <br /> Renewable Energy",
      description: "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.",
      buttonText: "Read More",
    },
    {
      img: "/assets/img/carousel-2.jpg",
      title: "Trusted Renewable Energy Partner",
      description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
      buttonText: "Discover Now",
    },
    {
      img: "/assets/img/carousel-3.jpg",
      title: "Innovative Energy Solutions",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttonText: "Explore More",
    },
  ];

  const features = [
    { icon: "fa-users", value: "3453", label: "Happy Customers" },
    { icon: "fa-check", value: "4234", label: "Project Done" },
    { icon: "fa-award", value: "3123", label: "Awards Win" },
    { icon: "fa-users-cog", value: "1831", label: "Expert Workers" },
  ];

  const services = [
    {
      img: "/assets/img/img-600x400-1.jpg",
      icon: "fa-solar-panel",
      title: "Solar Panels",
      description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    },
    {
      img: "/assets/img/img-600x400-2.jpg",
      icon: "fa-wind",
      title: "Wind Turbines",
      description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    },
    {
      img: "/assets/img/img-600x400-3.jpg",
      icon: "fa-lightbulb",
      title: "Hydropower Plants",
      description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      {/* Carousel Section */}
      <div className="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
        <Slider {...sliderSettings} className="header-carousel position-relative">
          {carouselItems.map((item, index) => (
            <div className="carousel-slide" key={index}>
              <img className="img-fluid" src={item.img} alt={`Slide ${index + 1}`} />
              <div className="carousel-overlay">
              <h1
              className="carousel-title"
              dangerouslySetInnerHTML={{ __html: item.title }} // Safely render HTML
            />
                <p className="carousel-description">{item.description}</p>
                <a href="#" className="btn btn-primary rounded-pill py-3 px-5">
                  {item.buttonText}
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Features Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            {features.map((feature, index) => (
              <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay={`${index * 0.2}s`} key={index}>
                <div className="d-flex align-items-center mb-4">
                  <div className="btn-lg-square bg-primary rounded-circle me-3">
                    <i className={`fa ${feature.icon} text-white`}></i>
                  </div>
                  <h1 className="mb-0">
                    <CountUp start={0} end={feature.value} duration={2.5} separator="," />
                  </h1>
                </div>
                <h5 className="mb-3">{feature.label}</h5>
                <span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" style={{ maxWidth: "600px" }}>
            <h6 className="text-primary">Our Services</h6>
            <h1 className="mb-4">We Are Pioneers In The World Of Renewable Energy</h1>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-md-6 col-lg-4 wow fadeInUp" key={index}>
                <div className="service-item rounded overflow-hidden">
                  <img className="img-fluid" src={service.img} alt={service.title} />
                  <div className="position-relative p-4 pt-0">
                    <div className="service-icon">
                      <i className={`fa ${service.icon} fa-3x`}></i>
                    </div>
                    <h4 className="mb-3">{service.title}</h4>
                    <p>{service.description}</p>
                    <a className="small fw-medium" href="#">
                      Read More<i className="fa fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
