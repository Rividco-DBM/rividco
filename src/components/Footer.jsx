import React from "react";

const Footer = () => (
  <div className="container-fluid bg-dark text-body footer mt-5 pt-5">
    <div className="container py-5">
      <div className="row g-5">
        {/* Address Section */}
        <div className="col-lg-3 col-md-6">
          <h5 className="text-white mb-4">Address</h5>
          <p>
            <i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA
          </p>
          <p>
            <i className="fa fa-phone-alt me-3"></i>+012 345 67890
          </p>
          <p>
            <i className="fa fa-envelope me-3"></i>info@example.com
          </p>
          <div className="d-flex pt-2">
            {["twitter", "facebook-f", "youtube", "linkedin-in"].map((icon, idx) => (
              <a
                className="btn btn-square btn-outline-light btn-social me-2"
                href="#"
                key={idx}
              >
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="col-lg-3 col-md-6">
          <h5 className="text-white mb-4">Quick Links</h5>
          {["About Us", "Contact Us", "Our Services", "Terms & Condition", "Support"].map(
            (link, idx) => (
              <a className="btn btn-link text-body" href="#" key={idx}>
                {link}
              </a>
            )
          )}
        </div>

        {/* Project Gallery Section */}
        <div className="col-lg-3 col-md-6">
          <h5 className="text-white mb-4">Project Gallery</h5>
          <div className="row g-2">
            {Array.from({ length: 6 }, (_, idx) => (
              <div className="col-4" key={idx}>
                <img
                  className="img-fluid rounded"
                  src={`/assets/img/gallery-${idx + 1}.jpg`}
                  alt={`Gallery ${idx + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="col-lg-3 col-md-6">
          <h5 className="text-white mb-4">Newsletter</h5>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div
            className="position-relative mx-auto"
            style={{ maxWidth: "400px" }}
          >
            <input
              className="form-control border-0 w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
            <button
              type="button"
              className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Copyright Section */}
    <div className="container">
      <div className="copyright">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy; <a href="#">Your Site Name</a>, All Rights Reserved.
          </div>
          <div className="col-md-6 text-center text-md-end">
            Designed By <a href="https://htmlcodex.com">HTML Codex</a>
            <br />
            Distributed By <a href="https://themewagon.com" target="_blank" rel="noreferrer">ThemeWagon</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
