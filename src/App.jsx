import React, { useState, useEffect } from "react";
import CanvasWrapper from "./components/CanvasWrapper";
import EmbedApp from "./embed";
import ScrollHint from "./components/ScrollHint";
import Heading from "./components/Heading";
import Loader from "./components/Loader";
import home from "./assets/home.webp";

export default function App() {
  const [embedActive, setEmbedActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    console.log("🚀 App started, beginning loading sequence");
    
    // Simulate initial loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev < 80) {
          const newProgress = prev + Math.random() * 10;
          console.log("📊 Progress:", Math.floor(newProgress));
          return newProgress;
        }
        console.log("⏸️ Progress paused at 80%, waiting for assets");
        return prev;
      });
    }, 100);

    // Load image
    console.log("📸 Starting image load from:", home);
    const img = new Image();
    img.src = home;
    img.onload = () => {
      console.log("✅ Image loaded successfully");
      setImageLoaded(true);
    };
    img.onerror = (error) => {
      console.error("❌ Failed to load image:", error);
      setImageLoaded(true); // Still proceed even if image fails
    };

    // Safety timeout to prevent infinite loading
    const safetyTimeout = setTimeout(() => {
      console.log("⚠️ Safety timeout reached, forcing load completion");
      setModelLoaded(true);
      setImageLoaded(true);
    }, 10000); // 10 seconds

    return () => {
      clearInterval(progressInterval);
      clearTimeout(safetyTimeout);
    };
  }, []);

  // Handle model loading completion from ModelViewer
  const handleModelLoaded = () => {
    console.log("✅ handleModelLoaded called from ModelViewer");
    setModelLoaded(true);
  };

  // When both are loaded, complete progress
  useEffect(() => {
    console.log("🔄 Asset status - Model:", modelLoaded, "Image:", imageLoaded);
    if (modelLoaded && imageLoaded) {
      console.log("🎉 Both assets ready, completing progress");
      setProgress(100);
      
      // Hide loader after showing 100%
      setTimeout(() => {
        console.log("🎭 Hiding loader");
      }, 1000);
    }
  }, [modelLoaded, imageLoaded]);

  const loading = !(modelLoaded && imageLoaded);
  console.log("🔄 Current loading state:", loading);

  return (
    <>
      <Loader visible={loading} progress={progress} />

      {!embedActive && !loading && (
        <>
          <CanvasWrapper 
            setEmbedActive={setEmbedActive} 
            onModelLoaded={handleModelLoaded}
            isLoading={loading}
          />
          <Heading />
          <ScrollHint />
        </>
      )}

      {embedActive && (
        <div id="app-scroll-container"
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