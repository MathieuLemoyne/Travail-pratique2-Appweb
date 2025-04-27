import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import GameOptionsView from "@/views/GameOptionsView.vue"
import GameView from "@/views/GameView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/game-options",
      name: "GameOptions",
      component: GameOptionsView,
    },
    {
      path: "/game",
      name: "Game",
      component: GameView,
    },
    {
      path: "/highscore",
      name: "Highscore",
      component: () => import("@/views/HighscoreView.vue"),
    },
  ],
})

export default router
