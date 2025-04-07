# STORY 2.14: [Must Have] Édition des Profils Sociaux (Basics)

**En tant que** Utilisateur,
**Je veux** pouvoir ajouter, modifier et supprimer mes profils sociaux (LinkedIn, GitHub, etc.) dans la section "Basics" de mon CV,
**Afin de** pouvoir partager mes liens professionnels et sociaux pertinents.

---

## Critères d'Acceptation

1.  Le formulaire de la section "Basics" (`BasicsForm.vue`) inclut une sous-section pour gérer la liste des profils sociaux (`profiles`).
2.  Un bouton "Ajouter un profil" permet de créer une nouvelle entrée de profil vide dans la liste `resumeState.basics.profiles`.
3.  Chaque profil affiché possède des champs éditables pour ses propriétés (`network`, `username`, `url`).
4.  Les modifications apportées aux champs d'un profil mettent à jour l'entrée correspondante dans l'état.
5.  Un bouton "Supprimer" est disponible pour chaque profil et permet de le retirer de la liste.
6.  Les données mises à jour sont sauvegardées via le bouton "Sauvegarder" global.
7.  Au chargement, les profils sociaux sauvegardés sont correctement affichés.

---

## Tâches Techniques

-   [X] **TASK 2.14.1 :** Définir `ProfileInterface` dans `shared`.
-   [X] **TASK 2.14.2 :** Ajouter `profiles?: ProfileEntityInterface[]` à `BasicsEntityInterface` (pas besoin d'une `ProfileEntityInterface` séparée initialement, `ProfileInterface` suffit).
-   [X] **TASK 2.14.3 :** Initialiser `basics.profiles: []` dans `App.vue`.
-   [X] **TASK 2.14.4 :** Créer `ProfileItemForm.vue`.
-   [X] **TASK 2.14.5 :** Intégrer la gestion de la liste des profils dans `BasicsForm.vue` (boucle sur `ProfileItemForm`).
-   [X] **TASK 2.14.6 :** Assurer sauvegarde/chargement.

---

## Notes
- Fait partie de la section `Basics`, donc l'intégration se fait dans `BasicsForm.vue`.
- S'assure que l'initialisation de `resumeState.basics.profiles` est robuste (toujours un tableau). 