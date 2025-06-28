import React from "react";
import { Consumer } from "../context";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <Consumer>
      {({ blogs }) => (
        <div className="container my-5 ">
          <h2 style={{color: "#00f0ff",
              textShadow: "0 0 6px #00f0ff"}} className="text-center mb-4 fw-light">Blogs</h2>
          <div className="row">
            {blogs.slice(0, 3).map((blog) => (
              <div key={blog.id} className="col-md-4 mb-4">
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
          <div className="text-end  mt-3">
            <Link to="/blogpage" className="text-decoration-none text-light">
              <h5 style={{ color: "#00f0ff" }}>See All Blogs &rarr;</h5>
            </Link>
          </div>
        </div>
      )}
    </Consumer>
  );
}
