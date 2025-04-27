<script setup lang="ts">
import HighScoreTable from "@/components/HighScoreTable.vue";
import NavBar from "@/components/NavBar.vue";
import data from "../../backend/db.default.json";
import { ref, onMounted } from "vue";
import type { Ranking } from "@/scripts/types";
import { useRoute } from "vue-router";

const route = useRoute();
const ranking = ref<Ranking[]>([]);
const playerName = ref("");
const playerScore = ref("");

onMounted(() => {
  playerName.value = route.params.name as string;
  playerScore.value = route.params.score as string;
  ranking.value = data.ranking;
});

const deleteScore = () => {
  alert("Score deleted.");
};

const approveScore = () => {
  alert("Score added to leaderboard.");
};

console.log(playerName, playerScore);
</script>

<template>
  <NavBar />
  <HighScoreTable :winningPlayers="ranking" />

  <div v-if="playerName && playerScore">
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
