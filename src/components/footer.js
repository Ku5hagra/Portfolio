import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="container-fluid " style={{ backgroundColor: "black" }}>
        <h4 className="text-light text-center pt-5">
          Do you want to work with me?
        </h4>
        <div className="text-center">
          <Link
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="/contact"
          >
            <button className="btn btn-outline-light btn-md ">
              let's talk
            </button>
          </Link>
        </div>

        <div className="row ">
          <div className="col-12 col-md-4  text-center pt-3">
            <h5 className="text-light">More Links</h5>
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              to="/blogpage"
              className="d-block text-light text-decoration-none"
            >
              Blogs
            </Link>
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              to="/"
              className="d-block text-light text-decoration-none"
            >
              Home
            </Link>

            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              to="/projectpage"
              className="d-block text-light text-decoration-none"
            >
              Projects
            </Link>
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              to="/contact"
              className="d-block text-light text-decoration-none"
            >
              Contact me
            </Link>
          </div>

          <div className="col-12 col-md-4 pt-3 ">
            <p className="text-light text-justify">
              Thank you visitor ! for taking a look at my portfolio, I hope you
              liked it . If you want to hire me, do a collab or review this
              website send a message via contact form. I'll reply asap!!
            </p>
          </div>

          <div className="col-12 col-md-4  text-center pt-3 ">
            <h5 className="text-light">Socials</h5>
            <a href="https://www.linkedin.com/in/kushagra-agrawal-8a9194272/">
              <i className="bi-linkedin text-light h6 d-block"></i>
            </a>
            <a href="https://github.com/Ku5hagra?tab=repositories">
              <i className="bi-github text-light h6 d-block"></i>
            </a>
            <a href="https://mail.google.com/mail/u/0/?fs=1&to=kushagraa216@gmail.com">
              <i className="bi-envelope text-light h6 d-block"></i>
            </a>
          </div>
        </div>

        <div className="row text-muted ">
          <div className="col-12 text-center ">
            <p>Kushagra Agrawal copyright © 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
