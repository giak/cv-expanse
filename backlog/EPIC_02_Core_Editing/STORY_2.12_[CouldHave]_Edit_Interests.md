# STORY 2.12: [Could Have] Édition de la Section "Interests"

**En tant que** Utilisateur,
**Je veux** pouvoir ajouter, modifier et supprimer des centres d'intérêt dans la section "Interests" de mon CV,
**Afin de** partager des aspects plus personnels de mon profil.

---

## Critères d'Acceptation

1.  L'UI affiche une section pour gérer les centres d'intérêt (`interests`).
2.  Un bouton "Ajouter un centre d'intérêt" permet de créer une nouvelle entrée vide.
3.  Chaque centre d'intérêt affiché possède des champs éditables (ex: `name`, `keywords` - une liste de tags).
4.  Les modifications sont reflétées dans l'état (`resumeState.interests`).
5.  Un bouton "Supprimer" est disponible pour chaque centre d'intérêt.
6.  Les données sont sauvegardées et chargées correctement.

---

## Tâches Techniques

-   [X] **TASK 2.12.1 :** Définir `InterestInterface` dans `shared`.
-   [X] **TASK 2.12.2 :** Définir `InterestEntityInterface` dans `core` et l'ajouter à `ResumeEntityInterface`.
-   [X] **TASK 2.12.3 :** Initialiser `interests: []` dans `App.vue`.
-   [X] **TASK 2.12.4 :** Créer `InterestItemForm.vue` (textarea pour keywords).
-   [X] **TASK 2.12.5 :** Créer `InterestsSection.vue`.
-   [X] **TASK 2.12.6 :** Intégrer `InterestsSection.vue` dans `App.vue`.
-   [X] **TASK 2.12.7 :** Assurer sauvegarde/chargement.

---

## Notes
- La gestion des `keywords` comme liste nécessite une conversion depuis/vers une `textarea` multiligne. 