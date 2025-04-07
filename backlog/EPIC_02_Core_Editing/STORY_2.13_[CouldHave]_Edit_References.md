# STORY 2.13: [Could Have] Édition de la Section "References"

**En tant que** Utilisateur,
**Je veux** pouvoir ajouter, modifier et supprimer des références dans la section "References" de mon CV,
**Afin de** fournir des contacts professionnels sur demande.

---

## Critères d'Acceptation

1.  L'UI affiche une section pour gérer les références (`references`).
2.  Un bouton "Ajouter une référence" permet de créer une nouvelle entrée vide.
3.  Chaque référence affichée possède des champs éditables (ex: `name`, `reference` - une description/contact).
4.  Les modifications sont reflétées dans l'état (`resumeState.references`).
5.  Un bouton "Supprimer" est disponible pour chaque référence.
6.  Les données sont sauvegardées et chargées correctement.

---

## Tâches Techniques

-   [X] **TASK 2.13.1 :** Définir `ReferenceInterface` dans `shared`.
-   [X] **TASK 2.13.2 :** Définir `ReferenceEntityInterface` dans `core` et l'ajouter à `ResumeEntityInterface`.
-   [X] **TASK 2.13.3 :** Initialiser `references: []` dans `App.vue`.
-   [X] **TASK 2.13.4 :** Créer `ReferenceItemForm.vue`.
-   [X] **TASK 2.13.5 :** Créer `ReferencesSection.vue`.
-   [X] **TASK 2.13.6 :** Intégrer `ReferencesSection.vue` dans `App.vue`.
-   [X] **TASK 2.13.7 :** Assurer sauvegarde/chargement.

---

## Notes
- Section simple, seulement deux champs par référence. 