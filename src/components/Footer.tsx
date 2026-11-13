import React from 'react';
import { Link } from 'react-router-dom';
import { Orbit, ExternalLink, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-space-secondary/90 border-t border-space-border/80 text-space-muted pt-16 pb-12 mt-20 relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-space-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3 group w-fit">
              <div className="w-9 h-9 rounded-xl bg-space-card border border-space-accent/40 flex items-center justify-center shadow-glow-accent">
                <Orbit className="w-5 h-5 text-space-accent" />
              </div>
              <span className="font-heading font-bold text-lg tracking-wider text-space-text">
                SPACE TIME CAPSULE
              </span>
            </Link>
            <p className="text-sm text-space-muted leading-relaxed max-w-sm">
              An educational digital space museum for the NASA Space Apps Challenge. Chronicling the robotic probes, lunar landers, rovers, and passive instruments humanity left behind across the solar system.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-space-success">
              <ShieldCheck className="w-4 h-4" />
              <span>Scientifically Verified NASA PDS & NSSDCA Records</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-space-text font-semibold">Exploration</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link to="/solar-system" className="hover:text-space-accent transition-colors">3D Solar System</Link></li>
              <li><Link to="/archive" className="hover:text-space-accent transition-colors">Hardware Archive</Link></li>
              <li><Link to="/timeline" className="hover:text-space-accent transition-colors">Mission Timeline</Link></li>
              <li><Link to="/discoveries" className="hover:text-space-accent transition-colors">Scientific Discoveries</Link></li>
              <li><Link to="/space-lab" className="hover:text-space-accent transition-colors">Educational Space Lab</Link></li>
            </ul>
          </div>

          {/* NASA Data Sources */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-space-text font-semibold">NASA Data Sources</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a href="https://pds.nasa.gov/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-space-accent transition-colors">
                  <span>Planetary Data System</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://nssdc.gsfc.nasa.gov/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-space-accent transition-colors">
                  <span>NASA NSSDCA Catalog</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://images.nasa.gov/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-space-accent transition-colors">
                  <span>Image & Video Library</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://science.nasa.gov/solar-system/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-space-accent transition-colors">
                  <span>NASA Solar System</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Project & Integrity */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-space-text font-semibold">Transparency</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link to="/about" className="hover:text-space-accent transition-colors">About the Project</Link></li>
              <li><Link to="/about#sources" className="hover:text-space-accent transition-colors">Sources & Methodology</Link></li>
              <li><Link to="/about#limitations" className="hover:text-space-accent transition-colors">Known Limitations</Link></li>
              <li>
                <a href="https://www.spaceappschallenge.org/2026/challenges/nasas-discarded-equipment-storytelling/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-space-accent hover:underline">
                  <span>Official Challenge</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-space-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            Built for the <span className="text-space-accent font-semibold">NASA Space Apps Challenge</span> — Abandoned but not Forgotten
          </div>
          <div className="text-space-muted/80">
            All NASA photographs & textures are public domain under US Government Open Data policy.
          </div>
        </div>
      </div>
    </footer>
  );
};

