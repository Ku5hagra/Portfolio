import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "./context";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import ProjectPage from "./components/ProjectPage";
import SingleProject from "./components/SingleProject";
import BlogPage from "./components/BlogPage";
import SingleBlog from "./components/SingleBlog";
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";

export default function EmbedApp() {
  return (
    <Provider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projectpage" element={<ProjectPage />} />
          <Route path="/project/:id" element={<SingleProject />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}
