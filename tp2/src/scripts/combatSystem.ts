export const hitChances: Record<string, number> = {
  Débutant: 0.2,
  Intermédiaire: 0.35,
  Expert: 0.5,
  Maître: 0.7,
};

export function getRandomDamagePercent(): number {
  return Math.floor(Math.random() * 4) + 3;
}

export function performAttack(experience: string): boolean {
  const chance = hitChances[experience];
  return Math.random() < chance;
}

export function combatRound(
  player: { experience: string; health: number; credits: number },
  enemy: { experience: string; health: number; credits: number }
): {
  playerAlive: boolean;
  enemyAlive: boolean;
  playerHealth: number;
  enemyHealth: number;
} {
  const playerHits = performAttack(player.experience);
  const enemyHits = performAttack(enemy.experience);

  if (playerHits) {
    enemy.health -= getRandomDamagePercent();
  }

  if (enemyHits) {
    player.health -= getRandomDamagePercent();
  }

  player.health = Math.max(0, player.health);
  enemy.health = Math.max(0, enemy.health);

  return {
    playerAlive: player.health > 0,
    enemyAlive: enemy.health > 0,
    playerHealth: player.health,
    enemyHealth: enemy.health,
  };
}
