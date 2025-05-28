import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import ModelViewer from "./ModelViewer";
import { useThree } from "@react-three/fiber";

function CameraAnimation({ scrollRef, setEmbedActive }) {
  const { camera } = useThree();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = scrollRef.current?.scrollTop || 0;
      const threshold = 1000;
      if (scrollY >= threshold) {
        setEmbedActive(true);
      } else {
        setEmbedActive(false);
      }
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

export default function CanvasWrapper({ setEmbedActive }) {
  const scrollRef = useRef();

  return (
    <>
      <div
        ref={scrollRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          overflowY: "scroll",
          zIndex: 99,
        }}
      >
        <div style={{ height: "300vh" }} />
      </div>

      <Canvas camera={{ position: [0, 0, 10], fov: 35 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} />
        <Environment preset="city" />
        <ModelViewer />
        <CameraAnimation scrollRef={scrollRef} setEmbedActive={setEmbedActive} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </>
  );
}
