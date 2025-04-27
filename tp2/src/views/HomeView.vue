<script setup lang="ts">
import NavBar from "../components/NavBar.vue"
</script>

<template>
  <main>
    <NavBar />

    <section class="container mt-5 text-center">
      <h2 class="fw-bold">Bienvenue dans l'aventure de Boon</h2>
      <p class="lead">
        Plongez dans l'univers fascinant de *Boon's Adventure*, un jeu de rôle
        où chaque décision compte. Partez à l'exploration de donjons mystérieux,
        affrontez des créatures redoutables et collectez des trésors tout au
        long de votre quête. Le destin de votre personnage est entre vos mains :
        saurez-vous surmonter les épreuves qui se dressent sur votre chemin ?
        Que vous soyez un novice ou un vétéran, l'aventure vous attend avec des
        combats tactiques et des choix stratégiques. Préparez-vous à vivre une
        expérience palpitante dans un monde richement détaillé et rempli de
        surprises. Allez-vous en sortir vainqueur ?
      </p>
    </section>
  </main>
</template>
<style scoped>
h2 {
  color: white;
  text-align: center;
  margin-top: 20px;
}
p {
  color: white;
  text-align: justify;
  margin: 0 auto;
  max-width: 800px; /* Limite la largeur du texte pour une meilleure lisibilité */
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10; /* Ajout du z-index pour garantir que le texte soit au-dessus de l'image */
}

.container {
  position: relative; /* Assure que le texte est positionné par rapport à l'image */
  z-index: 1; /* Assure que la section avec le texte est également devant */
  background-color: rgba(0, 0, 0, 0.6); /* Fond semi-transparent noir */
  padding: 20px; /* Espacement autour du texte */
  border-radius: 10px; /* Coins arrondis pour le fond */
}
</style>
