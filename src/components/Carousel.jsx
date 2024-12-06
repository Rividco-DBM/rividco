import React from 'react';

const Carousel = () => (
  <div className="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="owl-carousel header-carousel position-relative">
      {[1, 2, 3].map((num) => (
        <div className="owl-carousel-item position-relative" key={num} data-dot={`<img src='img/carousel-${num}.jpg'>`}>
          <img className="img-fluid" src={`./assets/img/carousel-${num}.jpg`} alt={`Slide ${num}`} />
          <div className="owl-carousel-inner">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-2 text-white animated slideInDown">
                    Pioneers Of Solar And Renewable Energy
                  </h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-3">
                    Leading the world in solar and renewable energy solutions.
                  </p>
                  <a href="#" className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Carousel;
