import React from "react";
import { Consumer } from "../context";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

function Project() {
  return (
    <Consumer>
      {({ projects }) => (
        <div className="p-5 container">
          <h1
            className="text-center fw-light mb-2"
            style={{
              color: "#ffffff", textShadow: "0 0 6px purple" 
              ,
              letterSpacing: "1px",
            }}
          >
            MY <span style={{ color: "#00f0ff",
              textShadow: "0 0 6px #00f0ff" }}>PROJECTS</span>
          </h1>
          <p className="text-center text-light mb-5 fs-5">
            A glimpse into some of the projects I’ve crafted
          </p>
          <div className="row g-4">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="col-12 col-md-6 col-lg-4">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          <div className="mt-4 text-end">
            <Link
              className="text-decoration-none"
              to="/projectpage"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <h5 style={{ color: "#00f0ff" }}>See all projects →</h5>
            </Link>
          </div>
        </div>
      )}
    </Consumer>
  );
}

export default Project;
