export interface Character {
  id: number;
  name: string;
  score: number;
  experience: number;
  weapon: Weapon;
  vitality: number;
}

export interface Weapon {
  id: number;
  name: string;
}
export interface Ranking {
  id: number;
  name: string;
  score: number;
}
