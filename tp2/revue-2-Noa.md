# Changements apportés — Semaine 2

**Nom** : Noa Pelletier
**Projet** : appweb-trpr02

---

## Nouvelles fonctionnalités ajoutées

### 1. Passage d’information entre les vues via vue-router

- Le nom du joueur (name) et l’arme choisie (weapon) sont maintenant transmis de GameOptionsView.vue à GameView.vue à l’aide des 'query'

### 2. Ajout d’un bouton pour **soigner le joueur**

- Un nouveau bouton “Soigner” a été ajouté dans GameView.vue.
- Lorsqu’il est cliqué :
  - Le joueur récupère 5% de vitalité.
  - Cela coûte 5 crédits galactiques.
  - Si le joueur n’a pas assez de crédits, il ne peut pas se soigner.

---

## Points à implémenter

- Les Tests unitaires
- Le système de crédits
- Routes (showCredits et exitGame)
- Restructurer les dossiers pour le markdown

## Respect des récits utilisateurs (semaine 1)

| Récit   | Respecté | Remarques                                         |
| ------- | -------- | ------------------------------------------------- |
| #1 à #4 | Oui      | Interface et navigation fonctionnent correctement |
| #9,15   | Oui      | Combat et guérison fonctionelle                   |
| #11,12  | Oui      | Enchainement des enemis fonctionnel               |
| #10     | Partiel  |                                                   |

## Conclusion

Le projet est bien engagé, avec une interface déjà fonctionnelle et plusieurs récits utilisateurs couverts au-delà des attentes de la première semaine. L’absence du fichier combatSystem.ts (pas le droit de faire des stores) n’a pas nui à la clarté du code, la logique ayant été bien réintégrée ailleurs. Les prochaines étapes devraient se concentrer sur les tests, les routes manquantes, et la finition du système de crédits. Beau travail malgré la lourde charge de cours actuelle !
