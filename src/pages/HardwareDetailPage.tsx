import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { NASA_HARDWARE } from '../data/nasaHardware';
import { StatusBadge, DestinationBadge } from '../components/Badge';
import { getContextualFallback } from '../utils/fallbackImage';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink, 
  Atom, 
  Award, 
  Compass, 
  ChevronDown, 
  ChevronUp, 
  Activity,
  Layers,
  ArrowLeft,
  GraduationCap
} from 'lucide-react';

export const HardwareDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [techOpen, setTechOpen] = useState(false);

  const hardware = NASA_HARDWARE.find(h => h.id === id);

  if (!hardware) {
    return <Navigate to="/archive" replace />;
  }

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
      <Breadcrumbs
        items={[
          { label: 'NASA ARCHIVE', path: '/archive' },
          { label: hardware.name }
        ]}
      />

      {/* Back button */}
      <Link
        to="/archive"
        className="inline-flex items-center gap-2 text-xs font-mono text-space-muted hover:text-space-accent transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>BACK TO HARDWARE ARCHIVE</span>
      </Link>

      {/* Header Banner */}
      <div className="bg-space-card rounded-2xl border border-space-border/80 overflow-hidden shadow-card-elevated mb-10">
        {/* Large Authentic NASA Image */}
        <div className="relative aspect-video sm:aspect-[21/9] bg-space-dark overflow-hidden">
          <img
            src={hardware.image_url}
            alt={hardware.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = getContextualFallback(hardware.destination);
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-card via-space-card/30 to-transparent" />
          
          {/* Top Floating Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <DestinationBadge destination={hardware.destination} />
            <StatusBadge status={hardware.operational_status} />
          </div>

          <div className="absolute bottom-3 right-4 text-[10px] font-mono text-space-muted bg-space-dark/80 px-2 py-0.5 rounded backdrop-blur-sm">
            Credit: {hardware.image_credit}
          </div>
        </div>

        {/* Title & Core Meta */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-mono text-space-accent mb-2">
            <span>MISSION: {hardware.mission}</span>
            <span>•</span>
            <span>TYPE: {hardware.hardware_type}</span>
          </div>

          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-space-text mb-4">
            {hardware.name}
          </h1>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono pt-4 border-t border-space-border/60">
            <div className="p-3 rounded-xl bg-space-secondary/70 border border-space-border/60">
              <span className="text-[10px] text-space-muted uppercase block">Launch Date</span>
              <span className="font-bold text-space-text">{hardware.launch_date}</span>
            </div>
            <div className="p-3 rounded-xl bg-space-secondary/70 border border-space-border/60">
              <span className="text-[10px] text-space-muted uppercase block">Arrival Date</span>
              <span className="font-bold text-space-text">{hardware.arrival_date}</span>
            </div>
            <div className="p-3 rounded-xl bg-space-secondary/70 border border-space-border/60">
              <span className="text-[10px] text-space-muted uppercase block">Status As Of</span>
              <span className="font-bold text-space-success">{hardware.status_as_of}</span>
            </div>
            <div className="p-3 rounded-xl bg-space-secondary/70 border border-space-border/60">
              <span className="text-[10px] text-space-muted uppercase block">Destination</span>
              <span className="font-bold text-space-accent">{hardware.destination}</span>
            </div>
          </div>
        </div>
      </div>

      {/* SPECIAL EDUCATIONAL SECTION: WHAT DID THIS MACHINE TEACH HUMANITY? */}
      <div className="bg-gradient-to-r from-space-card via-space-card to-space-secondary rounded-2xl border-2 border-space-accent/40 p-6 sm:p-8 shadow-glow-accent/20 mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-lg bg-space-accent/20 border border-space-accent/40 flex items-center justify-center text-space-accent">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h2 className="font-heading font-bold text-lg sm:text-xl text-space-text">
            WHAT DID THIS MACHINE TEACH HUMANITY?
          </h2>
        </div>
        <p className="text-sm sm:text-base text-space-text/90 leading-relaxed font-sans pl-1">
          {hardware.student_takeaway}
        </p>
      </div>

      {/* Mission Objectives & Status Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2 flex flex-col gap-8">
          {/* Mission Objective */}
          <div className="bg-space-card rounded-2xl border border-space-border p-6 sm:p-7 shadow-card-elevated">
            <h3 className="font-heading font-bold text-lg text-space-text mb-3 flex items-center gap-2">
              <Compass className="w-4 h-4 text-space-accent" />
              <span>Mission Objective</span>
            </h3>
            <p className="text-sm text-space-muted leading-relaxed">
              {hardware.mission_objective}
            </p>
          </div>

          {/* Important Discoveries */}
          <div className="bg-space-card rounded-2xl border border-space-border p-6 sm:p-7 shadow-card-elevated">
            <h3 className="font-heading font-bold text-lg text-space-text mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-space-purple" />
              <span>Important Scientific Discoveries</span>
            </h3>
            <ul className="flex flex-col gap-3">
              {hardware.discoveries.map((discovery, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-space-muted leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-space-purple mt-2 flex-shrink-0" />
                  <span>{discovery}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Scientific Instruments */}
          <div className="bg-space-card rounded-2xl border border-space-border p-6 sm:p-7 shadow-card-elevated">
            <h3 className="font-heading font-bold text-lg text-space-text mb-4 flex items-center gap-2">
              <Atom className="w-4 h-4 text-space-accent" />
              <span>Scientific Instruments Onboard</span>
            </h3>
            <div className="flex flex-col gap-3">
              {hardware.scientific_instruments.map((inst, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-space-secondary/70 border border-space-border/60">
                  <div className="font-mono text-xs font-bold text-space-text mb-1">
                    {inst.name} {inst.abbreviation && <span className="text-space-accent font-normal">({inst.abbreviation})</span>}
                  </div>
                  <p className="text-xs text-space-muted leading-relaxed">
                    {inst.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar: Location, Status Accuracy & Sources */}
        <div className="flex flex-col gap-6">
          {/* Location & Coordinates */}
          <div className="bg-space-card rounded-2xl border border-space-border p-6 shadow-card-elevated">
            <div className="flex items-center gap-2 font-mono text-xs text-space-accent uppercase font-semibold mb-3">
              <MapPin className="w-4 h-4" />
              <span>Verified Location</span>
            </div>
            <div className="text-sm font-semibold text-space-text mb-2">
              {hardware.location_data.site_name}
            </div>
            {hardware.location_data.coordinates_string && (
              <div className="font-mono text-xs bg-space-secondary p-2.5 rounded-lg border border-space-border text-space-accent mb-3 select-all">
                {hardware.location_data.coordinates_string}
              </div>
            )}
            {hardware.location_data.current_distance_au && (
              <div className="text-xs font-mono text-space-purple mb-3">
                Distance: {hardware.location_data.current_distance_au}
              </div>
            )}
            <div className="text-[11px] font-mono text-space-muted leading-relaxed flex items-start gap-2 pt-2 border-t border-space-border">
              <ShieldCheck className="w-4 h-4 text-space-success flex-shrink-0 mt-0.5" />
              <span>{hardware.location_accuracy}</span>
            </div>
          </div>

          {/* Status Note */}
          <div className="bg-space-card rounded-2xl border border-space-border p-6 shadow-card-elevated">
            <div className="flex items-center gap-2 font-mono text-xs text-space-text uppercase font-semibold mb-2">
              <Activity className="w-4 h-4 text-space-success" />
              <span>Current Status Note</span>
            </div>
            <p className="text-xs text-space-muted leading-relaxed mb-3">
              {hardware.status_note}
            </p>
            <div className="text-[11px] font-mono text-space-muted pt-2 border-t border-space-border">
              Verified as of: <span className="text-space-text">{hardware.status_as_of}</span>
            </div>
          </div>

          {/* NASA Sources & Dataset Citations */}
          <div className="bg-space-card rounded-2xl border border-space-border p-6 shadow-card-elevated">
            <h4 className="font-mono text-xs uppercase text-space-text font-semibold mb-3">
              NASA Sources & Dataset
            </h4>
            <div className="text-xs font-mono text-space-muted mb-3 break-all p-2 rounded bg-space-secondary border border-space-border">
              <span className="text-[10px] text-space-muted uppercase block">Dataset:</span>
              <span className="text-space-text">{hardware.dataset_reference}</span>
            </div>

            <div className="flex flex-col gap-2">
              {hardware.source_urls.map((src, i) => (
                <a
                  key={i}
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-space-secondary hover:bg-space-secondary/80 text-xs text-space-accent transition-colors font-mono"
                >
                  <span className="truncate pr-2">{src.title}</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technical Details Accordion */}
      <div className="bg-space-card rounded-2xl border border-space-border overflow-hidden shadow-card-elevated mb-12">
        <button
          onClick={() => setTechOpen(!techOpen)}
          className="w-full p-6 flex items-center justify-between text-left hover:bg-space-secondary/50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Layers className="w-5 h-5 text-space-accent" />
            <div>
              <h3 className="font-heading font-bold text-lg text-space-text">Advanced Technical Specifications</h3>
              <p className="text-xs font-mono text-space-muted">Dimensions, telemetry mass, power generator, and communications subsystem</p>
            </div>
          </div>
          {techOpen ? <ChevronUp className="w-5 h-5 text-space-muted" /> : <ChevronDown className="w-5 h-5 text-space-muted" />}
        </button>

        {techOpen && (
          <div className="p-6 pt-0 border-t border-space-border/60 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs font-mono">
            {hardware.technical_details.mass_kg && (
              <div className="p-3 rounded-xl bg-space-secondary border border-space-border">
                <span className="text-[10px] text-space-muted block uppercase">Hardware Mass</span>
                <span className="font-bold text-space-text">{hardware.technical_details.mass_kg} kg</span>
              </div>
            )}
            {hardware.technical_details.dimensions && (
              <div className="p-3 rounded-xl bg-space-secondary border border-space-border">
                <span className="text-[10px] text-space-muted block uppercase">Dimensions</span>
                <span className="font-bold text-space-text">{hardware.technical_details.dimensions}</span>
              </div>
            )}
            <div className="p-3 rounded-xl bg-space-secondary border border-space-border">
              <span className="text-[10px] text-space-muted block uppercase">Power Source</span>
              <span className="font-bold text-space-text">{hardware.technical_details.power_source}</span>
            </div>
            {hardware.technical_details.comm_band && (
              <div className="p-3 rounded-xl bg-space-secondary border border-space-border">
                <span className="text-[10px] text-space-muted block uppercase">Communications Band</span>
                <span className="font-bold text-space-text">{hardware.technical_details.comm_band}</span>
              </div>
            )}
            {hardware.technical_details.total_distance_traveled_km && (
              <div className="p-3 rounded-xl bg-space-secondary border border-space-border">
                <span className="text-[10px] text-space-muted block uppercase">Distance Traveled</span>
                <span className="font-bold text-space-text">{hardware.technical_details.total_distance_traveled_km.toLocaleString()} km</span>
              </div>
            )}
            {hardware.technical_details.active_duration_days && (
              <div className="p-3 rounded-xl bg-space-secondary border border-space-border">
                <span className="text-[10px] text-space-muted block uppercase">Active Duration</span>
                <span className="font-bold text-space-text">{hardware.technical_details.active_duration_days} Days</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

