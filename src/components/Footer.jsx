import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="container-fluid" style={{ backgroundColor: "black" }}>
        <h4 className="text-light text-center pt-5">
          Do you want to work with me?
        </h4>
        <div className="text-center mb-3">
          <Link
            to="/contact"
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            <button className="btn btn-outline-light btn-md">Let's talk</button>
          </Link>
        </div>

        <div className="row px-4">
          {/* More Links */}
          <div className="col-12 col-md-4 text-center pt-3">
            <h5 className="text-light">More Links</h5>
            <Link to="/blogpage" className="d-block text-light text-decoration-none">Blogs</Link>
            <Link to="/" className="d-block text-light text-decoration-none">Home</Link>
            <Link to="/projectpage" className="d-block text-light text-decoration-none">Projects</Link>
            <Link to="/contact" className="d-block text-light text-decoration-none">Contact Me</Link>
          </div>

          {/* Description */}
          <div className="col-12 col-md-4 pt-3">
            <p className="text-light text-justify">
              Thank you visitor! for taking a look at my portfolio. If you want to hire me,
              collaborate, or share feedback, just send a message via the contact form.
              I'll reply ASAP!
            </p>
          </div>

          {/* Socials */}
          <div className="col-12 col-md-4 text-center pt-3">
            <h5 className="text-light">Socials</h5>
            <a
              href="https://www.linkedin.com/in/kushagra-agrawal-8a9194272/"
              target="_blank"
              rel="noreferrer"
              className="d-block text-light mb-2"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href="https://github.com/Ku5hagra?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="d-block text-light mb-2"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href="mailto:kushagraa216@gmail.com"
              className="d-block text-light mb-2"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="row text-muted mt-4">
          <div className="col-12 text-center">
            <p>Kushagra Agrawal © 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
