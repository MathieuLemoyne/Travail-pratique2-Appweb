<script setup lang="ts">
import EnemyStats from "@/components/EnemyStats.vue";
import { ref, onMounted } from "vue";
import data from "@/../backend/db.default.json";
import "bootstrap/dist/css/bootstrap.min.css";
import CharacterStatus from "@/components/CharacterStatus.vue";
import { useRoute } from "vue-router";
import type { Character } from "@/scripts/types";
import { useRouter } from "vue-router";
import NavBar from "@/components/NavBar.vue";

const router = useRouter();
const randomEnemy = ref<Character | null>(null);
const player = ref<Character | null>(null);
const gameOverWin = ref(false);
const gameOverDead = ref(false);

const missionCourante = ref(1);
const totalMissions = 5;

const HEALING_AMOUNT = 5;
const healErrorMessage = ref("");

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

  const enemy = getRandomEnemy();

  randomEnemy.value = {
    id: enemy.id,
    name: enemy.name,
    experience: enemy.experience,
    score: enemy.score,
    weapon: enemy.weapon,
    vitality: enemy.vitality,
  };

  player.value = {
    id: 999, // générer uuid
    name: playerName,
    experience: 4, // débutant
    score: 100,
    weapon: weaponObj,
    vitality: 100,
  };
});
function getRandomEnemy() {
  const enemies = data.characters;
  const randomIndex = Math.floor(Math.random() * enemies.length);
  return enemies[randomIndex];
}

function attackEnemy() {
  if (!randomEnemy.value || !player.value) return;
  if (
    randomEnemy.value.vitality <= 0 ||
    gameOverWin.value ||
    gameOverDead.value
  )
    return;

  const result = combatRound(
    {
      experience: ["Débutant", "Intermédiaire", "Expert", "Maître"][
        player.value.experience - 1
      ],
      health: player.value.vitality,
      score: player.value.score,
    },
    {
      experience: ["Débutant", "Intermédiaire", "Expert", "Maître"][
        randomEnemy.value.experience - 1
      ],
      health: randomEnemy.value.vitality,
      score: randomEnemy.value.score,
    }
  );

  player.value.vitality = result.playerHealth;
  randomEnemy.value.vitality = result.enemyHealth;

  if (!result.enemyAlive) {
    player.value.score += result.scoreWon;
    missionCourante.value++;

    if (missionCourante.value > totalMissions) {
      alert("Vous avez gagné !");
      pushHighscore();
    } else {
      randomEnemy.value = getRandomEnemy();
    }
  }
  if (!result.playerAlive) {
    alert("Vous avez perdu !");
    pushHighscore();
  }
}
function pushHighscore() {
  if (player.value) {
    router.push({
      name: "Highscore",
      query: {
        name: player.value.name,
        score: player.value.score.toString(),
      },
    });
  }
}
function healPlayer() {
  //coute 5 CG
  if (player.value) {
    if (player.value?.score - 5 >= 0) {
      player.value.score -= 5;
      player.value.vitality += HEALING_AMOUNT;
      healErrorMessage.value = "";
    } else {
      //TODO, AFFICHER UN MESSAGE QU'ON N'A PAS PU HEAL LE JOUEUR
      healErrorMessage.value =
        "Pas assez de crédits galactiques pour se soigner.";
    }
  }
}
</script>

<template>
  <NavBar />

  <div class="container mt-5">
    <div class="row">
      <div class="col-6 mb-3">
        <div class="card">
          <div class="card-body">
            <div>
              <button class="btn btn-primary me-2" @click="attackEnemy">
                Attaquer
              </button>
              <button
                class="btn btn-secondary me-2"
                @click="randomEnemy = getRandomEnemy()"
              >
                Fuir
              </button>

              <button class="btn btn-success me-2" @click="healPlayer">
                Se Soigner (+{{ HEALING_AMOUNT }}%) pour 5 CG
              </button>
              <p v-if="healErrorMessage" class="text-danger mt-2">
                {{ healErrorMessage }}
              </p>
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
              :score="randomEnemy.score"
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
            :score="player?.score"
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
              :score="player.score"
              :weapon="player.weapon.name"
              :health="player.vitality"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
