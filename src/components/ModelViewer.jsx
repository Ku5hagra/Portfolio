import React, { useEffect } from "react";
import { useGLTF, Html } from "@react-three/drei";
import home from "../assets/home.png";

export default function ModelViewer({ onLoaded }) {
  const { scene } = useGLTF("/computer.glb");

  useEffect(() => {
    if (scene && onLoaded) {
      onLoaded();
      console.log("✅ 3D model loaded");
    }
  }, [scene, onLoaded]);

  return (
    <group position={[0, 0, 0]} scale={[3, 3, 3]}>
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
