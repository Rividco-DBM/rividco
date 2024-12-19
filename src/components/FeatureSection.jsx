import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import axios from "axios";
import './FeatureSection.css';

const FeatureSection = () => {
  const [features, setFeatures] = useState([
    { icon: "fa-users", value: 0, label: "Happy Customers" },
    { icon: "fa-check", value: 0, label: "Projects Done" },
    { icon: "fa-award", value: 1, label: "Awards Win" },
    { icon: "fa-users-cog", value: 10, label: "Expert Workers" },
  ]);

  useEffect(() => {
    // Fetch data from the backend
    axios.get("http://localhost:8080/api/summary")
      .then(response => {
        console.log("Data retrieved from backend:", response.data);
        const updatedFeatures = [
          { icon: "fa-users", value: response.data.totalProjects, label: "Happy Customers" },
          { icon: "fa-check", value: response.data.totalServices, label: "Services Provided" },
          { icon: "fa-award", value: 1, label: "Awards Win" },
          { icon: "fa-users-cog", value: 10, label: "Expert Workers" },
        ];
        setFeatures(updatedFeatures);
      })
      .catch(error => {
        console.error("Error fetching data from backend:", error);
      });
  }, []);

  return (
    <div className="container-xxl py-5">
      <span className="centered-text"></span>
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
};

export default FeatureSection;