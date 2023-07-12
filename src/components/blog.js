import React from "react";
import Blogcard from "./blogcard";
import { Consumer } from "../context";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

function Blog() {
  return (
    <Consumer>
      {(value) => {
        const { blogs } = value;
        return (
          <div className="p-5 container ">
            <h1
              style={{ color: "black" }}
              className="font-weight-light text-center t"
            >
              MY <span style={{ color: "green" }}>BLOGS</span>
            </h1>
            <p
              style={{ color: "white" }}
              className="font-weight-light text-center "
            >
              Catch-up this blogs
            </p>
            <div className="row">
              {blogs.slice(0, 3).map((blog) => (
                <div
                  key={uuid()}
                  className="col-12 mr-auto ml-auto col-md-4 pt-2"
                >
                  <Blogcard blog={blog} />
                </div>
              ))}
            </div>
            <div className=" mt-5">
              h
              <Link
                className="text-light text-decoration-none  text-right"
                to="/blogpage"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                <h5>See all blogs →</h5>
              </Link>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}
export default Blog;
