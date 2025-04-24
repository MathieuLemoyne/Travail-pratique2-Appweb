# Revue de code — Semaine 1

Nom : Noa Pelletier  
Date : 13 avril 2025  
Projet : appweb-trpr02

## Structure générale

Le projet est bien structuré. Les dossiers sont clairs : `components` pour les composants Vue, `views` pour les pages principales, `scripts` pour la logique métier (comme le combat), et `router` pour la configuration de navigation.

L'utilisation de `ref`, `onMounted`, `defineComponent` et du router Vue est correcte.

## Fonctionnalités présentes

- La page d’accueil (`TitleScreen.vue`) permet de démarrer le jeu avec des boutons fonctionnels.
- La page de préparation (`GameOptionsView.vue`) permet à l’utilisateur d’entrer son nom et de choisir une arme. L’interface est propre et utilise Bootstrap.
- Les données sont bien récupérées à partir du fichier JSON (`db.default.json`), et utilisées dans les composants pour générer dynamiquement les armes.
- Un ennemi est généré aléatoirement au début de la mission (récit #9), et le bouton “Afficher les stats” affiche ses informations.
- Le numéro de mission est affiché au haut de la page lorsqu'une partie est en cours
- Le fichier `combatSystem.ts` contient une fonction `combatRound()` qui implémente le système de combat en respectant les probabilités selon l’expérience du joueur et de l’ennemi.

## Points positifs

- La logique de combat est bien isolée dans un fichier à part, ce qui la rend claire et réutilisable.
- Les props des composants sont bien typées en TypeScript (`CharacterStatus`, `EnemyStats`).
- L’interface est simple, mais fonctionnelle et facile à comprendre pour un utilisateur.
- L’expérience influe correctement sur les probabilités de toucher.
- Le visuel est présent malgré qu'il ne soit pas complet

## Points à implémenter

- Les Tests unitaires
- Le système de crédits
- Routes (showCredits et exitGame)
- Restructurer les dossiers pour le markdown

## Respect des récits utilisateurs (semaine 1)

| Récit   | Respecté      | Remarques                                            |
| ------- | ------------- | ---------------------------------------------------- |
| #1 à #4 | Oui           | Interface et navigation fonctionnent correctement    |
| #9      | Partiellement | Nous Travaillons sur le système de combat activement |

## Conclusion

Le projet est bien avancé. Nous sommes rendu au récit 9+ et cela avance bien malgré la charge de travail des autres cours assez pesante.
