import React from "react";
import "./Loader.css"; // We'll create this CSS file for styling

const loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <h2 className="loader-text">Loading, please wait...</h2>
    </div>
  );
};

export default Loader;
