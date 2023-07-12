import React from "react";
import { Link } from "react-router-dom";

function Blogcard(props) {
  const { id, title, description, imageurl } = props.blog;
  return (
    <div className="card  h-100 pro">
      <img
        className="card-img-top"
        style={{ height: "250px" }}
        src={imageurl}
        alt=""
      />
      <div className="card-body">
        <h4 className="card-title text-center font-weight-light">{title}</h4>

        <p className="card-text text-center">{description}</p>
      </div>
      <Link
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        to={`/blog/${id} `}
        className="stretched-link text-decoration-none"
      ></Link>
    </div>
  );
}
export default Blogcard;
