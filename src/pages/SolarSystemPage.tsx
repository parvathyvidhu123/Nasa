import React, { useState } from 'react';
import { SolarSystemCanvas } from '../three/SolarSystemCanvas';
import { SolarSystem2DView } from '../three/SolarSystem2DView';
import { PLANETS_DATA } from '../data/planetsData';
import { PlanetData } from '../types/planet';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  Orbit, 
  Layers, 
  Info, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Globe2,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const SolarSystemPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'3d' | '2d'>('3d');
  const [selectedBody, setSelectedBody] = useState<PlanetData | null>(null);

  const moonData = PLANETS_DATA.find(p => p.id === 'moon');

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <Breadcrumbs items={[{ label: 'EXPLORE SOLAR SYSTEM' }]} />

      {/* Header with View Switcher */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-space-accent uppercase tracking-widest mb-2">
            <Orbit className="w-4 h-4 text-space-accent" />
            <span>Interactive Celestial Cartography</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-space-text">
            SCIENTIFIC 3D SOLAR SYSTEM
          </h1>
          <p className="text-sm text-space-muted mt-2 max-w-2xl">
            Explore all 8 major planets and Earth's Moon with scientifically sourced physical dimensions, axial tilts, and verified spacecraft positions.
          </p>
        </div>

        {/* 3D vs 2D Accessibility Toggle */}
        <div className="flex items-center bg-space-card p-1 rounded-xl border border-space-border font-mono text-xs self-start md:self-auto">
          <button
            onClick={() => setViewMode('3d')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
              viewMode === '3d'
                ? 'bg-space-accent text-space-dark font-bold shadow-glow-accent'
                : 'text-space-muted hover:text-space-text'
            }`}
          >
            <Orbit className="w-3.5 h-3.5" />
            <span>3D Canvas</span>
          </button>
          <button
            onClick={() => setViewMode('2d')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
              viewMode === '2d'
                ? 'bg-space-accent text-space-dark font-bold shadow-glow-accent'
                : 'text-space-muted hover:text-space-text'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>2D Accessible</span>
          </button>
        </div>
      </div>

      {/* Main Visualization Canvas or 2D Alternative */}
      <div className="mb-12">
        {viewMode === '3d' ? (
          <SolarSystemCanvas onSelectPlanet={setSelectedBody} />
        ) : (
          <SolarSystem2DView onSelectPlanet={setSelectedBody} />
        )}
      </div>

      {/* Special Section: Explore Earth's Moon */}
      {moonData && (
        <div className="bg-space-card rounded-2xl border border-space-border/80 p-8 shadow-card-elevated mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-1/3 aspect-square rounded-xl overflow-hidden border border-space-border bg-space-dark relative group">
              <img
                src={moonData.authentic_image_url}
                alt="Earth Moon"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded bg-space-dark/80 backdrop-blur-sm text-[10px] font-mono text-space-muted">
                {moonData.image_credit}
              </div>
            </div>

            <div className="w-full lg:w-2/3 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-space-accent uppercase tracking-widest mb-2">
                  <MapPin className="w-3.5 h-3.5 text-space-accent" />
                  <span>Featured Explorable Destination</span>
                </div>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-space-text mb-3">
                  Earth’s Moon: Humanity’s Extraterrestrial Laboratory
                </h2>
                <p className="text-sm text-space-muted leading-relaxed mb-6">
                  The Moon hosts humanity's earliest and most historic artifacts—from the Apollo 11 Eagle descent stage to the Lunar Laser Ranging Retroreflectors that are still actively targeted by scientists from Earth today.
                </p>

                {/* Lunar Hardware Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-space-secondary border border-space-border">
                    <span className="font-bold text-space-text block">Apollo 11 Tranquility Base</span>
                    <span className="text-space-accent">0.67416° N, 23.47314° E</span>
                    <span className="text-space-muted text-[10px] block mt-1">Eagle Descent Stage & Active Retroreflector</span>
                  </div>
                  <div className="p-3 rounded-lg bg-space-secondary border border-space-border">
                    <span className="font-bold text-space-text block">Apollo 15 Hadley Rille</span>
                    <span className="text-space-accent">26.1322° N, 3.6339° E</span>
                    <span className="text-space-muted text-[10px] block mt-1">First Lunar Rover (LRV-1) & Falcon</span>
                  </div>
                </div>
              </div>

              <Link
                to="/archive?destination=Moon"
                className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-space-accent text-space-dark font-mono text-xs font-bold hover:bg-space-accent/90 transition-colors shadow-glow-accent"
              >
                <span>BROWSE ALL LUNAR HARDWARE</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Scientific Transparency & Sourced Data Disclosures */}
      <div className="bg-space-secondary/50 rounded-xl border border-space-border p-6 text-xs font-mono text-space-muted flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-space-success flex-shrink-0" />
          <span>
            Orbital parameters, axial tilts, and physical planetary constants sourced from <strong className="text-space-text">NASA Planetary Data System (PDS)</strong> & <strong className="text-space-text">USGS Astrogeology</strong>.
          </span>
        </div>
        <Link to="/about" className="text-space-accent hover:underline flex-shrink-0">
          Read Transparency Standards →
        </Link>
      </div>
    </div>
  );
};

