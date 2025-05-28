import React, { useState } from "react";
import CanvasWrapper from "./components/CanvasWrapper";
import EmbedApp from "./embed";

export default function App() {
  const [embedActive, setEmbedActive] = useState(false);

  return (
    <>
      {/* 3D Canvas */}
      {!embedActive && (
        <CanvasWrapper setEmbedActive={setEmbedActive} />
      )}

      {/* Full Website */}
      {embedActive && (
        <div
        id="app-scroll-container" // 🟢 Add this!
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 100,
            overflow: "auto", // Ensure scrolling works!
          }}
        >
          <EmbedApp />
        </div>
      )}
    </>
  );
}
