export type PlanetType = 'Terrestrial' | 'Gas Giant' | 'Ice Giant' | 'Natural Satellite' | 'Star';

export interface PlanetData {
  id: string;
  name: string;
  type: PlanetType;
  mean_radius_km: number;
  relative_radius_earth: number;
  distance_from_sun_au: number;
  distance_from_sun_million_km: number;
  orbital_period_days: number;
  rotation_period_hours: number;
  axial_tilt_deg: number;
  surface_temp_celsius: {
    min: number;
    max: number;
    mean: number;
  };
  atmosphere: string;
  gravity_m_s2: number;
  moons_count: number;
  color_hex: string;
  description: string;
  scientific_facts: string[];
  associated_missions: string[];
  associated_hardware_ids: string[];
  authentic_image_url: string;
  image_credit: string;
  texture_url?: string;
  has_rings?: boolean;
  ring_inner_radius?: number;
  ring_outer_radius?: number;
}

