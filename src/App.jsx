import React, { useState, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import CanvasWrapper from "./components/CanvasWrapper";
import EmbedApp from "./embed";
import ScrollHint from "./components/ScrollHint";
import Heading from "./components/Heading";
import Loader from "./components/Loader";

export default function App() {
  const [embedActive, setEmbedActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Load model
    const loader = new GLTFLoader();
    loader.load(
      "/computer.glb",
      () => {
        console.log("✅ Model loaded");
        setModelLoaded(true);
      },
      (xhr) => {
        if (xhr.lengthComputable) {
          const percent = (xhr.loaded / xhr.total) * 100;
          setProgress((prev) => Math.max(prev, percent * 0.8));
        }
      },
      (error) => console.error("❌ Model load error", error)
    );

    // Load image
    const img = new Image();
    img.src = "/home.png";
    img.onload = () => {
      console.log("✅ Image loaded");
      setImageLoaded(true);
    };
    img.onerror = () => console.error("❌ Failed to load hidden image!");
  }, []);

  // When both are loaded, complete progress
  useEffect(() => {
    if (modelLoaded && imageLoaded) {
      setProgress(100);
    }
  }, [modelLoaded, imageLoaded]);

  const loading = !(modelLoaded && imageLoaded);

  return (
    <>
      <Loader visible={loading} progress={progress} />

      {!embedActive && !loading && (
        <>
          <CanvasWrapper setEmbedActive={setEmbedActive} />
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
    </>
  );
}
