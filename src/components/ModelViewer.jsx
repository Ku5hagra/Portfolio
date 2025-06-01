import React, { useEffect, useRef, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import home from "../assets/home.webp";

export default function ModelViewer({ onLoaded }) {
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

  // Rocking rotation animation
  useFrame((_, delta) => {
    if (!isInteracting && groupRef.current) {
      clock.current += delta;
      const angle = (Math.PI / 6) * Math.sin(clock.current); // ±30 degrees (π/6 radians)
      groupRef.current.rotation.y = angle;
    }
  });

  // Event listeners for pointer interactions
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
    <group ref={groupRef} position={[0, 0, 0]} scale={[3, 3, 3]}>
      <primitive object={scene} />
      <group scale={[0.23, 0.24, 0.23]}>
        <Html
          position={[-0.36, 0.38, -0.5]}
          transform
          occlude
          distanceFactor={1.2}
          style={{
            width: "1024px",
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
