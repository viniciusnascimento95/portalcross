export interface Movement {
  id: number;
  name: string;
  description: string;
  image: string;
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
  defaultReps: number;
  repUnit: string;
  category: string;
}

