import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';

const Sphere = () => {
  const sphereRef = useRef();

  useFrame(() => {
    // Rotate the sphere on each frame
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.01;
      sphereRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[15, 32, 16]} />
      <meshBasicMaterial color={0xffff00} />
    </mesh>
  );
};

const ThreeJSScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 50] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Sphere position={[0, 0, 0]} />
    </Canvas>
  );
};

export default ThreeJSScene;
