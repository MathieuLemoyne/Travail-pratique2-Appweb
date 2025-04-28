# Revue de code — Semaine 1

Nom : Mathieu Lemoyne  
Date : 20 avril 2025  
Projet : appweb-trpr02

## Structure générale

- Components : composants Vue réutilisables (UI, statuts, interactions)

- views : pages principales (TitleScreen.vue, GameOptionsView.vue, etc.)

- scripts : logique métier, incluant le système de combat et de progression

- router : configuration des routes Vue Router

- data : données statiques (db.default.json) utilisées pour initialiser les états

## Fonctionnalités présentes

- Page d’accueil (TitleScreen.vue) avec des boutons fonctionnels pour démarrer ou quitter le jeu.

- Page de préparation (GameOptionsView.vue) avec saisie du nom du joueur et choix d’arme, interface propre avec Bootstrap.

- Chargement dynamique des armes à partir du fichier JSON.

- Génération aléatoire d’un ennemi au début de la mission (récit #9).

- Affichage des statistiques de l’ennemi.

- Affichage du numéro de mission lorsque le jeu est actif.

- Système de combat intégré directement dans les fichiers Vue concernés, utilisant une logique de probabilité selon l’expérience du joueur et de l’ennemi.

- Visuel de base présent, bien que les assets finaux ne soient pas encore intégrés.

## Points positifs

- Utilisation efficace de TypeScript pour typer les props (CharacterStatus, EnemyStats, etc.).

- Composants modulaires, simples à lire et à maintenir.

- Probabilités de touche influencées de manière cohérente par l’expérience.

- Interface intuitive et facilement navigable, même sans beaucoup de visuels.

Points positifs

## Points à implémenter

- Voir pour l'implémentation de L'exp
- Récit 12 et 13 sont préparés mais pas implémentés encore.
- Récit 14 et vrai palmarès des High scores
- Esthétique et polissage de fin

## Respect des récits utilisateurs (semaine 1)

| Récit   | Respecté | Remarques                                         |
| ------- | -------- | ------------------------------------------------- |
| #1 à #4 | Oui      | Interface et navigation fonctionnent correctement |
| #9,15   | Oui      | Combat et guérison fonctionelle                   |
| #11,12  | Oui      | Enchainement des enemis fonctionnel               |
| #10     | Partiel  | Les crédits se gagnent mais pas l'exp             |

## Conclusion

Le projet est bien engagé, avec une interface déjà fonctionnelle et plusieurs récits utilisateurs couverts au-delà des attentes de la première semaine. L’absence du fichier combatSystem.ts (pas le droit de faire des stores) n’a pas nui à la clarté du code, la logique ayant été bien réintégrée ailleurs. Les prochaines étapes devraient se concentrer sur les tests, les routes manquantes, et la finition du système de crédits. Beau travail malgré la lourde charge de cours actuelle !
