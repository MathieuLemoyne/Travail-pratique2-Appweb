<script setup lang="ts">
const props = defineProps<{
  name: string
  experience: "Débutant" | "Intermédiaire" | "Expert" | "Maître"
  credits: number
  shipName: string
  health: number
}>()
</script>

<template>
  <div class="character-status card">
    <h2>Caractéristiques Personnage</h2>

    <ul>
      <li><strong>Nom :</strong> {{ props.name }}</li>
      <li><strong>Expérience :</strong> {{ props.experience }}</li>
      <li><strong>Crédits Galactiques :</strong> {{ props.credits }}</li>
      <li><strong>Vaisseau :</strong> {{ props.shipName }}</li>
      <li><strong>Vie :</strong> {{ props.health }}%</li>
    </ul>
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
