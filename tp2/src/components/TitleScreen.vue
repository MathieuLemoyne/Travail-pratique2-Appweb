<script>
import "bootstrap/dist/css/bootstrap.min.css";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const startGame = () => alert("Game Started!");
    const showCredits = () => alert("Credits Page");
    const exitGame = () => alert("Exiting...");

    return { startGame, showCredits, exitGame };
  },
});
</script>

<template>
  <div class="container">
    <img src="./assets/background01.jpg" />
    <div class="centered">
      <h1 class="display-3 fw-bold">Goon's Adventure</h1>
      <button class="btn btn-primary" @click="startGame">START</button>
      <button class="btn btn-secondary" @click="showCredits">CREDITS</button>
      <button class="btn btn-danger" @click="exitGame">EXIT</button>
    </div>
  </div>
</template>
