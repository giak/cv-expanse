# STORY 2.11: [Should Have] Édition de la Section "Languages"

**En tant que** Utilisateur,
**Je veux** pouvoir ajouter, modifier et supprimer des langues dans la section "Languages" de mon CV,
**Afin de** pouvoir indiquer mes compétences linguistiques.

---

## Critères d'Acceptation

1.  L'UI affiche une section pour gérer les langues (`languages`).
2.  Un bouton "Ajouter une langue" permet de créer une nouvelle entrée vide.
3.  Chaque langue affichée possède des champs éditables (ex: `language`, `fluency`).
4.  Les modifications sont reflétées dans l'état (`resumeState.languages`).
5.  Un bouton "Supprimer" est disponible pour chaque langue.
6.  Les données sont sauvegardées et chargées correctement.

---

## Tâches Techniques

-   [X] **TASK 2.11.1 :** Définir `LanguageInterface` dans `shared`.
-   [X] **TASK 2.11.2 :** Définir `LanguageEntityInterface` dans `core` et l'ajouter à `ResumeEntityInterface`.
-   [X] **TASK 2.11.3 :** Initialiser `languages: []` dans `App.vue`.
-   [X] **TASK 2.11.4 :** Créer `LanguageItemForm.vue` (simple, 2 champs).
-   [X] **TASK 2.11.5 :** Créer `LanguagesSection.vue`.
-   [X] **TASK 2.11.6 :** Intégrer `LanguagesSection.vue` dans `App.vue`.
-   [X] **TASK 2.11.7 :** Assurer sauvegarde/chargement.

---

## Notes
- Section relativement simple.
- Envisager un `select` pour le niveau (`fluency`). 