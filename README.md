# 🚀 SPACE TIME CAPSULE (അന്തരിക്ഷ കാലപേടകം)
### *"Humanity's Footprints Beyond Earth"*

[![NASA Space Apps Challenge](https://img.shields.io/badge/NASA%20Space%20Apps-Challenge%202026-0B3D91?style=for-the-badge&logo=nasa)](https://www.spaceappschallenge.org/2026/challenges/nasas-discarded-equipment-storytelling/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-R3F-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

---

## 🌌 Project Overview

**SPACE TIME CAPSULE** is a premium, production-quality, interactive educational digital space museum built for the official **NASA Space Apps Challenge**:
> **"Abandoned but not Forgotten: Storytelling about NASA's Discarded Equipment on the Moon and Mars"**

Since the dawn of the Apollo era in 1969, NASA has placed robotic probes, lunar landers, rovers, and scientific packages across our solar system. While active missions often capture headlines, decades of humanity’s most intrepid technological artifacts remain silent sentinels on the Moon, across Martian plains, and hurtling past the heliopause.

This application tells their scientific stories, explains the breakthroughs they unlocked, and helps school-age space enthusiasts and educators understand the engineering and science behind them.

---

## ✨ Signature Features

### 1. 🪐 Scientifically Grounded 3D Solar System
- **Real Planetary Appearance & Physics**: Built with Three.js, React Three Fiber (R3F), and Drei. Features all 8 major planets from Mercury to Neptune, along with Earth's Moon.
- **Accurate Physical Proportions**: Proportional mean radii, real rotation periods, and authentic axial tilts (e.g. Uranus tilted 97.8° on its side, Venus with retrograde rotation).
- **Disclosed Adjustable Scaling**: Allows switching between *Educational View* (optimized for visual clarity) and *Proportional View*, with disclosed orbital scaling.
- **Deep Space Trajectories**: Visual representation of Voyager 1, Voyager 2, and New Horizons heading outward toward interstellar space and the Kuiper Belt, anchored to sourced astronomical azimuths.
- **2D Accessible Fallback**: A fully accessible, screen-reader friendly 2D planetary explorer for low-spec devices or users with reduced-motion requirements.

### 2. 🛰️ Verified NASA Hardware Archive
- **Filterable & Searchable**: Search by hardware name, mission, instruments, or landing sites.
- **Destination Filters**: Moon, Mars, Deep Space, Saturn, Jupiter, Asteroids.
- **Strict Status Distinctions**:
  - `Operational`: Actively operating active systems (e.g. Curiosity, Perseverance, Voyager 1 & 2) and passive systems (e.g. Apollo 11 Lunar Laser Ranging Retroreflector, still fired weekly from Earth observatories).
  - `Partially Operational`: Degraded telemetry systems.
  - `Inactive Artifact`: Structurally preserved historical monuments (e.g. Apollo 11 Eagle descent stage, Surveyor 3, Spirit).
  - `Mission Completed`: Concluded missions (e.g. Ingenuity Mars Helicopter after 72 flights, Cassini's atmospheric plunge).
- **Verified Geographic Coordinates**: Pinpointed using NASA Lunar Reconnaissance Orbiter Camera (LROC) and Mars Reconnaissance Orbiter (HiRISE) imaging. Zero fabricated coordinates.

### 3. 🔬 Dedicated Hardware Detail Pages & Storytelling
- High-resolution authentic NASA photographs with source attribution.
- **"WHAT DID THIS MACHINE TEACH HUMANITY?"**: Specially crafted educational takeaways tailored for school-age students and curious minds.
- Complete scientific instrument breakdown (e.g. SAM, CheMin, APXS, MOXIE).
- Advanced technical accordion (mass, power generators, communications frequencies, total distance traveled).
- Direct links to NASA PDS archives and NSSDCA master catalog entries.

### 4. ⏳ Interactive Chronological Mission Timeline (1969–Present)
- Trace the history of deep space exploration from Apollo 11's touchdown in 1969 to Perseverance and Ingenuity in the 2020s.
- Filter by decade (1960s through 2020s) and planetary destination.
- Key scientific milestones highlighted for every single mission.

### 5. 💡 Scientific Discoveries Hub
- Categorized into 7 core scientific domains:
  1. *Lunar Science* (Tidal recession, lunar interior core)
  2. *Martian Geology* (Mount Sharp mudstones, Gale crater habitability)
  3. *Evidence of Ancient Water* (Hematite blueberries, gypsum veins, ancient river deltas)
  4. *Planetary Atmospheres* (Enceladus ocean plumes, Jovian storms)
  5. *Interstellar Exploration* (Heliopause crossing, interstellar cosmic rays)
  6. *Spacecraft Engineering* (Aerodynamics in 1% atmosphere, autonomous rotorcraft flight)
  7. *Astronomy & Heliophysics*
- **Evidence vs. Hypothesis**: Rigorous scientific distinction between confirmed empirical physical evidence and open hypotheses.

### 6. 🎮 Educational Space Lab
- 5 interactive educational game modes:
  - *Guess The Spacecraft*
  - *Match The Destination*
  - *Active or Inactive Quiz*
  - *Mission History Challenge*
  - *Planet Identification*
- Instant feedback with educational explanations and "Did You Know?" nuggets.
- Difficulty tiers: *Cadet (Easy)*, *Explorer (Medium)*, *Commander (Advanced)*.
- Real-time score tracking, combo streaks, and celebratory confetti upon completion.

### 7. 🛡️ Data Transparency & Provenance
- Dedicated sources and attribution page explaining how NASA datasets are curated, processed, and validated.
- Transparent disclosure of all visualization compromises (e.g. orbital distance compression).

---

## 🎨 Premium Aerospace UI/UX Design System

- **Color Palette**:
  - Main Background: `#050914` (Deep Space Dark)
  - Secondary Background: `#091321` (Command Center Navy)
  - Card Surfaces: `#101D30` (Aviation Glass Panel)
  - Primary Accent: `#54C8FF` (Orbital Cyan)
  - Secondary Accent: `#9D8AFF` (Nebula Purple)
  - Success Indicator: `#42D69B` (Telemetry Green)
  - Warning / Alert: `#FFBF69` (Solar Gold)
- **Typography**:
  - Headings: `Space Grotesk`
  - Body Copy: `Inter`
  - Telemetry & Coordinates: `JetBrains Mono`

---

## 📊 Verified NASA Datasets & Sources

| Dataset / Source | Authority | Usage in Application |
| :--- | :--- | :--- |
| **NASA Planetary Data System (PDS)** | NASA PDS Geosciences, Atmospheres & Small Bodies | Instrument calibrations, rock sample geochemistry, and Martian geology |
| **NASA NSSDCA Master Catalog** | NASA Goddard Space Flight Center | Official COSPAR IDs, launch dates, mission objectives, and operational statuses |
| **NASA Image and Video Library** | NASA Headquarters / Jet Propulsion Laboratory | High-resolution authentic space imagery and mission photography |
| **USGS Astrogeology Science Center** | USGS Cartography | Planetary coordinate reference frames, mean radii, and global surface cartography |
| **NASA Solar System Exploration** | NASA Science Mission Directorate | Planetary rotation periods, orbital velocities, axial tilts, and atmospheric data |
| **LROC & HiRISE Data** | Arizona State University / University of Arizona | Sub-meter touchdown site verification for Apollo, Surveyor, and Mars rovers |

---

## 🛠️ Quickstart & Local Installation

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or pnpm

### Installation
```bash
# 1. Clone repository
git clone https://github.com/your-username/space-time-capsule.git
cd space-time-capsule

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Navigate to http://localhost:5173/
```

### Production Build
```bash
# Compile TypeScript and bundle with Vite
npm run build

# Preview production build locally
npm run preview
```

---

## 👥 NASA Space Apps Challenge Submission Details

- **Challenge**: Abandoned but not Forgotten: Storytelling about NASA's Discarded Equipment on the Moon and Mars
- **Tagline**: *"Humanity's Footprints Beyond Earth"*
- **Target Audience**: School students (K-12), science educators, university researchers, and the global space exploration community.
- **License**: MIT License. All NASA imagery, datasets, and texture maps are in the public domain under US Government Open Data policy.

