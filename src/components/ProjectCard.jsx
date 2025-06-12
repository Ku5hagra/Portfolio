import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGlobe } from "react-icons/fa";

function ProjectCard({ project }) {
  const { id, title, description, imageurl, github, live } = project;

  return (
    <div
      className="card h-100 position-relative border-0 shadow-lg project-card overflow-hidden"
      style={{
        background: "#1c1c1c",
        borderRadius: "16px",
        transition: "transform 0.3s ease",
      }}
    >
      <div className="image-container position-relative">
        <img
          src={imageurl}
          alt={title}
          className="card-img-top"
          style={{
            height: "230px",
            objectFit: "cover",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
          }}
        />
        <div className="overlay">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaGithub size={26} className="mx-3 text-white" />
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer">
              <FaGlobe size={26} className="mx-3 text-white" />
            </a>
          )}
        </div>
      </div>

      <div className="card-body text-light text-center px-3 pb-4">
        <h4 className="card-title " style={{ color: "#00f0ff" }}>{title}</h4>
        <p className="card-text small">{description}</p>
      </div>

      <Link
        to={`/project/${id}`}
        className="stretched-link"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </div>
  );
}

export default ProjectCard;
