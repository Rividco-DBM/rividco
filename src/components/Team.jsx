import React from 'react';

const Team = () => (
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5">
        <h6 className="text-primary">Team Member</h6>
        <h1 className="mb-4">Experienced Team Members</h1>
      </div>
      <div className="row g-4">
        {[1, 2, 3].map((num) => (
          <div className="col-lg-4 col-md-6" key={num}>
            <div className="team-item rounded overflow-hidden">
              <img className="img-fluid w-100" src={`img/team-${num}.jpg`} alt="Team Member" />
              <h5>John Doe</h5>
              <p>Team Lead</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Team;
