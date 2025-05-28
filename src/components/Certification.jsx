import React from 'react';

export default function Certification() {
  return (
    <div className="container-fluid py-5 text-center">
      <h2 className="mb-4">Certifications</h2>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <div className="card text-dark">
            <img
              src="https://connect-assets.prosple.com/cdn/ff/eRy1G3DfhizeHexRqhoJxmctxkE9prm0dNzRFfsszEI/1643692295/public/2022-02/banner-unschool-893x321-2022.png"
              alt="Full-Stack Certificate"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Full-Stack Development</h5>
              <p className="card-text">By Unschool</p>
              <a
                href="https://drive.google.com/file/d/1RLQ7iHaE_8Zr1knJJB7FGnSTs-8iUWQ9/view?usp=sharing"
                className="btn btn-outline-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
        {/* Add more certification cards similarly */}
      </div>
    </div>
  );
}
