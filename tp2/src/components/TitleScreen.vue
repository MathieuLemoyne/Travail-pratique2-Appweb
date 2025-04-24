<script>
import "bootstrap/dist/css/bootstrap.min.css";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();

    const startGame = () => router.push({ name: "GameOptions" });
    const showCredits = () => alert("Credits Page");
    const highScore = () => router.push({ name: "Highscore" });
    const exitGame = () => alert("Exiting...");

    return { startGame, showCredits, exitGame };
  },
});
</script>

<template>
  <div class="container-fluid position-relative">
    <!-- Background image -->
    <img
      src="../assets/background01.jpg"
      class="img-fluid position-absolute top-0 start-0 w-100"
      alt="background"
    />

    <!-- Centered content -->
    <div class="centered position-relative z-index-10 text-center text-white">
      <h1 class="display-3 fw-bold">Goon's Adventure</h1>
      <button class="btn btn-primary mb-3" @click="startGame">START</button>
      <button class="btn btn-secondary mb-3" @click="showCredits">
        CREDITS
      </button>
      <button class="btn btn-danger mb-3" @click="highScore">High-Score</button>
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
