import { describe, it, expect, vi } from "vitest"
import { flushPromises, mount } from "@vue/test-utils"
import GameOptionsView from "@/views/GameOptionsView.vue"

describe("GameOptionsView.vue - États initiaux", () => {
  it("nom et arme sélectionnée sont vides par défaut", () => {
    const wrapper = mount(GameOptionsView)

    const nameInput = wrapper.find("input[type='text']")
    const weaponSelect = wrapper.find("select")

    expect((nameInput.element as HTMLInputElement).value).toBe("") // car sinon erreur
    expect(weaponSelect.element.value).toBe("")
  })

  it("le bouton pour démarrer la partie est affiché avec le bon texte", () => {
    const wrapper = mount(GameOptionsView)
    const button = wrapper.find("button")
    expect(button.exists()).toBe(true)
    expect(button.text()).toMatch(/Start/i)
  })

  it("affiche plus de 2 options dans le select d'armes", async () => {
    const wrapper = mount(GameOptionsView)

    await flushPromises() // AIDE DE CHATGPT: j'ai demandé comment faire pour que le test attende que les options soient chargées, cela attends que le select soit rempli avant de vérifier le nombre d'options

    const options = wrapper.findAll("select option")
    expect(options.length).toBeGreaterThan(2)
  })
})
