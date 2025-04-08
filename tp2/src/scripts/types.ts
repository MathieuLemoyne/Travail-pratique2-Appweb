export interface Character {
  id: number
  name: string
  credit: number
  experience: number
  weapon: Weapon
  vitality: number
}

export interface Weapon {
  id: number
  name: string
}
