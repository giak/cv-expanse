# STORY 2.6: [Must Have] Prévisualisation Basique du CV

**En tant que** Utilisateur,
**Je veux** voir un aperçu simple et formaté de mon CV basé sur les données que j'ai saisies,
**Afin de** pouvoir visualiser le résultat final et vérifier les informations.

---

## Critères d'Acceptation

1.  Un nouveau composant ou une nouvelle section dans l'UI est dédié à la prévisualisation du CV.
2.  Ce composant reçoit l'état actuel du CV (`resumeState`).
3.  La prévisualisation affiche au moins les informations des sections "Basics", "Work", "Education", et "Skills" de manière structurée et lisible.
4.  La prévisualisation se met à jour (quasi) en temps réel lorsque les données sont modifiées dans les formulaires d'édition.
5.  Le style de la prévisualisation est simple mais propre (pas besoin d'un template complexe pour l'instant).

---

## Tâches Techniques

-   [X] **TASK 2.6.1 :** Créer `ResumePreview.vue` dans `packages/ui/src/components/preview/`.
-   [X] **TASK 2.6.2 :** Définir une prop `resume` de type `ResumeEntityInterface`.
-   [X] **TASK 2.6.3 :** Implémenter le rendu basique des sections `Basics`, `Work`, `Education`, `Skills`, `Projects`.
-   [X] **TASK 2.6.4 :** Ajouter des styles CSS scoped simples pour la mise en forme (marges, titres, listes).
-   [X] **TASK 2.6.5 :** Intégrer `ResumePreview.vue` dans `App.vue` en lui passant `resumeState`.
-   [X] **TASK 2.6.6 :** Ajouter le rendu des sections `Volunteer`, `Certificates`, `Publications`, `Languages`, `Interests`, `References` et `Profiles`.

---

## Notes

-   L'objectif est une prévisualisation fonctionnelle, pas un template de CV finalisé.
-   Se concentrer sur la liaison des données et l'affichage structuré.
-   La mise en page peut être simple (ex: une seule colonne).
-   Cette prévisualisation utilisera directement les données de l'état Vue. La génération de PDF/HTML basée sur des templates viendra plus tard.
-   Ce composant est en lecture seule.
-   Utiliser `v-if` pour afficher les sections uniquement si elles existent dans les données.
-   Fournir des styles par défaut raisonnables.
