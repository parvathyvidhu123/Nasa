import { ScientificDiscovery } from '../types/discovery';

export const SCIENTIFIC_DISCOVERIES: ScientificDiscovery[] = [
  {
    id: 'disc-lunar-retreat',
    title: 'The Moon is Drifting Away: Tidal Recessions & Fluid Core',
    category: 'Lunar Science',
    discovery_year: '1969–Present',
    associated_hardware: 'Apollo 11, 14, and 15 Lunar Laser Ranging Retroreflectors (LLRR)',
    hardware_id: 'apollo-11-llrr',
    mission: 'Apollo Program',
    destination: 'The Moon',
    research_question: 'How fast is the Earth-Moon orbit evolving, does the Moon possess a fluid metallic core, and does Einstein’s Equivalence Principle hold across celestial mass ratios?',
    equipment_used: 'Fused silica corner-cube prism retroreflectors on the lunar surface targeted by pulsed lasers from Apache Point Observatory (APOLLO) and McDonald Observatory.',
    key_findings: 'Photon travel time measurements proved the Moon spirals away from Earth at 3.82 ± 0.07 cm per year due to oceanic tidal friction. Analysis of lunar rotational libration proved the Moon has a fluid outer core with a radius of ~330 km.',
    why_it_matters: 'Reconstructs Earth’s orbital history billions of years into the past, proves that Earth days were once only 18 hours long in the geological past, and provides one of humanity’s most stringent tests of General Relativity.',
    evidence_vs_hypothesis: {
      confirmed_evidence: 'Direct two-way photon timing accurate to sub-millimeter precision over 55+ years confirms the 3.82 cm/yr recession rate and the existence of a liquid outer core.',
      open_hypotheses: 'Whether the inner core is solid iron like Earth’s or partially crystallized remains under active investigation.'
    },
    image_url: 'https://images-assets.nasa.gov/image/as11-40-5952/as11-40-5952~medium.jpg',
    image_credit: 'NASA / Buzz Aldrin',
    data_sources: [
      { name: 'NASA NSSDCA Laser Ranging Dataset', url: 'https://nssdc.gsfc.nasa.gov/nmc/experiment/display.action?id=1969-059C-02' },
      { name: 'Apache Point Observatory Lunar Laser-ranging Operation', url: 'https://physics.ucsd.edu/~tmurphy/apollo/apollo.html' }
    ]
  },
  {
    id: 'disc-mars-water-blueberries',
    title: 'Extraterrestrial Groundwater & Hematite Spherules',
    category: 'Evidence of Ancient Water',
    discovery_year: '2004',
    associated_hardware: 'Mars Exploration Rover Opportunity (MER-B)',
    hardware_id: 'mer-opportunity',
    mission: 'Mars Exploration Rover',
    destination: 'Mars (Meridiani Planum)',
    research_question: 'Did liquid water ever pool or flow across the surface of Mars for prolonged periods, and what was its chemical acidity and duration?',
    equipment_used: 'Microscopic Imager (MI), Mössbauer Spectrometer, and Rock Abrasion Tool (RAT) on Opportunity’s robotic arm.',
    key_findings: 'Found billions of millimeter-sized spherical hematite concretions embedded in sulfate-rich sedimentary rocks, which could only precipitate inside percolation zones of acidic groundwater.',
    why_it_matters: 'Provided the first undisputed, definitive mineralogical proof that Mars was once drenched in liquid groundwater for millions of years.',
    evidence_vs_hypothesis: {
      confirmed_evidence: 'Microscopic spherical geometry, sulfate salt beds (jarosite), and cross-bedded sedimentary ripple structures are confirmed water-deposited features.',
      open_hypotheses: 'Scientists still debate whether this water was consistently warm enough at the surface for complex life or mostly locked as subterranean brine beneath frozen ice sheets.'
    },
    image_url: 'https://images-assets.nasa.gov/image/PIA18408/PIA18408~medium.jpg',
    image_credit: 'NASA / JPL-Caltech / Cornell',
    data_sources: [
      { name: 'NASA Science: Opportunity Water Discoveries', url: 'https://mars.nasa.gov/mer/mission/science/results/' }
    ]
  },
  {
    id: 'disc-gale-habitable-lake',
    title: 'Ancient Gale Crater: Habitable Freshwater Paleolake',
    category: 'Martian Geology',
    discovery_year: '2013',
    associated_hardware: 'Mars Science Laboratory Curiosity Rover',
    hardware_id: 'msl-curiosity',
    mission: 'Mars Science Laboratory',
    destination: 'Mars (Gale Crater / Yellowknife Bay)',
    research_question: 'Did Mars ever support environmental conditions that were not merely wet, but truly chemically habitable for microscopic carbon-based life?',
    equipment_used: 'Sample Analysis at Mars (SAM) gas chromatograph and CheMin X-ray diffractometer analyzing powdered rock drilled from the John Klein mudstone outcrop.',
    key_findings: 'Found smectite clay minerals formed in neutral, non-acidic, low-salinity freshwater lake water, alongside essential bio-elements: Carbon, Hydrogen, Oxygen, Nitrogen, Phosphorus, and Sulfur (CHNOPS).',
    why_it_matters: 'Officially answered NASA’s primary mission question: YES, Mars possessed ancient environments fully capable of supporting microbial life if it ever emerged.',
    evidence_vs_hypothesis: {
      confirmed_evidence: 'Neutral pH, abundant biologically available nitrogen compounds (nitrates), and organic carbon preservation in mudstones are definitively proven.',
      open_hypotheses: 'Whether life actually evolved in Gale Crater remains an unanswered question that requires returning samples to Earth.'
    },
    image_url: 'https://images-assets.nasa.gov/image/PIA19920/PIA19920~medium.jpg',
    image_credit: 'NASA / JPL-Caltech / MSSS',
    data_sources: [
      { name: 'Science Magazine (MSL Science Team Paper)', url: 'https://www.science.org/doi/10.1126/science.1242777' },
      { name: 'NASA MSL Gale Crater Habitability', url: 'https://mars.nasa.gov/msl/mission/science/results/' }
    ]
  },
  {
    id: 'disc-interstellar-heliopause',
    title: 'Crossing the Heliopause: The Edge of the Sun’s Realm',
    category: 'Interstellar Exploration',
    discovery_year: '2012 & 2018',
    associated_hardware: 'Voyager 1 and Voyager 2 Spacecraft',
    hardware_id: 'voyager-1',
    mission: 'Voyager Interstellar Mission',
    destination: 'Interstellar Space',
    research_question: 'Where does the supersonic bubble of solar wind (heliosphere) terminate, and what are the physical properties of the interstellar space beyond?',
    equipment_used: 'Plasma Wave Subsystem (PWS), Cosmic Ray Subsystem (CRS), and Magnetometers on Voyager 1 and 2.',
    key_findings: 'On August 25, 2012, Voyager 1 recorded a sudden 100-fold drop in solar wind particles and a dramatic surge in galactic cosmic rays, signifying passage across the heliopause into the interstellar medium at 121 AU.',
    why_it_matters: 'Provided humanity’s very first in-situ physical measurements of pristine interstellar matter unshielded by our Sun’s magnetic bubble.',
    evidence_vs_hypothesis: {
      confirmed_evidence: 'Interstellar plasma density is approximately 40 times higher than inside the outer heliosphere, and magnetic field lines align with the interstellar galactic orientation.',
      open_hypotheses: 'The precise geometric shape of the overall heliosphere (comet-shaped tail vs. spherical bubble) is still actively debated among astrophysicists.'
    },
    image_url: 'https://images-assets.nasa.gov/image/PIA17046/PIA17046~medium.jpg',
    image_credit: 'NASA / JPL-Caltech',
    data_sources: [
      { name: 'NASA Voyager Mission: Interstellar Medium Data', url: 'https://voyager.jpl.nasa.gov/mission/interstellar-mission/' }
    ]
  },
  {
    id: 'disc-enceladus-ocean-plumes',
    title: 'The Subsurface Hydrothermal Ocean of Enceladus',
    category: 'Planetary Atmospheres',
    discovery_year: '2005–2015',
    associated_hardware: 'Cassini Spacecraft',
    hardware_id: 'cassini',
    mission: 'Cassini-Huygens',
    destination: 'Saturn System (Moon Enceladus)',
    research_question: 'Why does Saturn’s tiny icy moon Enceladus exhibit unexplained thermal anomalies and maintain Saturn’s diffuse E-ring?',
    equipment_used: 'Cassini Ion and Neutral Mass Spectrometer (INMS) and Cosmic Dust Analyzer (CDA) during direct low-altitude fly-throughs of erupting south polar plumes.',
    key_findings: 'Discovered that Enceladus erupts giant geysers of water vapor, ice crystals, simple and complex organic macromolecules, molecular hydrogen (H2), and salts from a global liquid ocean beneath its ice crust.',
    why_it_matters: 'The molecular hydrogen indicates active hydrothermal vents on the ocean floor—identical to hydrothermal vent ecosystems that thrive without sunlight in Earth’s deep trenches.',
    evidence_vs_hypothesis: {
      confirmed_evidence: 'Presence of liquid water, organic carbon chemistry, salt ions, and thermal venting are verified by direct mass spectrometry of plume samples.',
      open_hypotheses: 'Whether living extraterrestrial organisms actually inhabit Enceladus’ ocean remains an unanswered frontier requiring future life-detection missions.'
    },
    image_url: 'https://images-assets.nasa.gov/image/PIA17129/PIA17129~orig.jpg',
    image_credit: 'NASA / JPL-Caltech / Space Science Institute (Cassini Backlit Enceladus Ocean Plumes)',
    data_sources: [
      { name: 'NASA Cassini Science: Ocean Worlds', url: 'https://science.nasa.gov/mission/cassini/science/ocean-worlds/' }
    ]
  },
  {
    id: 'disc-thin-atmosphere-flight',
    title: 'Aerodynamic Rotor Dynamics in Sub-1% Atmospheric Density',
    category: 'Spacecraft Engineering',
    discovery_year: '2021–2024',
    associated_hardware: 'Ingenuity Mars Helicopter',
    hardware_id: 'm2020-ingenuity',
    mission: 'Mars 2020',
    destination: 'Mars (Jezero Crater)',
    research_question: 'Can a rotary-wing vehicle generate sufficient aerodynamic lift to achieve controlled flight, navigate autonomously, and survive sub-zero nights in an atmospheric density of only 0.015 kg/m³?',
    equipment_used: 'Twin 1.2-meter counter-rotating carbon fiber rotor blades spinning at 2,400–2,900 RPM with onboard inertial sensors and downward optical flow cameras.',
    key_findings: 'Ingenuity flew 72 times across 17 km, proving that autonomous high-speed blade aerodynamics in extreme low-density carbon dioxide can provide reliable scout recon for rovers and future human explorers.',
    why_it_matters: 'Opened a completely new dimension for planetary exploration—aerial robotics can scale cliff walls, cross boulder fields, and explore regions unreachable by wheels.',
    evidence_vs_hypothesis: {
      confirmed_evidence: 'Autonomous visual-inertial odometry, low-Reynolds-number blade lift, and solar battery survival through -90°C Martian nights are fully verified across 72 missions.',
      open_hypotheses: 'How large a heavy-lift multi-rotor vehicle can be built for future human Mars cargo transport remains an active engineering development domain.'
    },
    image_url: 'https://images-assets.nasa.gov/image/PIA24497/PIA24497~medium.jpg',
    image_credit: 'NASA / JPL-Caltech',
    data_sources: [
      { name: 'NASA JPL Ingenuity Mars Helicopter Log', url: 'https://mars.nasa.gov/technology/helicopter/' }
    ]
  }
];

