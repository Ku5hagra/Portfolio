import React from "react";

export default function Heading() {
  return (
    <div
      style={{
        position: "absolute",
        top: "60px",
        width: "100%",
        textAlign: "center",
        zIndex: 10,
        color: "#fff",
        fontSize: "2rem",
        fontWeight: "bold",
        letterSpacing: "1px",
        pointerEvents: "none", // So it doesn't interfere with interactions
      }}
    >
      Sometimes you should think out of the box
    </div>
  );
}
