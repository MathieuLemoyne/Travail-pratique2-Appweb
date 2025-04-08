import axios from "axios"
import type { Character, Weapon } from "../scripts/types"

const API_URL = "http://127.0.0.1:3000"

async function getCharacters() {
  const { data } = await axios.get("${API_URL}/characters")
  return data
}

async function getWeapons() {
  const { data } = await axios.get("${API_URL}/weapons")
  return data
}
