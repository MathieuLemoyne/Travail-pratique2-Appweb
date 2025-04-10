<script setup lang="ts">
import { ref } from "vue";
import { missionCourante, totalMissions } from "../services/gameState.ts";
</script>
<template>
  <div class="mission-en-cours">
    Mission en cours : {{ missionCourante }} / {{ totalMissions }}
  </div>
</template>

<style></style>
