import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  const { id, title, description, imageurl } = project;

  return (
    <div className="card h-100 p-0 position-relative">
      <img
        className="card-img-top"
        style={{ height: "250px", objectFit: "cover" }}
        src={imageurl}
        alt={title}
      />
      <div className="card-body text-center">
        <h4 className="card-title fw-light">{title}</h4>
        <p className="card-text">{description}</p>
      </div>
      <Link
        to={`/project/${id}`}
        className="stretched-link"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      ></Link>
    </div>
  );
}

export default ProjectCard;
