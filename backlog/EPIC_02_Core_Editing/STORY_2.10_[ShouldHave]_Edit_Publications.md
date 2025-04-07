# STORY 2.10: [Should Have] Édition de la Section "Publications"

**En tant que** Utilisateur,
**Je veux** pouvoir ajouter, modifier et supprimer des publications dans la section "Publications" de mon CV,
**Afin de** pouvoir lister mes travaux publiés.

---

## Critères d'Acceptation

1.  L'UI affiche une section pour gérer les publications (`publications`).
2.  Un bouton "Ajouter une publication" permet de créer une nouvelle entrée vide.
3.  Chaque publication affichée possède des champs éditables (ex: `name`, `publisher`, `releaseDate`, `url`, `summary`).
4.  Les modifications sont reflétées dans l'état (`resumeState.publications`).
5.  Un bouton "Supprimer" est disponible pour chaque publication.
6.  Les données sont sauvegardées et chargées correctement.

---

## Tâches Techniques

-   [X] **TASK 2.10.1 :** Définir `PublicationInterface` dans `shared`.
-   [X] **TASK 2.10.2 :** Définir `PublicationEntityInterface` dans `core` et l'ajouter à `ResumeEntityInterface`.
-   [X] **TASK 2.10.3 :** Initialiser `publications: []` dans `App.vue`.
-   [X] **TASK 2.10.4 :** Créer `PublicationItemForm.vue`.
-   [X] **TASK 2.10.5 :** Créer `PublicationsSection.vue`.
-   [X] **TASK 2.10.6 :** Intégrer `PublicationsSection.vue` dans `App.vue`.
-   [X] **TASK 2.10.7 :** Assurer sauvegarde/chargement.

---

## Notes
- Structure similaire aux autres sections liste (Certificats, Bénévolat). 