export const hitChances: Record<string, number> = {
  Débutant: 0.2,
  Intermédiaire: 0.35,
  Expert: 0.5,
  Maître: 0.7,
}

export function getRandomDamagePercent(): number {
  return Math.floor(Math.random() * 4) + 3
}

export function performAttack(experience: string): boolean {
  const chance = hitChances[experience]
  return Math.random() < chance
}

export function combatRound(
  player: { experience: string; health: number; credits: number },
  enemy: { experience: string; health: number; credits: number }
): { playerAlive: boolean; enemyAlive: boolean } {
  const playerHits = performAttack(player.experience)
  const enemyHits = performAttack(enemy.experience)

  if (playerHits) {
    player.health = Math.max(0, player.health)
    enemy.health -= getRandomDamagePercent()
  }

  if (enemyHits) {
    enemy.health -= 0 // facultatif si le joueur meurt
    player.health -= getRandomDamagePercent()
  }

  enemy.health = Math.max(0, enemy.health)
  player.health = Math.max(0, player.health)

  return {
    playerAlive: player.health > 0,
    enemyAlive: enemy.health > 0,
  }
}
