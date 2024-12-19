import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WOW from "wowjs";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css"; 
import "../assets/lib/animate/animate.min.css";
import "../assets/lib/lightbox/css/lightbox.min.css";
import FeatureSection from "../components/FeatureSection";
import ServiceSection from "../components/ServiceSection";
import AboutUsSection from "../components/AboutUsSection";
import WhyToChooseUs from "../components/WhyToChooseUs";
import ProjectSection from "../components/ProjectSection";
import GetAFreeQuoteSection from "../components/GetAFreeQuoteSection";
import TeamSection from "../components/TeamSection";
import TestimonialSection from "../components/TestimonialSection";


const HomePage = () => {
  useEffect(() => {
    new WOW.WOW().init(); // Initialize WOW.js for animations
  }, []);

  const carouselItems = [
    {
      img: "/assets/img/carousel-1.jpg",
      title: "Pioneers Of Solar And <br /> Renewable Energy",
      description: "Leading the way in providing innovative and sustainable solar and renewable energy solutions.",
      buttonText: "Read More",
    },
    {
      img: "/assets/img/carousel-2.jpg",
      title: "Trusted Renewable Energy Partner",
      description: "Your reliable partner in transitioning to efficient and clean energy for a better future.",
      buttonText: "Discover Now",
    },
    {
      img: "/assets/img/carousel-3.jpg",
      title: "Innovative Energy Solutions",
      description: "Offering cutting-edge energy technologies to meet your modern energy needs.",
      buttonText: "Explore More",
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
      <FeatureSection />

      {/* About Us Section */}
      <AboutUsSection />

      {/* Services Section */}
      <ServiceSection />

      {/* Why To Choose Us Section */}
      <WhyToChooseUs />

      {/* Project Section */}
      <ProjectSection />

      {/* Get A Free Quote Section */}
      <GetAFreeQuoteSection />

      {/* Team Section */}
      <TeamSection />

      {/* Testimonial Section */}
      <TestimonialSection />

    </>
  );
};

export default HomePage;
