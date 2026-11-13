import React from 'react';
import { Link } from 'react-router-dom';
import {
  Orbit,
  Compass,
  Database,
  Clock,
  Atom,
  GraduationCap,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Satellite,
  Radio,
  Sparkles,
  ExternalLink,
  MapPin
} from 'lucide-react';
import { NASA_HARDWARE } from '../data/nasaHardware';
import { TIMELINE_DATA } from '../data/timelineData';
import { SCIENTIFIC_DISCOVERIES } from '../data/discoveriesData';
import { StatusBadge, DestinationBadge } from '../components/Badge';
import { TelemetryHUD } from '../components/TelemetryHUD';
import { getContextualFallback } from '../utils/fallbackImage';

export const HomePage: React.FC = () => {
  const featuredHardware = NASA_HARDWARE.filter(h => h.featured).slice(0, 4);
  const recentTimeline = TIMELINE_DATA.slice(0, 3);
  const topDiscoveries = SCIENTIFIC_DISCOVERIES.slice(0, 3);

  // Authenticated statistics calculated directly from verified data
  const totalHardware = NASA_HARDWARE.length;
  const operationalCount = NASA_HARDWARE.filter(h => h.operational_status === 'operational').length;
  const lunarHardwareCount = NASA_HARDWARE.filter(h => h.destination === 'Moon').length;
  const martianHardwareCount = NASA_HARDWARE.filter(h => h.destination === 'Mars').length;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Telemetry HUD Bar */}
      <div className="pt-16">
        <TelemetryHUD />
      </div>

      {/* Cinematic Hero Section with Authentic Planetary Backdrop */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20 bg-space-dark">
        {/* Authentic NASA Earth Backdrop Image */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="https://images-assets.nasa.gov/image/as11-44-6667/as11-44-6667~large.jpg"
            alt="Earthrise from Lunar Orbit"
            className="w-full h-full object-cover object-center opacity-30 scale-105 transform filter contrast-125"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images-assets.nasa.gov/image/as17-148-22727/as17-148-22727~medium.jpg';
            }}
          />
          {/* Radial & atmospheric gradients over the background */}
          <div className="absolute inset-0 bg-gradient-to-t from-space-dark via-space-dark/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-space-dark via-transparent to-space-dark" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-space-accent/10 blur-[130px] rounded-full" />
        </div>

        {/* Decorative orbital concentric lines */}
        <div className="absolute w-[800px] h-[800px] rounded-full border border-space-accent/15 -top-64 -right-48 pointer-events-none animate-spin-slow" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-space-purple/15 -bottom-48 -left-48 pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
          {/* Aerospace Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-space-card/90 border border-space-accent/40 text-xs font-mono text-space-accent shadow-glow-accent mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-space-accent animate-ping" />
            <span>NASA SPACE APPS CHALLENGE — STORYTELLING SPECIFICATION</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-space-text uppercase leading-none mb-6 drop-shadow-md">
            HUMANITY'S FOOTPRINTS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-space-accent via-space-purple to-space-text">
              BEYOND EARTH.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl text-base sm:text-xl text-space-muted leading-relaxed font-sans mb-10 text-shadow-sm">
            Discover the machines humanity left behind across the Moon, Mars, and interstellar deep space.
            Explore their ongoing scientific discoveries, authentic coordinates, and the stories they continue to tell.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              to="/solar-system"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-space-accent text-space-dark font-mono font-bold text-sm tracking-wide shadow-glow-accent hover:bg-space-accent/90 hover:scale-105 transition-all"
            >
              <Orbit className="w-4 h-4" />
              <span>EXPLORE SOLAR SYSTEM 3D</span>
            </Link>

            <Link
              to="/archive"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-space-card/90 border border-space-border hover:border-space-accent/60 text-space-text font-mono font-semibold text-sm tracking-wide hover:bg-space-secondary transition-all backdrop-blur-sm"
            >
              <Database className="w-4 h-4 text-space-accent" />
              <span>DISCOVER THE MISSIONS</span>
            </Link>
          </div>

          {/* Verified Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 w-full max-w-4xl pt-12 border-t border-space-border/60 font-mono">
            <div className="flex flex-col items-center p-3.5 rounded-xl bg-space-card/60 border border-space-border/60 backdrop-blur-sm">
              <span className="text-2xl sm:text-3xl font-bold text-space-accent">{totalHardware}</span>
              <span className="text-xs text-space-muted mt-1 uppercase">Tracked Artifacts</span>
            </div>
            <div className="flex flex-col items-center p-3.5 rounded-xl bg-space-card/60 border border-space-border/60 backdrop-blur-sm">
              <span className="text-2xl sm:text-3xl font-bold text-space-success">{operationalCount}</span>
              <span className="text-xs text-space-muted mt-1 uppercase">Active & Passive Systems</span>
            </div>
            <div className="flex flex-col items-center p-3.5 rounded-xl bg-space-card/60 border border-space-border/60 backdrop-blur-sm">
              <span className="text-2xl sm:text-3xl font-bold text-space-purple">{lunarHardwareCount}</span>
              <span className="text-xs text-space-muted mt-1 uppercase">Lunar Stations</span>
            </div>
            <div className="flex flex-col items-center p-3.5 rounded-xl bg-space-card/60 border border-space-border/60 backdrop-blur-sm">
              <span className="text-2xl sm:text-3xl font-bold text-space-warning">{martianHardwareCount}</span>
              <span className="text-xs text-space-muted mt-1 uppercase">Martian Explorers</span>
            </div>
          </div>
        </div>
      </section>

      {/* A. Project Introduction Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-space-secondary/50 border-y border-space-border/60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-space-accent uppercase tracking-widest mb-3">
              <Compass className="w-4 h-4" />
              <span>The Story Behind The Hardware</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-space-text mb-6">
              Silent Sentinels Chronicling The History of Space Exploration
            </h2>
            <p className="text-space-muted leading-relaxed mb-4">
              Since Neil Armstrong and Buzz Aldrin stepped onto the Moon in 1969, humanity has sent robotic ambassadors across billions of kilometers. When their primary missions conclude, these machines do not vanish—they become archaeological time capsules.
            </p>
            <p className="text-space-muted leading-relaxed mb-6">
              Some, like the Apollo 11 Lunar Laser Retroreflector, are <strong className="text-space-text">still working today</strong> after 55 years, reflecting green laser pulses back to Earth. Others, like the Ingenuity helicopter, have retired as permanent weather outposts on Mars.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono text-space-success">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Fabricated Data or Fake Locations</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-space-accent">
                <Satellite className="w-4 h-4" />
                <span>Real Coordinates from LROC & HiRISE</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-space-border shadow-card-elevated group aspect-video bg-space-dark">
            <img
              src="https://images-assets.nasa.gov/image/as11-40-5927/as11-40-5927~medium.jpg"
              alt="Apollo 11 Lunar Module Eagle"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images-assets.nasa.gov/image/as11-40-5952/as11-40-5952~medium.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-space-dark via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-space-text">
              <span>Apollo 11 Eagle Descent Stage (0.674° N, 23.473° E)</span>
              <span className="text-space-muted">NASA Archive</span>
            </div>
          </div>
        </div>
      </section>

      {/* B. Featured NASA Hardware */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-space-accent uppercase tracking-widest mb-2">
              <Satellite className="w-4 h-4" />
              <span>Verified Artifacts</span>
            </div>
            <h2 className="font-heading font-bold text-3xl text-space-text">
              Featured NASA Hardware
            </h2>
          </div>
          <Link
            to="/archive"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-space-accent hover:text-space-accent/80 transition-colors"
          >
            <span>VIEW ALL {totalHardware} ARTIFACTS</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredHardware.map((item) => (
            <Link
              key={item.id}
              to={`/hardware/${item.id}`}
              className="group flex flex-col bg-space-card rounded-xl border border-space-border/80 hover:border-space-accent/50 overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-card-elevated"
            >
              <div className="relative aspect-video overflow-hidden bg-space-secondary">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = getContextualFallback(item.destination);
                  }}
                />
                <div className="absolute top-2.5 right-2.5">
                  <StatusBadge status={item.operational_status} size="sm" />
                </div>
                <div className="absolute bottom-2.5 left-2.5">
                  <DestinationBadge destination={item.destination} size="sm" />
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-heading font-bold text-base text-space-text group-hover:text-space-accent transition-colors mb-2 line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-xs text-space-muted leading-relaxed mb-4 line-clamp-2">
                  {item.student_takeaway}
                </p>

                <div className="mt-auto pt-3 border-t border-space-border/60 flex items-center justify-between text-[11px] font-mono text-space-muted">
                  <span className="flex items-center gap-1 truncate max-w-[150px]">
                    <MapPin className="w-3 h-3 text-space-accent flex-shrink-0" />
                    <span className="truncate">{item.location_data.site_name}</span>
                  </span>
                  <span className="text-space-accent flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                    <span>Details</span>
                    <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* D. Solar System 3D Preview Teaser (With Rich Planetary Showcase Images) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-space-secondary/60 border-t border-space-border">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-space-accent uppercase tracking-widest mb-3">
              <Orbit className="w-4 h-4 text-space-accent" />
              <span>Scientifically Grounded Rendering</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-space-text mb-4">
              Explore The 3D Solar System
            </h2>
            <p className="text-space-muted leading-relaxed mb-6">
              Navigate all 8 major planets from Mercury to Neptune, along with Earth’s Moon and deep space trajectories. Powered by Three.js and React Three Fiber with authentic planetary properties, disclosed orbital scaling, and verified spacecraft positions.
            </p>
            <div className="flex flex-wrap gap-3 mb-8 text-xs font-mono text-space-muted">
              <span className="px-2.5 py-1 rounded bg-space-card border border-space-border">Authentic USGS Textures</span>
              <span className="px-2.5 py-1 rounded bg-space-card border border-space-border">Axial Tilt Proportions</span>
              <span className="px-2.5 py-1 rounded bg-space-card border border-space-border">Accessible 2D Fallback</span>
            </div>
            <Link
              to="/solar-system"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-space-accent text-space-dark font-mono font-bold text-xs tracking-wider hover:bg-space-accent/90 transition-all shadow-glow-accent"
            >
              <span>LAUNCH 3D EXPLORER</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Planetary Destination Cards with Real Photos */}
          <div className="w-full lg:max-w-md bg-space-card rounded-2xl border border-space-border p-5 shadow-card-elevated">
            <div className="flex items-center justify-between pb-3 border-b border-space-border mb-3 text-xs font-mono">
              <span className="text-space-text font-bold uppercase">Planetary Destinations</span>
              <span className="text-space-accent">8 Planets + Moon</span>
            </div>
            <div className="flex flex-col gap-2.5">
              {[
                {
                  name: 'The Moon',
                  desc: 'Apollo 11, 15, 17, Surveyor 3 & Laser Reflectors',
                  status: 'Active Reflection',
                  img: 'https://images-assets.nasa.gov/image/as11-44-6667/as11-44-6667~medium.jpg'
                },
                {
                  name: 'Mars',
                  desc: 'Curiosity, Perseverance, Opportunity, Spirit & Ingenuity',
                  status: 'Active & Inactive',
                  img: 'https://images-assets.nasa.gov/image/PIA04304/PIA04304~medium.jpg'
                },
                {
                  name: 'Deep Space',
                  desc: 'Voyager 1, Voyager 2 & New Horizons (Past 163 AU)',
                  status: 'Active Telemetry',
                  img: 'https://images-assets.nasa.gov/image/PIA17046/PIA17046~medium.jpg'
                },
                {
                  name: 'Saturn System',
                  desc: 'Cassini Atmospheric Entry Sept 2017',
                  status: 'Completed',
                  img: 'https://images-assets.nasa.gov/image/PIA17172/PIA17172~medium.jpg'
                },
              ].map((dest, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-space-secondary/70 border border-space-border/60 flex items-center gap-3 text-xs">
                  <div className="w-12 h-12 rounded-lg overflow-hidden border border-space-border flex-shrink-0 bg-space-dark">
                    <img src={dest.img} alt={dest.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h4 className="font-mono font-bold text-space-text truncate">{dest.name}</h4>
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-space-card text-space-accent border border-space-border flex-shrink-0">
                        {dest.status}
                      </span>
                    </div>
                    <p className="text-[11px] text-space-muted truncate mt-0.5">{dest.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* E & F. Mission Timeline & Discoveries Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Timeline Teaser */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-space-accent" />
                <h3 className="font-heading font-bold text-2xl text-space-text">Chronological Missions</h3>
              </div>
              <Link to="/timeline" className="text-xs font-mono text-space-accent hover:underline">
                View All Decades →
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              {recentTimeline.map((event) => (
                <div key={event.id} className="p-4 rounded-xl bg-space-card border border-space-border flex gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border border-space-border bg-space-secondary">
                    <img
                      src={event.image_url}
                      alt={event.mission_name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = getContextualFallback(event.category);
                      }}
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-bold text-space-accent">{event.year}</span>
                      <span className="text-xs font-mono text-space-muted">•</span>
                      <span className="text-xs font-mono text-space-text font-medium">{event.mission_name}</span>
                    </div>
                    <h4 className="font-medium text-sm text-space-text line-clamp-1">{event.title}</h4>
                    <p className="text-xs text-space-muted line-clamp-1 mt-0.5">{event.scientific_achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scientific Discoveries Teaser */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Atom className="w-5 h-5 text-space-purple" />
                <h3 className="font-heading font-bold text-2xl text-space-text">Scientific Breakthroughs</h3>
              </div>
              <Link to="/discoveries" className="text-xs font-mono text-space-purple hover:underline">
                Explore Discoveries →
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              {topDiscoveries.map((disc) => (
                <div key={disc.id} className="p-4 rounded-xl bg-space-card border border-space-border flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="px-2 py-0.5 rounded bg-space-purple/15 text-space-purple border border-space-purple/30">
                      {disc.category}
                    </span>
                    <span className="text-space-muted">{disc.discovery_year}</span>
                  </div>
                  <h4 className="font-semibold text-sm text-space-text mb-1">{disc.title}</h4>
                  <p className="text-xs text-space-muted line-clamp-2 leading-relaxed">{disc.key_findings}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* G. Educational Space Lab Call To Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-space-secondary/80 to-space-dark border-t border-space-border text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-space-card border border-space-accent/40 flex items-center justify-center shadow-glow-accent mb-6">
            <GraduationCap className="w-6 h-6 text-space-accent" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-space-text mb-4">
            Test Your Knowledge in the Space Lab
          </h2>
          <p className="text-space-muted leading-relaxed mb-8">
            Created for school-age space enthusiasts and curious minds. Challenge yourself with interactive quizzes:
            Guess the Spacecraft, Active vs. Inactive status checks, and planetary identification puzzles!
          </p>
          <Link
            to="/space-lab"
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-space-accent text-space-dark font-mono font-bold text-sm hover:bg-space-accent/90 transition-all shadow-glow-accent"
          >
            <Sparkles className="w-4 h-4" />
            <span>ENTER EDUCATIONAL SPACE LAB</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
