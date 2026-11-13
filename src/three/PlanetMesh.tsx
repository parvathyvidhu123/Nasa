import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { PlanetData } from '../types/planet';
import { createPlanetCanvasTexture, createSaturnRingTexture } from './PlanetTextureHelper';

interface PlanetMeshProps {
  planet: PlanetData;
  scaleMode: 'educational' | 'proportional';
  orbitRadius: number;
  speedMultiplier: number;
  isSelected: boolean;
  onSelect: (planet: PlanetData) => void;
  showOrbits: boolean;
  showLabels: boolean;
}

export const PlanetMesh: React.FC<PlanetMeshProps> = ({
  planet,
  scaleMode,
  orbitRadius,
  speedMultiplier,
  isSelected,
  onSelect,
  showOrbits,
  showLabels,
}) => {
  const planetRef = useRef<THREE.Mesh>(null);
  const orbitGroupRef = useRef<THREE.Group>(null);

  // Compute visual radius based on scaleMode
  const visualRadius = useMemo(() => {
    if (scaleMode === 'educational') {
      const sizeMap: Record<string, number> = {
        mercury: 0.7,
        venus: 1.1,
        earth: 1.2,
        moon: 0.5,
        mars: 0.9,
        jupiter: 2.8,
        saturn: 2.3,
        uranus: 1.6,
        neptune: 1.5,
      };
      return sizeMap[planet.id] || 1.0;
    } else {
      return Math.max(0.4, planet.relative_radius_earth * 0.8);
    }
  }, [planet.id, planet.relative_radius_earth, scaleMode]);

  // Texture creation with instant procedural fallback & background NASA high-res loader
  const texture = useMemo(() => {
    const canvasTex = createPlanetCanvasTexture(planet.id);
    if (planet.texture_url) {
      const loader = new THREE.TextureLoader();
      loader.setCrossOrigin('anonymous');
      loader.load(
        planet.texture_url,
        (loadedTex) => {
          if (planetRef.current && (planetRef.current.material as THREE.MeshStandardMaterial)) {
            (planetRef.current.material as THREE.MeshStandardMaterial).map = loadedTex;
            (planetRef.current.material as THREE.MeshStandardMaterial).needsUpdate = true;
          }
        },
        undefined,
        () => {
          // Graceful fallback to procedural canvas texture
        }
      );
    }
    return canvasTex;
  }, [planet.id, planet.texture_url]);

  const saturnRingTexture = useMemo(() => {
    if (planet.has_rings) {
      return createSaturnRingTexture();
    }
    return null;
  }, [planet.has_rings]);

  // Calculate orbital revolution rate
  const orbitSpeed = useMemo(() => {
    const baseSpeed = 0.005;
    return (baseSpeed * (365.25 / Math.max(10, planet.orbital_period_days))) * 0.8;
  }, [planet.orbital_period_days]);

  // Rotation rate around its own axis
  const rotationSpeed = useMemo(() => {
    const baseRate = 0.01;
    const sign = planet.rotation_period_hours < 0 ? -1 : 1;
    return sign * Math.min(0.04, Math.max(0.002, (24 / Math.abs(planet.rotation_period_hours)) * baseRate));
  }, [planet.rotation_period_hours]);

  useFrame((_, delta) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += rotationSpeed * speedMultiplier * (delta * 60);
    }

    if (orbitGroupRef.current && speedMultiplier > 0) {
      orbitGroupRef.current.rotation.y += orbitSpeed * speedMultiplier * (delta * 60);
    }
  });

  const axialTiltRad = useMemo(() => {
    return (planet.axial_tilt_deg * Math.PI) / 180;
  }, [planet.axial_tilt_deg]);

  // Orbit line Three.js object
  const orbitLineObject = useMemo(() => {
    const pts = [];
    const segments = 128;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(theta) * orbitRadius, 0, Math.sin(theta) * orbitRadius));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(pts);
    const material = new THREE.LineBasicMaterial({
      color: isSelected ? 0x54c8ff : 0x1d3354,
      transparent: true,
      opacity: isSelected ? 0.7 : 0.35,
    });
    return new THREE.Line(geometry, material);
  }, [orbitRadius, isSelected]);

  return (
    <>
      {/* Orbital Path Ring */}
      {showOrbits && <primitive object={orbitLineObject} />}

      {/* Orbit Revolving Group */}
      <group ref={orbitGroupRef}>
        <group position={[orbitRadius, 0, 0]}>
          {/* Tilted Planet Body */}
          <group rotation={[0, 0, axialTiltRad]}>
            <mesh
              ref={planetRef}
              onClick={(e) => {
                e.stopPropagation();
                onSelect(planet);
              }}
              onPointerOver={(e) => {
                e.stopPropagation();
                document.body.style.cursor = 'pointer';
              }}
              onPointerOut={() => {
                document.body.style.cursor = 'auto';
              }}
            >
              <sphereGeometry args={[visualRadius, 48, 48]} />
              <meshStandardMaterial
                map={texture}
                roughness={0.7}
                metalness={0.1}
                color={planet.color_hex}
              />
            </mesh>

            {/* Selection Highlight Halo */}
            {isSelected && (
              <mesh>
                <sphereGeometry args={[visualRadius * 1.15, 32, 32]} />
                <meshBasicMaterial
                  color="#54C8FF"
                  wireframe
                  transparent
                  opacity={0.5}
                />
              </mesh>
            )}

            {/* Atmosphere glow for Earth & Venus */}
            {(planet.id === 'earth' || planet.id === 'venus') && (
              <mesh>
                <sphereGeometry args={[visualRadius * 1.03, 32, 32]} />
                <meshBasicMaterial
                  color={planet.id === 'earth' ? '#54C8FF' : '#FFBF69'}
                  transparent
                  opacity={0.15}
                  side={THREE.BackSide}
                />
              </mesh>
            )}

            {/* Saturn Rings */}
            {planet.has_rings && saturnRingTexture && (
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[visualRadius * 1.3, visualRadius * 2.3, 64]} />
                <meshStandardMaterial
                  map={saturnRingTexture}
                  side={THREE.DoubleSide}
                  transparent
                  opacity={0.9}
                  roughness={0.8}
                />
              </mesh>
            )}
          </group>

          {/* Planet Label Indicator */}
          {showLabels && (
            <mesh position={[0, visualRadius + 0.8, 0]}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshBasicMaterial color={isSelected ? '#54C8FF' : '#A5B4C8'} />
            </mesh>
          )}
        </group>
      </group>
    </>
  );
};
