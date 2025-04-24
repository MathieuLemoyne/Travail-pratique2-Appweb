// tests/unit/EnemyStats.spec.ts
import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import EnemyStats from "@/components/EnemyStats.vue"

describe("EnemyStats.vue", () => {
  it("Version 1 : Affiche les informations de l’ennemi avec les props passées", () => {
    const wrapper = mount(EnemyStats, {
      props: {
        name: "Goblinor",
        experience: "Intermédiaire",
        credits: 75,
        weapon: "Hache rouillée",
        health: 48,
      },
    })

    expect(wrapper.text()).toContain("Nom : Goblinor")
    expect(wrapper.text()).toContain("Expérience : Intermédiaire")
    expect(wrapper.text()).toContain("Crédits Galactiques : 75")
    expect(wrapper.text()).toContain("Arme : Hache rouillée")
    expect(wrapper.text()).toContain("Vie : 48%")
  })

  it("Version 2 : Affiche les props avec des matchers souples", () => {
    const wrapper = mount(EnemyStats, {
      props: {
        name: "Drakar",
        experience: "Expert",
        credits: 120,
        weapon: "Lance maudite",
        health: 60,
      },
    })

    expect(wrapper.text()).toMatch(/Drakar/)
    expect(wrapper.text()).toMatch(/Expert/)
    expect(wrapper.text()).toMatch(/120/)
    expect(wrapper.text()).toMatch(/Lance maudite/)
    expect(wrapper.text()).toMatch(/60%/)
  })
})
