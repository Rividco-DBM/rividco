import React from 'react';

const Services = () => (
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5">
        <h6 className="text-primary">Our Services</h6>
        <h1 className="mb-4">We Are Pioneers In Renewable Energy</h1>
      </div>
      <div className="row g-4">
        {[
          { title: 'Solar Panels', img: 'img/img-600x400-1.jpg', icon: 'fa-solar-panel' },
          { title: 'Wind Turbines', img: 'img/img-600x400-2.jpg', icon: 'fa-wind' },
          { title: 'Hydropower Plants', img: 'img/img-600x400-3.jpg', icon: 'fa-lightbulb' },
        ].map((service, idx) => (
          <div className="col-md-6 col-lg-4" key={idx}>
            <div className="service-item rounded overflow-hidden">
              <img className="img-fluid" src={service.img} alt={service.title} />
              <div className="position-relative p-4 pt-0">
                <div className="service-icon">
                  <i className={`fa ${service.icon} fa-3x`}></i>
                </div>
                <h4 className="mb-3">{service.title}</h4>
                <p>Providing cutting-edge solutions in renewable energy.</p>
                <a href="#" className="small fw-medium">
                  Read More <i className="fa fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Services;
