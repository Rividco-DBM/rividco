import React, { useEffect, useState } from "react";
import WOW from "wowjs";
import axios from "axios";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/lib/animate/animate.min.css";
import "../assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "../assets/lib/lightbox/css/lightbox.min.css";

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    // Initialize WOW.js for animations
    new WOW.WOW().init();

    // Fetch data from the backend
    axios.get("https://rividco.vercel.app/api/employees")
      .then(response => {
        console.log("Data retrieved from backend:", response.data);
        setTeamMembers(response.data);
      })
      .catch(error => {
        console.error("Error fetching data from backend:", error);
      });
  }, []);

  const getSocialIconClass = (platform) => {
    switch (platform.toLowerCase()) {
      case "linkedin":
        return "fa-linkedin-in";
      case "twitter":
        return "fa-twitter";
      case "facebook":
        return "fa-facebook-f";
      case "instagram":
        return "fa-instagram";
      default:
        return "";
    }
  };

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
              key={member._id}
            >
              <div className="team-item rounded overflow-hidden d-flex flex-column">
                <div className="d-flex flex-grow-1">
                  <img
                    className="img-fluid w-75"
                    src={member.image} // Use the Firebase URL directly
                    alt={member.name}
                  />
                  <div className="team-social w-25 d-flex flex-column justify-content-center">
                    {member.socialMedia.map((social, idx) => (
                      <a
                        className="btn btn-lg-square btn-outline-primary rounded-circle mt-3"
                        href={social.link}
                        key={idx}
                      >
                        <i className={`fab ${getSocialIconClass(social.platform)}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="p-4">
                  <h5>{member.name}</h5>
                  <span>{member.jobTitle}</span>
                  <p>{member.description}</p>
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