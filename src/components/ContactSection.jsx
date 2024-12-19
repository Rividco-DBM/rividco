import React, { useState } from "react";
import { sendContactForm } from "../services/contactService"; // Import the service function
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/lib/animate/animate.min.css";
import "../assets/lib/lightbox/css/lightbox.min.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await sendContactForm(formData);

    if (response.success) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Reset the form
    } else {
      setStatus(response.message);
    }
  };

  return (
    <div className="container-fluid bg-light overflow-hidden px-lg-0" style={{ margin: "6rem 0" }}>
      <div className="container contact px-lg-0">
        <div className="row g-0 mx-lg-0">
          <div className="col-lg-6 contact-text py-5">
            <div className="p-lg-5 ps-lg-0">
              <h6 className="text-primary">Contact Us</h6>
              <h1 className="mb-4">Feel Free To Contact Us</h1>
              <p className="mb-4">
                Please fill out the form below to contact us. We’ll get back to you as soon as
                possible.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Leave a message here"
                        style={{ height: "100px" }}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary rounded-pill py-3 px-5"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
                {status && <p className="mt-3">{status}</p>}
              </form>
            </div>
          </div>
          <div className="col-lg-6 pe-lg-0" style={{ minHeight: "400px" }}>
            <div className="position-relative h-100">
              <iframe
                className="position-absolute w-100 h-100"
                style={{ objectFit: "cover" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.694203099857!2d79.9401081!3d6.807003300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24f108ffde59f%3A0x8710572fec0f4836!2sRIVIDCO%20PROJECTS%20(PVT)%20LTD!5e0!3m2!1sen!2slk!4v1734614878828!5m2!1sen!2slk"
                frameBorder="0"
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title="RIVIDCO Projects Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
