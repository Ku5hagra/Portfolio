import React from "react";

export default function Loader({ visible, progress = 0 }) {
  const safeProgress = Math.max(0, Math.min(100, progress));

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        opacity: visible ? 1 : 0,
        visibility: visible ? "visible" : "hidden",
        transition: "opacity 0.5s ease, visibility 0.5s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="ka-container">
        <h1 className="ka-dull">KA</h1>
        <div
          className="ka-mask"
          style={{
            width: `${safeProgress}%`,
          }}
        >
          <h1 className="ka-bright">KA</h1>
        </div>
      </div>

      <div className="loading-info">
        <h2 className="text-loader">Please wait a sec</h2>
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${safeProgress}%` }}
            />
          </div>
          <span className="progress-text">{Math.floor(safeProgress)}%</span>
        </div>
      </div>

      <style>{`
        .ka-container {
          position: relative;
          display: inline-block;
          margin-bottom: 2rem;
        }

        .ka-dull {
          font-size: 10rem;
          font-weight: bold;
          font-family: sans-serif;
          color: #333;
          margin: 0;
        }

        .ka-mask {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          transition: width 0.3s ease-out;
        }

        .ka-bright {
          font-size: 10rem;
          font-weight: bold;
          font-family: sans-serif;
          background: linear-gradient(45deg, #00d5ff, #84e4ff, #cfeef6);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          text-shadow:
            0 0 0 rgb(0, 213, 255),
            0 0 3px rgb(132, 228, 255),
            0 0 5px rgb(207, 239, 246);
          margin: 0;
          white-space: nowrap;
        }

        .loading-info {
          text-align: center;
          width: 300px;
        }

        .text-loader {
          color: white;
          text-align: center;
          text-shadow:
            0 0 5px rgb(0, 255, 247),
            0 0 10px rgb(96, 1, 249),
            0 0 5px rgb(149, 0, 255);
          margin: 0 0 1rem 0;
          font-size: 1.2rem;
        }

        .progress-container {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .progress-bar {
          flex: 1;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #00d5ff, #84e4ff);
          border-radius: 2px;
          transition: width 0.3s ease-out;
          box-shadow: 0 0 10px rgba(0, 213, 255, 0.5);
        }

        .progress-text {
          color: #84e4ff;
          font-size: 0.9rem;
          font-family: monospace;
          min-width: 35px;
          text-align: right;
        }
      `}</style>
    </div>
  );
}