# STORY 2.5: [Must Have] Édition de la Section "Projects"

**En tant que** Utilisateur,
**Je veux** pouvoir ajouter, modifier et supprimer des projets dans la section "Projects" de mon CV,
**Afin de** pouvoir présenter mes réalisations personnelles ou professionnelles significatives.

---

## Critères d'Acceptation

1.  L'UI affiche une section pour gérer les projets (`projects`).
2.  Un bouton "Ajouter un projet" permet de créer une nouvelle entrée de projet vide.
3.  Chaque projet affiché possède des champs éditables pour ses propriétés (ex: `name`, `description`, `url`, `keywords`, `startDate`, `endDate`).
4.  Les modifications apportées aux champs d'un projet mettent à jour l'entrée correspondante dans l'état de l'application (`resumeState.projects`).
5.  Un bouton "Supprimer" est disponible pour chaque projet et permet de le retirer de la liste dans l'état.
6.  Le champ `keywords` (technologies/concepts utilisés) permet d'ajouter/modifier/supprimer une liste de chaînes de caractères.
7.  Les données mises à jour (ajout/modification/suppression de projets) sont sauvegardées via le mécanisme existant.
8.  Au chargement, les projets sauvegardés sont correctement affichés.

---

## Tâches Techniques

-   [X] **TASK 2.5.1 :** Définir les types TypeScript pour `ProjectInterface` dans le package `shared`.
-   [X] **TASK 2.5.2 :** Définir l'entité `ProjectEntityInterface` dans `core` et l'ajouter à `ResumeEntityInterface`. Mettre à jour l'état `resumeState` dans `App.vue`.
-   [X] **TASK 2.5.3 :** Créer un composant Vue `ProjectItemForm.vue` pour éditer un seul projet.
-   [X] **TASK 2.5.4 :** Créer un composant Vue `ProjectsSection.vue` pour gérer la liste des projets.
-   [X] **TASK 2.5.5 :** Implémenter les champs de saisie dans `ProjectItemForm.vue`.
-   [X] **TASK 2.5.6 :** Implémenter la gestion de la liste `keywords` dans `ProjectItemForm.vue` (ex: textarea).
-   [X] **TASK 2.5.7 :** Intégrer `ProjectsSection.vue` dans `App.vue`.
-   [X] **TASK 2.5.8 :** Assurer la sauvegarde et le chargement corrects du tableau `projects`.

---

## Notes

-   Structure très similaire aux sections précédentes (Work, Education).
-   `keywords` peut être géré via une textarea comme pour `highlights` et `courses`.
