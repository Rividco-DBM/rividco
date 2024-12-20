import React from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/lib/animate/animate.min.css";

const AboutUsSection = () => {
  return (
    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
      <div className="container about px-lg-0">
        <div className="row g-0 mx-lg-0">
          {/* Left Image Section */}
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

          {/* Right Text Section */}
          <div className="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
            <div className="p-lg-5 pe-lg-0">
              <h6 className="text-primary">About Us</h6>
              <h1 className="mb-4">7 Years Experience In Solar & Renewable Energy Industry</h1>
              <p>We believe in:</p>
              <p>
                <i className="fa fa-check-circle text-primary me-3"></i>Innovative solutions that
                push the boundaries of renewable energy
              </p>
              <p>
                <i className="fa fa-check-circle text-primary me-3"></i>Sustainable development that
                benefits communities
              </p>
              <p>
                <i className="fa fa-check-circle text-primary me-3"></i>Technical excellence and
                strategic project implementation
              </p>
              <p>
                <i className="fa fa-check-circle text-primary me-3"></i>Creating a cleaner, more
                sustainable future for all
              </p>
              <a href="/" className="btn btn-primary rounded-pill py-3 px-5 mt-3">
                Explore More
              </a>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="row g-4 mt-5">
          <h1 className="text-center mb-4">Our Values</h1>
          <div className="col-md-3 col-sm-6 text-center">
            <i className="fa fa-check-circle text-primary mb-2" style={{ fontSize: "2rem" }}></i>
            <h5>Integrity</h5>
            <p>We always do what is right</p>
          </div>
          <div className="col-md-3 col-sm-6 text-center">
            <i className="fa fa-users text-primary mb-2" style={{ fontSize: "2rem" }}></i>
            <h5>Teamwork</h5>
            <p>We are better together</p>
          </div>
          <div className="col-md-3 col-sm-6 text-center">
            <i className="fa fa-handshake text-primary mb-2" style={{ fontSize: "2rem" }}></i>
            <h5>Commitment</h5>
            <p>We are dedicated to our people and customers</p>
          </div>
          <div className="col-md-3 col-sm-6 text-center">
            <i className="fa fa-star text-primary mb-2" style={{ fontSize: "2rem" }}></i>
            <h5>Excellence</h5>
            <p>We are passionate about quality</p>
          </div>
        </div>

                {/* Logos Section */}
                <div className="row g-4 mt-5 text-center">
                <p className="text-center mb-3">
                  We are a registered service provider under the Sustainable Energy Authority.
                </p>
                <div className="col-3">
                  <img
                    src="/assets/img/registered-authorities-slsea.png"
                    alt="Sustainable Energy Authority"
                    className="img-fluid"
                    style={{ maxHeight: "100px" }}
                  />
                </div>
                <div className="col-3">
                  <img
                    src="/assets/img/registered-authorities-ceb.png"
                    alt="CEB Logo"
                    className="img-fluid"
                    style={{ maxHeight: "100px" }}
                  />
                </div>
                <div className="col-3">
                  <img
                    src="/assets/img/registered-authorities-leco.webp"
                    alt="LECO Logo"
                    className="img-fluid"
                    style={{ maxHeight: "100px" }}
                  />
                </div>
                <div className="col-3">
                  <img
                    src="/assets/img/registered-authorities-ss.png"
                    alt="SS Logo"
                    className="img-fluid"
                    style={{ maxHeight: "100px" }}
                  />
                </div>
              </div>
      
      </div>
    </div>
  );
};

export default AboutUsSection;
