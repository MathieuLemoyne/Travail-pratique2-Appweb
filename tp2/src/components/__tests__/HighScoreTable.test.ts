// tests/unit/WinningPlayers.spec.ts
import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import WinningPlayers from "@/components/HighScoreTable.vue"

describe("WinningPlayers.vue", () => {
  const playersMock = [
    { name: "Alice", credits: 120 },
    { name: "Bob", credits: 95 },
    { name: "Charlie", credits: 150 },
  ]

  it("affiche un titre", () => {
    const wrapper = mount(WinningPlayers, {
      props: { winningPlayers: playersMock },
    })
    expect(wrapper.find("h2").text()).toBe("Liste des Joueurs Gagnants")
  })

  it("affiche tous les joueurs passés en props", () => {
    const wrapper = mount(WinningPlayers, {
      props: { winningPlayers: playersMock },
    })
    const cards = wrapper.findAll(".player-card")
    expect(cards.length).toBe(3)
  })

  it("les joueurs sont triés par crédits décroissants", () => {
    const wrapper = mount(WinningPlayers, {
      props: { winningPlayers: playersMock },
    })
    const cardTexts = wrapper.findAll(".player-card").map((card) => card.text())

    expect(cardTexts[0]).toContain("Charlie")
    expect(cardTexts[1]).toContain("Alice")
    expect(cardTexts[2]).toContain("Bob")
  })
})
