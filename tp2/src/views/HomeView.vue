<script setup lang="ts">
import CharacterStatus from "@/components/CharacterStatus.vue";
import TitleScreen from "../components/TitleScreen.vue";
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
  </main>
</template>
