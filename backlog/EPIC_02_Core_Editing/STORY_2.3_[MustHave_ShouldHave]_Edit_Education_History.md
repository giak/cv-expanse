# STORY 2.3: [Must Have/Should Have] Édition de la Section "Education History"

**En tant que** Utilisateur,
**Je veux** pouvoir ajouter, modifier et supprimer des entrées de formation dans la section "Education" de mon CV,
**Afin de** pouvoir détailler mon parcours académique.

---

## Critères d'Acceptation

1.  L'UI affiche une section pour gérer l'historique de formation (`education`).
2.  Un bouton "Ajouter une formation" permet de créer une nouvelle entrée de formation vide.
3.  Chaque entrée de formation affichée possède des champs éditables pour ses propriétés (ex: `institution`, `area`, `studyType`, `startDate`, `endDate`, `score`, `courses`).
4.  Les modifications apportées aux champs d'une formation mettent à jour l'entrée correspondante dans l'état de l'application (`resumeState.education`).
5.  Un bouton "Supprimer" est disponible pour chaque formation et permet de la retirer de la liste dans l'état.
6.  Les dates (`startDate`, `endDate`) peuvent être saisies (format texte simple).
7.  Le champ `courses` (cours suivis) permet d'ajouter/modifier/supprimer une liste de chaînes de caractères.
8.  Les données mises à jour (ajout/modification/suppression de formations) sont sauvegardées via le mécanisme existant lorsque l'utilisateur clique sur le bouton "Sauvegarder" global.
9.  Au chargement, les formations sauvegardées sont correctement affichées.

---

## Tâches Techniques

-   [X] **TASK 2.3.1 :** Définir les types TypeScript pour `EducationInterface` dans le package `shared` (incluant `institution`, `area`, `studyType`, `startDate`, `endDate`, `score`, `courses`).
-   [X] **TASK 2.3.2 :** Définir l'entité `EducationEntityInterface` dans `core` et l'ajouter à `ResumeEntityInterface`. Mettre à jour l'initialisation de l'état `resumeState` dans `App.vue` pour inclure `education: []`.
-   [X] **TASK 2.3.3 :** Créer un composant Vue `EducationItemForm.vue` pour afficher et éditer *une seule* entrée de formation. Il recevra une formation via `v-model`.
-   [X] **TASK 2.3.4 :** Créer un composant Vue `EducationSection.vue` qui gère la liste des formations (similaire à `WorkSection.vue`), affichant un `EducationItemForm.vue` pour chaque entrée et permettant l'ajout/suppression.
-   [X] **TASK 2.3.5 :** Implémenter les champs de saisie dans `EducationItemForm.vue`.
-   [X] **TASK 2.3.6 :** Implémenter une logique simple pour gérer la liste `courses` dans `EducationItemForm.vue` (ex: textarea où chaque ligne est un cours).
-   [X] **TASK 2.3.7 :** Intégrer le composant `EducationSection.vue` dans `App.vue`.
-   [X] **TASK 2.3.8 :** Assurer que la sauvegarde globale via `saveResume` dans `App.vue` inclut bien le tableau `education` mis à jour.
-   [X] **TASK 2.3.9 :** Assurer que le chargement initial dans `App.vue` gère correctement le tableau `education`.

---

## Notes

-   La structure est très similaire à celle de `Work Experience`. On peut réutiliser les patterns établis.
-   La gestion des `courses` peut être simplifiée (textarea) pour l'instant.
