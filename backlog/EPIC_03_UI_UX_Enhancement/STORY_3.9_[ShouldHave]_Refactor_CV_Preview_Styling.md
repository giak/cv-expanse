# STORY 3.9: [Should Have] Refactoriser le Style de l'Aperçu du CV avec Tailwind (Préparation Theming)

**En tant que** Développeur,
**Je veux** refactoriser le style du composant `ResumePreview.vue` en utilisant les classes utilitaires Tailwind CSS v4 et en préparant l'utilisation future de variables CSS pour le theming,
**Afin d'** harmoniser l'apparence de l'aperçu, supprimer les anciens styles CSS scoped, améliorer sa maintenabilité, et permettre l'application facile de différents thèmes visuels ultérieurement.

---

## Critères d'Acceptation

1.  Le bloc `<style scoped>` dans `ResumePreview.vue` est supprimé.
2.  Tous les styles de l'aperçu (mise en page des sections, titres, textes, listes, liens) sont appliqués via des classes utilitaires Tailwind standard pour la structure de base.
3.  Là où un style est susceptible de changer avec un thème (ex: police principale, couleur primaire, couleur de texte spécifique, espacement de section), l'utilisation de classes Tailwind avec des valeurs arbitraires référençant des variables CSS de prévisualisation (ex: `mb-[--preview-section-spacing]`, `text-[--preview-color-primary]`) est envisagée ou documentée comme étape suivante.
4.  Pour cette story, une structure visuelle propre et lisible est mise en place avec les classes Tailwind de base (polices neutres, couleurs `text-neutral-*`, espacements `p-*`, `m-*`). Le composant utilise un fond blanc (`bg-white`) pour simuler une page.
5.  La mise en page de l'aperçu reste claire et structurée, affichant correctement toutes les sections du CV (`Basics`, `Work`, `Education`, etc.).
6.  Les listes (expériences, formations, compétences, points clés) sont correctement formatées avec Tailwind.
7.  L'aperçu est raisonnablement responsive et lisible sur différentes tailles d'écran.

---

## Tâches Techniques

-   [X] **TASK 3.9.1 :** Analyser la structure HTML et les styles CSS scoped actuels dans `ResumePreview.vue`. *(Précédemment fait)*
-   [X] **TASK 3.9.2 :** S'assurer que le bloc `<style scoped>` est bien vide ou supprimé. *(Confirmé par l'utilisateur)*
-   [X] **TASK 3.9.3 :** Appliquer les classes Tailwind au conteneur principal (`div.resume-preview`) pour le fond (`bg-white`), le padding (`p-4 sm:p-6 lg:p-8`), la largeur maximale (`max-w-4xl mx-auto`), et une ombre (`shadow-lg`).
-   [X] **TASK 3.9.4 :** Appliquer les classes Tailwind de base aux titres (`h2`, `h3`, `h4`) pour la taille, la graisse, la couleur (`text-neutral-800`, `text-neutral-700`), et les marges (`mb-*`). Utiliser potentiellement `mb-[--preview-section-spacing]` pour préparer le theming de l'espacement.
-   [X] **TASK 3.9.5 :** Appliquer les classes Tailwind de base aux paragraphes (`p`) et autres textes pour la taille, la couleur (`text-neutral-700`, `text-neutral-600`), et l'interligne. Utiliser `text-[--preview-color-text]` si pertinent pour le theming.
-   [X] **TASK 3.9.6 :** Styler les listes (`ul`, `li`) en utilisant les classes Tailwind (`list-disc`, `ml-4`, `space-y-1`).
-   [X] **TASK 3.9.7 :** Styler les liens (`<a>`) en utilisant une couleur neutre ou primaire de base (`text-primary-700`, `hover:text-primary-900`). Préparer l'utilisation de `text-[--preview-color-primary]`.
-   [X] **TASK 3.9.8 :** Revoir et ajuster les classes responsives (`sm:`, `md:`) pour assurer une bonne lisibilité.
-   [X] **TASK 3.9.9 :** Vérifier le rendu de toutes les sections du CV avec les nouveaux styles de base.
-   [X] **TASK 3.9.10 :** Identifier (via commentaires ou documentation interne) les endroits clés où les variables CSS de thème (`--preview-*`) devront être utilisées lorsque le système de theming sera implémenté.

---

## Notes

-   Cette story pose les bases Tailwind et *prépare* le theming via variables CSS, mais n'implémente pas le système de changement de thème lui-même.
-   Le style appliqué ici sera le style "par défaut" ou un style neutre.
-   On utilise `bg-white` et des couleurs de texte sombres (`text-neutral-*`) pour simuler une page claire, indépendamment du thème sombre global de l'éditeur.
-   L'utilisation des crochets `[...]` avec des variables CSS est la clé pour la personnalisation future. 