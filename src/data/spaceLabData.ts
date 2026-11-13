import { QuizQuestion } from '../types/quiz';

export const SPACE_LAB_QUESTIONS: QuizQuestion[] = [
  // GUESS THE SPACECRAFT
  {
    id: 'quiz-guess-1',
    mode: 'guess-spacecraft',
    question: 'Which microwave-sized robotic explorer became the very first wheeled rover to drive on Mars on July 4, 1997?',
    image_url: 'https://images-assets.nasa.gov/image/PIA01120/PIA01120~medium.jpg',
    image_credit: 'NASA / JPL-Caltech (Sojourner on Mars)',
    options: ['Curiosity', 'Sojourner', 'Opportunity', 'Perseverance'],
    correct_index: 1,
    explanation: 'Sojourner was only 65 cm long and weighed 10.6 kg! It landed with Mars Pathfinder and proved that mobile rovers could drive safely on Mars.',
    did_you_know: 'Sojourner was named after the American civil rights pioneer and abolitionist Sojourner Truth.',
    difficulty: 'Cadet (Easy)',
    hardware_id: 'pathfinder-sojourner'
  },
  {
    id: 'quiz-guess-2',
    mode: 'guess-spacecraft',
    question: 'Which twin spacecraft carries a gold-plated copper phonograph record containing human languages and music as it cruises past 163 AU in interstellar space?',
    image_url: 'https://images-assets.nasa.gov/image/PIA17046/PIA17046~medium.jpg',
    image_credit: 'NASA / JPL-Caltech (Voyager Golden Record & Probe)',
    options: ['New Horizons', 'Pioneer 10', 'Voyager 1', 'Galileo'],
    correct_index: 2,
    explanation: 'Voyager 1 crossed the heliopause into interstellar space in August 2012 and is the most distant human-made object in the universe.',
    did_you_know: 'A radio signal traveling at light speed takes more than 22 hours to reach Voyager 1 from Earth!',
    difficulty: 'Explorer (Medium)',
    hardware_id: 'voyager-1'
  },
  {
    id: 'quiz-guess-3',
    mode: 'guess-spacecraft',
    question: 'Which Mars rover drove an astounding marathon distance of 45.16 km (28 miles) across 14.5 years before being silenced by a 2018 global dust storm?',
    image_url: 'https://images-assets.nasa.gov/image/PIA18408/PIA18408~medium.jpg',
    image_credit: 'NASA / JPL-Caltech / Cornell (Opportunity Rover)',
    options: ['Spirit', 'Opportunity', 'Curiosity', 'Viking 1'],
    correct_index: 1,
    explanation: 'Opportunity was only designed to last 90 Martian days, but operated for over 5,000 sols, discovering hematite "blueberries" and ancient water veins.',
    did_you_know: 'Opportunity drove into giant meteor craters including Eagle, Endurance, Victoria, and Endeavour.',
    difficulty: 'Explorer (Medium)',
    hardware_id: 'mer-opportunity'
  },
  {
    id: 'quiz-guess-4',
    mode: 'guess-spacecraft',
    question: 'Which robotic aircraft made 72 historic flights on Mars, proving that powered aerodynamic flight is possible in a 1% atmosphere?',
    image_url: 'https://images-assets.nasa.gov/image/PIA24497/PIA24497~medium.jpg',
    image_credit: 'NASA / JPL-Caltech (Ingenuity Mars Helicopter)',
    options: ['Ingenuity', 'Dragonfly', 'Aerial-1', 'Perseverance'],
    correct_index: 0,
    explanation: 'Ingenuity was a 1.8-kg coaxial helicopter that spun its carbon fiber rotor blades at up to 2,900 RPM to lift itself in Mars’ thin air.',
    did_you_know: 'Ingenuity carried a tiny piece of unbleached muslin fabric from the wing of the 1903 Wright brothers airplane taped under its solar panel.',
    difficulty: 'Cadet (Easy)',
    hardware_id: 'm2020-ingenuity'
  },

  // MATCH THE DESTINATION
  {
    id: 'quiz-match-1',
    mode: 'match-destination',
    question: 'Where can you find the Apollo 11 Lunar Module descent stage "Eagle" and the Lunar Laser Ranging Retroreflector?',
    image_url: 'https://images-assets.nasa.gov/image/as11-40-5927/as11-40-5927~medium.jpg',
    image_credit: 'NASA / Neil Armstrong (Apollo 11 Tranquility Base)',
    options: ['Hadley Rille, Moon', 'Mare Tranquillitatis (Sea of Tranquility), Moon', 'Gale Crater, Mars', 'Oceanus Procellarum, Moon'],
    correct_index: 1,
    explanation: 'Apollo 11 touched down at Mare Tranquillitatis on July 20, 1969, at coordinates 0.67416° N, 23.47314° E.',
    did_you_know: 'Tranquility Base is now protected by archaeological preservation laws in multiple US states to preserve humanity’s first extraterrestrial heritage.',
    difficulty: 'Cadet (Easy)',
    hardware_id: 'apollo-11-eagle'
  },
  {
    id: 'quiz-match-2',
    mode: 'match-destination',
    question: 'Where is the nuclear-powered rover Curiosity currently exploring layers of sedimentary rock on Mount Sharp?',
    image_url: 'https://images-assets.nasa.gov/image/PIA19920/PIA19920~medium.jpg',
    image_credit: 'NASA / JPL-Caltech / MSSS (Curiosity at Mount Sharp)',
    options: ['Jezero Crater, Mars', 'Gale Crater, Mars', 'Hadley-Apennine, Moon', 'Elysium Planitia, Mars'],
    correct_index: 1,
    explanation: 'Curiosity landed inside Gale Crater in 2012 and has been steadily climbing Mount Sharp (Aeolis Mons) to read Mars’ paleoclimate layers.',
    did_you_know: 'Mount Sharp is higher than Mount Rainier in Washington state, rising 5.5 km above the crater floor.',
    difficulty: 'Explorer (Medium)',
    hardware_id: 'msl-curiosity'
  },
  {
    id: 'quiz-match-3',
    mode: 'match-destination',
    question: 'Where did the Cassini spacecraft complete its "Grand Finale" mission in September 2017?',
    image_url: 'https://images-assets.nasa.gov/image/PIA17172/PIA17172~medium.jpg',
    image_credit: 'NASA / JPL-Caltech (Saturn and Rings)',
    options: ['Orbiting Titan', 'Entering Jupiter’s Great Red Spot', 'Diving into Saturn’s upper atmosphere', 'Landed on Enceladus'],
    correct_index: 2,
    explanation: 'Cassini deliberately plunged into Saturn’s upper atmosphere on Sept 15, 2017, vaporizing safely to prevent contaminating potentially habitable moons like Enceladus.',
    did_you_know: 'Cassini made 22 dives through the narrow 2,000-km gap between Saturn and its innermost rings before its plunge.',
    difficulty: 'Commander (Advanced)',
    hardware_id: 'cassini'
  },

  // ACTIVE OR INACTIVE QUIZ
  {
    id: 'quiz-status-1',
    mode: 'status-check',
    question: 'What is the operational status of the Apollo 11 Lunar Laser Ranging Retroreflector (LLRR) left on the Moon in 1969?',
    image_url: 'https://images-assets.nasa.gov/image/6900957/6900957~orig.jpg',
    image_credit: 'NASA / Buzz Aldrin (Lunar Laser Retroreflector)',
    options: ['Inactive (Batteries died in 1969)', 'Operational (Still actively used for laser ranging today!)', 'Broken by micrometeoroids', 'Lost in lunar dust'],
    correct_index: 1,
    explanation: 'Because it is a passive optical prism array with zero electrical parts, it remains 100% operational after 55+ years! Observatories on Earth fire lasers at it weekly.',
    did_you_know: 'By timing the laser reflections, scientists know the Moon is moving 3.8 cm farther away each year.',
    difficulty: 'Explorer (Medium)',
    hardware_id: 'apollo-11-llrr'
  },
  {
    id: 'quiz-status-2',
    mode: 'status-check',
    question: 'What is the current operational status of the Mars 2020 Perseverance Rover?',
    image_url: 'https://images-assets.nasa.gov/image/PIA24343/PIA24343~orig.jpg',
    image_credit: 'NASA / JPL-Caltech (Perseverance Rover in Jezero)',
    options: ['Mission Completed', 'Inactive', 'Operational (Actively exploring and caching rock samples)', 'Partially Operational'],
    correct_index: 2,
    explanation: 'Perseverance is fully operational in Jezero Crater, powered by its nuclear MMRTG generator and actively caching sample tubes for Mars Sample Return.',
    did_you_know: 'Perseverance carries 43 sample tubes made of ultra-pure titanium.',
    difficulty: 'Cadet (Easy)',
    hardware_id: 'm2020-perseverance'
  },
  {
    id: 'quiz-status-3',
    mode: 'status-check',
    question: 'Why did the InSight Mars Lander conclude its mission in December 2022?',
    image_url: 'https://images-assets.nasa.gov/image/PIA23150/PIA23150~medium.jpg',
    image_credit: 'NASA / JPL-Caltech (InSight Lander Dusty Panels)',
    options: ['Its nuclear generator ran out of fuel', 'It crashed into a crater wall', 'Martian dust accumulated on its solar panels until power failed', 'Its seismometer overheated'],
    correct_index: 2,
    explanation: 'InSight was solar powered, and after four years on Mars, a thick blanket of red dust covered the solar arrays, reducing power below survival levels.',
    did_you_know: 'Before powering down, InSight detected over 1,300 marsquakes and mapped the size of the Martian liquid core.',
    difficulty: 'Explorer (Medium)',
    hardware_id: 'insight-lander'
  },

  // MISSION HISTORY CHALLENGE
  {
    id: 'quiz-hist-1',
    mode: 'history-challenge',
    question: 'Which Apollo mission introduced the first Lunar Roving Vehicle (LRV), allowing astronauts to drive miles away from the lander?',
    image_url: 'https://images-assets.nasa.gov/image/as15-88-11901/as15-88-11901~medium.jpg',
    image_credit: 'NASA / Jim Irwin (Apollo 15 Lunar Rover)',
    options: ['Apollo 11 (1969)', 'Apollo 13 (1970)', 'Apollo 15 (1971)', 'Apollo 17 (1972)'],
    correct_index: 2,
    explanation: 'Apollo 15 was the first "J-mission", carrying LRV-1 folded up on the descent stage. Astronauts Dave Scott and Jim Irwin drove 27.7 km.',
    did_you_know: 'The tires were made of zinc-coated steel piano wire mesh with titanium chevrons for traction.',
    difficulty: 'Explorer (Medium)',
    hardware_id: 'apollo-15-lrv'
  },
  {
    id: 'quiz-hist-2',
    mode: 'history-challenge',
    question: 'Which historic 1976 mission returned the first successful color panoramic photographs from the surface of Mars?',
    image_url: 'https://images-assets.nasa.gov/image/PIA10738/PIA10738~orig.jpg',
    image_credit: 'NASA / JPL (Viking 1 First Color Photo)',
    options: ['Mariner 4', 'Viking 1', 'Mars Pathfinder', 'Curiosity'],
    correct_index: 1,
    explanation: 'Viking 1 touched down on July 20, 1976, revealing Mars’ red rock plains and pinkish skies for the first time.',
    did_you_know: 'The lander operated for 2,245 Martian sols (over 6 Earth years) before communication was lost.',
    difficulty: 'Explorer (Medium)',
    hardware_id: 'viking-1'
  },

  // PLANET IDENTIFICATION
  {
    id: 'quiz-planet-1',
    mode: 'planet-identification',
    question: 'Which planet rotates completely on its side with an axial tilt of 97.8 degrees, rolling like a bowling ball around the Sun?',
    image_url: 'https://images-assets.nasa.gov/image/PIA18182/PIA18182~medium.jpg',
    image_credit: 'NASA / JPL-Caltech (Uranus Ice Giant)',
    options: ['Neptune', 'Saturn', 'Uranus', 'Venus'],
    correct_index: 2,
    explanation: 'Uranus has an extreme tilt of 97.8 degrees, meaning each pole experiences 42 years of continuous sunlight followed by 42 years of night.',
    did_you_know: 'Uranus is also the coldest planet in the solar system, dropping to -224°C (-371°F).',
    difficulty: 'Explorer (Medium)'
  },
  {
    id: 'quiz-planet-2',
    mode: 'planet-identification',
    question: 'Which giant planet has a density so low (0.687 g/cm³) that it would float if placed in a colossal bathtub of water?',
    image_url: 'https://images-assets.nasa.gov/image/PIA01486/PIA01486~orig.jpg',
    image_credit: 'NASA / JPL / Space Science Institute (Saturn Natural Color)',
    options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
    correct_index: 1,
    explanation: 'Saturn is primarily composed of light hydrogen and helium gases, giving it an average density lower than liquid water (1.0 g/cm³).',
    did_you_know: 'Saturn’s rings are 282,000 km across, yet mostly only 10 to 30 meters thick!',
    difficulty: 'Cadet (Easy)'
  }
];
