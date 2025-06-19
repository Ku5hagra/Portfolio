import React, { useState, useEffect, useRef } from "react";
import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);
  const location = useLocation();

  // Close navbar on route change
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        expanded &&
        navbarRef.current &&
        !navbarRef.current.contains(e.target)
      ) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded]);

  return (
    <BsNavbar
      expand="md"
      className="bg-dark bg-opacity-50 backdrop-blur"
      variant="dark"
      fixed="top"
      expanded={expanded}
      ref={navbarRef}
    >
      <Container>
        <BsNavbar.Brand >
          <Link to="/" className="navbar-brand">
    Kushagra Agrawal
  </Link>
        </BsNavbar.Brand>
        <BsNavbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setExpanded((prev) => !prev)}
        />
        <BsNavbar.Collapse id="navbar-nav" className="justify-content-end ">
          <Nav>
            <Nav.Link as={Link} to="/certification">
              Certifications
            </Nav.Link>
            <Nav.Link as={Link} to="/projectpage">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/blogpage">
              Blogs
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/1Xvm0T4JAOhSQeG6nrx22YmId4znC5cFT/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;
