import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spinner from "./components/Spinner";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./components/NotFound";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
import FeaturePage from "./pages/FeaturePage";
import ProjectPage from "./pages/ProjectPage";
import QuotePage from "./pages/QuotePage";
import TeamPage from "./pages/TeamPage";
import TestimonialPage from "./pages/TestimonialPage";

const App = () => {
  const [loading, setLoading] = useState(true); // Spinner visibility state

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setLoading(false); // Hide spinner after content is ready
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (loading) {
    // Render only the spinner if loading
    return <Spinner />;
  }

  return (
    <Router>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/feature" element={<FeaturePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/free-quote" element={<QuotePage />} />
        <Route path="/our-team" element={<TeamPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
