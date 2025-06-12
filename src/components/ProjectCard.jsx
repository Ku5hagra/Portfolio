import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGlobe } from "react-icons/fa";

function ProjectCard({ project }) {
  const { id, title, description, imageurl, github, live } = project;

  return (
    <div className="card h-100 p-0 position-relative project-card">
      <div className="image-container">
        <img
          className="card-img-top"
          style={{ height: "250px", objectFit: "cover" }}
          src={imageurl}
          alt={title}
        />
        <div className="overlay">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaGithub size={28} className="mx-2 text-light" />
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer">
              <FaGlobe size={28} className="mx-2 text-light" />
            </a>
          )}
        </div>
      </div>

      <div className="card-body text-center">
        <h4 className="card-title fw-light">{title}</h4>
        <p className="card-text">{description}</p>
      </div>

      {/* Removed stretched-link from here */}
      <Link
        to={`/project/${id}`}
        className="full-card-link"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </div>
  );
}

export default ProjectCard;
