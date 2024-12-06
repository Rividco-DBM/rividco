import React from 'react';

const PageHeader = ({ title, breadcrumb }) => (
  <div className="container-fluid page-header py-5 mb-5">
    <div className="container py-5">
      <h1 className="display-3 text-white mb-3 animated slideInDown">{title}</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb">
          {breadcrumb.map((item, idx) => (
            <li
              className={`breadcrumb-item ${idx === breadcrumb.length - 1 ? 'text-white active' : ''}`}
              key={idx}
              aria-current={idx === breadcrumb.length - 1 ? 'page' : undefined}
            >
              <a className="text-white" href="#">
                {item}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  </div>
);

export default PageHeader;
