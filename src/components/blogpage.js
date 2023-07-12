import React from "react";
import { Consumer } from "../context";
import Blogcard from "./blogcard";
import { v4 as uuid } from "uuid";
import { Zoom } from "react-awesome-reveal";

export default function Blogpage() {
  return (
    <Consumer>
      {(value) => {
        const { blogs } = value;
        return (
          <div className="p-5 container">
            <h1 style={{ color: "black" }} className=" text-center t pt-5">
              MY <span style={{ color: "purple" }}>BLOGS</span>
            </h1>
            <p className="font-weight-light text-center pb-5">
              This are some of my works
            </p>
            <div className="row">
              {blogs.map((blog) => (
                <div
                  key={uuid()}
                  className="col-12 mr-auto ml-auto col-md-6 pt-2"
                >
                  <Zoom>
                    <Blogcard blog={blog} />
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
