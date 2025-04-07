# STORY 2.4: [Must Have] Édition de la Section "Skills"

**En tant que** Utilisateur,
**Je veux** pouvoir ajouter, modifier et supprimer des catégories de compétences ainsi que les compétences (mots-clés) associées dans la section "Skills" de mon CV,
**Afin de** pouvoir lister mes compétences techniques et linguistiques.

---

## Critères d'Acceptation

1.  L'UI affiche une section pour gérer les compétences (`skills`), organisées par catégories.
2.  Un bouton "Ajouter une catégorie" permet de créer une nouvelle catégorie de compétences vide.
3.  Chaque catégorie affichée possède un champ éditable pour son nom (ex: "Langages", "Frameworks Web").
4.  Sous chaque catégorie, un champ ou une liste permet d'ajouter/modifier/supprimer des compétences individuelles (mots-clés) associées à cette catégorie (ex: "JavaScript", "Python", "Vue.js").
5.  (Optionnel, peut être une story suivante) Chaque compétence peut avoir un niveau associé (ex: "Avancé", "Intermédiaire").
6.  Un bouton "Supprimer" est disponible pour chaque catégorie et permet de la retirer de la liste.
7.  Les modifications (ajout/modif/suppression de catégories et de compétences) sont reflétées dans l'état de l'application (`resumeState.skills`).
8.  Les données mises à jour sont sauvegardées via le mécanisme existant.
9.  Au chargement, les compétences sauvegardées sont correctement affichées.

---

## Tâches Techniques

-   [X] **TASK 2.4.1 :** Définir les types TypeScript pour `SkillInterface` (représentant une catégorie de compétences avec son nom et une liste de mots-clés) dans le package `shared`.
-   [X] **TASK 2.4.2 :** Définir l'entité `SkillEntityInterface` dans `core` et l'ajouter à `ResumeEntityInterface`. Mettre à jour l'initialisation de l'état `resumeState` dans `App.vue` pour inclure `skills: []`.
-   [X] **TASK 2.4.3 :** Créer un composant Vue `SkillCategoryForm.vue` pour afficher et éditer *une seule* catégorie de compétences (nom et liste de mots-clés). Il recevra une catégorie via `v-model`.
-   [X] **TASK 2.4.4 :** Créer un composant Vue `SkillsSection.vue` qui gère la liste des catégories de compétences, affichant un `SkillCategoryForm.vue` pour chaque entrée et permettant l'ajout/suppression de catégories.
-   [X] **TASK 2.4.5 :** Implémenter les champs de saisie dans `SkillCategoryForm.vue` (un input pour le nom de la catégorie).
-   [X] **TASK 2.4.6 :** Implémenter une logique pour gérer la liste `keywords` dans `SkillCategoryForm.vue` (ex: une textarea où chaque ligne est un mot-clé, ou un champ + bouton "ajouter un mot-clé").
-   [X] **TASK 2.4.7 :** Intégrer le composant `SkillsSection.vue` dans `App.vue`.
-   [X] **TASK 2.4.8 :** Assurer que la sauvegarde globale via `saveResume` dans `App.vue` inclut bien le tableau `skills` mis à jour.
-   [X] **TASK 2.4.9 :** Assurer que le chargement initial dans `App.vue` gère correctement le tableau `skills`.

---

## Notes

-   La structure `skills` est typiquement un tableau d'objets, où chaque objet a `name` (la catégorie) et `keywords` (un tableau de strings).
-   La gestion de la liste `keywords` peut être simplifiée (textarea) pour commencer.
-   L'ajout d'un niveau de compétence (`level`) peut être reporté pour simplifier cette première implémentation.
