<script setup lang="ts">
import { ref } from "vue";
import { missionCourante, totalMissions } from "@/gameState";
</script>
<template>
  <div class="mission-en-cours">
    Mission en cours : {{ missionCourante }} / {{ totalMissions }}
  </div>
</template>

<style></style>
