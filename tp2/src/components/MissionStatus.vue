<script setup lang="ts">
import { ref } from "vue";
import {
  missionCourante,
  totalMissions,
  credits,
} from "../services/gameState.ts";
</script>
<template>
  <div class="mission-en-cours">
    Mission en cours : {{ missionCourante }} / {{ totalMissions }}
    <br />
    Argent : {{ credits }}
  </div>
</template>

<style></style>
