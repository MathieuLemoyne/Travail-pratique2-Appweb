<script setup lang="ts">
import CharacterStatus from "@/components/CharacterStatus.vue"
import { ref, onMounted } from "vue"
import { Character, Weapon } from "@/scripts/types"
/*
Choisir name de perso dans une liste déroulante à partir du json de backend(folder)

Choisir ship(weapon) name dans le même

*/

const characters = ref<Character[]>([])
const weapons = ref<Weapon[]>([])

const selectedCharacter = ref<string>("")
const selectedWeapon = ref<string>("")

onMounted(async () => {
  const response = await fetch("/data.json")
  const data = await response.json()

  characters.value = data.characters
  weapons.value = data.weapons
})
</script>

<template>
  <div class=".game-options">
    <h2>Choisis ton personnage :</h2>
    <select v-model="selectedCharacter">
      <option disabled value="">-- Choisir personnage --</option>
      <option v-for="character in characters" :key="character.id">
        {{ character.name }}
      </option>
    </select>

    <h2>Choisis ton arme :</h2>
    <select v-model="selectedWeapon">
      <option disabled value="">-- Choisir arme --</option>
      <option v-for="weapon in weapons" :key="weapon.id">
        {{ weapon.name }}
      </option>
    </select>
  </div>
</template>
