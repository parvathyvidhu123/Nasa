import React, { useMemo } from 'react';
import * as THREE from 'three';

interface DeepSpaceTrajectoriesProps {
  visible: boolean;
}

export const DeepSpaceTrajectories: React.FC<DeepSpaceTrajectoriesProps> = ({ visible }) => {
  const lineObjects = useMemo(() => {
    if (!visible) return null;

    const maxAU = 45; // visualization outer boundary

    // Voyager 1 Line
    const v1Pts = [];
    for (let r = 0; r <= maxAU; r += 2) {
      const angle = 0.8;
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;
      const y = Math.sin(0.61) * r; // ~35 deg inclination
      v1Pts.push(new THREE.Vector3(x, y, z));
    }
    const v1Geom = new THREE.BufferGeometry().setFromPoints(v1Pts);
    const v1Mat = new THREE.LineDashedMaterial({
      color: 0x9d8aff,
      dashSize: 0.8,
      gapSize: 0.4,
      transparent: true,
      opacity: 0.6,
    });
    const v1Line = new THREE.Line(v1Geom, v1Mat);
    v1Line.computeLineDistances();

    // Voyager 2 Line
    const v2Pts = [];
    for (let r = 0; r <= maxAU * 0.9; r += 2) {
      const angle = 2.4;
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;
      const y = -Math.sin(0.84) * r; // ~48 deg negative inclination
      v2Pts.push(new THREE.Vector3(x, y, z));
    }
    const v2Geom = new THREE.BufferGeometry().setFromPoints(v2Pts);
    const v2Mat = new THREE.LineDashedMaterial({
      color: 0x54c8ff,
      dashSize: 0.8,
      gapSize: 0.4,
      transparent: true,
      opacity: 0.6,
    });
    const v2Line = new THREE.Line(v2Geom, v2Mat);
    v2Line.computeLineDistances();

    // New Horizons Line
    const nhPts = [];
    for (let r = 0; r <= maxAU * 0.7; r += 2) {
      const angle = -1.2;
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;
      const y = 0.05 * r;
      nhPts.push(new THREE.Vector3(x, y, z));
    }
    const nhGeom = new THREE.BufferGeometry().setFromPoints(nhPts);
    const nhMat = new THREE.LineDashedMaterial({
      color: 0xffbf69,
      dashSize: 0.8,
      gapSize: 0.4,
      transparent: true,
      opacity: 0.6,
    });
    const nhLine = new THREE.Line(nhGeom, nhMat);
    nhLine.computeLineDistances();

    return { v1Line, v2Line, nhLine };
  }, [visible]);

  if (!visible || !lineObjects) return null;

  return (
    <group>
      <primitive object={lineObjects.v1Line} />
      <primitive object={lineObjects.v2Line} />
      <primitive object={lineObjects.nhLine} />
    </group>
  );
};
