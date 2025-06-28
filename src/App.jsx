import React, { useState, useEffect } from "react";
import CanvasWrapper from "./components/CanvasWrapper";
import EmbedApp from "./embed";
import ScrollHint from "./components/ScrollHint";
import Heading from "./components/Heading";
import Loader from "./components/Loader";

export default function App() {
  const [embedActive, setEmbedActive] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  const loading = !(modelLoaded && imageLoaded);

  // Simulate progress (if you don't have real % tracking from model/image)
  useEffect(() => {
    if (loading) {
      let p = 0;
      const interval = setInterval(() => {
        p += 5;
        setProgress((prev) => Math.min(prev + 5, 100));
        if (p >= 100 || (!loading)) {
          clearInterval(interval);
        }
      }, 200);
      return () => clearInterval(interval);
    } else {
      setProgress(100);
    }
  }, [loading]);

  return (
    <>
      <Loader visible={loading} progress={progress} />

      {!embedActive && (
        <>
          <CanvasWrapper
  setEmbedActive={setEmbedActive}
  onModelLoaded={() => {
    setModelLoaded(true);
  }}
/>
          <Heading />
          <ScrollHint />
        </>
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
