import GameView from "@/views/GameView.vue"

import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"

describe("GameView", () => {
  it("can heal player", () => {
    const wrapper = mount(GameView, {
      props: {
        player: {
          name: "Noa",
          experience: "Maître",
          credits: 100,
          weapon: "Lame du Dragon",
          health: 85,
        },
      },
    })

    const healButton = wrapper.find("healBtn")
    healButton.trigger("click")
    healButton.trigger("click")
    healButton.trigger("click")

    expect(wrapper.vm.player.health).toBe(100)
  })
})
