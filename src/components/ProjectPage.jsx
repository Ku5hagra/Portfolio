import React from "react";
import { Consumer } from "../context";
import ProjectCard from "./ProjectCard";
import { Zoom } from "react-awesome-reveal";
import { v4 as uuid } from "uuid";

export default function ProjectPage() {
  return (
    <Consumer>
      {({ projects }) => (
        <div className="p-5 container-fluid">
          <h1 style={{ color: "white" }} className="t text-center pt-5">
            MY <span style={{ color: "#00f0ff",
              textShadow: "0 0 6px #00f0ff" }}>PROJECTS</span>
          </h1>
          <p style={{ color: "white" }} className="font-weight-light text-center pb-5">
            These are some of my works
          </p>
          <div className="row">
            {projects.map((project) => (
              <div
                key={uuid()}
                className="col-12 mr-auto ml-auto col-md-6 pt-1"
              >
                <Zoom>
                  <ProjectCard project={project} />
                </Zoom>
              </div>
            ))}
          </div>
        </div>
      )}
    </Consumer>
  );
}
