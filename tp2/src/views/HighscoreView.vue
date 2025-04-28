<script setup lang="ts">
import HighScoreTable from "@/components/HighScoreTable.vue";
import NavBar from "@/components/NavBar.vue";
import data from "../../backend/db.default.json";
import { ref } from "vue";
import type { Ranking } from "@/scripts/types";
import { useRoute } from "vue-router";

const route = useRoute();
const ranking = ref<Ranking[]>(data.ranking);
const playerName = ref((route.query.name as string) || "");
const playerScore = ref((route.query.score as string) || "");

const deleteScore = () => {
  playerName.value = "";
  playerScore.value = "";
};

const approveScore = () => {
  ranking.value.push({
    name: playerName.value,
    score: parseInt(playerScore.value),
    id: Date.now(),
  });
  ranking.value.sort((a, b) => b.score - a.score);
  playerName.value = "";
  playerScore.value = "";
};

console.log(playerName.value, playerScore.value);
</script>

<template>
  <NavBar />
  <HighScoreTable :winningPlayers="ranking" />

  <div
    v-if="playerName && playerScore"
    style="
      background: yellow;
      padding: 20px;
      position: relative;
      z-index: 1000;
      margin-top: 60px;
    "
  >
    <h3>Player: {{ playerName }}</h3>
    <p>Score: {{ playerScore }}</p>

    <div class="mt-3">
      <button class="btn btn-danger" @click="deleteScore">Delete Score</button>
      <button class="btn btn-success ml-2" @click="approveScore">
        Approve Score
      </button>
    </div>
  </div>
</template>
