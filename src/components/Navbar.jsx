import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/img/logo.png';

const Navbar = () => {
  const location = useLocation();

  // Function to check if the current path matches the link
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
       <Link to="/" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
      <img src={Logo} alt="Solartec Logo" className="me-2" style={{ height: '40px' }} />
    </Link>
      <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Service', path: '/service' },
            { name: 'Project', path: '/project' },
            { name: 'Contact', path: '/contact' },
          ].map((link, idx) => (
            <Link
              to={link.path}
              className={`nav-item nav-link ${isActive(link.path) ? 'active' : ''}`}
              key={idx}
            >
              {link.name}
            </Link>
          ))}
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              Pages
            </a>
            <div className="dropdown-menu bg-light m-0">
              {[
                { name: 'Feature', path: '/feature' },
                { name: 'Free Quote', path: '/free-quote' },
                { name: 'Our Team', path: '/our-team' },
                { name: 'Testimonial', path: '/testimonial' },
                { name: '404 Page', path: '/404' },
              ].map((page, idx) => (
                <Link
                  to={page.path}
                  className={`dropdown-item ${isActive(page.path) ? 'active' : ''}`}
                  key={idx}
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <a href="/free-quote" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">
          Get A Quote <i className="fa fa-arrow-right ms-3"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
