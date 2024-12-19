import React from "react";
import CountUp from "react-countup";
import './FeatureSection.css';


const features = [
  { icon: "fa-users", value: "99", label: "Happy Customers" },
  { icon: "fa-check", value: "100", label: "Project Done" },
  { icon: "fa-award", value: "1", label: "Awards Win" },
  { icon: "fa-users-cog", value: "10", label: "Expert Workers" },
];

const FeatureSection = () => (
  <div className="container-xxl py-5">
     <span className="centered-text" >  </span>
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
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default FeatureSection;
