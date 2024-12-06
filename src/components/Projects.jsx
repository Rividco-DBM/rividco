import React from 'react';

const Projects = () => (
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5">
        <h6 className="text-primary">Our Projects</h6>
        <h1 className="mb-4">Latest Renewable Energy Projects</h1>
      </div>
      <div className="row g-4">
        {['Solar Panels', 'Wind Turbines', 'Hydropower Plants'].map((project, idx) => (
          <div className="col-lg-4 col-md-6" key={idx}>
            <div className="project-item rounded overflow-hidden">
              <img className="img-fluid" src={`img/img-600x400-${idx + 1}.jpg`} alt={project} />
              <div className="project-info">
                <h5>{project}</h5>
                <p>Innovative renewable energy projects worldwide.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
