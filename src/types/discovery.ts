export type DiscoveryCategory = 
  | 'Lunar Science'
  | 'Martian Geology'
  | 'Evidence of Ancient Water'
  | 'Planetary Atmospheres'
  | 'Interstellar Exploration'
  | 'Spacecraft Engineering'
  | 'Astronomy & Heliophysics';

export interface ScientificDiscovery {
  id: string;
  title: string;
  category: DiscoveryCategory;
  discovery_year: string;
  associated_hardware: string;
  hardware_id?: string;
  mission: string;
  destination: string;
  research_question: string; // What scientists wanted to discover
  equipment_used: string;    // Which equipment collected evidence
  key_findings: string;      // What observations revealed
  why_it_matters: string;    // Why the discovery matters
  evidence_vs_hypothesis: {
    confirmed_evidence: string;
    open_hypotheses: string;
  };
  image_url: string;
  image_credit: string;
  data_sources: Array<{ name: string; url: string }>;
}

