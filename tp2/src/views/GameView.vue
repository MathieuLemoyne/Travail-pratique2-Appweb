<script setup lang="ts">
import MissionStatus from "@/components/MissionStatus.vue";
import EnemyStats from "@/components/EnemyStats.vue";
import { ref, onMounted } from "vue";
import data from "@/../backend/db.default.json";
import bootstrap from "bootstrap";
import CharacterStatus from "@/components/CharacterStatus.vue";
import type { Player } from "@/scripts/types";
import { useRoute } from "vue-router";

const showCharacterStats = ref(false);
const randomEnemy = ref();
const player = ref<Player | null>(null);

import { combatRound, getRandomDamagePercent } from "@/scripts/combatSystem";
onMounted(() => {
  const route = useRoute();
  player.value = route.state?.player || null;

  // random enemy
  const enemies = data.characters;
  const randomIndex = Math.floor(Math.random() * enemies.length);
  const enemy = enemies[randomIndex];

  randomEnemy.value = {
    name: enemy.name,
    experience:
      ["Débutant", "Intermédiaire", "Expert", "Maître"][enemy.experience - 1] ??
      "Débutant",
    credits: enemy.credit,
    shipName: enemy.weapon.name,
    health: enemy.vitality,
  };
});

function attackEnemy() {
  if (!randomEnemy.value) return;
  const result = combatRound(player.value, randomEnemy.value);
  player.value.health = result.playerHealth;
  randomEnemy.value.health = result.enemyHealth;
}

const revealEnemyStats = () => {
  showCharacterStats.value = !showCharacterStats.value;
};
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-6 mb-3">
        <div class="card">
          <div class="card-body">
            <MissionStatus />
            <div>
              <button class="btn btn-primary me-2" @click="attackEnemy">
                Attaquer
              </button>
              <button class="btn btn-secondary">Fuir</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 mb-3">
        <div class="card">
          <div class="card-body">
            <EnemyStats
              v-if="randomEnemy"
              :name="randomEnemy.name"
              :experience="randomEnemy.experience"
              :credits="randomEnemy.credits"
              :shipName="randomEnemy.shipName"
              :health="randomEnemy.health"
            />
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card">
          <div class="card-body">Barre de vie viens ici</div>
        </div>
      </div>
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <CharacterStatus />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
