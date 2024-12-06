import React, { useState, useEffect } from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/lib/animate/animate.min.css";
import "../assets/lib/lightbox/css/lightbox.min.css";
import WOW from "wowjs";

const ProjectSection = () => {
  const [activeFilter, setActiveFilter] = useState("*");
  const [filteredProjects, setFilteredProjects] = useState([]);

  const projects = [
    { img: "/assets/img/img-600x400-6.jpg", title: "Solar Panels", category: "first" },
    { img: "/assets/img/img-600x400-5.jpg", title: "Wind Turbines", category: "second" },
    { img: "/assets/img/img-600x400-4.jpg", title: "Hydropower Plants", category: "third" },
    { img: "/assets/img/img-600x400-3.jpg", title: "Solar Panels", category: "first" },
    { img: "/assets/img/img-600x400-2.jpg", title: "Wind Turbines", category: "second" },
    { img: "/assets/img/img-600x400-1.jpg", title: "Hydropower Plants", category: "third" },
  ];

  const filters = [
    { label: "All", value: "*" },
    { label: "Solar Panels", value: "first" },
    { label: "Wind Turbines", value: "second" },
    { label: "Hydropower Plants", value: "third" },
  ];

  useEffect(() => {
    if (activeFilter === "*") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((project) => project.category === activeFilter));
    }

    // Initialize WOW.js for animations
    new WOW.WOW().init();

    // Initialize Lightbox
    const lightbox = require("lightbox2");
    lightbox.option({
      resizeDuration: 200,
      wrapAround: true,
      fadeDuration: 300,
      imageFadeDuration: 300,
    });
  }, [activeFilter]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.05s"
          style={{ maxWidth: "600px" }}
        >
          <h6 className="text-primary">Our Projects</h6>
          <h1 className="mb-4">Visit Our Latest Solar And Renewable Energy Projects</h1>
        </div>
        <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
          <div className="col-12 text-center">
            <ul className="list-inline mb-5" id="portfolio-filters">
              {filters.map((filter) => (
                <li
                  key={filter.value}
                  className={`mx-2 ${activeFilter === filter.value ? "active" : ""}`}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleFilterChange(filter.value)}
                >
                  {filter.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.05s">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 portfolio-item ${project.category} wow fadeInUp`}
              data-wow-delay={`${index * 0.2}s`}
            >
              <div className="portfolio-img rounded overflow-hidden">
                <img
                  className="img-fluid"
                  src={project.img}
                  alt={project.title}
                  style={{ animation: "fadeIn 1s ease" }}
                />
                <div className="portfolio-btn">
                  <a
                    className="btn btn-lg-square btn-outline-light rounded-circle mx-1"
                    href={project.img}
                    data-lightbox="portfolio"
                    data-title={project.title}
                  >
                    <i className="fa fa-eye"></i>
                  </a>
                  <a
                    className="btn btn-lg-square btn-outline-light rounded-circle mx-1"
                    href="#"
                  >
                    <i className="fa fa-link"></i>
                  </a>
                </div>
              </div>
              <div className="pt-3">
                <p className="text-primary mb-0">{project.title}</p>
                <hr className="text-primary w-25 my-2" />
                <h5 className="lh-base">
                  We Are pioneers of solar & renewable energy industry
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
