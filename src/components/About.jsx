import React from 'react';

const About = () => (
  <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
    <div className="container about px-lg-0">
      <div className="row g-0 mx-lg-0">
        <div className="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s">
          <img className="img-fluid w-100 h-100" src="img/about.jpg" alt="About Us" />
        </div>
        <div className="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
          <div className="p-lg-5 pe-lg-0">
            <h6 className="text-primary">About Us</h6>
            <h1 className="mb-4">25+ Years Experience In Solar & Renewable Energy Industry</h1>
            <p>We lead the renewable energy industry with our innovative solutions and expert team.</p>
            <ul>
              {['Diam dolor diam ipsum', 'Aliqu diam amet diam et eos', 'Tempor erat elitr rebum at clita'].map(
                (text, idx) => (
                  <li key={idx}>
                    <i className="fa fa-check-circle text-primary me-3"></i>
                    {text}
                  </li>
                )
              )}
            </ul>
            <a href="#" className="btn btn-primary rounded-pill py-3 px-5 mt-3">
              Explore More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
