import React, { useEffect, useState } from "react";
import WOW from "wowjs";
import axios from "axios";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/lib/animate/animate.min.css";
import "../assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "../assets/lib/lightbox/css/lightbox.min.css";

const ServiceSection = () => {
  const [services, setServices] = useState([]);

  const serviceCategories = [
    'Mini Hydro',
    'Rooftop Solar',
    'Ground-Mounted Solar',
    'Solar Battery Storage',
    'Energy Efficiency Consulting'
  ];

  const icons = {
    'Mini Hydro': 'fa-water',
    'Rooftop Solar': 'fa-solar-panel',
    'Ground-Mounted Solar': 'fa-lightbulb',
    'Solar Battery Storage': 'fa-battery-full',
    'Energy Efficiency Consulting': 'fa-lightbulb'
  };

  useEffect(() => {
    // Initialize WOW.js for animations
    new WOW.WOW().init();

    // Fetch data from the backend
    axios.get("https://rividco.vercel.app/api/services")
      .then(response => {
        console.log("Data retrieved from backend:", response.data);
        const servicesWithIcons = response.data.map(service => ({
          ...service,
          icon: icons[service.serviceCategory] || 'fa-solar-panel', // Default icon if category not found
        }));
        setServices(servicesWithIcons);
      })
      .catch(error => {
        console.error("Error fetching data from backend:", error);
      });
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h6 className="text-primary">Our Services</h6>
          <h1 className="mb-4">We Are Pioneers In The World Of Renewable Energy</h1>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay={`${0.1 + index * 0.2}s`}
              key={service._id}
            >
              <div className="service-item rounded overflow-hidden">
                <img
                  className="img-fluid"
                  src={service.image} // Use the Firebase URL directly
                  alt={service.service}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
                <div className="position-relative p-4 pt-0">
                  <div className="service-icon">
                    <i className={`fa ${service.icon} fa-3x`}></i>
                  </div>
                  <h4 className="mb-3">{service.service}</h4>
                  <p>{service.description}</p>
                  <a className="small fw-medium" href="#">
                    Read More<i className="fa fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;