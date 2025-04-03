<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  winningPlayers: Array<{
    name: string;
    credits: number;
  }>;
}>();

const sortedPlayers = computed(() => {
  return props.winningPlayers.sort((a, b) => b.credits - a.credits);
});
</script>

<template>
  <div class="winning-players">
    <h2>Liste des Joueurs Gagnants</h2>

    <div
      v-for="(player, index) in sortedPlayers"
      :key="index"
      class="player-card card"
    >
      <ul>
        <li><strong>Nom :</strong> {{ player.name }}</li>
        <li><strong>Crédits Galactiques :</strong> {{ player.credits }}</li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.card {
  padding: 1rem;
  border-radius: 8px;
  background-color: #1e293b;
  color: white;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

h2 {
  margin-bottom: 1rem;
  font-size: 1.25rem;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 0.5rem;
}
</style>
