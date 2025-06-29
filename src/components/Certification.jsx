import React from "react";
import unschool from "../assets/unschool.webp";
import inspark from "../assets/inspark.webp";
import ips from "../assets/ips.webp";
import greater from "../assets/greater.webp";
import { Zoom } from "react-awesome-reveal";
export default function Certification() {
  return (
    <div className="container-fluid py-5 text-center">
      <h1 style={{ color: "white" }} className="t text-center pt-5">
        MY{" "}
        <span style={{ color: "#00f0ff", textShadow: "0 0 6px #00f0ff" }}>
          Certifications
        </span>
      </h1>
      <p
        style={{ color: "white" }}
        className="font-weight-light text-center pb-5"
      >
        These are some of my Certificates
      </p>
      <div className="row justify-content-center">
        
        <div className="col-md-4 mb-4"><Zoom>
          <div className="card">
            <img
              src={unschool}
              alt="Full-Stack Certificate"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title text-light">Full-Stack Development</h5>
              <p className="card-text text-light">By Unschool</p>
              <a
                href="https://drive.google.com/file/d/1RLQ7iHaE_8Zr1knJJB7FGnSTs-8iUWQ9/view?usp=sharing"
                className="btn btn-outline-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div></Zoom>
        </div>
        
        
        <div className="col-md-4 mb-4"><Zoom>
          <div className="card">
            <img style={{width:"100%",height:"240px"}}
              src={inspark}
              alt="Full-Stack Certificate"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title text-light">
                Full-Stack Development Internship
              </h5>
              <p className="card-text text-light">By Inspark Technologies</p>
              <a
                href="https://drive.google.com/file/d/1u-fZ8IITGcdCgXxQo9vOFiqEqj_8kyBY/view?usp=sharing"
                className="btn btn-outline-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div></Zoom>
        </div>
        
       
        <div className="col-md-4 mb-4"> <Zoom>
          <div className="card">
            <img
              src={unschool}
              alt="Full-Stack Certificate"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title text-light">Java and Python</h5>
              <p className="card-text text-light">By Unschool</p>
              <a
                href="https://drive.google.com/file/d/1QOzf2YS3jMBmXdcQpccYps_Vwydi3IsM/view?usp=sharing"
                className="btn btn-outline-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div> </Zoom>
        </div>
       
       
        <div className="col-md-4 mb-4"> <Zoom>
          <div className="card">
            <img
            style={{height:"240px"}}
              src={greater}
              alt="Full-Stack Certificate"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title text-light">DBMS</h5>
              <p className="card-text text-light">By Great Learning Academy</p>
              <a
                href="https://drive.google.com/file/d/1BTkf_b35Pb7CY2y4IioOJOiZxnf34b91/view?usp=sharing"
                className="btn btn-outline-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div></Zoom>
        </div>
        
       
        <div className="col-md-4 mb-4"> <Zoom>
          <div className="card">
            <img
            style={{width:"100%",height:"240px"}}
              src={ips}
              alt="Full-Stack Certificate"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title text-light">Final Winner Udaan'25</h5>
              <p className="card-text text-light">By IES IPS Academy</p>
              <a
                href="https://drive.google.com/file/d/1pfTS12jUW8FNdJhaOuF3j4lnfbo--bH1/view?usp=sharing"
                className="btn btn-outline-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div></Zoom>
        </div>
        
        
        <div className="col-md-4 mb-4"><Zoom>
          <div className="card">
            <img
              style={{width:"100%",height:"240px"}}
              src={ips}
              alt="Full-Stack Certificate"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title text-light">Winner phase-I Udaan'24</h5>
              <p className="card-text text-light">By IES IPS Academy</p>
              <a
                href="https://drive.google.com/file/d/1psJLMQnr7aUK1vwdHCnlGlt8lj9j_gXv/view?usp=sharing"
                className="btn btn-outline-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div></Zoom>
        </div>
        
        {/* Add more certification cards similarly */}
      </div>
    </div>
  );
}
