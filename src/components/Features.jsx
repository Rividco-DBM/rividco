import React from 'react';

const Features = () => (
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5">
        {[
          { icon: 'fa-users', count: 3453, title: 'Happy Customers' },
          { icon: 'fa-check', count: 4234, title: 'Projects Done' },
          { icon: 'fa-award', count: 3123, title: 'Awards Won' },
          { icon: 'fa-users-cog', count: 1831, title: 'Expert Workers' },
        ].map((feature, idx) => (
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay={`${0.2 * idx}s`} key={idx}>
            <div className="d-flex align-items-center mb-4">
              <div className="btn-lg-square bg-primary rounded-circle me-3">
                <i className={`fa ${feature.icon} text-white`}></i>
              </div>
              <h1 className="mb-0">{feature.count}</h1>
            </div>
            <h5 className="mb-3">{feature.title}</h5>
            <span>Providing excellence in solar solutions.</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Features;
