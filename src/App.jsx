import React, { useState } from "react";
import CanvasWrapper from "./components/CanvasWrapper";
import EmbedApp from "./embed";
import ScrollHint from "./components/ScrollHint";
import Heading from "./components/Heading";


function Loader({ visible }) {
  
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#121212",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.6s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <svg width="80" height="80" viewBox="0 0 50 50" style={{ display: "block" }}>
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="#4ADE80"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="90,150"
          strokeDashoffset="0"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="1.2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-dashoffset"
            values="0;-90"
            dur="1.2s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}

export default function App() {

  const [embedActive, setEmbedActive] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const homeImageSrc = "/home.png";
  const loading = !(modelLoaded && imageLoaded);



  return (
    <>
      <Loader visible={loading} />

      {!embedActive && (
       <> <CanvasWrapper
          setEmbedActive={setEmbedActive}
          onModelLoaded={() => setModelLoaded(true)}
        />
        <Heading />
        <ScrollHint /> </>
      )}

      {embedActive && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 100,
            overflow: "auto",
          }}
        >
          <EmbedApp />
        </div>
      )}

      {/* Preload image to trigger imageLoaded */}
      <img
  src="/home.png"
  alt="hidden preview"
  style={{ display: "none" }}
  onLoad={() => {
    console.log("✅ Hidden image loaded");
    setImageLoaded(true);
  }}
  onError={() => {
    console.log("❌ Failed to load hidden image!");
  }}
/>
    </>
  );
}
