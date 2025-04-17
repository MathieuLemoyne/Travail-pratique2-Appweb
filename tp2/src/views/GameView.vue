<script setup lang="ts">
import EnemyStats from "@/components/EnemyStats.vue";
import { ref, onMounted } from "vue";
import data from "@/../backend/db.default.json";
import "bootstrap/dist/css/bootstrap.min.css";
import CharacterStatus from "@/components/CharacterStatus.vue";
import { useRoute } from "vue-router";
import type { Character } from "@/scripts/types";
const showCharacterStats = ref(false);
const randomEnemy = ref<Character | null>(null);
const player = ref<Character | null>(null);

const missionCourante = ref(1);
const totalMissions = 5;

import { combatRound, getRandomDamagePercent } from "@/scripts/combatSystem";
import GameStats from "@/components/GameStats.vue";
onMounted(() => {
  const route = useRoute();
  const playerName = route.query.name as string;
  const weaponName = route.query.weapon as string;

  const weaponObj = data.weapons.find((w) => w.name === weaponName);

  if (!weaponObj) {
    console.error("Arme non trouvée :", weaponName);
    return;
  }
  if (!playerName || !weaponName) {
    console.error("Nom ou arme manquante.");
    return;
  }
  //faire erreur quand impossible d'aller chercher le joueur ou l'arme

  // random enemy
  const enemies = data.characters;
  const randomIndex = Math.floor(Math.random() * enemies.length);
  const enemy = enemies[randomIndex];

  randomEnemy.value = {
    id: enemy.id,
    name: enemy.name,
    experience: enemy.experience,
    credit: enemy.credit,
    weapon: enemy.weapon,
    vitality: enemy.vitality,
  };

  player.value = {
    id: 999, // générer uuid
    name: playerName,
    experience: 1, // débutant
    credit: 100,
    weapon: weaponObj,
    vitality: 100,
  };
});

function attackEnemy() {
  if (!randomEnemy.value || !player.value) return;
  if (randomEnemy.value.vitality <= 0) return; // déjà mort

  const result = combatRound(
    {
      experience: ["Débutant", "Intermédiaire", "Expert", "Maître"][
        player.value.experience - 1
      ],
      health: player.value.vitality,
      credits: player.value.credit,
    },
    {
      experience: ["Débutant", "Intermédiaire", "Expert", "Maître"][
        randomEnemy.value.experience - 1
      ],
      health: randomEnemy.value.vitality,
      credits: randomEnemy.value.credit,
    }
  );

  // Mettre à jour les stats
  player.value.vitality = result.playerHealth;
  randomEnemy.value.vitality = result.enemyHealth;

  if (!result.enemyAlive) {
    player.value.credit += result.creditsWon;
    //  missionTerminee.value = true; // 🎯 récit #11
  }

  if (!result.playerAlive) {
    alert("Tu es mort !");
    //   gameOver.value = true; // ☠️ récit #13
  }
}
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-6 mb-3">
        <div class="card">
          <div class="card-body">
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
              :experience="
                ['Débutant', 'Intermédiaire', 'Expert', 'Maître'][
                  randomEnemy.experience - 1
                ]
              "
              :credits="randomEnemy.credit"
              :weapon="randomEnemy.weapon.name"
              :health="randomEnemy.vitality"
            />
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card">
          <GameStats
            :missionCourante="missionCourante"
            :totalMissions="totalMissions"
            :credits="player?.credit"
          />
        </div>
      </div>
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <CharacterStatus
              v-if="player"
              :name="player.name"
              :experience="
                ['Débutant', 'Intermédiaire', 'Expert', 'Maître'][
                  player.experience - 1
                ]
              "
              :credits="player.credit"
              :weapon="player.weapon.name"
              :health="player.vitality"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
