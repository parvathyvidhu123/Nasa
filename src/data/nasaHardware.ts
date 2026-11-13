import { HardwareRecord } from '../types/hardware';

export const NASA_HARDWARE: HardwareRecord[] = [
  {
    id: 'apollo-11-eagle',
    name: 'Apollo 11 Lunar Module Descent Stage (Eagle)',
    mission: 'Apollo 11',
    destination: 'Moon',
    hardware_type: 'Lunar Module Descent Stage',
    launch_date: '1969-07-16',
    arrival_date: '1969-07-20',
    end_of_mission_date: '1969-07-21',
    mission_objective: 'Execute the first human landing on the Moon, deploy scientific surface experiments, collect lunar samples, and provide a stable launch platform for the Ascent Stage.',
    scientific_instruments: [
      {
        name: 'Early Apollo Surface Experiments Package (EASEP)',
        abbreviation: 'EASEP',
        description: 'First autonomous scientific station on the Moon, housing passive seismic and laser ranging experiments.'
      },
      {
        name: 'Passive Seismic Experiment Package (PSEP)',
        abbreviation: 'PSEP',
        description: 'Monitored lunar seismic vibrations, meteoroid impacts, and free oscillations of the Moon.'
      },
      {
        name: 'Solar Wind Composition Experiment (SWC)',
        abbreviation: 'SWC',
        description: 'Aluminum foil sheet exposed to solar wind to capture noble gas ions (helium, neon, argon).'
      }
    ],
    discoveries: [
      'Confirmed the lunar surface could bear spacecraft and human weight without catastrophic sinking.',
      'Returned 21.55 kg of pristine lunar rocks and regolith, dating the basaltic plains to ~3.7 billion years old.',
      'Proved that the Moon lacked water and organic carbon in surface rocks.'
    ],
    mission_achievements: [
      'First crewed lunar landing in human history.',
      'First extravehicular activity (EVA) on an alien world (2 hours, 31 minutes).',
      'First lunar soil samples safely returned to Earth.'
    ],
    operational_status: 'inactive',
    status_as_of: '2026-11-01',
    status_note: 'Descent stage remains structurally intact at Tranquility Base. Serves as a historical archaeological site and monument.',
    image_url: 'https://images-assets.nasa.gov/image/as11-40-5927/as11-40-5927~medium.jpg',
    image_credit: 'NASA / Neil Armstrong (Apollo 11)',
    source_urls: [
      {
        title: 'NASA NSSDCA Master Catalog: Apollo 11 LM',
        url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C',
        agency: 'NASA Goddard'
      },
      {
        title: 'LROC Coordinates for Apollo 11 Landing Site',
        url: 'https://www.lroc.asu.edu/featured_sites/view_site/46',
        agency: 'NASA / Arizona State University'
      }
    ],
    dataset_reference: 'NASA Planetary Data System (PDS) Lunar Geosciences Node (PDS-LGN-A11)',
    location_data: {
      site_name: 'Tranquility Base (Mare Tranquillitatis)',
      planetary_body: 'Moon',
      latitude: 0.67416,
      longitude: 23.47314,
      coordinates_string: '0.67416° N, 23.47314° E',
      coordinate_system: 'Mean Earth/Polar Axis (ME)'
    },
    location_accuracy: 'Verified to ±0.5 meters via Lunar Reconnaissance Orbiter Camera (LROC) high-resolution NAC imagery.',
    student_takeaway: 'Before Apollo 11, scientists worried the Moon was covered in quicksand dust that would swallow spaceships! Eagle proved the lunar regolith was firm and allowed humans to walk on another world for the very first time.',
    technical_details: {
      dimensions: 'Height: 3.2 m (descent stage), Diameter: 4.3 m (legs retracted)',
      mass_kg: 2034, // Descent stage dry mass
      power_source: 'Silver-Zinc batteries (400 Ah capacity)',
      comm_band: 'S-band Unified S-Band (USB) & VHF',
      active_duration_days: 1
    },
    featured: true
  },
  {
    id: 'apollo-11-llrr',
    name: 'Apollo 11 Lunar Laser Ranging Retroreflector (LLRR)',
    mission: 'Apollo 11',
    destination: 'Moon',
    hardware_type: 'Passive Optical Retroreflector Array',
    launch_date: '1969-07-16',
    arrival_date: '1969-07-20',
    mission_objective: 'Provide a permanent corner-cube optical array on the lunar surface to reflect laser pulses fired from Earth, allowing millimeter-precision Earth-Moon distance measurements.',
    scientific_instruments: [
      {
        name: 'Corner-Cube Prism Array',
        abbreviation: '100 Corner Cubes',
        description: '100 fused silica corner-cube prisms mounted in an open-back aluminum panel that reflects light straight back to its transmitter regardless of entry angle.'
      }
    ],
    discoveries: [
      'Discovered that the Moon is spiraling away from Earth at a rate of 3.82 centimeters (1.5 inches) per year due to tidal friction.',
      'Demonstrated that the Moon possesses a fluid outer core.',
      'Confirmed Einstein’s General Theory of Relativity (Equivalence Principle) with unprecedented precision.'
    ],
    mission_achievements: [
      'Longest continuously operating scientific instrument installed by humans on an alien world (55+ years).',
      'Zero electrical power required—operates solely through geometric optics.'
    ],
    operational_status: 'operational',
    status_as_of: '2026-10-15',
    status_note: 'Passive optical system is still 100% operational. Regularly targeted by laser observatories at Apache Point Observatory (APOLLO) and McDonald Observatory.',
    image_url: 'https://images-assets.nasa.gov/image/6900957/6900957~orig.jpg',
    image_credit: 'NASA / Buzz Aldrin (Apollo 11 LLRR on Surface)',
    source_urls: [
      {
        title: 'NASA Solar System Exploration: Apollo 11 Laser Ranging',
        url: 'https://science.nasa.gov/mission/apollo-11/laser-ranging-experiment/',
        agency: 'NASA'
      },
      {
        title: 'NASA NSSDCA: Laser Ranging Retroreflector',
        url: 'https://nssdc.gsfc.nasa.gov/nmc/experiment/display.action?id=1969-059C-02',
        agency: 'NASA GSFC'
      }
    ],
    dataset_reference: 'APOLLO (Apache Point Observatory Lunar Laser-ranging Operation) Archive',
    location_data: {
      site_name: 'Tranquility Base (Southwest of Eagle Descent Stage)',
      planetary_body: 'Moon',
      latitude: 0.67337,
      longitude: 23.47293,
      coordinates_string: '0.67337° N, 23.47293° E',
      coordinate_system: 'Mean Earth/Polar Axis (ME)'
    },
    location_accuracy: 'Verified to sub-millimeter precision via photon time-of-flight ranging.',
    student_takeaway: 'This suitcase-sized mirror has no batteries or wires, yet it has been working for over half a century! By shooting giant green lasers at it from Earth and timing how long the light takes to bounce back, scientists discovered that the Moon is slowly drifting away from us by 3.8 centimeters every single year.',
    technical_details: {
      dimensions: '46 cm x 46 cm x 15 cm panel',
      mass_kg: 21.6,
      power_source: 'Completely passive (Zero electrical power required)',
      active_duration_days: 20900
    },
    featured: false
  },
  {
    id: 'apollo-15-lrv',
    name: 'Apollo 15 Lunar Roving Vehicle 1 (LRV-1) & Falcon',
    mission: 'Apollo 15',
    destination: 'Moon',
    hardware_type: 'Crewed Electric Lunar Rover',
    launch_date: '1971-07-26',
    arrival_date: '1971-07-30',
    end_of_mission_date: '1971-08-02',
    mission_objective: 'First "J-mission" designed for extended lunar exploration; deployed the first wheeled vehicle on another planetary body to allow exploration miles away from the lander.',
    scientific_instruments: [
      {
        name: 'Lunar Communications Relay Unit (LCRU)',
        description: 'Transmitted live color television, astronaut bio-telemetry, and voice directly to Earth from remote traverse stops.'
      },
      {
        name: 'Ground-Penetrating Gravimeter & Magnetometer',
        description: 'Measured local gravitational variations across the Hadley Rille canyon.'
      }
    ],
    discoveries: [
      'Discovered the famous "Genesis Rock" (anorthosite sample 15415), originating from the early lunar crust ~4.1 billion years ago.',
      'Explored the edge of Hadley Rille, establishing it as a collapsed ancient lava tube.'
    ],
    mission_achievements: [
      'First drivable automobile on another world.',
      'Covered a total distance of 27.76 kilometers across the Hadley-Apennine mountains.',
      'Achieved a top lunar speed of 12.0 km/h (7.5 mph).'
    ],
    operational_status: 'inactive',
    status_as_of: '2026-11-01',
    status_note: 'Parked approximately 90 meters from the Falcon descent stage so its TV camera could broadcast the ascent module liftoff. Remains permanently parked on the lunar plain.',
    image_url: 'https://images-assets.nasa.gov/image/as15-88-11901/as15-88-11901~medium.jpg',
    image_credit: 'NASA / Jim Irwin (Apollo 15)',
    source_urls: [
      {
        title: 'NASA NSSDCA: Apollo 15 Lunar Roving Vehicle',
        url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C',
        agency: 'NASA'
      },
      {
        title: 'Boeing Historical Archives: Lunar Roving Vehicle Project',
        url: 'https://www.boeing.com/history/products/lunar-roving-vehicle.page',
        agency: 'Boeing / NASA MSFC'
      }
    ],
    dataset_reference: 'Apollo 15 Lunar Surface Journal (ALSJ-A15-EVA)',
    location_data: {
      site_name: 'Hadley-Apennine Region (Near Hadley Rille)',
      planetary_body: 'Moon',
      latitude: 26.1322,
      longitude: 3.6339,
      coordinates_string: '26.1322° N, 3.6339° E',
      coordinate_system: 'Mean Earth/Polar Axis'
    },
    location_accuracy: 'Pinpointed within 1 meter by LROC images showing the rover tracks and footprints.',
    student_takeaway: 'Imagine building an electric folding car that weighs only 210 kg, fits folded into the side of a rocket, and can drive over boulders on the Moon! Apollo 15 gave astronauts wheels, letting them drive into deep canyons and pick up the famous "Genesis Rock" that revealed how the Moon formed.',
    technical_details: {
      dimensions: 'Length: 3.1 m, Wheelbase: 2.3 m',
      mass_kg: 210, // Dry Earth weight
      power_source: 'Two 36-volt non-rechargeable silver-zinc potassium hydroxide batteries (121 Ah)',
      comm_band: 'High-gain directional S-band antenna',
      total_distance_traveled_km: 27.76,
      active_duration_days: 3
    },
    featured: false
  },
  {
    id: 'surveyor-3',
    name: 'Surveyor 3 Lunar Lander',
    mission: 'Surveyor 3',
    destination: 'Moon',
    hardware_type: 'Robotic Lunar Lander',
    launch_date: '1967-04-17',
    arrival_date: '1967-04-20',
    end_of_mission_date: '1967-05-04',
    mission_objective: 'Perform soft touchdown in Oceanus Procellarum, take television images of the lunar surface, and test soil mechanical bearing strength with a scoop arm in preparation for Apollo.',
    scientific_instruments: [
      {
        name: 'Vidicon Television Camera System',
        description: 'Captured 6,315 high-definition black-and-white television pictures of lunar rocks, craters, and soil.'
      },
      {
        name: 'Surface Sampler Scoop Mechanism',
        description: 'Motorized digging scoop capable of digging trenches up to 17.5 cm deep into lunar soil.'
      }
    ],
    discoveries: [
      'Proved that lunar soil had the consistency of damp beach sand, safe for Apollo landing pads.',
      'Subject of the only extraterrestrial forensics in history: Apollo 12 astronauts visited Surveyor 3 in 1969, clipped its camera and scoop, and brought them back to Earth to study how hardware survives 2.5 years in deep space radiation.'
    ],
    mission_achievements: [
      'First robotic surface sampler arm on another planetary body.',
      'Only robotic spacecraft ever visited by human astronauts on another celestial body.'
    ],
    operational_status: 'inactive',
    status_as_of: '2026-11-01',
    status_note: 'Remains in the crater at Oceanus Procellarum. Its camera and scoop are preserved in the Smithsonian National Air and Space Museum.',
    image_url: 'https://images-assets.nasa.gov/image/as12-48-7121/as12-48-7121~orig.jpg',
    image_credit: 'NASA / Alan Bean (Apollo 12 visiting Surveyor 3)',
    source_urls: [
      {
        title: 'NASA NSSDCA: Surveyor 3 Details',
        url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1967-035A',
        agency: 'NASA'
      }
    ],
    dataset_reference: 'NASA PDS Geosciences Node (Surveyor Project Final Report)',
    location_data: {
      site_name: 'Oceanus Procellarum (Surveyor Crater)',
      planetary_body: 'Moon',
      latitude: -3.0163,
      longitude: -23.4180,
      coordinates_string: '3.0163° S, 23.4180° W',
      coordinate_system: 'Mean Earth/Polar Axis'
    },
    location_accuracy: 'Confirmed to ±1 meter by Apollo 12 crew photographs and LROC NAC coordinates.',
    student_takeaway: 'Surveyor 3 was visited by humans! In November 1969, Apollo 12 astronauts landed their rocket right next to this robotic robot, walked up to it, unscrewed its camera, and brought it home to Earth to see how well machines endure the harsh vacuum of space.',
    technical_details: {
      dimensions: 'Height: 3.3 m, Base diameter: 4.2 m',
      mass_kg: 294, // Landed mass
      power_source: 'Solar panel array generating 85 W with rechargeable silver-zinc battery',
      active_duration_days: 14
    },
    featured: false
  },
  {
    id: 'pathfinder-sojourner',
    name: 'Mars Pathfinder & Sojourner Rover',
    mission: 'Mars Pathfinder',
    destination: 'Mars',
    hardware_type: 'Lander & Robotic Microrover',
    launch_date: '1996-12-04',
    arrival_date: '1997-07-04',
    end_of_mission_date: '1997-09-27',
    mission_objective: 'Demonstrate a low-cost "faster, better, cheaper" direct atmospheric entry with airbags, and deploy humanity’s first mobile wheeled robotic rover on Mars.',
    scientific_instruments: [
      {
        name: 'Alpha Proton X-ray Spectrometer (APXS)',
        description: 'Mounted on Sojourner’s robotic arm to analyze the elemental composition of Martian rocks and soils.'
      },
      {
        name: 'Imager for Mars Pathfinder (IMP)',
        description: 'Stereoscopic camera mast that produced 16,500 photos and atmospheric measurements.'
      },
      {
        name: 'Atmospheric Structure Instrument / Meteorology (ASI/MET)',
        description: 'Tracked temperature, pressure, and wind speed variations during descent and on the surface.'
      }
    ],
    discoveries: [
      'Discovered rounded rocks like "Yogi" and "Barnacle Bill", providing geological proof of catastrophic ancient flooding in Ares Vallis.',
      'Demonstrated that airbags could safely cushion a landing without heavy retrorockets.',
      'Found that Martian dust particles are magnetic and contain iron oxides.'
    ],
    mission_achievements: [
      'First successful mobile rover ever operated on Mars.',
      'Operated Sojourner for 83 Martian days (planned for just 7 days).',
      'Captured global public imagination with 565 million website hits in 1997.'
    ],
    operational_status: 'inactive',
    status_as_of: '2026-11-01',
    status_note: 'Communications lost on September 27, 1997, likely due to depleted battery failure in the cold Martian winter. Sojourner is presumed to have circled the Carl Sagan Memorial Station waiting for instructions.',
    image_url: 'https://images-assets.nasa.gov/image/PIA01120/PIA01120~medium.jpg',
    image_credit: 'NASA / JPL-Caltech',
    source_urls: [
      {
        title: 'NASA JPL Mars Pathfinder Mission Archive',
        url: 'https://mars.nasa.gov/mars-pathfinder/',
        agency: 'NASA / JPL'
      },
      {
        title: 'NASA PDS Mars Pathfinder Mission Data',
        url: 'https://pds-geosciences.wustl.edu/missions/mpf/',
        agency: 'NASA Planetary Data System'
      }
    ],
    dataset_reference: 'PDS Dataset ID: MPF-M-APXS-2-RAW-EDR-V1.0',
    location_data: {
      site_name: 'Carl Sagan Memorial Station (Ares Vallis)',
      planetary_body: 'Mars',
      latitude: 19.33,
      longitude: -33.55,
      coordinates_string: '19.33° N, 33.55° W',
      coordinate_system: 'Planetocentric Mars 2000'
    },
    location_accuracy: 'Identified by Mars Reconnaissance Orbiter (HiRISE) imaging.',
    student_takeaway: 'Sojourner was no bigger than a microwave oven! It was the very first rover to roll across Mars. It had six little spiked wheels and proved that rocks on Mars were once smoothed by churning rivers of liquid water millions of years ago.',
    technical_details: {
      dimensions: 'Sojourner: 65 cm long, 48 cm wide, 30 cm tall',
      mass_kg: 10.6, // Rover mass alone
      power_source: '0.22 m² GaAs solar panel (16 W) and lithium thionyl chloride D-cell backup',
      comm_band: 'UHF link between rover and lander; High-Gain antenna to Earth',
      total_distance_traveled_km: 0.1,
      active_duration_days: 83
    },
    featured: false
  },
  {
    id: 'mer-opportunity',
    name: 'Mars Exploration Rover Opportunity (MER-B)',
    mission: 'Mars Exploration Rover',
    destination: 'Mars',
    hardware_type: 'Solar-Powered Mars Rover',
    launch_date: '2003-07-07',
    arrival_date: '2004-01-25',
    end_of_mission_date: '2019-02-13',
    mission_objective: 'Search for and characterize a wide range of rocks and soils that hold clues to past water activity on Mars, targeting Meridiani Planum.',
    scientific_instruments: [
      {
        name: 'Panoramic Camera (Pancam)',
        description: 'High-resolution multispectral stereo imaging system.'
      },
      {
        name: 'Miniature Thermal Emission Spectrometer (Mini-TES)',
        description: 'Identified promising rocks from afar by measuring their mineral infrared heat signatures.'
      },
      {
        name: 'Mössbauer Spectrometer (MB)',
        description: 'Measured iron-bearing minerals to determine mineral oxidation state.'
      },
      {
        name: 'Rock Abrasion Tool (RAT)',
        description: 'Diamond-tipped grinder that shaved away weathered rock surfaces to expose fresh interior.'
      }
    ],
    discoveries: [
      'Discovered hematite-rich spherules nicknamed "blueberries", formed in groundwater environments.',
      'Discovered gypsum veins at Endeavour Crater, absolute proof of ancient drinkable liquid water flowing through underground fractures.',
      'Endured a continent-spanning global dust storm that finally blocked its solar panels after 14.5 years.'
    ],
    mission_achievements: [
      'Drove 45.16 kilometers (28.06 miles)—the longest distance ever driven on another planetary body.',
      'Designed for a 90-day mission; operated for 5,498 Earth days (over 14 years!).',
      'Sent back over 217,000 raw scientific images.'
    ],
    operational_status: 'inactive',
    status_as_of: '2026-11-01',
    status_note: 'Mission declared complete by NASA on Feb 13, 2019, after hundreds of recovery attempts following the planet-encircling June 2018 dust storm. Sits silently in Perseverance Valley.',
    image_url: 'https://images-assets.nasa.gov/image/PIA18408/PIA18408~medium.jpg',
    image_credit: 'NASA / JPL-Caltech / Cornell Univ. / Arizona State Univ.',
    source_urls: [
      {
        title: 'NASA Mars Exploration Rover Mission Official Record',
        url: 'https://mars.nasa.gov/mer/',
        agency: 'NASA / JPL'
      },
      {
        title: 'NASA Press Release: Six-Wheeled Pioneer Opportunity Mission Complete',
        url: 'https://www.nasa.gov/press-release/nasa-s-record-setting-opportunity-rover-mission-on-mars-comes-to-end',
        agency: 'NASA HQ'
      }
    ],
    dataset_reference: 'PDS Geosciences Node MER Data (MER2-M-PANCAM-5-EDR-V1.0)',
    location_data: {
      site_name: 'Perseverance Valley (Endeavour Crater Rim)',
      planetary_body: 'Mars',
      latitude: -1.9483,
      longitude: 354.4742,
      coordinates_string: '1.9483° S, 354.4742° E (or 5.5258° W)',
      coordinate_system: 'Planetocentric Mars 2000'
    },
    location_accuracy: 'Verified within 2 meters by MRO HiRISE orbital imagery.',
    student_takeaway: 'Opportunity was built to survive only 90 days, but it lasted 15 years and drove a marathon (45 km)! It climbed inside giant meteor craters, survived freezing dust storms, and found tiny mineral "blueberries" that proved Mars was once wet and warm.',
    technical_details: {
      dimensions: 'Length: 1.6 m, Width: 2.3 m, Height: 1.5 m',
      mass_kg: 185,
      power_source: 'Triple-junction solar cell array (up to 140 W) with rechargeable Li-ion batteries',
      comm_band: 'X-band direct-to-Earth and UHF antenna to Mars Odyssey / MRO',
      total_distance_traveled_km: 45.16,
      active_duration_days: 5498
    },
    featured: false
  },
  {
    id: 'mer-spirit',
    name: 'Mars Exploration Rover Spirit (MER-A)',
    mission: 'Mars Exploration Rover',
    destination: 'Mars',
    hardware_type: 'Solar-Powered Mars Rover',
    launch_date: '2003-06-10',
    arrival_date: '2004-01-04',
    end_of_mission_date: '2011-05-25',
    mission_objective: 'Investigate the geological history and potential past lake-bed environment of Gusev Crater.',
    scientific_instruments: [
      {
        name: 'Panoramic Camera (Pancam)',
        description: 'Multispectral high-resolution imaging system.'
      },
      {
        name: 'Alpha Particle X-ray Spectrometer (APXS)',
        description: 'Analyzed elemental abundances in Martian rocks and crust.'
      },
      {
        name: 'Microscopic Imager (MI)',
        description: 'Extreme close-up camera to inspect grain structures.'
      }
    ],
    discoveries: [
      'Accidentally uncovered pure 90% silica deposits when its stuck right-front wheel dragged through the dirt—revealing evidence of ancient hot springs or steam vents ideal for microbial life.',
      'Climbed Husband Hill, giving humanity the first mountain summit view from Mars.'
    ],
    mission_achievements: [
      'Operated for 6 years, 2 months, 19 days (more than 25 times its designed lifespan).',
      'Drove 7.73 kilometers across rugged volcanic terrain.'
    ],
    operational_status: 'inactive',
    status_as_of: '2026-11-01',
    status_note: 'Became entrapped in soft sand at "Troy" in 2009. Last signal received March 22, 2010. Mission concluded May 25, 2011.',
    image_url: 'https://images-assets.nasa.gov/image/PIA05040/PIA05040~orig.jpg',
    image_credit: 'NASA / JPL-Caltech / Cornell (Spirit at Gusev Crater)',
    source_urls: [
      {
        title: 'NASA JPL Spirit Rover Mission Archive',
        url: 'https://mars.nasa.gov/mer/mission/status_spirit.html',
        agency: 'NASA'
      }
    ],
    dataset_reference: 'PDS MER1 Dataset (PDS-MER1-APXS-GUSEV)',
    location_data: {
      site_name: 'Columbia Memorial Station / Troy (Gusev Crater)',
      planetary_body: 'Mars',
      latitude: -14.5684,
      longitude: 175.4726,
      coordinates_string: '14.5684° S, 175.4726° E',
      coordinate_system: 'Planetocentric Mars 2000'
    },
    location_accuracy: 'Verified via HiRISE orbital tracks.',
    student_takeaway: 'When Spirit broke its front wheel, scientists were sad. But as Spirit dragged that broken wheel through the red soil, it scraped open a layer of brilliant white silica! That broken wheel made one of the greatest discoveries on Mars: ancient hydrothermal vents, like Yellowstone on Earth!',
    technical_details: {
      dimensions: 'Length: 1.6 m, Width: 2.3 m, Height: 1.5 m',
      mass_kg: 185,
      power_source: 'Solar panels and Li-ion batteries',
      comm_band: 'X-band & UHF',
      total_distance_traveled_km: 7.73,
      active_duration_days: 2210
    },
    featured: false
  },
  {
    id: 'msl-curiosity',
    name: 'Mars Science Laboratory Curiosity Rover',
    mission: 'Mars Science Laboratory',
    destination: 'Mars',
    hardware_type: 'Nuclear-Powered Mobile Science Laboratory',
    launch_date: '2011-11-26',
    arrival_date: '2012-08-06',
    mission_objective: 'Determine whether Mars ever had an environment capable of supporting microbial life, investigate Martian paleoclimates, and assess radiation levels for future human astronauts.',
    scientific_instruments: [
      {
        name: 'Sample Analysis at Mars (SAM)',
        description: 'Miniature chemical laboratory that bakes rock powders to detect organic molecules and isotope ratios.'
      },
      {
        name: 'Chemistry and Mineralogy (CheMin)',
        description: 'X-ray diffraction instrument identifying specific crystalline minerals.'
      },
      {
        name: 'Chemistry and Camera (ChemCam / SuperCam)',
        description: 'Fires high-energy laser pulses at rocks up to 7 meters away and reads the glowing plasma spectrum.'
      },
      {
        name: 'Mast Camera (Mastcam)',
        description: 'Color multispectral stereo camera with zoom and video capability.'
      },
      {
        name: 'Radiation Assessment Detector (RAD)',
        description: 'Measures high-energy cosmic rays and solar energetic particles to prepare for human missions.'
      }
    ],
    discoveries: [
      'Discovered that Gale Crater was once an ancient freshwater lake with neutral pH, carbon, hydrogen, oxygen, nitrogen, and phosphorus—habitable for ancient life!',
      'Discovered indigenous organic carbon molecules preserved inside 3.5-billion-year-old mudstone.',
      'Detected seasonal rhythmic spikes in atmospheric methane that scientists are still investigating.'
    ],
    mission_achievements: [
      'First spacecraft to utilize the revolutionary "Sky Crane" rocket-powered descent system.',
      'Active on Mars for over 12+ years and counting (>4,300 sols).',
      'Has driven over 32 kilometers up Mount Sharp (Aeolis Mons).'
    ],
    operational_status: 'operational',
    status_as_of: '2026-11-01',
    status_note: 'Actively exploring Mount Sharp in Gale Crater. Nuclear RTG power source estimated to provide sufficient electrical power into the 2030s.',
    image_url: 'https://images-assets.nasa.gov/image/PIA19920/PIA19920~medium.jpg',
    image_credit: 'NASA / JPL-Caltech / MSSS',
    source_urls: [
      {
        title: 'NASA Curiosity Mars Rover Official Mission Site',
        url: 'https://mars.nasa.gov/msl/',
        agency: 'NASA / JPL-Caltech'
      },
      {
        title: 'PDS MSL Science Data Archive',
        url: 'https://pds-geosciences.wustl.edu/missions/msl/',
        agency: 'NASA PDS'
      }
    ],
    dataset_reference: 'PDS Dataset MSL-M-SAM-2-RDR-V1.0',
    location_data: {
      site_name: 'Gale Crater (Mount Sharp Gediz Vallis Ridge)',
      planetary_body: 'Mars',
      latitude: -4.5895,
      longitude: 137.4417,
      coordinates_string: '4.5895° S, 137.4417° E',
      coordinate_system: 'Planetocentric Mars 2000'
    },
    location_accuracy: 'Tracked daily via HiRISE with centimeter precision relative to surface features.',
    student_takeaway: 'Curiosity is an SUV-sized laboratory powered by nuclear heat! It fires a real laser beam to vaporize rocks from 7 meters away and smells the puffs of vapor. It proved that Mars once had fresh, calm lakes that you could have scooped water from and drank!',
    technical_details: {
      dimensions: 'Length: 3.0 m, Width: 2.7 m, Height: 2.2 m, Arm reach: 2.1 m',
      mass_kg: 899,
      power_source: 'Multi-Mission Radioisotope Thermoelectric Generator (MMRTG) using 4.8 kg Plutonium-238 dioxide',
      comm_band: 'X-band direct to Earth and UHF to Mars orbiters (Odyssey, MRO, TGO, MAVEN)',
      total_distance_traveled_km: 32.8,
      active_duration_days: 4480
    },
    featured: true
  },
  {
    id: 'm2020-perseverance',
    name: 'Mars 2020 Perseverance Rover',
    mission: 'Mars 2020',
    destination: 'Mars',
    hardware_type: 'Nuclear-Powered Astrobiology Rover',
    launch_date: '2020-07-30',
    arrival_date: '2021-02-18',
    mission_objective: 'Seek signs of ancient microbial life in Jezero Crater’s dried river delta, cache hermetically sealed rock cores for future return to Earth, and test oxygen generation from the carbon dioxide atmosphere.',
    scientific_instruments: [
      {
        name: 'Scanning Habitable Environments with Raman & Luminescence for Organics & Chemicals (SHERLOC)',
        description: 'UV laser and microscopic spectrometer capable of mapping organic chemicals and minerals at sub-millimeter scales.'
      },
      {
        name: 'Planetary Instrument for X-ray Lithochemistry (PIXL)',
        description: 'X-ray fluorescence spectrometer measuring precise elemental chemistry of mineral grains.'
      },
      {
        name: 'Mars Oxygen ISRU Experiment (MOXIE)',
        description: 'Produced pure breathable oxygen directly from the 95% CO2 Martian atmosphere.'
      },
      {
        name: 'Radar Imager for Mars’ Subsurface Experiment (RIMFAX)',
        description: 'Ground-penetrating radar imaging rock layers more than 10 meters beneath the rover wheels.'
      },
      {
        name: 'SuperCam & Mastcam-Z',
        description: 'High-definition zoom cameras and laser-induced breakdown spectroscopy with stereo microphones.'
      }
    ],
    discoveries: [
      'Successfully collected and sealed 24+ pristine rock and regolith sample tubes for the Mars Sample Return mission.',
      'MOXIE generated 122 grams of oxygen—enough to keep a small dog breathing for 10 hours—proving humans can make rocket propellant and breathable air on Mars.',
      'Confirmed Jezero Crater was a lake fed by a rushing river that laid down sedimentary mudstones capable of preserving microfossils.'
    ],
    mission_achievements: [
      'First rover equipped to collect and hermetically seal samples for return to Earth.',
      'Carried and safely deployed the first extraterrestrial aircraft (Ingenuity).',
      'Recorded the first real audio sounds of Martian winds, rover driving, and helicopter rotor blades.'
    ],
    operational_status: 'operational',
    status_as_of: '2026-11-01',
    status_note: 'Currently exploring the crater rim of Jezero Crater. All systems nominal.',
    image_url: 'https://images-assets.nasa.gov/image/PIA24343/PIA24343~orig.jpg',
    image_credit: 'NASA / JPL-Caltech (Perseverance on Mars Surface)',
    source_urls: [
      {
        title: 'NASA Mars 2020 Perseverance Rover Mission Site',
        url: 'https://mars.nasa.gov/mars2020/',
        agency: 'NASA / JPL-Caltech'
      },
      {
        title: 'NASA Mars Sample Return Overview',
        url: 'https://science.nasa.gov/mission/mars-sample-return/',
        agency: 'NASA Science'
      }
    ],
    dataset_reference: 'PDS4 Mars 2020 Mission Archive (urn:nasa:pds:mars2020)',
    location_data: {
      site_name: 'Jezero Crater (Octavia E. Butler Landing / Margin Unit)',
      planetary_body: 'Mars',
      latitude: 18.4447,
      longitude: 77.4508,
      coordinates_string: '18.4447° N, 77.4508° E',
      coordinate_system: 'Planetocentric Mars 2000'
    },
    location_accuracy: 'Sub-meter accuracy verified by MRO HiRISE and onboard terrain-relative navigation.',
    student_takeaway: 'Perseverance is an astrobiologist on wheels! It carries a drill that cores rock cylinders and packs them inside ultra-pure titanium tubes. When future spacecraft fly to Mars, they will pick up these tubes and fly them back to Earth so scientists can look for alien fossils under electron microscopes.',
    technical_details: {
      dimensions: 'Length: 3.0 m, Width: 2.7 m, Height: 2.2 m, Arm: 2.1 m',
      mass_kg: 1025,
      power_source: 'MMRTG (Plutonium-238 dioxide) and two lithium-ion batteries',
      comm_band: 'X-band and Ultra-High Frequency (UHF)',
      total_distance_traveled_km: 29.5,
      active_duration_days: 1360
    },
    featured: false
  },
  {
    id: 'm2020-ingenuity',
    name: 'Ingenuity Mars Helicopter',
    mission: 'Mars 2020',
    destination: 'Mars',
    hardware_type: 'Autonomous Coaxial Rotorcraft',
    launch_date: '2020-07-30',
    arrival_date: '2021-02-18',
    end_of_mission_date: '2024-01-25',
    mission_objective: 'Technology demonstration to achieve the first powered, controlled aerodynamic flight of an aircraft on another planet, where atmospheric density is less than 1% of Earth’s.',
    scientific_instruments: [
      {
        name: 'Terrain-Relative Navigation Color Horizon Camera',
        description: 'High-resolution downward-facing and horizon-facing optical cameras capturing real-time aerial footage.'
      },
      {
        name: 'Inertial Measurement Unit (IMU) & Inclinometer',
        description: 'Microelectromechanical sensors calculating attitude at 500 Hz for autonomous rotor trim adjustments.'
      }
    ],
    discoveries: [
      'Proved that controlled aerodynamic flight is practical in the ultra-thin 0.006-bar Martian atmosphere by spinning carbon-fiber blades at 2,400 to 2,900 RPM.',
      'Demonstrated aerial scouting capability, spotting sand dunes and boulder fields to map safe driving paths for Perseverance.'
    ],
    mission_achievements: [
      'First aircraft in human history to fly on another planet.',
      'Designed for up to 5 experimental flights; completed 72 operational flights!',
      'Accumulated 128.8 minutes of total flight time and flew over 17.0 kilometers (10.6 miles).'
    ],
    operational_status: 'mission-completed',
    status_as_of: '2026-11-01',
    status_note: 'Retired on January 25, 2024, after sustaining rotor blade tip damage during Flight 72 landing. Survives upright on the sands of Valinor Hills, continuing to record daily temperatures and avionics health as a stationary test station.',
    image_url: 'https://images-assets.nasa.gov/image/PIA24466/PIA24466~medium.jpg',
    image_credit: 'NASA / JPL-Caltech (Ingenuity Mars Helicopter Airfield)',
    source_urls: [
      {
        title: 'NASA Press Release: After Exceptional Mission, NASA Mars Helicopter Ends Flight Operations',
        url: 'https://www.nasa.gov/news-release/after-exceptional-mission-nasas-ingenuity-mars-helicopter-ends-flight-operations/',
        agency: 'NASA HQ'
      },
      {
        title: 'NASA JPL Ingenuity Flight Log',
        url: 'https://mars.nasa.gov/technology/helicopter/#Flight-Log',
        agency: 'NASA / JPL'
      }
    ],
    dataset_reference: 'NASA JPL Ingenuity Flight Log Data Archive (M2020-ING-FLT)',
    location_data: {
      site_name: 'Valinor Hills (Jezero Crater)',
      planetary_body: 'Mars',
      latitude: 18.441,
      longitude: 77.449,
      coordinates_string: '18.441° N, 77.449° E',
      coordinate_system: 'Planetocentric Mars 2000'
    },
    location_accuracy: 'Photographed on surface by Perseverance Mastcam-Z from 450 meters away.',
    student_takeaway: 'Mars air is so thin that flying a helicopter there is like flying at 100,000 feet on Earth! People said it was impossible. But Ingenuity spun its ultra-light carbon blades at almost 3,000 times a minute, made 72 historic flights, and even carried a tiny postage-stamp-sized piece of fabric from the Wright brothers’ 1903 airplane under its solar panel!',
    technical_details: {
      dimensions: 'Rotor diameter: 1.2 m, Fuselage: 13.6 cm x 19.5 cm x 16.3 cm',
      mass_kg: 1.8,
      power_source: 'Solar panel charging six Sony lithium-ion battery cells (35–43 Wh)',
      comm_band: 'ZigBee 900 MHz low-power radio link to Perseverance rover',
      total_distance_traveled_km: 17.0,
      active_duration_days: 1067
    },
    featured: false
  },
  {
    id: 'voyager-1',
    name: 'Voyager 1 Interstellar Spacecraft',
    mission: 'Voyager Program',
    destination: 'Deep Space',
    hardware_type: 'Deep Space Robotic Interstellar Probe',
    launch_date: '1977-09-05',
    arrival_date: '2012-08-25', // Crossed heliopause
    mission_objective: 'Conduct flybys of Jupiter and Saturn systems, characterize the rings, magnetospheres, and moons (including Titan), and transition into the Voyager Interstellar Mission.',
    scientific_instruments: [
      {
        name: 'Magnetometer (MAG)',
        description: 'Triaxial fluxgate magnetometers measuring interplanetary and interstellar magnetic fields.'
      },
      {
        name: 'Cosmic Ray System (CRS)',
        description: 'Solid-state detectors measuring high-energy galactic cosmic rays.'
      },
      {
        name: 'Plasma Wave Subsystem (PWS)',
        description: 'Measures electric wave components of local plasma vibrations in interstellar space.'
      },
      {
        name: 'Low Energy Charged Particle (LECP)',
        description: 'Measures electrons, protons, and alpha particles escaping the solar wind.'
      }
    ],
    discoveries: [
      'First human-made object to cross the heliopause and enter interstellar space (August 25, 2012).',
      'Discovered active volcanoes on Jupiter’s moon Io—the first proof of active volcanism beyond Earth.',
      'Discovered that interstellar space has much denser plasma and stronger magnetic alignment than previously expected.',
      'Captured the legendary "Pale Blue Dot" photograph of Earth from 6 billion kilometers away.'
    ],
    mission_achievements: [
      'Farthest human-made object from Earth (>163 Astronomical Units / >24.4 billion kilometers).',
      'Continuous operation for over 47 years in deep space.',
      'Carries the Golden Record containing sounds, music, and images of Earth civilization.'
    ],
    operational_status: 'operational',
    status_as_of: '2026-11-01',
    status_note: 'Operating in interstellar space. NASA JPL engineers successfully restored engineering communications in 2024 after resolving a memory chip anomaly. Science instruments continue returning data.',
    image_url: 'https://images-assets.nasa.gov/image/PIA17046/PIA17046~medium.jpg',
    image_credit: 'NASA / JPL-Caltech',
    source_urls: [
      {
        title: 'NASA Jet Propulsion Laboratory Voyager Mission Status',
        url: 'https://voyager.jpl.nasa.gov/mission/status/',
        agency: 'NASA / JPL'
      },
      {
        title: 'NASA Science: Voyager 1 Crosses Heliopause',
        url: 'https://science.nasa.gov/mission/voyager/voyager-1/',
        agency: 'NASA Science'
      }
    ],
    dataset_reference: 'PDS Space Physics Node: V1-SS-MAG-4-RATES-48SEC-V1.0',
    location_data: {
      site_name: 'Interstellar Space (Beyond Heliopause, Ophiuchus Constellation)',
      planetary_body: 'Interstellar Space',
      current_distance_au: '163.6 AU (24.47 billion km)',
      coordinates_string: 'RA 17h 14m, Dec +12° 03′ (Sun-centered J2000)'
    },
    location_accuracy: 'Tracked daily via NASA Deep Space Network (DSN) 70-meter antennas with Doppler ranging.',
    student_takeaway: 'Voyager 1 is the most distant human creation in the universe! It is over 15 billion miles away from us right now. A radio message traveling at the speed of light takes more than 22 hours just to reach it. On its side, it carries a 12-inch gold-plated phonograph record containing greetings in 55 human languages and whale songs!',
    technical_details: {
      dimensions: 'High-gain antenna diameter: 3.7 m; Magnetometer boom: 13 m',
      mass_kg: 825.5,
      power_source: 'Three Radioisotope Thermoelectric Generators (RTGs) producing ~220 W currently',
      comm_band: 'S-band uplink, X-band downlink (8.4 GHz) to Deep Space Network',
      total_distance_traveled_km: 24470000000,
      active_duration_days: 17960
    },
    featured: true
  },
  {
    id: 'voyager-2',
    name: 'Voyager 2 Interstellar Spacecraft',
    mission: 'Voyager Program',
    destination: 'Deep Space',
    hardware_type: 'Deep Space Robotic Interstellar Probe',
    launch_date: '1977-08-20',
    arrival_date: '2018-11-05', // Crossed heliopause
    mission_objective: 'Grand Tour flyby of all four giant outer planets (Jupiter, Saturn, Uranus, Neptune) and exploration of the outer heliosphere.',
    scientific_instruments: [
      {
        name: 'Plasma Science (PLS)',
        description: 'Directly measures the velocity, density, and pressure of the solar wind and interstellar medium.'
      },
      {
        name: 'Magnetometer (MAG)',
        description: 'Measures changes in ambient magnetic field strength.'
      },
      {
        name: 'Low Energy Charged Particle (LECP)',
        description: 'Detects ions and electrons in interstellar boundary shock fronts.'
      }
    ],
    discoveries: [
      'Only spacecraft in human history to visit Uranus and Neptune.',
      'Discovered 11 new moons and 2 new rings around Uranus; discovered 6 new moons and active geysers on Triton at Neptune.',
      'Crossed the heliopause in November 2018, providing the first working direct plasma instrument measurements of the interstellar medium.'
    ],
    mission_achievements: [
      'Completed the historic "Grand Tour" of the outer solar system.',
      'Second spacecraft to enter interstellar space (>136 AU).',
      'Over 47 years of continuous flight.'
    ],
    operational_status: 'operational',
    status_as_of: '2026-11-01',
    status_note: 'Operating in interstellar space. In 2023, NASA engineers redirected power from a backup voltage regulator reservoir to keep all science instruments running through 2026.',
    image_url: 'https://images-assets.nasa.gov/image/PIA22924/PIA22924~medium.jpg',
    image_credit: 'NASA / JPL-Caltech',
    source_urls: [
      {
        title: 'NASA JPL Voyager 2 Fast Facts',
        url: 'https://voyager.jpl.nasa.gov/mission/interstellar-mission/',
        agency: 'NASA / JPL'
      }
    ],
    dataset_reference: 'PDS Space Physics Node: V2-SS-PLS-4-SUMM-V1.0',
    location_data: {
      site_name: 'Interstellar Space (Southern Celestial Hemisphere)',
      planetary_body: 'Interstellar Space',
      current_distance_au: '136.8 AU (20.46 billion km)',
      coordinates_string: 'RA 20h 02m, Dec -62° 19′'
    },
    location_accuracy: 'Tracked by Canberra Deep Space Communication Complex (DSS 43).',
    student_takeaway: 'Voyager 2 is the ONLY spacecraft that has ever visited Uranus and Neptune! When it flew past Neptune’s icy moon Triton, it discovered volcanoes shooting nitrogen ice five miles into the sky. It is now cruising through the empty darkness between the stars.',
    technical_details: {
      dimensions: 'Antenna diameter: 3.7 m',
      mass_kg: 825.5,
      power_source: 'Three RTGs (Plutonium-238)',
      comm_band: 'S-band & X-band',
      total_distance_traveled_km: 20460000000,
      active_duration_days: 17980
    },
    featured: false
  },
  {
    id: 'new-horizons',
    name: 'New Horizons Spacecraft',
    mission: 'New Horizons',
    destination: 'Deep Space',
    hardware_type: 'Deep Space Flyby Reconnaissance Probe',
    launch_date: '2006-01-19',
    arrival_date: '2015-07-14', // Pluto Flyby
    mission_objective: 'Execute the first close-up exploration of Pluto, its moon Charon, and primitive Kuiper Belt Objects (KBOs).',
    scientific_instruments: [
      {
        name: 'Long Range Reconnaissance Imager (LORRI)',
        description: 'Telescopic camera providing the highest spatial resolution images of Pluto and Arrokoth.'
      },
      {
        name: 'Ralph (MVIC and LEISA)',
        description: 'Color optical imager and infrared composition mapper analyzing surface ice species.'
      },
      {
        name: 'Solar Wind Around Pluto (SWAP)',
        description: 'Measures solar wind interactions with Pluto’s escaping atmosphere.'
      },
      {
        name: 'Venetia Burney Student Dust Counter (SDC)',
        description: 'Student-built instrument counting interplanetary dust impacts throughout the cruise.'
      }
    ],
    discoveries: [
      'Discovered that Pluto is geologically active, featuring towering water-ice mountains, glaciers of nitrogen ice, and a heart-shaped basin named Tombaugh Regio.',
      'Executed the farthest flyby in history of Arrokoth (2014 MU69) on Jan 1, 2019, revealing a pristine contact binary planetesimal from solar system formation.',
      'Discovered that the Kuiper Belt may extend much farther out than previously recognized.'
    ],
    mission_achievements: [
      'Fastest spacecraft ever launched from Earth (relative to Earth at escape: 16.26 km/s or 36,373 mph).',
      'First spacecraft to explore the Pluto system.',
      'First flyby of a pristine classical Kuiper Belt Object (Arrokoth).'
    ],
    operational_status: 'operational',
    status_as_of: '2026-11-01',
    status_note: 'Active in the Kuiper Belt at over 58 AU from the Sun. Continuing heliophysics measurements and distant Kuiper Belt observations.',
    image_url: 'https://images-assets.nasa.gov/image/PIA19952/PIA19952~medium.jpg',
    image_credit: 'NASA / Johns Hopkins University Applied Physics Laboratory / Southwest Research Institute',
    source_urls: [
      {
        title: 'NASA New Horizons Mission Home',
        url: 'https://science.nasa.gov/mission/new-horizons/',
        agency: 'NASA / JHUAPL'
      }
    ],
    dataset_reference: 'PDS Small Bodies Node (NH-P-LORRI-3-PLUTO-V3.0)',
    location_data: {
      site_name: 'Outer Kuiper Belt',
      planetary_body: 'Deep Space',
      current_distance_au: '58.4 AU (8.73 billion km)',
      coordinates_string: 'RA 19h 25m, Dec -20° 40′'
    },
    location_accuracy: 'Tracked by NASA Deep Space Network.',
    student_takeaway: 'Before New Horizons arrived in 2015, Pluto was just a blurry pixel in telescopes. New Horizons revealed a magnificent world with a giant frozen heart made of nitrogen ice, blue skies, and floating water-ice mountains as tall as the Rockies!',
    technical_details: {
      dimensions: '0.7 m x 2.1 m x 2.7 m (piano-sized) with 2.1 m dish',
      mass_kg: 478,
      power_source: 'Single Radioisotope Thermoelectric Generator (RTG) producing ~190 W',
      comm_band: 'X-band direct to Earth',
      total_distance_traveled_km: 8730000000,
      active_duration_days: 6870
    },
    featured: false
  },
  {
    id: 'cassini',
    name: 'Cassini Spacecraft',
    mission: 'Cassini-Huygens',
    destination: 'Saturn',
    hardware_type: 'Orbiter & Deep Space Laboratory',
    launch_date: '1997-10-15',
    arrival_date: '2004-07-01',
    end_of_mission_date: '2017-09-15',
    mission_objective: 'Conduct a thorough exploration of Saturn, its rings, magnetosphere, and complex family of icy and organic-rich moons.',
    scientific_instruments: [
      {
        name: 'Imaging Science Subsystem (ISS)',
        description: 'Narrow- and wide-angle cameras capturing 453,000 breathtaking images of Saturn and its moons.'
      },
      {
        name: 'Ion and Neutral Mass Spectrometer (INMS)',
        description: 'Sampled the chemical composition of gas and water vapor directly inside Enceladus’ plumes.'
      },
      {
        name: 'Composite Infrared Spectrometer (CIRS)',
        description: 'Measured thermal emissions and mapped temperatures across the ring planes.'
      }
    ],
    discoveries: [
      'Discovered active geysers erupting from a warm, global saltwater ocean beneath the icy crust of Enceladus containing organic molecules—a prime candidate for extraterrestrial life!',
      'Discovered vast seas of liquid methane and ethane on Titan with rain, rivers, and sand dunes made of organic grains.',
      'Completed 22 daring dives inside the 2,000-kilometer gap between Saturn and its rings in the "Grand Finale".'
    ],
    mission_achievements: [
      'Orbited Saturn for 13 years, completing 294 orbits.',
      'Safely deployed ESA’s Huygens probe to make the first landing in the outer solar system on Titan.',
      'Concluded with a deliberate plunge into Saturn’s atmosphere on Sept 15, 2017, to protect Enceladus and Titan from potential microbial contamination.'
    ],
    operational_status: 'mission-completed',
    status_as_of: '2026-11-01',
    status_note: 'Vaporized in Saturn’s upper atmosphere during its deliberate final dive on September 15, 2017. Hardware became a permanent part of Saturn.',
    image_url: 'https://images-assets.nasa.gov/image/PIA17172/PIA17172~medium.jpg',
    image_credit: 'NASA / JPL-Caltech / Space Science Institute',
    source_urls: [
      {
        title: 'NASA Cassini: The Grand Finale and Mission Archive',
        url: 'https://science.nasa.gov/mission/cassini/',
        agency: 'NASA / JPL'
      }
    ],
    dataset_reference: 'PDS Ring-Moon Systems Node (PDS-CO-ISS-2-EDR-V1.0)',
    location_data: {
      site_name: 'Saturn Upper Atmosphere (Equatorial Entry)',
      planetary_body: 'Saturn',
      latitude: 9.4,
      longitude: 53.0,
      coordinates_string: '9.4° N, 53.0° W (Entry Coordinate)',
      coordinate_system: 'Saturnian Chronocentric'
    },
    location_accuracy: 'Entry trajectory monitored until telemetry cutoff at 1,500 km above cloud tops.',
    student_takeaway: 'Cassini showed us that Saturn’s tiny moon Enceladus is shooting giant geysers of salty ocean water out into space through cracks nicknamed "tiger stripes"! Because scientists did not want any germs from Earth to accidentally contaminate that alien ocean, Cassini sacrificed itself by diving directly into Saturn like a meteor.',
    technical_details: {
      dimensions: 'Height: 6.7 m, Width: 4.0 m',
      mass_kg: 2125, // Dry mass (5,712 kg wet at launch)
      power_source: 'Three RTGs providing 885 W at launch',
      comm_band: 'X-band, S-band, and Ku-band',
      active_duration_days: 7274
    },
    featured: true
  },
  {
    id: 'insight-lander',
    name: 'InSight Mars Lander',
    mission: 'Interior Exploration using Seismic Investigations, Geodesy and Heat Transport (InSight)',
    destination: 'Mars',
    hardware_type: 'Stationary Geophysical Lander',
    launch_date: '2018-05-05',
    arrival_date: '2018-11-26',
    end_of_mission_date: '2022-12-21',
    mission_objective: 'Place a seismometer directly on Martian soil to study the deep interior structure of Mars: its crust, mantle, and metallic liquid core.',
    scientific_instruments: [
      {
        name: 'Seismic Experiment for Interior Structure (SEIS)',
        description: 'Ultra-sensitive seismometer encased in a vacuum dome capable of detecting ground vibrations smaller than a hydrogen atom.'
      },
      {
        name: 'Heat Flow and Physical Properties Package (HP3)',
        description: 'A self-hammering thermal probe nicknamed "the mole" designed to measure heat escaping Mars.'
      },
      {
        name: 'Rotation and Interior Structure Experiment (RISE)',
        description: 'Used radio Doppler tracking to measure the slight wobble of Mars’ north pole.'
      }
    ],
    discoveries: [
      'Detected over 1,319 "marsquakes", proving Mars is seismically active today.',
      'Determined that the Martian core is liquid iron-nickel with a radius of approximately 1,830 kilometers.',
      'Recorded the acoustic thump of space meteoroids slamming into the Martian surface in real time.'
    ],
    mission_achievements: [
      'First seismometer placed on the surface of another planet since Apollo.',
      'Mapped the internal crustal layers of Mars for the first time in history.'
    ],
    operational_status: 'inactive',
    status_as_of: '2026-11-01',
    status_note: 'Solar panels gradually covered by dense red Martian dust. After 4 years of continuous science, power levels dropped below operational thresholds in December 2022.',
    image_url: 'https://images-assets.nasa.gov/image/PIA23150/PIA23150~medium.jpg',
    image_credit: 'NASA / JPL-Caltech / CNES / IPGP',
    source_urls: [
      {
        title: 'NASA InSight Mission Concludes After Years of Science',
        url: 'https://www.nasa.gov/news-release/nasa-retires-insight-mars-lander-mission-after-years-of-science/',
        agency: 'NASA HQ'
      }
    ],
    dataset_reference: 'PDS Geosciences Node: InSight SEIS Data (urn:nasa:pds:insight_seis)',
    location_data: {
      site_name: 'Elysium Planitia',
      planetary_body: 'Mars',
      latitude: 4.502,
      longitude: 135.623,
      coordinates_string: '4.502° N, 135.623° E',
      coordinate_system: 'Planetocentric Mars 2000'
    },
    location_accuracy: 'Verified to ±1 meter by MRO HiRISE.',
    student_takeaway: 'InSight listened to the heartbeat of Mars! Its super-sensitive ear was so delicate that it could hear the ground shake when a meteor hit the planet hundreds of miles away. It proved that Mars has deep quakes and a molten iron core inside.',
    technical_details: {
      dimensions: 'Solar array span: 6.0 m; Deck height: 0.83 m',
      mass_kg: 358,
      power_source: 'Two circular UltraFlex solar panels (originally generating 600 W, dropped to ~100 W by dust)',
      comm_band: 'X-band direct to Earth and UHF to Mars orbiters',
      active_duration_days: 1486
    },
    featured: false
  },
  {
    id: 'viking-1',
    name: 'Viking 1 Lander',
    mission: 'Viking Program',
    destination: 'Mars',
    hardware_type: 'Stationary Planetary Lander',
    launch_date: '1975-08-20',
    arrival_date: '1976-07-20',
    end_of_mission_date: '1982-11-13',
    mission_objective: 'Conduct the first successful soft landing and search for biosignatures in the Martian soil with automated biological laboratories.',
    scientific_instruments: [
      {
        name: 'Biology Experiment Suite',
        description: 'Contained three automated labs: Pyrolytic Release, Labeled Release, and Gas Exchange experiments.'
      },
      {
        name: 'Gas Chromatograph-Mass Spectrometer (GCMS)',
        description: 'Analyzed vapors from heated soil to detect organic carbon molecules.'
      },
      {
        name: 'Surface Sampler Collector Arm',
        description: 'Motorized boom arm that scraped soil into biological test chambers.'
      }
    ],
    discoveries: [
      'Returned the first color photograph from the surface of Mars.',
      'Showed that the Martian sky was butterscotch-pink due to airborne red dust particles.',
      'Found that Martian soil contains potent oxidizing chemicals (like perchlorates) that break down organic molecules.'
    ],
    mission_achievements: [
      'First American spacecraft to safely land on Mars.',
      'Operated on the surface for over 6 years (2,245 sols), setting an endurance record unbroken until Opportunity.'
    ],
    operational_status: 'inactive',
    status_as_of: '2026-11-01',
    status_note: 'Communications ended on November 13, 1982, after a faulty ground software update accidentally commanded the high-gain antenna away from Earth. Renamed the Thomas Mutch Memorial Station in 1982.',
    image_url: 'https://images-assets.nasa.gov/image/PIA10738/PIA10738~orig.jpg',
    image_credit: 'NASA / JPL (Viking 1 Lander at Chryse Planitia)',
    source_urls: [
      {
        title: 'NASA NSSDCA: Viking 1 Lander',
        url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1975-075C',
        agency: 'NASA GSFC'
      }
    ],
    dataset_reference: 'PDS Viking Lander Data Archive (PDS-VL1-EDR)',
    location_data: {
      site_name: 'Thomas Mutch Memorial Station (Chryse Planitia)',
      planetary_body: 'Mars',
      latitude: 22.48,
      longitude: -48.01,
      coordinates_string: '22.48° N, 48.01° W',
      coordinate_system: 'Planetocentric Mars 2000'
    },
    location_accuracy: 'Photographed on surface by Mars Reconnaissance Orbiter HiRISE.',
    student_takeaway: 'In 1976, Viking 1 sent humanity the first color picture from the surface of Mars! People were stunned to see red rocks stretching to the horizon and a dusty butterscotch-pink sky. It sat quietly on Mars taking weather reports for over 6 years.',
    technical_details: {
      dimensions: 'Width: 3.0 m, Height: 2.1 m',
      mass_kg: 572,
      power_source: 'Two SNAP-19 Radioisotope Thermoelectric Generators (RTGs)',
      comm_band: 'S-band and UHF link',
      active_duration_days: 2307
    },
    featured: false
  },
  {
    id: 'galileo',
    name: 'Galileo Spacecraft',
    mission: 'Galileo Mission',
    destination: 'Jupiter',
    hardware_type: 'Jupiter Orbiter & Atmospheric Probe Carrier',
    launch_date: '1989-10-18',
    arrival_date: '1995-12-07',
    end_of_mission_date: '2003-09-21',
    mission_objective: 'Study Jupiter and its moons in depth from orbit, drop a probe directly into Jupiter’s crushing atmosphere, and explore the Jovian magnetosphere.',
    scientific_instruments: [
      {
        name: 'Solid State Imaging (SSI)',
        description: 'Captured high-resolution photos of Jupiter’s swirling belts and the Galilean moons.'
      },
      {
        name: 'Atmospheric Entry Probe',
        description: 'Parachuted into Jupiter’s atmosphere, measuring temperatures, winds over 600 km/h, and lightning.'
      },
      {
        name: 'Near-Infrared Mapping Spectrometer (NIMS)',
        description: 'Mapped mineral and chemical compositions of Jovian moon surfaces.'
      }
    ],
    discoveries: [
      'Discovered that Jupiter’s moon Europa harbors a vast global liquid saltwater ocean beneath its cracked ice shell.',
      'Discovered that Ganymede is the only moon in the solar system with its own internal magnetic field.',
      'Witnessed Comet Shoemaker-Levy 9 crash into Jupiter in 1994 from deep space.'
    ],
    mission_achievements: [
      'First spacecraft to orbit Jupiter.',
      'First spacecraft to drop an atmospheric descent probe into a gas giant.',
      'First spacecraft to perform an asteroid flyby (Gaspra and Ida) and discover an asteroid moon (Dactyl).'
    ],
    operational_status: 'mission-completed',
    status_as_of: '2026-11-01',
    status_note: 'Deliberately guided into Jupiter’s atmosphere on September 21, 2003, at 48 km/s to prevent any chance of crashing into and contaminating Europa.',
    image_url: 'https://images-assets.nasa.gov/image/PIA01259/PIA01259~orig.jpg',
    image_credit: 'NASA / JPL-Caltech (Galileo Approaching Jupiter)',
    source_urls: [
      {
        title: 'NASA Solar System Exploration: Galileo',
        url: 'https://science.nasa.gov/mission/galileo/',
        agency: 'NASA Science'
      }
    ],
    dataset_reference: 'PDS Atmospheres Node (PDS-GO-PROBE-3-EDR-V1.0)',
    location_data: {
      site_name: 'Jupiter Equatorial Atmosphere (Descent Plunge)',
      planetary_body: 'Jupiter',
      latitude: 0.0,
      longitude: 0.0,
      coordinates_string: '0.0° N, 0.0° W (Atmospheric Entry)',
      coordinate_system: 'Jovian System III'
    },
    location_accuracy: 'Orbital trajectory verified to atmospheric entry.',
    student_takeaway: 'Galileo made one of the most exciting discoveries in science: Jupiter’s moon Europa has twice as much liquid water under its ice than all the oceans on Earth combined! Just like Cassini at Saturn, Galileo sacrificed itself into Jupiter to protect Europa’s ocean from Earth microbes.',
    technical_details: {
      dimensions: 'Height: 5.3 m, Magnetometer boom: 11 m',
      mass_kg: 2223,
      power_source: 'Two RTGs (GPHS-RTG) producing 570 W at launch',
      comm_band: 'Low-gain S-band antenna (after high-gain antenna failed to fully deploy)',
      active_duration_days: 5085
    },
    featured: false
  },
  {
    id: 'dawn-ceres',
    name: 'Dawn Spacecraft',
    mission: 'Dawn Mission',
    destination: 'Asteroids',
    hardware_type: 'Ion Propulsion Asteroid Orbiter',
    launch_date: '2007-09-27',
    arrival_date: '2015-03-06', // Ceres arrival
    end_of_mission_date: '2018-11-01',
    mission_objective: 'Characterize the conditions and processes of our solar system’s earliest epoch by investigating the two largest protoplanets in the asteroid belt: Vesta and Ceres.',
    scientific_instruments: [
      {
        name: 'Framing Camera (FC)',
        description: 'High-resolution camera that mapped bright sodium carbonate salt deposits in Occator Crater.'
      },
      {
        name: 'Visible and Infrared Spectrometer (VIR)',
        description: 'Mapped mineral signatures and organic compounds across the surface.'
      },
      {
        name: 'Gamma Ray and Neutron Detector (GRaND)',
        description: 'Measured elemental composition and subsurface hydrogen ice content.'
      }
    ],
    discoveries: [
      'Discovered that dwarf planet Ceres has brilliant glowing white spots in Occator Crater, which are salt deposits left behind by briny mud volcanoes (cryovolcanism).',
      'Discovered that Ceres is an "ocean world" with a muddy slush mantle containing abundant water ice.',
      'Proved Vesta is a differentiated, dry rocky body like the terrestrial planets, while Ceres is icy and water-rich.'
    ],
    mission_achievements: [
      'First spacecraft ever to orbit two separate extraterrestrial destinations (Vesta and Ceres).',
      'First spacecraft to visit a dwarf planet.',
      'Demonstrated high-efficiency xenon ion propulsion across 6.9 billion kilometers.'
    ],
    operational_status: 'mission-completed',
    status_as_of: '2026-11-01',
    status_note: 'Hydrazine fuel depleted on November 1, 2018. Remains in a silent, stable graveyard orbit around Ceres that is guaranteed not to touch Ceres for at least 50 years.',
    image_url: 'https://images-assets.nasa.gov/image/PIA19167/PIA19167~orig.jpg',
    image_credit: 'NASA / JPL-Caltech / UCLA / MPS / DLR / IDA (Ceres Occator Crater)',
    source_urls: [
      {
        title: 'NASA Solar System Exploration: Dawn Mission',
        url: 'https://science.nasa.gov/mission/dawn/',
        agency: 'NASA / JPL'
      }
    ],
    dataset_reference: 'PDS Small Bodies Node: DAWN-C-FC-3-RDR-V1.0',
    location_data: {
      site_name: 'Dwarf Planet Ceres Stable Graveyard Orbit',
      planetary_body: 'Asteroids (Ceres)',
      coordinates_string: 'High-altitude stable polar orbit around Ceres',
      coordinate_system: 'Ceres Orbit'
    },
    location_accuracy: 'Stable orbit tracked by NASA JPL planetary protection protocol.',
    student_takeaway: 'Dawn was powered by futuristic blue ion engines that shot glowing xenon gas! It flew out to the asteroid belt and orbited TWO different giant space rocks. On the dwarf planet Ceres, it spotted brilliant glowing spots that turned out to be salt deposits from underground ice volcanoes!',
    technical_details: {
      dimensions: 'Solar array wing span: 19.7 m tip-to-tip',
      mass_kg: 747, // Dry mass
      power_source: 'Triple-junction InGaP/InGaAs/Ge solar cells generating 10 kW at 1 AU',
      comm_band: 'X-band high-gain antenna',
      total_distance_traveled_km: 6900000000,
      active_duration_days: 4052
    },
    featured: false
  }
];

