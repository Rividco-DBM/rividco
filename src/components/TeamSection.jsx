import React, { useEffect } from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/lib/animate/animate.min.css";
import "../assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "../assets/lib/lightbox/css/lightbox.min.css";

const TeamSection = () => {
  const teamMembers = [
    { image: "assets/img/team-1.jpg", name: "Alice Johnson", designation: "Project Manager" },
    { image: "assets/img/team-2.jpg", name: "Michael Brown", designation: "Lead Engineer" },
    { image: "assets/img/team-3.jpg", name: "Sarah Wilson", designation: "UX Designer" },
    { image: "assets/img/team-2.jpg", name: "David Clark", designation: "QA Specialist" },
    { image: "assets/img/team-3.jpg", name: "Emily Davis", designation: "Marketing Lead" },
    { image: "assets/img/team-1.jpg", name: "John Smith", designation: "Sales Manager" },
  ];

  useEffect(() => {
    // Initialize WOW.js for animations
    const WOW = require("wowjs");
    new WOW.WOW({ live: false }).init();
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h6 className="text-primary">Team Member</h6>
          <h1 className="mb-4">Experienced Team Members</h1>
        </div>
        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.1 * (index + 1)}s`}
              key={index}
            >
              <div className="team-item rounded overflow-hidden">
                <div className="d-flex">
                  <img className="img-fluid w-75" src={member.image} alt={member.name} />
                  <div className="team-social w-25">
                    <a
                      className="btn btn-lg-square btn-outline-primary rounded-circle mt-3"
                      href="#"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-lg-square btn-outline-primary rounded-circle mt-3"
                      href="#"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-lg-square btn-outline-primary rounded-circle mt-3"
                      href="#"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="p-4">
                  <h5>{member.name}</h5>
                  <span>{member.designation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
