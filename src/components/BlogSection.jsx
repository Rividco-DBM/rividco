import React, { useState, useEffect } from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/lib/animate/animate.min.css";
import WOW from "wowjs";
import { fetchMediumBlogs } from "../services/mediumService";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState("");

  const blogsPerPage = 6;

  // Calculate the blogs to display for the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const blogData = await fetchMediumBlogs();
        setBlogs(blogData);
      } catch (err) {
        setError("Failed to load blogs. Please try again later.");
      }
    };

    loadBlogs();

    // Initialize WOW.js for animations
    new WOW.WOW().init();
  }, []);

  // Function to handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.05s"
          style={{ maxWidth: "600px" }}
        >
          <h6 className="text-primary">Our Blog</h6>
          <h1 className="mb-4">Latest Insights from Our Medium Blog</h1>
        </div>
        {error ? (
          <div className="alert alert-danger text-center">{error}</div>
        ) : (
          <>
            <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.05s">
              {currentBlogs.map((blog, index) => (
                <div
                  key={index}
                  className={`col-lg-4 col-md-6 portfolio-item wow fadeInUp`}
                  data-wow-delay={`${index * 0.2}s`}
                >
                  <div className="portfolio-img rounded overflow-hidden">
                    <img
                      className="img-fluid"
                      src={blog.thumbnail || "/assets/img/default-thumbnail.jpg"}
                      alt={blog.title}
                      style={{ animation: "fadeIn 1s ease" }}
                    />
                    <div className="portfolio-btn">
                      <a
                        className="btn btn-lg-square btn-outline-light rounded-circle mx-1"
                        href={blog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-link"></i>
                      </a>
                    </div>
                  </div>
                  <div className="pt-3">
                    <p className="text-primary mb-0">
                      {new Date(blog.pubDate).toLocaleDateString()}
                    </p>
                    <hr className="text-primary w-25 my-2" />
                    <h5 className="lh-base">{blog.title}</h5>
                    <p>
                      {blog.description.replace(/<[^>]+>/g, "").slice(0, 100)}...
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="mt-4 d-flex justify-content-center">
              <nav aria-label="Page navigation">
                <ul className="pagination">
                  {[...Array(totalPages).keys()].map((page) => (
                    <li
                      key={page}
                      className={`page-item ${currentPage === page + 1 ? "active" : ""}`}
                      onClick={() => handlePageChange(page + 1)}
                      style={{ cursor: "pointer" }}
                    >
                      <span className="page-link">{page + 1}</span>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogSection;
