import { ref } from "vue";

export const missionCourante = ref(1);
export const totalMissions = 5;

export function incrementerMission() {
  if (missionCourante.value < totalMissions) {
    missionCourante.value++;
  }
}

export function resetMission() {
  missionCourante.value = 1;
}
