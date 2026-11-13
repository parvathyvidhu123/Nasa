import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { PLANETS_DATA } from '../data/planetsData';
import { PlanetData } from '../types/planet';
import { SunMesh } from './SunMesh';
import { PlanetMesh } from './PlanetMesh';
import { DeepSpaceTrajectories } from './DeepSpaceTrajectories';
import { 
  Maximize2, 
  Play, 
  Pause, 
  RotateCcw, 
  Layers, 
  Compass, 
  Eye, 
  X,
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface SolarSystemCanvasProps {
  onSelectPlanet?: (planet: PlanetData) => void;
}

export const SolarSystemCanvas: React.FC<SolarSystemCanvasProps> = ({ onSelectPlanet }) => {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData | null>(null);
  const [scaleMode, setScaleMode] = useState<'educational' | 'proportional'>('educational');
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const [showOrbits, setShowOrbits] = useState<boolean>(true);
  const [showLabels, setShowLabels] = useState<boolean>(true);
  const [showTrajectories, setShowTrajectories] = useState<boolean>(true);

  // Orbital distance visual radii (AU scaled for usability)
  const orbitRadiiMap: Record<string, number> = {
    mercury: 7,
    venus: 10,
    earth: 14,
    mars: 18,
    jupiter: 25,
    saturn: 32,
    uranus: 39,
    neptune: 46,
  };

  const handlePlanetSelect = (planet: PlanetData) => {
    setSelectedPlanet(planet);
    if (onSelectPlanet) {
      onSelectPlanet(planet);
    }
  };

  return (
    <div className="relative w-full h-[650px] lg:h-[750px] bg-space-dark rounded-2xl overflow-hidden border border-space-border shadow-card-elevated">
      {/* 3D WebGL Canvas */}
      <Canvas
        camera={{ position: [0, 35, 55], fov: 45 }}
        gl={{ antialias: true, alpha: false }}
        className="cursor-grab active:cursor-grabbing"
      >
        <color attach="background" args={['#050914']} />
        
        {/* Starfield */}
        <Stars radius={250} depth={60} count={6000} factor={4} saturation={0.2} fade speed={1} />

        <Suspense fallback={null}>
          <SunMesh />

          {/* Render All 8 Major Planets */}
          {PLANETS_DATA.filter(p => p.id !== 'moon').map((planet) => (
            <PlanetMesh
              key={planet.id}
              planet={planet}
              scaleMode={scaleMode}
              orbitRadius={orbitRadiiMap[planet.id] || 20}
              speedMultiplier={speedMultiplier}
              isSelected={selectedPlanet?.id === planet.id}
              onSelect={handlePlanetSelect}
              showOrbits={showOrbits}
              showLabels={showLabels}
            />
          ))}

          {/* Sourced Deep Space Trajectories */}
          <DeepSpaceTrajectories visible={showTrajectories} />
        </Suspense>

        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          maxDistance={120}
          minDistance={10}
          dampingFactor={0.05}
        />
      </Canvas>

      {/* Top Left HUD: Flight Controls & Scaling Disclosures */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        <div className="bg-space-card/90 backdrop-blur-md p-3 rounded-xl border border-space-border text-xs font-mono">
          <div className="flex items-center gap-2 text-space-accent font-semibold mb-2">
            <Compass className="w-4 h-4 text-space-accent" />
            <span>SOLAR SYSTEM SIMULATION</span>
          </div>

          <div className="flex flex-col gap-1.5 text-space-muted">
            <div className="flex items-center justify-between gap-4">
              <span>SCALE:</span>
              <button
                onClick={() => setScaleMode(prev => prev === 'educational' ? 'proportional' : 'educational')}
                className="px-2 py-0.5 rounded bg-space-secondary border border-space-border text-space-text hover:border-space-accent transition-colors"
              >
                {scaleMode === 'educational' ? 'Educational View' : 'Proportional View'}
              </button>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span>SPEED:</span>
              <div className="flex items-center gap-1">
                {[0, 1, 5, 20].map((spd) => (
                  <button
                    key={spd}
                    onClick={() => setSpeedMultiplier(spd)}
                    className={`px-1.5 py-0.5 rounded text-[10px] ${
                      speedMultiplier === spd 
                        ? 'bg-space-accent text-space-dark font-bold' 
                        : 'bg-space-secondary text-space-muted hover:text-space-text'
                    }`}
                  >
                    {spd === 0 ? 'PAUSE' : `${spd}X`}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Display Toggles */}
        <div className="flex items-center gap-1.5 bg-space-card/80 backdrop-blur-md p-1.5 rounded-lg border border-space-border text-xs font-mono">
          <button
            onClick={() => setShowOrbits(!showOrbits)}
            className={`px-2 py-1 rounded text-[11px] transition-colors ${
              showOrbits ? 'bg-space-accent/20 text-space-accent' : 'text-space-muted'
            }`}
          >
            Orbits
          </button>
          <button
            onClick={() => setShowTrajectories(!showTrajectories)}
            className={`px-2 py-1 rounded text-[11px] transition-colors ${
              showTrajectories ? 'bg-space-accent/20 text-space-accent' : 'text-space-muted'
            }`}
          >
            Deep Space Probes
          </button>
        </div>
      </div>

      {/* Disclosed Scientific Note */}
      <div className="absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-2 bg-space-dark/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-space-border text-[11px] font-mono text-space-muted">
        <Info className="w-3.5 h-3.5 text-space-accent" />
        <span>Scientific Disclosure: Orbital distances visually scaled for interactive clarity. Axial tilts & periods sourced from NASA PDS.</span>
      </div>

      {/* Selected Planet Detail Modal / Drawer */}
      {selectedPlanet && (
        <div className="absolute top-4 right-4 bottom-4 w-80 sm:w-96 z-20 bg-space-card/95 backdrop-blur-2xl rounded-xl border border-space-accent/40 shadow-card-elevated flex flex-col p-5 overflow-y-auto animate-fade-in">
          <div className="flex items-center justify-between pb-3 border-b border-space-border mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: selectedPlanet.color_hex }} />
              <h3 className="font-heading font-bold text-lg text-space-text">{selectedPlanet.name}</h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-space-secondary text-space-accent border border-space-border">
                {selectedPlanet.type}
              </span>
            </div>
            <button
              onClick={() => setSelectedPlanet(null)}
              className="p-1 rounded-md text-space-muted hover:text-space-text hover:bg-space-secondary transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Planet Authentic NASA Photo */}
          <div className="relative rounded-lg overflow-hidden border border-space-border mb-4 aspect-video bg-space-dark">
            <img
              src={selectedPlanet.authentic_image_url}
              alt={selectedPlanet.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-1 right-2 text-[9px] font-mono text-space-text/80 bg-space-dark/70 px-1.5 py-0.5 rounded">
              {selectedPlanet.image_credit}
            </div>
          </div>

          <p className="text-xs text-space-muted leading-relaxed mb-4">
            {selectedPlanet.description}
          </p>

          {/* Scientific Telemetry Table */}
          <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-4">
            <div className="p-2 rounded bg-space-secondary/60 border border-space-border/60">
              <span className="text-[10px] text-space-muted block">MEAN RADIUS</span>
              <span className="text-space-text font-bold">{selectedPlanet.mean_radius_km.toLocaleString()} km</span>
            </div>
            <div className="p-2 rounded bg-space-secondary/60 border border-space-border/60">
              <span className="text-[10px] text-space-muted block">DIST. FROM SUN</span>
              <span className="text-space-text font-bold">{selectedPlanet.distance_from_sun_au} AU</span>
            </div>
            <div className="p-2 rounded bg-space-secondary/60 border border-space-border/60">
              <span className="text-[10px] text-space-muted block">ORBITAL PERIOD</span>
              <span className="text-space-text font-bold">{selectedPlanet.orbital_period_days} Days</span>
            </div>
            <div className="p-2 rounded bg-space-secondary/60 border border-space-border/60">
              <span className="text-[10px] text-space-muted block">AXIAL TILT</span>
              <span className="text-space-text font-bold">{selectedPlanet.axial_tilt_deg}°</span>
            </div>
          </div>

          {/* Scientific Facts */}
          <div className="mb-4">
            <h4 className="text-xs font-mono uppercase text-space-accent font-semibold mb-2">NASA Scientific Facts</h4>
            <ul className="flex flex-col gap-1.5 text-xs text-space-muted">
              {selectedPlanet.scientific_facts.map((fact, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-space-accent">•</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Associated NASA Hardware & Missions */}
          <div className="mt-auto pt-4 border-t border-space-border">
            <div className="flex items-center justify-between text-xs font-mono mb-2">
              <span className="text-space-text font-semibold">ASSOCIATED MISSIONS</span>
              <span className="text-space-accent">{selectedPlanet.associated_missions.length} Missions</span>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {selectedPlanet.associated_missions.map((m, i) => (
                <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-space-secondary border border-space-border text-space-muted">
                  {m}
                </span>
              ))}
            </div>

            {selectedPlanet.associated_hardware_ids.length > 0 && (
              <Link
                to={`/archive?destination=${selectedPlanet.name === 'The Moon' ? 'Moon' : selectedPlanet.name}`}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-space-accent text-space-dark text-xs font-mono font-bold hover:bg-space-accent/90 transition-colors"
              >
                <span>EXPLORE {selectedPlanet.name.toUpperCase()} HARDWARE</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

