import React, { useEffect, useState } from "react";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";

const roles = [
  "Frontend Developer",
  "UI/UX Designer",
  "3D Artist",
  "Graphic Designer",
  "Problem Solver",
];

function Title() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === roles.length) return;

    const currentWord = roles[index];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(currentWord.substring(0, subIndex + 1));
        setSubIndex((prev) => prev + 1);

        if (subIndex + 1 === currentWord.length) {
          setTimeout(() => setDeleting(true), 1000); // pause before deleting
        }
      } else {
        setText(currentWord.substring(0, subIndex - 1));
        setSubIndex((prev) => prev - 1);

        if (subIndex === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, deleting ? 30 : 80); // typing speed

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <div style={{ paddingTop: "70px" }} className="container pb-5 webtitle">
      <div className="row text-center align-items-center">
        <div className="col-12 col-md-6">
          <img
            tabIndex="0"
            className="img-fluid w-75 rounded-circle prof"
            src={logo}
            alt="Logo"
            loading="lazy"
          />
        </div>

        <div className="col-12 col-md-6 pt-5 pl-0 position-relative">
          <div className="pl-2 font-weight-light" style={{ fontSize: "30px" }}>
            <h2 className="font-weight-light pt-2">
              Hi, I am{" "}
              <span>
                <b>Kushagra Agrawal</b>
              </span>
            </h2>
          </div>
          <h4 className="font-weight-light pt-2" style={{ height: "40px" }}>
            I am a <span className="typewriter">{text}</span>
            <span className="cursor">|</span>
          </h4>
<Link className="hire-button-container" to={{ pathname: "/contact" }}>
      <div className="hire-button-wrapper">
        <button 
          className="hire-button"
          style={{
             borderRadius: "10px", 

            marginTop: "100px", 
            textShadow: "0 0 2px black",
            color: "black",
            border: "none",
            cursor: "pointer",
            position: "relative",
            transition: "all 0.3s ease"
          }}
        >
          <h6 style={{margin:"0px",padding: "5px",fontWeight: "bold"}} className="hire-text">Hire Me</h6>
        </button>
        
        <div className="handshake-overlay">
          <div className="hand left-hand">🫱</div>
          <div className="hand right-hand">🫲</div>
          <div className="handshake-result">🤝</div>
          <div className="sparkles">✨</div>
        </div>
      </div>
</Link>          
        </div>
      </div>
    </div>
  );
}

export default Title;
