import React from "react";
import logo from "../assets/logo.webp";

function Title() {
  return (
    <div style={{ paddingTop: "70px" }} className="container pb-5 webtitle">
      <div className="row text-center align-items-center">
        <div className="col-12 col-md-6">
          <img
            tabIndex={"0"}
            className="img-fluid w-75 rounded-circle prof"
            src={logo}
            alt="Logo"
            loading="lazy"
          />
        </div>

        <div className="col-12 col-md-6 pt-5 pl-0">
          <div
            className="pl-2 font-weight-light"
            style={{ fontSize: "30px" }}
          >
            <h2 className="font-weight-light pt-2">
              Hi, I am{" "}
              <span style={{ color: "darkblue" }}>
                <b>Kushagra Agrawal</b>
              </span>
            </h2>
          </div>
          <h4 className="font-weight-light pt-2">I am a freelancer</h4>
        </div>
      </div>
    </div>
  );
}

export default Title;
