import React, { useEffect, useRef, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import home from "../assets/home.webp";

export default function ModelViewer({ onLoaded, scrollY }) {
  const { scene } = useGLTF("/computer.glb");
  const groupRef = useRef();
  const [isInteracting, setIsInteracting] = useState(false);
  const clock = useRef(0);

  // Notify when model is loaded
  useEffect(() => {
    if (scene && onLoaded) {
      onLoaded();
    }
  }, [scene, onLoaded]);

  // Rotation logic
  useFrame((_, delta) => {
    if (groupRef.current) {
      const maxScroll = 1000;
      const clampedScroll = Math.min(scrollY || 0, maxScroll);
      const progress = clampedScroll / maxScroll;

      const scrollRotation = Math.PI * (1 - progress); // π to 0
      const rockingAngle = (Math.PI / 50) * Math.sin(clock.current); // rocking

      // If not interacting, apply rocking; otherwise, apply scroll-based rotation
      const targetY = isInteracting ? scrollRotation : scrollRotation + rockingAngle;

      // Smoothly interpolate rotation
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.05;

      // Increment clock for rocking
      if (!isInteracting) {
        clock.current += delta;
      }
    }
  });

  // Detect user interaction
  useEffect(() => {
    const handlePointerDown = () => setIsInteracting(true);
    const handlePointerUp = () => setIsInteracting(false);

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  return (
    <group ref={groupRef} position={[0, 0, -2]} rotation={[0, -Math.PI/4 , 0]} // 45 degrees right
 scale={[3, 3, 3]}>
      <primitive object={scene} />
      <group scale={[0.23, 0.24, 0.23]}>
        <Html
          position={[-0.36, 0.38, -0.510114]}
          transform
          occlude
          distanceFactor={1.2}
          style={{
            width: "1024px",
            opacity:1,
            height: "600px",
            border: "none",
            overflow: "hidden",
            boxShadow: "0 0 30px rgba(0,0,0,0.6)",
            borderRadius: "5px",
            pointerEvents: "none",
          }}
        >
          <img
            src={home}
            alt="Preview"
            style={{ width: "100%", height: "100%", pointerEvents: "none" }}
          />
        </Html>
      </group>
    </group>
  );
}
