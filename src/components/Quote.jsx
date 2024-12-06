import React from 'react';

const Quote = () => (
  <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
    <div className="container px-lg-0">
      <div className="row g-0">
        <div className="col-lg-6">
          <img className="img-fluid w-100" src="img/quote.jpg" alt="Free Quote" />
        </div>
        <div className="col-lg-6 py-5">
          <h6 className="text-primary">Free Quote</h6>
          <h1 className="mb-4">Get a Free Quote</h1>
          <form>
            <input className="form-control mb-3" placeholder="Your Name" />
            <input className="form-control mb-3" placeholder="Your Email" />
            <textarea className="form-control mb-3" placeholder="Message"></textarea>
            <button className="btn btn-primary rounded-pill">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Quote;
