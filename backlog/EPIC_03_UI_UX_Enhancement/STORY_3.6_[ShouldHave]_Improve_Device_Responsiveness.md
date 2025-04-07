# STORY 3.6: [Should Have] Améliorer la Réactivité sur les Appareils

**En tant que** Utilisateur,
**Je veux** que l'application s'affiche correctement et soit facile à utiliser sur différentes tailles d'écran (mobile, tablette, bureau),
**Afin de** pouvoir éditer et consulter mon CV confortablement quel que soit l'appareil que j'utilise.

---

## Critères d'Acceptation

1.  La mise en page principale (`App.vue`) s'adapte aux écrans mobiles :
    *   Les colonnes d'édition et de prévisualisation s'empilent verticalement.
    *   Le contenu ne déborde pas horizontalement.
    *   Les éléments d'en-tête et de pied de page sont lisibles et ne prennent pas trop de place.
2.  Les formulaires complexes (ceux avec des grilles à 2 colonnes comme `BasicsForm`, `WorkExperienceForm`, `ProjectItemForm`, etc.) passent à une disposition en une seule colonne sur les petits écrans pour une meilleure lisibilité et saisie.
3.  Les éléments interactifs (boutons, champs de saisie) restent suffisamment grands et espacés pour être facilement utilisables sur les écrans tactiles.
4.  La navigation (si elle devient plus complexe à l'avenir) s'adapte aux petits écrans (ex: menu burger). Pour l'instant, s'assurer que l'en-tête reste fonctionnel.
5.  La prévisualisation (`ResumePreview.vue`) s'adapte également de manière lisible aux différentes tailles d'écran (même si son style détaillé sera affiné en STORY 3.9).

---

## Tâches Techniques

-   [X] **TASK 3.6.1 :** Revoir la mise en page principale (`App.vue`) et utiliser les préfixes de breakpoint Tailwind (`sm:`, `md:`, `lg:`) pour ajuster la disposition des colonnes (passage de `flex-col` à `md:flex-row` ou équivalent Grid).
-   [X] **TASK 3.6.2 :** Revoir les composants de formulaire utilisant des grilles (`grid-cols-2`) et ajouter des préfixes pour qu'ils soient par défaut en `grid-cols-1` et passent à `md:grid-cols-2` (ou `lg:`) sur les écrans plus grands.
-   [X] **TASK 3.6.3 :** Vérifier les tailles de police, les paddings et les marges sur petits écrans et les ajuster si nécessaire en utilisant les préfixes de breakpoint pour améliorer la lisibilité et l'ergonomie tactile.
-   [X] **TASK 3.6.4 :** Tester l'application sur différentes tailles d'écran en utilisant les outils de développement du navigateur (ou un outil comme Responsively App). Identifier et corriger les problèmes de débordement, de superposition ou d'éléments difficiles à cliquer.
-   [X] **TASK 3.6.5 :** Appliquer des ajustements responsives de base à `ResumePreview.vue` pour assurer une lisibilité minimale sur mobile (ex: ajuster les tailles de police, les marges).
-   [X] **TASK 3.6.6 :** Augmenter la taille cliquable des boutons (notamment Ajout/Suppression dans les sections) pour une meilleure ergonomie sur mobile (ex: ajustement du padding `px-`, `py-`).
-   [X] **TASK 3.6.7 :** Ajuster le padding global dans `App.vue` pour les petits écrans (ex: réduire le padding horizontal `px-` sur `sm:`).

---

## Notes

-   Se concentrer sur les breakpoints standards de Tailwind (`sm`, `md`, `lg`, `xl`).
-   Prioriser la fonctionnalité et la lisibilité sur mobile.
-   Tester les formulaires les plus complexes en premier.
-   La prévisualisation n'a pas besoin d'être parfaite sur mobile à ce stade, juste utilisable. 