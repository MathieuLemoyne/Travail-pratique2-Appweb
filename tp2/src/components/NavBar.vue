<script setup lang="ts">
import "bootstrap/dist/css/bootstrap.min.css"
import { useRouter, useRoute } from "vue-router"

import { ref, watch } from "vue"
const router = useRouter()
const route = useRoute()

// Définir les fonctions qui gèrent les actions des boutons
const startGame = () => router.push({ name: "GameOptions" })
const highScore = () => router.push({ name: "Highscore" })
const homePage = () => router.push({ name: "home" })
const isInGame = ref(route.name === "Game")

//utilisation de watch pour surveiller le changement de route
watch(
  () => route.name,
  (newRouteName) => {
    isInGame.value = newRouteName === "Game"
  },
  { immediate: true }
)
</script>

<template>
  <div class="container-fluid position-relative">
    <!-- Background image -->
    <img
      src="../assets/background02.jpg"
      class="img-fluid position-absolute top-0 start-0 w-100"
      alt="background"
    />

    <!-- Centered content -->
    <div class="centered position-relative z-index-10 text-center text-white">
      <h1 class="display-3 fw-bold">Boon's Adventure</h1>
      <button class="btn btn-primary mb-3" @click="startGame">START</button>
      <button class="btn btn-secondary mb-3" @click="homePage">Home</button>

      <button class="btn btn-danger mb-3" @click="highScore">High-Score</button>
      <button class="btn btn-danger mb-3" v-if="isInGame" @click="homePage">
        Exit
      </button>
    </div>
  </div>
</template>

<style scoped>
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
