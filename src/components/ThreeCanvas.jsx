import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Float, Html, useGLTF } from "@react-three/drei";

function FallbackMesh(){
  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
      <mesh rotation={[0.6,0.3,0]}>
        <torusKnotGeometry args={[0.6,0.2,128,32]} />
        <meshStandardMaterial color={"#1E90FF"} emissive={"#093b6b"} roughness={0.3} metalness={0.6} />
      </mesh>
    </Float>
  );
}

function GLBModel(){
  try {
    const { scene } = useGLTF("/models/scene.glb");
    return <primitive object={scene} scale={1} />;
  } catch(e){
    return <FallbackMesh />;
  }
}

export default function ThreeCanvas({ className = "w-full h-full", autoRotate = true }){
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Suspense fallback={<Html center>Loading 3D…</Html>}>
          <GLBModel />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} autoRotate={autoRotate} />
        <Preload all />
      </Canvas>
    </div>
  );
}
