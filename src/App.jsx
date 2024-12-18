import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Spinner from "./components/Spinner";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFoundPage";
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
    <HelmetProvider>
    {/* Default metadata for the entire application */}
    <Helmet>
    <title>RividCo - Innovative Solar Panel Solutions</title>
    <meta 
      name="description" 
      content="RividCo specializes in providing innovative and eco-friendly solar panel solutions. Discover our cutting-edge technology to power a sustainable future." 
    />
    <meta 
      name="keywords" 
      content="RividCo, solar panels, renewable energy, sustainable solutions, eco-friendly technology, solar power, green energy solutions" 
    />
    <meta name="author" content="RividCo Team" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="RividCo - Innovative Solar Panel Solutions" />
    <meta 
      property="og:description" 
      content="Join the solar revolution with RividCo! Explore top-notch solar panel systems designed to maximize efficiency and sustainability." 
    />
    <meta property="og:url" content="https://rividco.netlify.app/>
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://www.rividco.com/images/solar-panel.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="RividCo - Innovative Solar Panel Solutions" />
    <meta 
      name="twitter:description" 
      content="Discover RividCo's innovative solar panel solutions for sustainable energy. Power your future with renewable technology." 
    />
    <meta name="twitter:image" content="https://www.rividco.com/images/solar-panel.jpg" />
  </Helmet>
    
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
    </HelmetProvider> 
  );
};

export default App;
