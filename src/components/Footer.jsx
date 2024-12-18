import React, { useState } from "react";
import { subscribeNewsletter } from "../services/newsLetterService"; // Import the service

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle the subscription request
  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    const result = await subscribeNewsletter(email); // Call the service
    setMessage(result.message); // Update the UI with the response message
  };

  return (
    <div className="container-fluid bg-dark text-body footer mt-5 pt-5">
      <div className="container py-5">
        <div className="row g-5">
          {/* Address Section */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Address</h5>
            <p>
              <i className="fa fa-map-marker-alt me-3"></i>91/1/8, Cemetery Road, Mavithtara, Piliyandala
            </p>
            <p>
              <i className="fa fa-phone-alt me-3"></i>+94 11 2714899, +94 773365511
            </p>
            <p>
              <i className="fa fa-envelope me-3"></i>krishantha@rividco.com
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Quick Links</h5>
            {["About Us", "Our Services", "Projects", "Terms & Condition", "Contact Us"].map((link, idx) => (
              <a className="btn btn-link text-body" href="#" key={idx}>
                {link}
              </a>
            ))}
          </div>

          {/* Project Gallery */}
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
            <p>Stay updated with our latest projects and services.</p>
            <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
              <input
                className="form-control border-0 w-100 py-3 ps-4 pe-5"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                onClick={handleSubscribe}
              >
                SignUp
              </button>
            </div>
            {message && <p className="text-white mt-3">{message}</p>}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a href="https://www.rividco.com">Rividco Projects (Pvt) Ltd</a>, All Rights Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By <a href="#">Team Nova</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
