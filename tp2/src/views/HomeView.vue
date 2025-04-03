<script setup lang="ts">
import CharacterStatus from "@/components/CharacterStatus.vue";
import TitleScreen from "../components/TitleScreen.vue";
import HighScoreTable from "@/components/HighScoreTable.vue";
</script>

<template>
  <main>
    <TitleScreen />
    <!--- <TheWelcome /> -->

    <CharacterStatus
      name="Noa"
      experience="Maître"
      :credits="0"
      shipName="riendutout"
      :health="100"
    />
    <HighScoreTable
      :winningPlayers="[
        { name: 'Player 1', credits: 5000 },
        { name: 'Player 2', credits: 3000 },
        { name: 'Player 3', credits: 7000 },
      ]"
    />
  </main>
</template>
