import React from "react";
import { useParams } from "react-router-dom";
import { Consumer } from "../context";
import ReactMarkdown from "react-markdown";

export default function SingleBlog() {
  const { id } = useParams();
  return (
    <Consumer>
      {({ blogs }) => {
        const blog = blogs.find((b) => b.id === parseInt(id));
        if (!blog) return <p>Blog not found</p>;
        return (
          <div className="container my-5 text-light text-center">
            <h2 className="text-center mb-4 ">{blog.title}</h2>
            <img
              src={blog.imageurl}
              alt={blog.title}
              className="img-fluid mb-4 "
            />
            <ReactMarkdown>{blog.body}</ReactMarkdown>
          </div>
        );
      }}
    </Consumer>
  );
}
