# STORY 2.8: [Should Have] Édition de la Section "Awards"

**En tant que** Utilisateur,
**Je veux** pouvoir ajouter, modifier et supprimer des récompenses ou distinctions dans la section "Awards" de mon CV,
**Afin de** mettre en valeur mes réalisations et reconnaissances.

---

## Critères d'Acceptation

1.  L'UI affiche une section pour gérer les récompenses (`awards`).
2.  Un bouton "Ajouter une récompense" permet de créer une nouvelle entrée vide.
3.  Chaque récompense affichée possède des champs éditables (ex: `title`, `date`, `awarder` - organisation qui décerne, `summary`).
4.  Les modifications sont reflétées dans l'état (`resumeState.awards`).
5.  Un bouton "Supprimer" est disponible pour chaque récompense.
6.  Les données sont sauvegardées et chargées correctement.

---

## Tâches Techniques

-   [X] **TASK 2.8.1 :** Définir `AwardInterface` dans `shared`.
-   [X] **TASK 2.8.2 :** Définir `AwardEntityInterface` dans `core`, l'ajouter à `ResumeEntityInterface`, et initialiser `awards: []` dans `App.vue`.
-   [X] **TASK 2.8.3 :** Créer `AwardItemForm.vue`.
-   [X] **TASK 2.8.4 :** Créer `AwardsSection.vue`.
-   [X] **TASK 2.8.5 :** Implémenter les champs dans `AwardItemForm.vue`.
-   [X] **TASK 2.8.6 :** Intégrer `AwardsSection.vue` dans `App.vue`.
-   [X] **TASK 2.8.7 :** Assurer sauvegarde/chargement.
-   [X] **TASK 2.8.8 :** Ajouter l'affichage de la section Awards dans `ResumePreview.vue`.

---

## Notes
- Structure similaire aux autres sections de liste (Certificats, Publications, etc.).
- Le champ `summary` peut décrire la raison ou le contexte de la récompense. 