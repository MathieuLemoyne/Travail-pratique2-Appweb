<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import type { Weapon } from "@/scripts/types";
import data from "../../backend/db.default.json";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "@/components/NavBar.vue";

const router = useRouter();

const enteredCharacterName = ref<string>("");
const selectedWeapon = ref<string>("");

const weapons = ref<Weapon[]>([]);

onMounted(() => {
  weapons.value = data.weapons;
});

const startGame = () => {
  if (enteredCharacterName.value && selectedWeapon.value) {
    const weaponObj = weapons.value.find(
      (w) => w.name === selectedWeapon.value
    );

    if (!weaponObj) {
      alert("Arme non valide !");
      return;
    }

    router.push({
      name: "Game",
      query: {
        name: enteredCharacterName.value,
        weapon: selectedWeapon.value,
      },
    });
  } else {
    alert("Entre un nom et choisis une arme pour commencer !");
  }
};
</script>
<template>
  <NavBar />

  <div
    class="container py-5 d-flex justify-content-center align-items-center min-vh-100 bg-dark text-white"
  >
    <div
      class="card p-4 bg-secondary text-white w-100"
      style="max-width: 500px"
    >
      <h2 class="text-center mb-4">Prépare ton aventure</h2>

      <div class="mb-3">
        <label class="form-label">Nom du personnage :</label>
        <input
          type="text"
          class="form-control"
          v-model="enteredCharacterName"
          placeholder="Entre ton nom..."
        />
      </div>

      <div class="mb-4">
        <label class="form-label">Arme :</label>
        <select class="form-select" v-model="selectedWeapon">
          <option disabled value="">-- Choisir arme --</option>
          <option v-for="weapon in weapons" :key="weapon.id">
            {{ weapon.name }}
          </option>
        </select>
      </div>

      <button class="btn btn-success w-100" @click="startGame">
        Démarrer la partie
      </button>
    </div>
  </div>
</template>
