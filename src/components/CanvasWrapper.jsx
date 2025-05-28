import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import ModelViewer from "./ModelViewer";

function CameraAnimation({ scrollRef, setEmbedActive }) {
  const { camera } = useThree();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = scrollRef.current?.scrollTop || 0;
      const threshold = 1000;
      setEmbedActive(scrollY >= threshold);
    };

    const scrollEl = scrollRef.current;
    scrollEl?.addEventListener("scroll", handleScroll);
    return () => scrollEl?.removeEventListener("scroll", handleScroll);
  }, [scrollRef, setEmbedActive]);

  useFrame(() => {
    const scrollY = scrollRef.current?.scrollTop || 0;
    const minZ = 1.1;
    const maxZ = 10;
    const scrollThreshold = 1000;
    const newZ = maxZ - (scrollY / scrollThreshold) * (maxZ - minZ);
    camera.position.z += (newZ - camera.position.z) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function CanvasWrapper({ setEmbedActive, onModelLoaded }) {
  const scrollRef = useRef();
  const canvasRef = useRef();
  const [interacting, setInteracting] = useState(false);

  // Toggle pointer events during interactions
  useEffect(() => {
    const canvasEl = canvasRef.current;

    const enableInteraction = () => {
      setInteracting(true);
    };
    const disableInteraction = () => {
      setInteracting(false);
    };

    canvasEl.addEventListener("pointerdown", enableInteraction);
    window.addEventListener("pointerup", disableInteraction);

    return () => {
      canvasEl.removeEventListener("pointerdown", enableInteraction);
      window.removeEventListener("pointerup", disableInteraction);
    };
  }, []);

  return (
    <>
      {/* Scroll container */}
      <div
        ref={scrollRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          overflowY: "scroll",
          zIndex: 1, // scroll container below canvas
        }}
      >
        <div style={{ height: "300vh" }} />
      </div>

      {/* 3D Canvas */}
      <Canvas
        ref={canvasRef}
        camera={{ position: [0, 0, 10], fov: 35 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 2, // above scroll container
          pointerEvents: interacting ? "auto" : "none", // dynamic!
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} />
        <Environment preset="city" />
        <ModelViewer onLoaded={onModelLoaded} />
        <CameraAnimation scrollRef={scrollRef} setEmbedActive={setEmbedActive} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </>
  );
}
