import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  //     const customizestyle={
  // textDecoration:none,
  //     }
  return (
    <nav className="navbar pb-1 nav shadow fixed-top navbar-expand-md">
      <div className="container ">
        <Link
          className="nav-brand text-light text-decoration-none font-weight-light nohover"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          to="/"
        >
          <h4>Kushagra Agrawal</h4>
        </Link>
        <div className="ml-auto">
          <Link to="/contact">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="btn btn-outline-light btn-md"
            >
              Contact
            </button>
          </Link>
        </div>

        <button
          className="navbar-toggler  btn btn-outline-light btn-md ml-1"
          data-toggle="collapse"
          data-target="#collapseNav"
        >
          <span className="bi-list "></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
          <div className="navbar-nav">
            <a
              href="https://drive.google.com/file/d/1ZwumY5rNOIe63kockOxujttqzi9cU2Nz/view?usp=drive_link"
              className="nav-item nav-link  text-light pl-3"
            >
              CV download
            </a>
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="nav-item nav-link  text-light pl-3"
              to="/certification"
            >
              Certifications
            </Link>
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              to="/projectpage"
              className="nav-item nav-link  text-light pl-3"
            >
              Projects
            </Link>
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              to="/blogpage"
              className="nav-item nav-link text-light pl-3"
            >
              Blogs
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
