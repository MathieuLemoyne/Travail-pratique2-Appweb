<script setup lang="ts">
defineProps<{
  missionCourante: number;
  totalMissions: number;
  score?: number;
}>();
</script>

<template>
  <div class="card-body">
    Barre de vie viens ici
    <div class="mission-en-cours">
      Mission en cours : {{ missionCourante }} / {{ totalMissions }}
      <br />
      Score : {{ score }}
    </div>
  </div>
</template>
<style></style>
