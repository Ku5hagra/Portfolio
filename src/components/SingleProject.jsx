import React from "react";
import { useParams } from "react-router-dom";
import { Consumer } from "../context";
import ReactMarkdown from "react-markdown";

function SingleProject() {
  const { id } = useParams();

  return (
    <Consumer>
      {({ projects }) => {
        const project = projects.find((p) => p.id === parseInt(id));
        if (!project) return <div>Loading...</div>;

        const { title, imageurl, body } = project;

        return (
          <div className="py-5 text-center text-light">
            <div className="px-5">
              <img
                className="pt-5 g"
                style={{ maxWidth: "100%" }}
                src={imageurl}
                alt={title}
              />
            </div>
            <div className="container py-5 px-2 text-start text-light">
              <h1 className="py-2">{title}</h1>
              <ReactMarkdown>{body}</ReactMarkdown>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default SingleProject;
