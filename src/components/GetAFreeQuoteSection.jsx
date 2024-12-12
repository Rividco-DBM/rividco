import React, { useState } from "react";
import axios from "axios"; // Import axios

const GetAFreeQuoteSection = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: '',
    note: ''
  });

  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);


  // 2. Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // 3. Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setLoading(true);
    setError(null);
    setSuccess(null);

    // 4. Send data to backend using axios
    try {
      console.log("hi");
      const response = await axios.post("http://localhost:8080/api/quote", formData );

      console.log(response);

      if (response.data.success) {
        setSuccess("Your request has been submitted successfully!");
      } else {
        setError(response.data.message || "An error occurred.");
      }
    } catch (err) {
      // Handle any errors from the server or network issues
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid bg-light overflow-hidden px-lg-0" style={{ margin: "6rem 0" }}>
      <div className="container quote px-lg-0">
        <div className="row g-0 mx-lg-0">
          <div
            className="col-lg-6 ps-lg-0 wow fadeIn"
            data-wow-delay="0.1s"
            style={{ minHeight: "400px" }}
          >
            <div className="position-relative h-100">
              <img
                className="position-absolute img-fluid w-100 h-100"
                src="assets/img/quote.jpg"
                style={{ objectFit: "cover" }}
                alt="Free Quote"
              />
            </div>
          </div>
          <div className="col-lg-6 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
            <div className="p-lg-5 pe-lg-0">
              <h6 className="text-primary">Free Quote</h6>
              <h1 className="mb-4">Get A Free Quote</h1>

              {/* Success/Error Messages */}
              {success && <div className="alert alert-success">{success}</div>}
              {error && <div className="alert alert-danger">{error}</div>}

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Your Name"
                      style={{ height: "55px" }}
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="email"
                      className="form-control border-0"
                      placeholder="Your Email"
                      style={{ height: "55px" }}
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Your Mobile"
                      style={{ height: "55px" }}
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <select
                      className="form-select border-0"
                      style={{ height: "55px" }}
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                    >
                      <option value="">Select A Service</option>
                      <option value="Solar">Solar</option>
                      <option value="Mini Hydro">Mini Hydro</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control border-0"
                      placeholder="Special Note"
                      name="note"
                      value={formData.note}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary rounded-pill py-3 px-5" type="submit" disabled={loading}>
                      {loading ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAFreeQuoteSection;

