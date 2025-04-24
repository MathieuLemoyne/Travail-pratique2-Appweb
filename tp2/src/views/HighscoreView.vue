<script setup lang="ts">
import HighScoreTable from "@/components/HighScoreTable.vue";
import NavBar from "@/components/NavBar.vue";
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import data from "../../backend/db.default.json";
import type { Ranking } from "@/scripts/types";

const ranking = ref<Ranking[]>([]);

onMounted(() => {
  ranking.value = data.ranking;
});

const route = useRoute();
const router = useRouter();

const playerName = route.query.name as string;
const playerCredits = parseInt(route.query.credits as string, 10);

const deleteScore = () => {
  alert("Score deleted.");
};

const approveScore = () => {
  alert("Score added to leaderboard.");
};
</script>
<template>
  <NavBar />

  <HighScoreTable :winningPlayers="ranking" />

  <div v-if="playerName && playerCredits">
    <h3>Player: {{ playerName }}</h3>
    <p>Credits: {{ playerCredits }}</p>

    <div class="mt-3">
      <button class="btn btn-danger" @click="deleteScore">Delete Score</button>
      <button class="btn btn-success ml-2" @click="approveScore">
        Approve Score
      </button>
    </div>
  </div>
</template>
