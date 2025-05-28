import React from "react";
import { Consumer } from "../context";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

function Project() {
  return (
    <Consumer>
      {({ projects }) => (
        <div className="p-5 container">
          <h1 className="text-center text-dark fw-light">
            MY <span style={{ color: "purple" }}>PROJECTS</span>
          </h1>
          <p className="text-light text-center">These are some of my works</p>
          <div className="row">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="col-12 col-md-4 pt-2">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          <div className="mt-5 text-end">
            <Link
              className="text-light text-decoration-none"
              to="/projectpage"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            >
              <h5>See all projects →</h5>
            </Link>
          </div>
        </div>
      )}
    </Consumer>
  );
}

export default Project;

