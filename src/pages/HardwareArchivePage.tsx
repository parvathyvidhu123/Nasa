import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { NASA_HARDWARE } from '../data/nasaHardware';
import { HardwareRecord, Destination, HardwareStatus } from '../types/hardware';
import { StatusBadge, DestinationBadge } from '../components/Badge';
import { getContextualFallback } from '../utils/fallbackImage';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  Search, 
  Filter, 
  MapPin, 
  Calendar, 
  ChevronRight, 
  RotateCcw, 
  ShieldCheck, 
  CheckCircle2,
  Database,
  ExternalLink
} from 'lucide-react';

export const HardwareArchivePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDestination, setSelectedDestination] = useState<string>(
    searchParams.get('destination') || 'all'
  );
  const [selectedStatus, setSelectedStatus] = useState<string>(
    searchParams.get('status') || 'all'
  );

  const destinations = ['all', 'Moon', 'Mars', 'Deep Space', 'Saturn', 'Jupiter', 'Asteroids'];
  const statuses: Array<{ value: string; label: string }> = [
    { value: 'all', label: 'All Statuses' },
    { value: 'operational', label: 'Operational' },
    { value: 'partially-operational', label: 'Partially Operational' },
    { value: 'inactive', label: 'Inactive Artifact' },
    { value: 'mission-completed', label: 'Mission Completed' },
  ];

  // Filtered hardware records
  const filteredHardware = useMemo(() => {
    return NASA_HARDWARE.filter((item) => {
      // Search text match
      const query = searchTerm.toLowerCase();
      const matchesSearch = 
        item.name.toLowerCase().includes(query) ||
        item.mission.toLowerCase().includes(query) ||
        item.destination.toLowerCase().includes(query) ||
        item.hardware_type.toLowerCase().includes(query) ||
        item.scientific_instruments.some(inst => inst.name.toLowerCase().includes(query)) ||
        item.location_data.site_name.toLowerCase().includes(query);

      // Destination filter
      const matchesDestination = 
        selectedDestination === 'all' || item.destination.toLowerCase() === selectedDestination.toLowerCase();

      // Status filter
      const matchesStatus = 
        selectedStatus === 'all' || item.operational_status === selectedStatus;

      return matchesSearch && matchesDestination && matchesStatus;
    });
  }, [searchTerm, selectedDestination, selectedStatus]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedDestination('all');
    setSelectedStatus('all');
    setSearchParams({});
  };

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <Breadcrumbs items={[{ label: 'NASA HARDWARE ARCHIVE' }]} />

      {/* Page Title & Intro */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-space-accent uppercase tracking-widest mb-2">
          <Database className="w-4 h-4 text-space-accent" />
          <span>Historical & Active Aerospace Catalog</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-space-text">
          NASA HARDWARE ARCHIVE
        </h1>
        <p className="text-sm text-space-muted mt-2 max-w-3xl leading-relaxed">
          Comprehensive registry of documented NASA equipment left across planetary surfaces and deep space. 
          Each record is verified against NASA Planetary Data System (PDS) and NSSDCA catalog identifiers with verified coordinates and operational status verification dates.
        </p>
      </div>

      {/* Filter & Search Bar Controls */}
      <div className="bg-space-card/90 backdrop-blur-md rounded-2xl border border-space-border p-5 shadow-card-elevated mb-8">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-space-muted" />
            <input
              type="text"
              placeholder="Search by hardware name, mission, instrument, or site..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-space-secondary/80 border border-space-border text-space-text placeholder-space-muted text-sm font-sans focus:outline-none focus:border-space-accent transition-colors"
            />
          </div>

          {/* Status Dropdown */}
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-space-muted hidden sm:inline">STATUS:</span>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-space-secondary border border-space-border text-space-text px-3 py-2.5 rounded-xl focus:outline-none focus:border-space-accent transition-colors text-xs font-mono cursor-pointer"
            >
              {statuses.map(st => (
                <option key={st.value} value={st.value}>{st.label}</option>
              ))}
            </select>
          </div>

          {/* Reset Filters */}
          {(searchTerm || selectedDestination !== 'all' || selectedStatus !== 'all') && (
            <button
              onClick={handleResetFilters}
              className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-space-secondary text-space-muted hover:text-space-text border border-space-border text-xs font-mono transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Destination Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-4 border-t border-space-border/60 scrollbar-none font-mono text-xs">
          <span className="text-space-muted flex-shrink-0 text-[11px] uppercase tracking-wider">Destination:</span>
          {destinations.map((dest) => {
            const isSelected = selectedDestination.toLowerCase() === dest.toLowerCase();
            return (
              <button
                key={dest}
                onClick={() => setSelectedDestination(dest)}
                className={`px-3 py-1 rounded-lg border text-xs whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-space-accent text-space-dark font-bold border-space-accent shadow-glow-accent'
                    : 'bg-space-secondary/60 text-space-muted border-space-border hover:border-space-border-bright hover:text-space-text'
                }`}
              >
                {dest === 'all' ? 'All Destinations' : dest}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Header Count */}
      <div className="flex items-center justify-between text-xs font-mono text-space-muted mb-6">
        <span>Showing {filteredHardware.length} of {NASA_HARDWARE.length} verified NASA artifacts</span>
        <span className="text-space-success flex items-center gap-1">
          <ShieldCheck className="w-4 h-4" />
          <span>Status Verification Standard Active</span>
        </span>
      </div>

      {/* Hardware Card Grid */}
      {filteredHardware.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHardware.map((item) => (
            <Link
              key={item.id}
              to={`/hardware/${item.id}`}
              className="group flex flex-col bg-space-card rounded-2xl border border-space-border/80 hover:border-space-accent/60 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-card-elevated"
            >
              {/* Card Photo with Badges */}
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
                <div className="absolute top-3 right-3">
                  <StatusBadge status={item.operational_status} size="sm" />
                </div>
                <div className="absolute bottom-3 left-3">
                  <DestinationBadge destination={item.destination} size="sm" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-[11px] font-mono text-space-accent font-semibold mb-1">
                    {item.mission} • {item.hardware_type}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-space-text group-hover:text-space-accent transition-colors mb-2 line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-space-muted leading-relaxed mb-4 line-clamp-2">
                    {item.student_takeaway}
                  </p>
                </div>

                <div>
                  {/* Location & Coordinates Snippet */}
                  <div className="p-2.5 rounded-xl bg-space-secondary/60 border border-space-border/60 text-xs font-mono mb-4">
                    <div className="flex items-center gap-1.5 text-space-text font-medium truncate">
                      <MapPin className="w-3.5 h-3.5 text-space-accent flex-shrink-0" />
                      <span className="truncate">{item.location_data.site_name}</span>
                    </div>
                    {item.location_data.coordinates_string && (
                      <div className="text-[10px] text-space-muted mt-1 truncate pl-5">
                        {item.location_data.coordinates_string}
                      </div>
                    )}
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3 border-t border-space-border/60 flex items-center justify-between text-xs font-mono">
                    <span className="text-[11px] text-space-muted">
                      Arrived: {item.arrival_date}
                    </span>
                    <span className="text-space-accent flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform">
                      <span>View Record</span>
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-20 bg-space-card/40 rounded-2xl border border-space-border">
          <Database className="w-12 h-12 text-space-muted mx-auto mb-4 opacity-50" />
          <h3 className="font-heading font-bold text-lg text-space-text mb-2">No NASA Hardware Found</h3>
          <p className="text-sm text-space-muted max-w-md mx-auto mb-6">
            No hardware records matched your search query or filters. Try adjusting your search term or resetting your filter selections.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 rounded-xl bg-space-accent text-space-dark text-xs font-mono font-bold hover:bg-space-accent/90 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};

