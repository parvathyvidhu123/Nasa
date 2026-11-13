import React, { useState, useMemo } from 'react';
import { SCIENTIFIC_DISCOVERIES } from '../data/discoveriesData';
import { DiscoveryCategory } from '../types/discovery';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getContextualFallback } from '../utils/fallbackImage';
import { 
  Atom, 
  HelpCircle, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink, 
  ChevronRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const DiscoveriesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories: Array<{ id: string; label: string }> = [
    { id: 'all', label: 'All Categories' },
    { id: 'Lunar Science', label: 'Lunar Science' },
    { id: 'Martian Geology', label: 'Martian Geology' },
    { id: 'Evidence of Ancient Water', label: 'Ancient Water Evidence' },
    { id: 'Planetary Atmospheres', label: 'Planetary Atmospheres' },
    { id: 'Interstellar Exploration', label: 'Interstellar Exploration' },
    { id: 'Spacecraft Engineering', label: 'Spacecraft Engineering' },
  ];

  const filteredDiscoveries = useMemo(() => {
    if (selectedCategory === 'all') return SCIENTIFIC_DISCOVERIES;
    return SCIENTIFIC_DISCOVERIES.filter(d => d.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
      <Breadcrumbs items={[{ label: 'SCIENTIFIC DISCOVERIES' }]} />

      <div className="mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-space-purple uppercase tracking-widest mb-2">
          <Atom className="w-4 h-4 text-space-purple" />
          <span>Scientific Impact & Discoveries</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-space-text">
          WHAT DID THESE MACHINES TEACH HUMANITY?
        </h1>
        <p className="text-sm text-space-muted mt-2 max-w-3xl leading-relaxed">
          From ancient Martian lakebeds to the edge of the heliosphere, NASA’s robotic hardware collected the evidence that transformed modern planetary science. Explore the verified discoveries, and learn how scientists strictly separate confirmed evidence from open hypotheses.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none font-mono text-xs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-xl border text-xs whitespace-nowrap transition-all ${
              selectedCategory === cat.id
                ? 'bg-space-purple text-space-text font-bold border-space-purple shadow-glow-purple'
                : 'bg-space-card text-space-muted border-space-border hover:border-space-border-bright hover:text-space-text'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Discoveries List */}
      <div className="space-y-10">
        {filteredDiscoveries.map((disc) => (
          <div
            key={disc.id}
            className="bg-space-card rounded-2xl border border-space-border/80 overflow-hidden shadow-card-elevated p-6 sm:p-8 transition-all hover:border-space-purple/50"
          >
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-space-border/60 mb-6">
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="px-2.5 py-0.5 rounded bg-space-purple/15 text-space-purple border border-space-purple/30 font-semibold">
                  {disc.category}
                </span>
                <span className="text-space-muted">•</span>
                <span className="text-space-text">{disc.mission} ({disc.destination})</span>
              </div>
              <span className="text-xs font-mono text-space-muted">
                Year: <strong className="text-space-text">{disc.discovery_year}</strong>
              </span>
            </div>

            <h2 className="font-heading font-bold text-2xl text-space-text mb-4">
              {disc.title}
            </h2>

            {/* Authentic Media */}
            <div className="relative aspect-video sm:aspect-[21/9] rounded-xl overflow-hidden border border-space-border mb-6 bg-space-secondary">
              <img
                src={disc.image_url}
                alt={disc.title}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = getContextualFallback(disc.destination);
                }}
              />
              <div className="absolute bottom-2 right-2 text-[9px] font-mono text-space-muted bg-space-dark/80 px-2 py-0.5 rounded">
                Credit: {disc.image_credit}
              </div>
            </div>

            {/* The 4 Core Questions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-xs">
              {/* Question 1 */}
              <div className="p-4 rounded-xl bg-space-secondary/70 border border-space-border">
                <div className="font-mono text-space-accent font-semibold flex items-center gap-1.5 mb-1.5">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>WHAT SCIENTISTS WANTED TO DISCOVER:</span>
                </div>
                <p className="text-space-muted leading-relaxed font-sans text-xs">
                  {disc.research_question}
                </p>
              </div>

              {/* Question 2 */}
              <div className="p-4 rounded-xl bg-space-secondary/70 border border-space-border">
                <div className="font-mono text-space-purple font-semibold flex items-center gap-1.5 mb-1.5">
                  <Atom className="w-3.5 h-3.5" />
                  <span>EQUIPMENT USED TO COLLECT EVIDENCE:</span>
                </div>
                <p className="text-space-muted leading-relaxed font-sans text-xs">
                  {disc.equipment_used}
                </p>
              </div>

              {/* Question 3 */}
              <div className="p-4 rounded-xl bg-space-secondary/70 border border-space-border">
                <div className="font-mono text-space-success font-semibold flex items-center gap-1.5 mb-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>WHAT OBSERVATIONS REVEALED:</span>
                </div>
                <p className="text-space-muted leading-relaxed font-sans text-xs">
                  {disc.key_findings}
                </p>
              </div>

              {/* Question 4 */}
              <div className="p-4 rounded-xl bg-space-secondary/70 border border-space-border">
                <div className="font-mono text-space-warning font-semibold flex items-center gap-1.5 mb-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>WHY THIS DISCOVERY MATTERS:</span>
                </div>
                <p className="text-space-muted leading-relaxed font-sans text-xs">
                  {disc.why_it_matters}
                </p>
              </div>
            </div>

            {/* RIGOROUS SCIENTIFIC INTEGRITY: EVIDENCE VS HYPOTHESIS */}
            <div className="p-5 rounded-xl bg-space-dark/80 border border-space-border mb-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-space-text font-bold mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-space-success" />
                <span>Scientific Rigor: Confirmed Evidence vs. Open Hypotheses</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/20">
                  <span className="font-mono text-[10px] uppercase text-space-success font-bold block mb-1">
                    Confirmed Physical Evidence:
                  </span>
                  <p className="text-space-text/90 leading-relaxed font-sans">
                    {disc.evidence_vs_hypothesis.confirmed_evidence}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-500/20">
                  <span className="font-mono text-[10px] uppercase text-space-warning font-bold block mb-1">
                    Open Hypotheses & Unanswered Questions:
                  </span>
                  <p className="text-space-text/90 leading-relaxed font-sans">
                    {disc.evidence_vs_hypothesis.open_hypotheses}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer with Hardware Link */}
            <div className="pt-4 border-t border-space-border/60 flex items-center justify-between flex-wrap gap-3 text-xs font-mono">
              {disc.hardware_id ? (
                <Link
                  to={`/hardware/${disc.hardware_id}`}
                  className="flex items-center gap-1.5 text-space-accent font-semibold hover:underline"
                >
                  <span>Explore Associated Hardware Record ({disc.associated_hardware})</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ) : (
                <span className="text-space-muted">Hardware: {disc.associated_hardware}</span>
              )}

              <div className="flex items-center gap-3">
                {disc.data_sources.map((src, i) => (
                  <a
                    key={i}
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-space-muted hover:text-space-text"
                  >
                    <span>{src.name}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

