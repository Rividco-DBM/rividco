import React from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/lib/animate/animate.min.css";
import "../assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "../assets/lib/lightbox/css/lightbox.min.css";
import FeatureSection from "../components/FeatureSection";
import WhyToChooseUs from "../components/WhyToChooseUs";

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


      <FeatureSection />
      {/* Feature Section End */}

      <WhyToChooseUs />
      {/* Feature Section End */}

    </>
  );
};

export default FeaturePage;
