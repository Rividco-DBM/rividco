import React from 'react';

const Footer = () => (
  <div className="container-fluid bg-dark text-light pt-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <h5>Contact</h5>
          <p>123 Street, New York, USA</p>
          <p>+012 345 67890</p>
        </div>
        <div className="col-lg-4">
          <h5>Links</h5>
          <a href="#">About Us</a>
          <a href="#">Services</a>
        </div>
        <div className="col-lg-4">
          <h5>Newsletter</h5>
          <input placeholder="Your Email" />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
