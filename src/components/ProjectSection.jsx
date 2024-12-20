import React, { useState, useEffect } from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/lib/animate/animate.min.css";
import "../assets/lib/lightbox/css/lightbox.min.css";
import WOW from "wowjs";
import axios from "axios";

const ProjectSection = () => {
  const [activeFilter, setActiveFilter] = useState("*");
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filters, setFilters] = useState([{ label: "All", value: "*" }]);

  useEffect(() => {
    // Fetch data from the backend
    axios.get("https://rividco-backend.vercel.app/api/projects")
      .then(response => {
        console.log("Data retrieved from backend:", response.data);
        setProjects(response.data);
        setFilteredProjects(response.data);

        // Extract unique categories from the projects
        const categories = [...new Set(response.data.map(project => project.category))];
        const categoryFilters = categories.map(category => ({ label: category, value: category }));
        setFilters([{ label: "All", value: "*" }, ...categoryFilters]);
      })
      .catch(error => {
        console.error("Error fetching data from backend:", error);
      });

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
  }, []);

  useEffect(() => {
    if (activeFilter === "*") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((project) => project.category === activeFilter));
    }
  }, [activeFilter, projects]);

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
              key={project._id}
              className={`col-lg-4 col-md-6 portfolio-item ${project.category} wow fadeInUp`}
              data-wow-delay={`${index * 0.2}s`}
            >
              <div className="portfolio-img rounded overflow-hidden" style={{ width: "100%", height: "250px" }}>
                <img
                  className="img-fluid"
                  src={project.images[0]} // Use the Firebase URL directly
                  alt={project.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div className="portfolio-btn">
                  <a
                    className="btn btn-lg-square btn-outline-light rounded-circle mx-1"
                    href={project.images[0]} // Use the Firebase URL directly
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
                <h5
                  className="lh-base"
                  style={{
                    textAlign: "justify",
                    fontWeight: "normal",
                    color: "#555",
                    lineHeight: "1.6",
                    marginTop: "10px",
                  }}
                >
                  {project.description}
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
