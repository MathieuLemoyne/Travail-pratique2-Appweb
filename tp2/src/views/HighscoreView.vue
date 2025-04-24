<script setup lang="ts">
import HighScoreTable from "@/components/HighScoreTable.vue";
</script>
<template>
  <HighScoreTable
    :winningPlayers="[
      { name: 'Player 1', credits: 5000 },
      { name: 'Player 2', credits: 3000 },
      { name: 'Player 3', credits: 7000 },
    ]"
  />
</template>
