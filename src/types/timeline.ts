export interface TimelineEvent {
  id: string;
  year: number;
  date_string: string;
  mission_name: string;
  destination: string;
  title: string;
  description: string;
  scientific_achievement: string;
  hardware_id?: string;
  hardware_name: string;
  image_url: string;
  image_credit: string;
  category: 'Moon' | 'Mars' | 'Deep Space' | 'Outer Planets';
  decade: '1960s' | '1970s' | '1980s' | '1990s' | '2000s' | '2010s' | '2020s';
  source_url: string;
}

