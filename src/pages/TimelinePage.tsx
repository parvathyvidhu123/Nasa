import React, { useState, useMemo } from 'react';
import { TIMELINE_DATA } from '../data/timelineData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Clock, Filter, Calendar, MapPin, Award, ExternalLink, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TimelinePage: React.FC = () => {
  const [selectedDecade, setSelectedDecade] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const decades = ['all', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'];
  const categories = ['all', 'Moon', 'Mars', 'Deep Space', 'Outer Planets'];

  const filteredEvents = useMemo(() => {
    return TIMELINE_DATA.filter((event) => {
      const matchDecade = selectedDecade === 'all' || event.decade === selectedDecade;
      const matchCat = selectedCategory === 'all' || event.category === selectedCategory;
      return matchDecade && matchCat;
    });
  }, [selectedDecade, selectedCategory]);

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
      <Breadcrumbs items={[{ label: 'MISSION TIMELINE' }]} />

      <div className="mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-space-accent uppercase tracking-widest mb-2">
          <Clock className="w-4 h-4 text-space-accent" />
          <span>Chronological Exploration History</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-space-text">
          MISSION TIMELINE (1969–PRESENT)
        </h1>
        <p className="text-sm text-space-muted mt-2 max-w-3xl leading-relaxed">
          Follow the chronological march of human ingenuity across the solar system. Filter by decade or destination to trace the key milestones from Apollo’s first lunar steps to the autonomous flights of Ingenuity.
        </p>
      </div>

      {/* Filters Bar */}
      <div className="bg-space-card/90 backdrop-blur-md rounded-2xl border border-space-border p-5 shadow-card-elevated mb-12 flex flex-col gap-4">
        {/* Decades */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none font-mono text-xs">
          <span className="text-space-muted flex-shrink-0 text-[11px] uppercase tracking-wider">Decade:</span>
          {decades.map((dec) => (
            <button
              key={dec}
              onClick={() => setSelectedDecade(dec)}
              className={`px-3 py-1 rounded-lg border text-xs whitespace-nowrap transition-all ${
                selectedDecade === dec
                  ? 'bg-space-accent text-space-dark font-bold border-space-accent shadow-glow-accent'
                  : 'bg-space-secondary/60 text-space-muted border-space-border hover:text-space-text'
              }`}
            >
              {dec === 'all' ? 'All Decades' : dec}
            </button>
          ))}
        </div>

        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none font-mono text-xs pt-3 border-t border-space-border/60">
          <span className="text-space-muted flex-shrink-0 text-[11px] uppercase tracking-wider">Destination:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg border text-xs whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-space-purple text-space-text font-bold border-space-purple shadow-glow-purple'
                  : 'bg-space-secondary/60 text-space-muted border-space-border hover:text-space-text'
              }`}
            >
              {cat === 'all' ? 'All Destinations' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Vertical Timeline */}
      <div className="relative border-l-2 border-space-border ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {filteredEvents.map((event) => (
          <div key={event.id} className="relative group">
            {/* Timeline node dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-space-card border-2 border-space-accent shadow-glow-accent group-hover:scale-125 transition-transform" />

            {/* Event Card */}
            <div className="bg-space-card rounded-2xl border border-space-border/80 hover:border-space-accent/50 p-6 sm:p-7 shadow-card-elevated transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="px-2.5 py-0.5 rounded bg-space-accent/15 text-space-accent font-bold border border-space-accent/30">
                    {event.year}
                  </span>
                  <span className="text-space-muted">{event.date_string}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-space-muted">
                  <MapPin className="w-3.5 h-3.5 text-space-accent" />
                  <span>{event.destination}</span>
                </div>
              </div>

              <h2 className="font-heading font-bold text-xl sm:text-2xl text-space-text mb-2">
                {event.title}
              </h2>

              <div className="text-xs font-mono text-space-accent font-semibold mb-4">
                {event.mission_name} • Hardware: {event.hardware_name}
              </div>

              {/* Event Image */}
              <div className="relative aspect-video sm:aspect-[21/9] rounded-xl overflow-hidden border border-space-border mb-5 bg-space-secondary">
                <img
                  src={event.image_url}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-2 right-2 text-[9px] font-mono text-space-muted bg-space-dark/80 px-2 py-0.5 rounded">
                  {event.image_credit}
                </div>
              </div>

              <p className="text-sm text-space-muted leading-relaxed mb-4">
                {event.description}
              </p>

              {/* Scientific Achievement Callout */}
              <div className="p-3.5 rounded-xl bg-space-secondary/70 border border-space-border/60 text-xs font-mono text-space-text mb-4">
                <div className="text-space-purple font-semibold flex items-center gap-1.5 mb-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>Key Scientific & Engineering Milestone:</span>
                </div>
                <p className="text-space-muted leading-relaxed font-sans text-xs">
                  {event.scientific_achievement}
                </p>
              </div>

              {/* Actions Footer */}
              <div className="pt-3 border-t border-space-border/60 flex items-center justify-between flex-wrap gap-2 text-xs font-mono">
                {event.hardware_id ? (
                  <Link
                    to={`/hardware/${event.hardware_id}`}
                    className="inline-flex items-center gap-1.5 text-space-accent font-semibold hover:underline"
                  >
                    <span>View Dedicated Hardware Record</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <span className="text-space-muted">NASA Historical Archive</span>
                )}

                <a
                  href={event.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-space-muted hover:text-space-text transition-colors"
                >
                  <span>NASA Record</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

