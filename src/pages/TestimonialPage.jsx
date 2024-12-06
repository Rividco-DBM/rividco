import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/lib/animate/animate.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TestimonialSection from "../components/TestimonialSection";

const TestimonialPage = () => {
  

  return (
    <>
      {/* Page Header */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Testimonial</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Pages
                </a>
              </li>
              <li className="breadcrumb-item text-white active" aria-current="page">
                Testimonial
              </li>
            </ol>
          </nav>
        </div>
      </div>


      {/* Testimonial Section */}
      <TestimonialSection/>
    </>
  );
};

export default TestimonialPage;
