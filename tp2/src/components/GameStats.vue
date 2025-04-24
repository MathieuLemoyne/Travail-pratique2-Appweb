<script setup lang="ts">
defineProps<{
  missionCourante: number;
  totalMissions: number;
  credits?: number;
}>();
</script>

<template>
  <div class="card-body">
    Barre de vie viens ici
    <div class="mission-en-cours">
      Mission en cours : {{ missionCourante }} / {{ totalMissions }}
      <br />
      Argent : {{ credits }}
    </div>
  </div>
</template>
<style></style>
