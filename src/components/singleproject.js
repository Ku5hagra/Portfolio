import React from "react";
import { Consumer } from "../context";
import ReactMarkdown from "react-markdown";

function SingleProject(props) {
  return (
    <Consumer>
      {(value) => {
        const { projects } = value;
        const id = props.match.params.id;
        const project = projects.find((project) => project.id == id);

        if (!project) {
          return <div>Loading...</div>;
        }
        const { title, imageurl, body } = project;
        return (
          <div className="py-5 markdown  text-center">
            <div className="px-5">
              <img
                className="pt-5 g"
                style={{ maxWidth: "100%" }}
                src={imageurl}
                alt={title}
              />
            </div>
            <div className="container text-light py-5 px-2 text-left">
              <h1 className="py-2">{title}</h1>
              <div id="text-left form px-5">
                <ReactMarkdown>{body}</ReactMarkdown>
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}
export default SingleProject;
