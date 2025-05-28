import React from "react";

function About() {
  return (
    <div className="p-5 text-white">
      <h1 className="text-primary text-center fw-light">
        ABOUT <span style={{ color: "black" }}>ME</span>
      </h1>
      <p className="fw-light text-center text-light">
        Some information about me and my work
      </p>
      <div className="container p-3">
        <div className="row">
          <div className="col-12 col-md-6">
            <h4 className="text-center fw-bold text-dark">What can I do?</h4>
            <p>
              I can develop simple, interesting and eye-catching websites like
              the one you are surfing right now based on the demands of the user
              by using tools like HTML, CSS, JAVASCRIPT, BOOTSTRAP etc.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <h4 className="text-center fw-bold text-dark">What do I believe in?</h4>
            <p>
              I believe in quality over quantity. I like to work in the most
              precise way possible, keep my product as classy as possible, and
              minimize user effort.
            </p>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-12 col-md-6">
            <h4 className="text-center fw-bold text-dark">What am I doing currently?</h4>
            <p>
              Currently I am pursuing B.Tech in Computer Science, learning and
              enhancing my programming and designing skills. I spend most of my
              time working on or preparing for exciting projects.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <h4 className="text-center fw-bold text-dark">How can I help you?</h4>
            <p>
              I can help you design and develop both front-end and back-end of
              your desired website using my skills and creativity. I bet you
              won't be disappointed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
