import React from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/lib/animate/animate.min.css";
import "../assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "../assets/lib/lightbox/css/lightbox.min.css";
import CountUp from "react-countup";

const FeaturePage = () => {
  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Features</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a className="text-white" href="/">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Pages
                </a>
              </li>
              <li className="breadcrumb-item text-white active" aria-current="page">
                Features
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* Feature Section Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            {[
              {
                icon: "fa-users",
                count: 3453,
                title: "Happy Customers",
                description: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit",
              },
              {
                icon: "fa-check",
                count: 4234,
                title: "Project Done",
                description: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit",
              },
              {
                icon: "fa-award",
                count: 3123,
                title: "Awards Win",
                description: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit",
              },
              {
                icon: "fa-users-cog",
                count: 1831,
                title: "Expert Workers",
                description: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="col-md-6 col-lg-3 wow fadeIn"
                data-wow-delay={`${0.1 * (index + 1)}s`}
              >
                <div className="d-flex align-items-center mb-4">
                  <div className="btn-lg-square bg-primary rounded-circle me-3">
                    <i className={`fa ${feature.icon} text-white`}></i>
                  </div>
                  <h1 className="mb-0">
                    <CountUp start={0} end={feature.count} duration={2.5} separator="," />
                  </h1>
                </div>
                <h5 className="mb-3">{feature.title}</h5>
                <span>{feature.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Feature Section End */}

      {/* Why Choose Us Section Start */}
      <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div className="container feature px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 feature-text py-5">
              <div className="p-lg-5 ps-lg-0">
                <h6 className="text-primary">Why Choose Us!</h6>
                <h1 className="mb-4">Complete Commercial & Residential Solar Systems</h1>
                <p className="mb-4 pb-2">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam
                  et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat
                  amet
                </p>
                <div className="row g-4">
                  {[
                    { icon: "fa-check", title: "Quality Services" },
                    { icon: "fa-user-check", title: "Expert Workers" },
                    { icon: "fa-drafting-compass", title: "Free Consultation" },
                    { icon: "fa-headphones", title: "Customer Support" },
                  ].map((item, idx) => (
                    <div key={idx} className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="btn-lg-square bg-primary rounded-circle">
                          <i className={`fa ${item.icon} text-white`}></i>
                        </div>
                        <div className="ms-4">
                          <p className="mb-0">{item.title.split(" ")[0]}</p>
                          <h5 className="mb-0">{item.title.split(" ")[1]}</h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 pe-lg-0 wow fadeIn"
              data-wow-delay="0.5s"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="/assets/img/feature.jpg"
                  style={{ objectFit: "cover" }}
                  alt="Feature"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturePage;
