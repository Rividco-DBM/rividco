import React from 'react';

const Topbar = () => (
  <div className="container-fluid bg-dark p-0">
    <div className="row gx-0 d-none d-lg-flex">
      <div className="col-lg-7 px-5 text-start">
        <div className="h-100 d-inline-flex align-items-center me-4">
          <small className="fa fa-map-marker-alt text-primary me-2"></small>
          <small>91/1/8 , Cemetery road , Mavithtara , Piliyandala</small>
        </div>
        <div className="h-100 d-inline-flex align-items-center">
          <small className="far fa-clock text-primary me-2"></small>
          <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
        </div>
      </div>
      <div className="col-lg-5 px-5 text-end">
        <div className="h-100 d-inline-flex align-items-center me-4">
          <small className="fa fa-phone-alt text-primary me-2"></small>
          <small>+94 11 2714899</small>
        </div>
        <div className="h-100 d-inline-flex align-items-center mx-n2">
          {['facebook-f', 'twitter', 'linkedin-in', 'instagram'].map((icon, idx) => (
            <a
            className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary"
            href={icon === 'facebook-f' ? 'https://www.facebook.com/RIVIDCO' : '#'}
            key={idx}
            target="_blank"
            rel="noopener noreferrer"
          >

              <i className={`fab fa-${icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Topbar;
