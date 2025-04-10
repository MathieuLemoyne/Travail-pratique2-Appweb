<script setup lang="ts">
import MissionStatus from "@/components/MissionStatus.vue"
import EnemyStats from "@/components/EnemyStats.vue"
import { ref, onMounted } from "vue"
import data from "@/../backend/db.default.json"

const showCharacterStats = ref(false)
const randomEnemy = ref()

onMounted(() => {
  const enemies = data.characters
  const randomIndex = Math.floor(Math.random() * enemies.length)
  const enemy = enemies[randomIndex]

  randomEnemy.value = {
    name: enemy.name,
    experience:
      ["Débutant", "Intermédiaire", "Expert", "Maître"][enemy.experience - 1] ??
      "Débutant",
    credits: enemy.credit,
    shipName: enemy.weapon.name,
    health: enemy.vitality,
  }
})

const revealEnemyStats = () => {
  showCharacterStats.value = !showCharacterStats.value
}
</script>

<template>
  <MissionStatus />
  <h1>LE JEU EST COMMENCÉ RAHHHHH</h1>

  <button class="btn btn-warning" @click="revealEnemyStats">
    Afficher les stats de l'ennemi
  </button>

  <div v-if="showCharacterStats && randomEnemy">
    <EnemyStats
      :name="randomEnemy.name"
      :experience="randomEnemy.experience"
      :credits="randomEnemy.credits"
      :shipName="randomEnemy.shipName"
      :health="randomEnemy.health"
    />
  </div>
</template>
