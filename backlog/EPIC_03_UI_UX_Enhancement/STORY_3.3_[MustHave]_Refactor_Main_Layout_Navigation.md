# STORY 3.3: [Must Have] Refactoriser la Mise en Page Principale et la Navigation

**En tant que** Développeur,
**Je veux** refactoriser la structure principale de l'application (`App.vue`) en utilisant les classes utilitaires de Tailwind CSS v4 pour définir la mise en page (header, contenu principal, footer) et appliquer les styles de base du thème sombre,
**Afin d'** établir une structure visuelle cohérente et responsive basée sur les nouveaux design tokens.

---

## Critères d'Acceptation

1.  Le composant racine `App.vue` utilise des classes Tailwind pour structurer la page en trois zones principales : un header (si nécessaire), une zone de contenu principale, et un footer.
2.  La zone de contenu principale est divisée en deux colonnes (ou utilise une mise en page flexible) :
    *   Une colonne pour le formulaire d'édition (`editor-pane`).
    *   Une colonne pour la prévisualisation du CV (`preview-pane`).
3.  Les classes Tailwind appliquent les couleurs de fond et de texte définies dans les styles de base du thème sombre (`main.css`) aux différentes sections (body, header, footer, panneaux).
4.  L'espacement (padding, margin) entre les sections et à l'intérieur des panneaux est géré via les utilitaires Tailwind (ex: `p-4`, `m-2`, `space-y-4`).
5.  La mise en page est raisonnablement responsive sur des écrans de taille moyenne à grande (la gestion fine du mobile peut être affinée dans STORY 3.6).
6.  Les anciens styles CSS spécifiques à la mise en page dans `App.vue` (s'il y en avait dans `<style scoped>`) sont supprimés ou remplacés par des classes Tailwind.

---

## Tâches Techniques

-   [X] **TASK 3.3.1 :** Analyser la structure HTML existante dans `App.vue` pour identifier les éléments principaux (conteneur global, header, main, aside/preview, footer).
-   [X] **TASK 3.3.2 :** Remplacer les balises HTML et les styles existants par des `div` (ou autres éléments sémantiques) stylisés avec les classes de layout Tailwind (ex: `flex`, `grid`, `w-full`, `h-screen`, `max-w-7xl`, `mx-auto`).
-   [X] **TASK 3.3.3 :** Appliquer les classes de couleur de fond et de texte du thème sombre aux éléments principaux (ex: `bg-neutral-900`, `text-neutral-200`).
-   [X] **TASK 3.3.4 :** Utiliser Flexbox ou Grid pour créer la disposition en deux colonnes pour l'éditeur et la prévisualisation (ex: `flex flex-col md:flex-row`, `grid grid-cols-1 md:grid-cols-2 gap-4`).
-   [X] **TASK 3.3.5 :** Ajouter des classes d'espacement Tailwind (`p-*`, `m-*`, `space-y-*`, `gap-*`) pour structurer visuellement le contenu.
-   [X] **TASK 3.3.6 :** Définir un style de base pour le header et le footer en utilisant les classes Tailwind.
-   [X] **TASK 3.3.7 :** Nettoyer les styles scoped existants dans `App.vue` qui concernent la mise en page générale.
-   [X] **TASK 3.3.8 :** Vérifier le rendu sur différentes tailles d'écran (au moins bureau et tablette).

---

## Notes

-   Cette étape se concentre sur la macro-structure de la page.
-   Les styles *internes* des composants (`BasicsForm`, `ResumePreview`, etc.) seront refactorisés dans des stories ultérieures.
-   Utiliser les breakpoints de Tailwind (ex: `md:`, `lg:`) pour introduire une responsivité de base.
-   S'assurer que la mise en page occupe bien la hauteur de l'écran (`h-screen`) et que le défilement est géré correctement si le contenu dépasse. 