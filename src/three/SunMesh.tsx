import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const SunMesh: React.FC = () => {
  const sunRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (sunRef.current) {
      sunRef.current.rotation.y += delta * 0.05;
    }
    if (glowRef.current) {
      glowRef.current.rotation.z -= delta * 0.02;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Sunlight source illuminating the solar system */}
      <pointLight color="#fff4e0" intensity={3.5} distance={300} decay={0.8} />
      <ambientLight intensity={0.15} />

      {/* Sun Body Sphere */}
      <mesh ref={sunRef}>
        <sphereGeometry args={[3.8, 48, 48]} />
        <meshBasicMaterial color="#FFB84D" />
      </mesh>

      {/* Internal corona glow layer */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[4.2, 32, 32]} />
        <meshBasicMaterial
          color="#FF8A24"
          transparent
          opacity={0.35}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Outer atmospheric haze */}
      <mesh>
        <sphereGeometry args={[4.8, 32, 32]} />
        <meshBasicMaterial
          color="#FFA533"
          transparent
          opacity={0.12}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};

