export type HardwareStatus = 
  | 'operational' 
  | 'partially-operational' 
  | 'inactive' 
  | 'mission-completed' 
  | 'unverified';

export type Destination = 
  | 'Moon' 
  | 'Mars' 
  | 'Deep Space' 
  | 'Jupiter' 
  | 'Saturn' 
  | 'Venus' 
  | 'Mercury' 
  | 'Asteroids';

export interface ScientificInstrument {
  name: string;
  abbreviation?: string;
  description: string;
}

export interface SourceReference {
  title: string;
  url: string;
  agency?: string;
}

export interface LocationData {
  site_name: string;
  planetary_body: string;
  latitude?: number;
  longitude?: number;
  coordinates_string?: string;
  coordinate_system?: string;
  current_distance_au?: string;
}

export interface TechnicalDetails {
  dimensions?: string;
  mass_kg?: number;
  power_source: string;
  comm_band?: string;
  total_distance_traveled_km?: number;
  active_duration_days?: number;
}

export interface HardwareRecord {
  id: string;
  name: string;
  mission: string;
  destination: Destination;
  hardware_type: string;
  launch_date: string;
  arrival_date: string;
  end_of_mission_date?: string;
  mission_objective: string;
  scientific_instruments: ScientificInstrument[];
  discoveries: string[];
  mission_achievements: string[];
  operational_status: HardwareStatus;
  status_as_of: string;
  status_note: string;
  image_url: string;
  image_credit: string;
  source_urls: SourceReference[];
  dataset_reference: string;
  location_data: LocationData;
  location_accuracy: string;
  student_takeaway: string; // "What did this machine teach humanity?"
  technical_details: TechnicalDetails;
  featured?: boolean;
}

