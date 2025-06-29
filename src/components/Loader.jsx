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
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="ka-container">
        <h1 className="ka-dull">KA</h1>
        <h2 className="text-loader">Please wait a sec</h2>
        <div
          className="ka-mask"
          style={{
            width: `${safeProgress}%`,
          }}
        >
          <h1 className="ka-bright">KA</h1>
        </div>
      </div>

      <style>{`
        .ka-container {
          position: relative;
          display: inline-block;
        }

        .ka-dull {
          font-size: 10rem;
          font-weight: bold;
          font-family: sans-serif;
          color: #333;
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
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          text-shadow:
            0 0 0 rgb(0, 213, 255),
            0 0 3px rgb(132, 228, 255),
            0 0 5px rgb(207, 239, 246);
        }

        .text-loader {
          color: white;
          text-align: center;
          text-shadow:
            0 0 5px rgb(0, 255, 247),
            0 0 10px rgb(96, 1, 249),
            0 0 5px rgb(149, 0, 255);
        }
      `}</style>
    </div>
  );
}
