import React from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/lib/animate/animate.min.css";
import "../assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "../assets/lib/lightbox/css/lightbox.min.css";
import CountUp from "react-countup";


const AboutPage = () => {
    const features = [
        { icon: "fa-users", value: 3453, label: "Happy Customers" },
        { icon: "fa-check", value: 4234, label: "Project Done" },
        { icon: "fa-award", value: 3123, label: "Awards Win" },
        { icon: "fa-users-cog", value: 1831, label: "Expert Workers" },
      ];
      
  return (
    <>
      
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a className="text-white" href="/">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="/pages">
                  Pages
                </a>
              </li>
              <li className="breadcrumb-item text-white active" aria-current="page">
                About
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

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

      {/* About Section Start */}
      <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div className="container about px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div
              className="col-lg-6 ps-lg-0 wow fadeIn"
              data-wow-delay="0.1s"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="/assets/img/about.jpg"
                  alt="About Us"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
              <div className="p-lg-5 pe-lg-0">
                <h6 className="text-primary">About Us</h6>
                <h1 className="mb-4">25+ Years Experience In Solar & Renewable Energy Industry</h1>
                <p>
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                  eos.
                </p>
                <p>
                  <i className="fa fa-check-circle text-primary me-3"></i> Diam dolor diam ipsum
                </p>
                <p>
                  <i className="fa fa-check-circle text-primary me-3"></i> Aliqu diam amet diam et eos
                </p>
                <p>
                  <i className="fa fa-check-circle text-primary me-3"></i> Tempor erat elitr rebum
                </p>
                <a href="/" className="btn btn-primary rounded-pill py-3 px-5 mt-3">
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Section End */}
    </>
  );
};

export default AboutPage;
