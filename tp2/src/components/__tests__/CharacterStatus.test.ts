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

    expect(wrapper.text()).toMatch(/Nom\s?:\s?Noa/)
    expect(wrapper.text()).toMatch(/Expérience\s?:\s?Maître/)
    expect(wrapper.text()).toMatch(/Crédits\s?Galactiques\s?:\s?100/)
    expect(wrapper.text()).toMatch(/Vaisseau\s?:\s?Lame du Dragon/)
    expect(wrapper.text()).toMatch(/Vie\s?:\s?85%/)
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
