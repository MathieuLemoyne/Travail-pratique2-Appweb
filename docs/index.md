# Bienvenue à la documentation du projet

Ce projet est une application web développée dans le cadre du Travail Pratique 2. Il met en œuvre des concepts avancés de développement web, notamment l'utilisation de frameworks modernes et de bonnes pratiques de programmation.

## Liens vers les revues de code

- [Revue de code 1 Noa](./revue-1-Noa.md) :
- [Revue de code 2 Noa](./revue-2-Noa.md) :
- [Revue de code 2 Mat](./revue-2%20Mat.md) :
- [Revue de code 3 Mat](./revue-3%20Mat.md) :

## Documentation des routes

Le routeur de l'application est configuré pour gérer les différentes routes et vues. Voici les chemins définis dans le fichier `router` :

- `/` : Affiche la vue principale `HomeView`.
- `/about` : Charge dynamiquement la vue `AboutView` avec un code-splitting pour optimiser les performances.
- `/game-options` : Affiche la vue `GameOptionsView` pour configurer les options du jeu.
- `/game` : Charge la vue `GameView` pour démarrer une partie.
- `/highscore` : Charge dynamiquement la vue `HighscoreView` pour afficher les meilleurs scores.

Chaque route est associée à un composant Vue.js spécifique, permettant une navigation fluide et une gestion modulaire des vues. Le routeur utilise `createWebHistory` pour une navigation basée sur l'historique HTML5.
