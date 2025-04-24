import { describe, it, expect, vi } from "vitest"
import {
  performAttack,
  getRandomDamage,
  combatRound,
} from "@/scripts/combatSystem"

//Clarification:
//On est obligé d'utiliser vi.mock pour mocker Math.random() car il s'agit d'une fonction native de JavaScript.
//Sinon, on ne peut pas la mocker directement avec vi.spyOn
// car elle n'est pas une méthode d'un objet que l'on peut espionner
describe("performAttack", () => {
  it("retourne toujours false si Math.random est supérieur à la probabilité", () => {
    vi.spyOn(Math, "random").mockReturnValue(1)
    expect(performAttack("Débutant")).toBe(false)
    expect(performAttack("Maître")).toBe(false)
  })

  it("retourne toujours true si Math.random est 0", () => {
    vi.spyOn(Math, "random").mockReturnValue(0)
    expect(performAttack("Débutant")).toBe(true)
    expect(performAttack("Maître")).toBe(true)
  })
})

describe("getRandomDamage", () => {
  it("génère un nombre de dégats entre 3 et 6", () => {
    for (let i = 0; i < 100; i++) {
      const damage = getRandomDamage()
      expect(damage).toBeGreaterThanOrEqual(3)
      expect(damage).toBeLessThanOrEqual(6)
    }
  })
})

describe("combatRound", () => {
  it("diminue la vie de l'ennemi si le joueur touche", () => {
    vi.spyOn(Math, "random").mockReturnValueOnce(0).mockReturnValueOnce(1)

    const result = combatRound(
      { experience: "Maître", health: 100, credits: 50 },
      { experience: "Débutant", health: 100, credits: 30 }
    )

    expect(result.enemyHealth).toBeLessThan(100)
    expect(result.playerHealth).toBe(100)
  })

  it("diminue la vie du joueur si l'ennemi touche", () => {
    vi.spyOn(Math, "random").mockReturnValueOnce(1).mockReturnValueOnce(0)

    const result = combatRound(
      { experience: "Maître", health: 100, credits: 50 },
      { experience: "Débutant", health: 100, credits: 30 }
    )

    expect(result.playerHealth).toBeLessThan(100)
    expect(result.enemyHealth).toBe(100)
  })

  it("donne les crédits si l'ennemi meurt", () => {
    vi.spyOn(Math, "random").mockReturnValue(0)
    vi.spyOn(Math, "floor").mockReturnValue(100)

    const result = combatRound(
      { experience: "Maître", health: 100, credits: 50 },
      { experience: "Débutant", health: 5, credits: 20 }
    )

    expect(result.creditsWon).toBe(20)
    expect(result.enemyAlive).toBe(false)
  })
})
