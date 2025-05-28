import React from "react";

export default function ScrollHint() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 10,
        color: "#fff",
        fontSize: "14px",
        textAlign: "center",
        animation: "bounce 2s infinite",
        pointerEvents: "none",
      }}
    >
      <div style={{ marginBottom: "4px" }}>Scroll down</div>
      <div style={{ fontSize: "24px" }}>↓</div>

      {/* Bouncing animation */}
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(-10px); }
          }
        `}
      </style>
    </div>
  );
}
