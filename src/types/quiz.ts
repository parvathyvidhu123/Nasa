export type GameMode = 
  | 'guess-spacecraft'
  | 'match-destination'
  | 'status-check'
  | 'history-challenge'
  | 'planet-identification';

export interface QuizQuestion {
  id: string;
  mode: GameMode;
  question: string;
  image_url?: string;
  image_credit?: string;
  options: string[];
  correct_index: number;
  explanation: string;
  did_you_know: string;
  difficulty: 'Cadet (Easy)' | 'Explorer (Medium)' | 'Commander (Advanced)';
  hardware_id?: string;
}

