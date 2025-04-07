# STORY 2.2: [Must Have/Should Have] Édition de la Section "Work Experience"

**En tant que** Utilisateur,
**Je veux** pouvoir ajouter, modifier et supprimer des expériences professionnelles dans la section "Work" de mon CV,
**Afin de** pouvoir détailler mon parcours professionnel.

---

## Critères d'Acceptation

1.  L'UI affiche une section pour gérer les expériences professionnelles (`work`).
2.  Un bouton "Ajouter une expérience" permet de créer une nouvelle entrée d'expérience vide.
3.  Chaque expérience professionnelle affichée possède des champs éditables pour ses propriétés (ex: `company`, `position`, `startDate`, `endDate`, `summary`, `highlights`).
4.  Les modifications apportées aux champs d'une expérience mettent à jour l'entrée correspondante dans l'état de l'application (`resumeState.work`).
5.  Un bouton "Supprimer" est disponible pour chaque expérience et permet de la retirer de la liste dans l'état.
6.  Les dates (`startDate`, `endDate`) peuvent être saisies (format texte simple pour l'instant, ou idéalement via un date picker basique si facile à intégrer).
7.  Le champ `highlights` (points clés) permet d'ajouter/modifier/supprimer une liste de chaînes de caractères.
8.  Les données mises à jour (ajout/modification/suppression d'expériences) sont sauvegardées via le mécanisme existant lorsque l'utilisateur clique sur le bouton "Sauvegarder" global.
9.  Au chargement, les expériences sauvegardées sont correctement affichées.

---

## Tâches Techniques

-   [ ] **TASK 2.2.1 :** Définir les types TypeScript pour `WorkExperienceInterface` dans le package `shared` (si ce n'est pas déjà fait ou incomplet).
-   [ ] **TASK 2.2.2 :** Définir l'entité `WorkExperienceEntityInterface` dans `core` et l'ajouter à `ResumeEntityInterface`. Mettre à jour l'initialisation de l'état `resumeState` dans `App.vue` pour inclure `work: []`.
-   [ ] **TASK 2.2.3 :** Créer un composant Vue `WorkExperienceForm.vue` pour afficher et éditer *une seule* expérience professionnelle. Il recevra une expérience via `v-model` (ou props/emits).
-   [ ] **TASK 2.2.4 :** Créer un composant Vue `WorkSection.vue` qui :
    *   Reçoit la liste `resumeState.work` en prop.
    *   Affiche un bouton "Ajouter une expérience".
    *   Itère sur la liste `work` et affiche une instance de `WorkExperienceForm.vue` pour chaque expérience.
    *   Gère l'ajout d'une nouvelle expérience vide à la liste.
    *   Gère la suppression d'une expérience de la liste (en émettant un événement ou en modifiant directement si la prop est mutable via `v-model` sur la liste).
-   [X] **TASK 2.2.5 :** Implémenter les champs de saisie dans `WorkExperienceForm.vue` (input, textarea).
-   [X] **TASK 2.2.6 :** Implémenter une logique simple pour gérer la liste `highlights` dans `WorkExperienceForm.vue` (ex: une textarea où chaque ligne est un highlight, ou un champ + bouton "ajouter").
-   [X] **TASK 2.2.7 :** Intégrer le composant `WorkSection.vue` dans `App.vue`.
-   [X] **TASK 2.2.8 :** Assurer que la sauvegarde globale via `saveResume` dans `App.vue` inclut bien le tableau `work` mis à jour.
-   [X] **TASK 2.2.9 :** Assurer que le chargement initial dans `App.vue` gère correctement le tableau `work` (il peut être `undefined` ou `null` dans les données sauvegardées).

---

## Notes

-   Cette story introduit la gestion de listes d'objets éditables, ce qui est un pattern courant.
-   La gestion des dates peut être simplifiée avec des champs texte pour l'instant.
-   La gestion des `highlights` peut aussi être basique (ex: textarea) pour cette itération.
-   On continue d'utiliser l'état simple dans `App.vue` et le repository direct.
