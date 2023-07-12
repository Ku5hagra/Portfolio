import React from "react";
import { Consumer } from "../context";
import Projectcard from "./projectcard";
import { v4 as uuid } from "uuid";
import { Zoom } from "react-awesome-reveal";

export default function Projectpage() {
  return (
    <Consumer>
      {(value) => {
        const { projects } = value;
        return (
          <div className="p-5 container">
            <h1 style={{ color: "black" }} className="t text-center pt-5">
              MY <span style={{ color: "purple" }}>PROJECTS</span>
            </h1>
            <p className="font-weight-light text-center pb-5">
              This are some of my works
            </p>
            <div className="row">
              {projects.map((project) => (
                <div
                  key={uuid()}
                  className="col-12 mr-auto ml-auto col-md-6 pt-2"
                >
                  <Zoom>
                    <Projectcard project={project} />
                  </Zoom>
                </div>
              ))}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}
