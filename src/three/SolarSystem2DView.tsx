import React, { useState } from 'react';
import { PLANETS_DATA } from '../data/planetsData';
import { PlanetData } from '../types/planet';
import { ChevronRight, ExternalLink, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SolarSystem2DViewProps {
  onSelectPlanet?: (planet: PlanetData) => void;
}

export const SolarSystem2DView: React.FC<SolarSystem2DViewProps> = ({ onSelectPlanet }) => {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData>(PLANETS_DATA[2]); // Default Earth

  const handleSelect = (planet: PlanetData) => {
    setSelectedPlanet(planet);
    if (onSelectPlanet) {
      onSelectPlanet(planet);
    }
  };

  return (
    <div className="w-full bg-space-card/70 rounded-2xl border border-space-border p-6 shadow-card-elevated">
      {/* Accessible Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-space-border">
        <div>
          <h3 className="font-heading font-bold text-lg text-space-text">Accessible 2D Solar System Explorer</h3>
          <p className="text-xs font-mono text-space-muted">High-contrast, screen-reader friendly visualization of planetary bodies and orbital scales</p>
        </div>
        <span className="text-xs font-mono px-2.5 py-1 rounded bg-space-accent/15 border border-space-accent/30 text-space-accent">
          2D COMPATIBLE
        </span>
      </div>

      {/* 2D Orbital Strip of Planets from Sun */}
      <div className="flex items-center gap-3 overflow-x-auto pb-6 mb-8 scrollbar-thin">
        {/* Sun representation */}
        <div className="flex flex-col items-center gap-2 min-w-[70px]">
          <div className="w-14 h-14 rounded-full bg-amber-400 shadow-glow-sun flex items-center justify-center font-mono text-[10px] text-space-dark font-bold">
            SUN
          </div>
          <span className="text-[11px] font-mono text-amber-400 font-semibold">1.0 R☉</span>
        </div>

        {PLANETS_DATA.map((planet) => {
          const isSelected = selectedPlanet.id === planet.id;
          return (
            <button
              key={planet.id}
              onClick={() => handleSelect(planet)}
              className={`flex flex-col items-center gap-2 min-w-[90px] p-3 rounded-xl border transition-all ${
                isSelected 
                  ? 'bg-space-accent/20 border-space-accent shadow-glow-accent' 
                  : 'bg-space-secondary/50 border-space-border/60 hover:border-space-border-bright'
              }`}
            >
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shadow-md transition-transform hover:scale-110"
                style={{ backgroundColor: planet.color_hex }}
              >
                <span className="text-space-dark font-mono text-[11px]">{planet.name.substring(0, 2)}</span>
              </div>
              <span className={`text-xs font-mono font-medium ${isSelected ? 'text-space-accent font-bold' : 'text-space-text'}`}>
                {planet.name}
              </span>
              <span className="text-[10px] font-mono text-space-muted">
                {planet.distance_from_sun_au} AU
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Body Deep Dive Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-space-secondary/60 rounded-xl border border-space-border p-6">
        {/* Authentic Photo */}
        <div className="flex flex-col gap-2">
          <div className="rounded-lg overflow-hidden border border-space-border aspect-video bg-space-dark">
            <img
              src={selectedPlanet.authentic_image_url}
              alt={selectedPlanet.name}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-[10px] font-mono text-space-muted">{selectedPlanet.image_credit}</span>
        </div>

        {/* Telemetry & Description */}
        <div className="lg:col-span-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h4 className="font-heading font-bold text-xl text-space-text">{selectedPlanet.name}</h4>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-space-card text-space-accent border border-space-border">
                {selectedPlanet.type}
              </span>
            </div>
            <p className="text-sm text-space-muted mb-4 leading-relaxed">
              {selectedPlanet.description}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono mb-4">
              <div className="p-2.5 rounded bg-space-card border border-space-border">
                <span className="text-[10px] text-space-muted block">MEAN RADIUS</span>
                <span className="font-bold text-space-text">{selectedPlanet.mean_radius_km.toLocaleString()} km</span>
              </div>
              <div className="p-2.5 rounded bg-space-card border border-space-border">
                <span className="text-[10px] text-space-muted block">DISTANCE</span>
                <span className="font-bold text-space-text">{selectedPlanet.distance_from_sun_million_km} M km</span>
              </div>
              <div className="p-2.5 rounded bg-space-card border border-space-border">
                <span className="text-[10px] text-space-muted block">ORBITAL PERIOD</span>
                <span className="font-bold text-space-text">{selectedPlanet.orbital_period_days} Days</span>
              </div>
              <div className="p-2.5 rounded bg-space-card border border-space-border">
                <span className="text-[10px] text-space-muted block">MOONS COUNT</span>
                <span className="font-bold text-space-text">{selectedPlanet.moons_count}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-space-border flex-wrap gap-3">
            <div className="text-xs font-mono text-space-muted">
              <span>Atmosphere: </span>
              <span className="text-space-text">{selectedPlanet.atmosphere.slice(0, 60)}...</span>
            </div>
            {selectedPlanet.associated_hardware_ids.length > 0 && (
              <Link
                to={`/archive?destination=${selectedPlanet.name === 'The Moon' ? 'Moon' : selectedPlanet.name}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-space-accent text-space-dark text-xs font-mono font-bold hover:bg-space-accent/90 transition-colors"
              >
                <span>VIEW HARDWARE ARCHIVE</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

