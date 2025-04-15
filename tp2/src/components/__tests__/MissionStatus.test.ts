import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import MissionStatus from "@/components/MissionStatus.vue"
import { missionCourante, totalMissions } from "@/services/gameState"

//J'utilise le nombre 5 seulement parceque on peut pas le modifier donc hardcodé
describe("MissionStatus.vue", () => {
  it("affiche la mission en cours avec la constante totalMissions = 5", () => {
    missionCourante.value = 2
    const wrapper = mount(MissionStatus)
    expect(wrapper.text()).toContain("Mission en cours : 2 / 5")
  })
})
