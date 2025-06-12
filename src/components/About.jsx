import React from "react";

function About() {
  return (
    <div className="p-5 text-white" >
      <h1 className="text-center fw-light" style={{ color: "#00f0ff", textShadow: "0 0 6px #00f0ff" }}>
        ABOUT <span style={{ color: "#ffffff", textShadow: "0 0 6px #4a90e2" }}>ME</span>
      </h1>
      <p className="fw-light text-center" style={{ color: "#d1d1d1" }}>
        Designing digital experiences with creativity, logic, and a pinch of wonder.
      </p>

      <div className="container py-4">
        <div className="row gy-4">
          <div className="col-12 col-md-6">
            <div className="bg-dark p-4 rounded shadow" style={{ minHeight: "100%" }}>
              <h4 className="text-center text-info">What I Do</h4>
              <p>
                I craft sleek, responsive websites and immersive interfaces using tools like HTML, CSS, JavaScript, and React. My UI/UX decisions are guided by user empathy and visual harmony — and yes, I do dabble in 3D art and AR/VR too.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="bg-dark p-4 rounded shadow">
              <h4 className="text-center text-info">What I Believe</h4>
              <p>
                Design should speak, code should breathe. I believe in clean, functional design that prioritizes user experience. Simplicity is not lack of features — it's clarity in purpose.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="bg-dark p-4 rounded shadow">
              <h4 className="text-center text-info">What I'm Up To</h4>
              <p>
                Currently pursuing my B.Tech in Computer Science, I spend my time exploring emerging tech like 3D design, WebGL, and interactive frontend magic — always building, learning, and experimenting.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="bg-dark p-4 rounded shadow">
              <h4 className="text-center text-info">How I Can Help</h4>
              <p>
                Need a modern portfolio, a creative landing page, or even a 3D-infused web interface? I can help you bring your vision to life — with code that’s clean, design that clicks, and a process that’s collaborative.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
