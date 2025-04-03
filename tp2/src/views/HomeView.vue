<script setup lang="ts">
import CharacterStatus from "@/components/CharacterStatus.vue"
</script>

<template>
  <main>
    <CharacterStatus
      name="Noa"
      experience="Maître"
      :credits="0"
      shipName="riendutout"
      :health="100"
    />
  </main>
</template>
