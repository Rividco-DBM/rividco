import React from "react";
import ProjectSection from "../components/ProjectSection";

const ProjectPage = () => {
  return (
    <>
      {/* Page Header */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Projects</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Pages
                </a>
              </li>
              <li className="breadcrumb-item text-white active" aria-current="page">
                Projects
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Project Section */}
      <ProjectSection />
    </>
  );
};

export default ProjectPage;
