import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  Info, 
  ShieldCheck, 
  Database, 
  Orbit, 
  FileText, 
  ExternalLink, 
  Lock, 
  CheckCircle2,
  AlertTriangle,
  Globe2
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const datasets = [
    {
      name: 'NASA Planetary Data System (PDS)',
      role: 'Primary repository for calibrated planetary surface instruments, geochemistry (APXS/SAM), and geology datasets.',
      url: 'https://pds.nasa.gov/',
      node: 'Geosciences, Atmospheres, & Small Bodies Nodes'
    },
    {
      name: 'NASA NSSDCA Master Catalog',
      role: 'Official mission identification, COSPAR international spacecraft IDs, launch vehicles, and operational status logs.',
      url: 'https://nssdc.gsfc.nasa.gov/',
      node: 'NASA Goddard Space Flight Center'
    },
    {
      name: 'NASA Image and Video Library',
      role: 'Official public domain space imagery, mission photography, crew photography, and scientific visualizations.',
      url: 'https://images.nasa.gov/',
      node: 'NASA Communications & Public Affairs'
    },
    {
      name: 'USGS Astrogeology Science Center',
      role: 'Planetary cartography, coordinate systems, digital elevation models (DEMs), and global map projections.',
      url: 'https://astropedia.wr.usgs.gov/',
      node: 'USGS Astrogeology'
    },
    {
      name: 'NASA Solar System Exploration',
      role: 'Physical constants, mean radius, orbital periods, axial tilts, and astronomical characteristics.',
      url: 'https://science.nasa.gov/solar-system/',
      node: 'NASA Science Mission Directorate'
    }
  ];

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
      <Breadcrumbs items={[{ label: 'ABOUT THE PROJECT & TRANSPARENCY' }]} />

      <div className="mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-space-accent uppercase tracking-widest mb-2">
          <Info className="w-4 h-4 text-space-accent" />
          <span>Project Governance & Methodology</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-space-text">
          ABOUT SPACE TIME CAPSULE
        </h1>
        <p className="text-sm text-space-muted mt-2 max-w-3xl leading-relaxed">
          Developed for the NASA Space Apps Challenge: <em>"Abandoned but not Forgotten: Storytelling about NASA's Discarded Equipment on the Moon and Mars"</em>.
        </p>
      </div>

      {/* Mission Statement Card */}
      <div className="bg-space-card rounded-2xl border border-space-border p-6 sm:p-8 shadow-card-elevated mb-10">
        <h2 className="font-heading font-bold text-2xl text-space-text mb-4">
          Why Does This Hardware Matter?
        </h2>
        <div className="space-y-4 text-sm text-space-muted leading-relaxed font-sans">
          <p>
            When humanity looks up at the Moon and Mars, we often celebrate active rovers and upcoming crewed flights. But scattered across extraterrestrial plains lie the foundations of all space science: descent stages, folding electric rovers, passive corner-cube prisms, and nuclear-powered robotic emissaries.
          </p>
          <p>
            These machines are not "space junk"—they are <strong className="text-space-text">archaeological time capsules</strong> and active scientific monuments. Some, like the Apollo 11 Lunar Laser Ranging Retroreflector, require zero electrical power and continue to yield crucial physics data after more than half a century. Others, like Ingenuity and Opportunity, stand as testaments to human daring in the face of planetary dust storms and sub-zero nights.
          </p>
          <p>
            Our mission is to translate complex archival NASA records into an inspiring, interactive digital platform for school students, educators, and space enthusiasts worldwide.
          </p>
        </div>
      </div>

      {/* Scientific Transparency & Integrity Rules */}
      <div className="bg-space-secondary/60 rounded-2xl border border-space-border p-6 sm:p-8 shadow-card-elevated mb-10">
        <div className="flex items-center gap-2.5 text-xs font-mono text-space-success uppercase tracking-widest font-bold mb-4">
          <ShieldCheck className="w-5 h-5" />
          <span>Scientific Accuracy Commitment</span>
        </div>
        <h3 className="font-heading font-bold text-xl text-space-text mb-4">
          Our Data Verification Principles
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
          <div className="p-4 rounded-xl bg-space-card border border-space-border">
            <span className="font-bold text-space-text block mb-1">1. No Invented Coordinates</span>
            <p className="text-space-muted font-sans text-xs">
              Every geographic location is anchored to peer-reviewed NASA LROC, HiRISE, or PDS cartographic coordinates. Deep space probes follow sourced astronomical escape vectors.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-space-card border border-space-border">
            <span className="font-bold text-space-text block mb-1">2. Rigorous Status Distinctions</span>
            <p className="text-space-muted font-sans text-xs">
              We never confuse passive optical equipment (like lunar laser reflectors) with active spacecraft. Every status carries a verification date and cited source.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-space-card border border-space-border">
            <span className="font-bold text-space-text block mb-1">3. Authentic Imagery Only</span>
            <p className="text-space-muted font-sans text-xs">
              All planetary imagery and mission photographs originate directly from NASA Image and Video archives or USGS cartography. No AI-generated or decorative fake textures are presented as NASA data.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-space-card border border-space-border">
            <span className="font-bold text-space-text block mb-1">4. Evidence vs. Hypothesis</span>
            <p className="text-space-muted font-sans text-xs">
              In our scientific discoveries module, confirmed empirical observations are transparently separated from open hypotheses and unresolved scientific questions.
            </p>
          </div>
        </div>
      </div>

      {/* Datasets Table */}
      <div id="sources" className="bg-space-card rounded-2xl border border-space-border p-6 sm:p-8 shadow-card-elevated mb-10">
        <h3 className="font-heading font-bold text-xl text-space-text mb-2">
          Verified NASA Datasets Used
        </h3>
        <p className="text-xs font-mono text-space-muted mb-6">
          Direct links to official data portals consulted during the development of this application
        </p>

        <div className="flex flex-col gap-3">
          {datasets.map((ds, i) => (
            <div key={i} className="p-4 rounded-xl bg-space-secondary/70 border border-space-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <a
                  href={ds.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono font-bold text-space-accent hover:underline flex items-center gap-1.5"
                >
                  <span>{ds.name}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <p className="text-space-muted font-sans mt-1 text-xs">{ds.role}</p>
              </div>
              <span className="font-mono text-[11px] text-space-muted bg-space-card px-2.5 py-1 rounded border border-space-border self-start sm:self-auto flex-shrink-0">
                {ds.node}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Known Limitations Accordion */}
      <div id="limitations" className="bg-space-card rounded-2xl border border-space-border p-6 sm:p-8 shadow-card-elevated">
        <h3 className="font-heading font-bold text-xl text-space-text mb-2 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-space-warning" />
          <span>Known Limitations & Visualization Disclosures</span>
        </h3>
        <p className="text-xs font-mono text-space-muted mb-4">
          Honest disclosure of technical compromises made for browser usability
        </p>
        <ul className="flex flex-col gap-3 text-xs text-space-muted font-sans leading-relaxed">
          <li className="flex items-start gap-2">
            <span className="text-space-warning font-bold">•</span>
            <span>
              <strong>Orbital Distance Scaling:</strong> True astronomical distances in the solar system (e.g. Neptune at 30 AU vs Mercury at 0.38 AU) make smaller terrestrial planets microscopic pinpricks on screen. We provide an interactive toggle between "Educational View" and "Proportional View" with explicit scale disclosures.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-space-warning font-bold">•</span>
            <span>
              <strong>Active Rover Positions:</strong> For active rovers like Curiosity and Perseverance, coordinates represent their latest major science waypoint and traverse rim region documented in NASA JPL weekly mission logs.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-space-warning font-bold">•</span>
            <span>
              <strong>Interstellar Trajectories:</strong> Deep space probe paths for Voyager 1, Voyager 2, and New Horizons represent their astronomical escape azimuth and inclination angles rather than real-time orbital integrations.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

