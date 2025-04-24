import { describe, it, expect, vi } from "vitest"
import { mount } from "@vue/test-utils"
import GameView from "@/views/GameView.vue"

//Aide de chatgpt pour comprendre le fonctionnement des mocks dans les tests unitaires
// On mock `useRouter` pour empêcher une navigation réelle pendant les tests
// Cela permet de tester les comportements sans déclencher de redirection
vi.mock("vue-router", () => ({
  useRoute: () => ({
    query: {
      name: "Noa",
      weapon: "Lame du Dragon",
    },
  }),
  useRouter: () => ({
    push: vi.fn(), //desc: créé un spy sur une fonction pour vérifier si elle a été appelée
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

  it("ne soigne pas le joueur au-delà de 100% de vitalité", async () => {
    const wrapper = mount(GameView)

    if (wrapper.vm.player) {
      wrapper.vm.player.credit = 100
      wrapper.vm.player.vitality = 99

      await wrapper.find(".healBtn").trigger("click")

      expect(wrapper.vm.player.vitality).toBe(100)
      expect(wrapper.vm.player.credit).toBe(95) // Il a payé quand même
    }
  })
  it("ne soigne pas et ne retire pas de crédits si le joueur est à 100% de vitalité", async () => {
    const wrapper = mount(GameView)

    if (wrapper.vm.player) {
      wrapper.vm.player.credit = 100
      wrapper.vm.player.vitality = 100

      await wrapper.find(".healBtn").trigger("click")

      expect(wrapper.vm.player.vitality).toBe(100)
      expect(wrapper.vm.player.credit).toBe(100)
    }
  })
})
