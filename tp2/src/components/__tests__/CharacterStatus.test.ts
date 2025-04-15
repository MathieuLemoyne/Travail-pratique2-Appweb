import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import CharacterStatus from "@/components/CharacterStatus.vue"

describe("CharacterStatus", () => {
  it("Version 1 : Affiche les informations du personnage avec les props passées", () => {
    const wrapper = mount(CharacterStatus, {
      props: {
        name: "Noa",
        experience: "Maître",
        credits: 100,
        weapon: "Lame du Dragon",
        health: 85,
      },
    })

    expect(wrapper.text()).toContain("Nom : Noa")
    expect(wrapper.text()).toContain("Expérience : Maître")
    expect(wrapper.text()).toContain("Crédits Galactiques : 100")
    expect(wrapper.text()).toContain("Arme : Lame du Dragon")
    expect(wrapper.text()).toContain("Vie : 85%")
  })

  it("Version 2 : Affiche les props avec des matchers plus souples", () => {
    const wrapper = mount(CharacterStatus, {
      props: {
        name: "Gontran",
        experience: "Débutant",
        credits: 45,
        weapon: "Arc elfique",
        health: 33,
      },
    })

    expect(wrapper.text()).toMatch(/Gontran/)
    expect(wrapper.text()).toMatch(/Débutant/)
    expect(wrapper.text()).toMatch(/45/)
    expect(wrapper.text()).toMatch(/Arc elfique/)
    expect(wrapper.text()).toMatch(/33%/)
  })
})
