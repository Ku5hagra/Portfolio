import React from "react";
import { Consumer } from "../context";
import BlogCard from "./BlogCard";
import { Zoom } from "react-awesome-reveal";
import { v4 as uuid } from "uuid";
export default function BlogPage() {
  return (
    <Consumer>
      {({ blogs }) => (
        <div className="p-5 container-fluid">
          <h1 style={{ color: "white" }} className="t text-center pt-5">
            MY <span style={{ color: "#00f0ff",
              textShadow: "0 0 6px #00f0ff" }}>BLOGS</span>
          </h1>
          <p className="font-weight-light text-center pb-5">
            These are some of my blogs
          </p>
          <div className="row">
            {blogs.map((blog) => (
              <div
                key={uuid()}
                className="col-12 mr-auto ml-auto col-md-6 pt-1"
              >
                <Zoom>
                  <BlogCard blog={blog} />
                </Zoom>
              </div>
            ))}
          </div>
        </div>
      )}
    </Consumer>
  );
}
