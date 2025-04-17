export const hitChances: Record<string, number> = {
  Débutant: 0.2,
  Intermédiaire: 0.35,
  Expert: 0.5,
  Maître: 0.7,
};

export function performAttack(experience: string): boolean {
  const hitChances: Record<string, number> = {
    Débutant: 0.2,
    Intermédiaire: 0.35,
    Expert: 0.5,
    Maître: 0.7,
  };

  return Math.random() < (hitChances[experience] ?? 0.2);
}

export function getRandomDamage(): number {
  return Math.floor(Math.random() * (6 - 3 + 1)) + 3; // retourne un nombre aléatoire entre 3 et 6
}

export function combatRound(
  player: { experience: string; health: number; credits: number },
  enemy: { experience: string; health: number; credits: number }
): {
  playerAlive: boolean;
  enemyAlive: boolean;
  playerHealth: number;
  enemyHealth: number;
  creditsWon: number;
} {
  const playerHits = performAttack(player.experience);
  const enemyHits = performAttack(enemy.experience);

  let creditsWon = 0;

  if (playerHits) {
    const damage = getRandomDamage();
    enemy.health -= damage;
  }

  if (enemyHits) {
    const damage = getRandomDamage();
    player.health -= damage;
  }

  player.health = Math.max(0, player.health);
  enemy.health = Math.max(0, enemy.health);

  if (enemy.health === 0) {
    creditsWon = enemy.credits;
  }

  return {
    playerAlive: player.health > 0,
    enemyAlive: enemy.health > 0,
    playerHealth: player.health,
    enemyHealth: enemy.health,
    creditsWon,
  };
}
