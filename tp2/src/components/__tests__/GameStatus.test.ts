import { describe, it, expect, vi } from "vitest"
import { mount } from "@vue/test-utils"
import GameView from "@/views/GameView.vue"

vi.mock("vue-router", () => ({
  useRoute: () => ({
    query: {
      name: "Noa",
      weapon: "Lame du Dragon",
    },
  }),
}))

describe("GameView", () => {
  it("soigne le joueur lorsque le bouton est cliqué", async () => {
    const wrapper = mount(GameView)

    if (wrapper.vm.player) {
      wrapper.vm.player.credit = 100
      wrapper.vm.player.vitality = 80

      await wrapper.find(".healBtn").trigger("click")

      expect(wrapper.vm.player.vitality).toBe(85)
      expect(wrapper.vm.player.credit).toBe(95)
    }
  })
})
