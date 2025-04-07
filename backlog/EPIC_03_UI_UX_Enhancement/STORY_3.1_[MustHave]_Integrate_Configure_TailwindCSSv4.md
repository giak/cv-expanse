# STORY 3.1: [Must Have] Intégrer et Configurer Tailwind CSS v4

**En tant que** Développeur,
**Je veux** installer et configurer Tailwind CSS v4 dans le package `ui`,
**Afin que** les fondations soient prêtes pour utiliser ses classes utilitaires et commencer la refonte du style.

---

## Critères d'Acceptation

1.  Les dépendances nécessaires pour Tailwind CSS v4 (`tailwindcss` et potentiellement des plugins comme `@tailwindcss/vite`) sont ajoutées aux `devDependencies` du package `@cv-generator/ui`.
2.  Un fichier de configuration Tailwind (`tailwind.config.js` ou `tailwind.config.ts`) est créé à la racine du package `ui`.
3.  Le fichier de configuration Tailwind est correctement configuré pour scanner les fichiers source (`.vue`, `.js`, `.ts`) afin de détecter les classes utilisées (via l'option `content`).
4.  Tailwind CSS est intégré au processus de build Vite :
    *   Le plugin `@tailwindcss/vite` (ou l'équivalent pour v4) est ajouté à `vite.config.ts`.
    *   Les directives Tailwind (`@import "tailwindcss";`) sont ajoutées au fichier CSS principal (ex: `packages/ui/src/assets/main.css`).
5.  L'application UI démarre sans erreurs liées à la configuration de Tailwind (`pnpm dev`).
6.  Il est possible d'utiliser une classe Tailwind simple (ex: `bg-red-500`, `text-blue-600`) dans un composant Vue (ex: `App.vue`) et de voir l'effet visuel dans le navigateur.

---

## Tâches Techniques

-   [X] **TASK 3.1.1 :** Ajouter les dépendances Tailwind CSS v4 via PNPM au package `ui`.
    *   `pnpm add -D --filter @cv-generator/ui tailwindcss@next` (Note: `@next` ou la version v4 spécifique si stable)
    *   Vérifier si un plugin PostCSS ou Vite spécifique est requis/recommandé pour v4 et l'ajouter si nécessaire (`postcss`, `autoprefixer`, `@tailwindcss/vite`). (Utilisation de `@tailwindcss/vite` confirmée).
-   [X] **TASK 3.1.2 :** Créer le fichier `packages/ui/tailwind.config.js` (ou `.ts`).
-   [X] **TASK 3.1.3 :** Configurer la propriété `content` dans `tailwind.config.js` pour inclure les chemins vers les fichiers `.vue`, `.js`, `.ts` dans `packages/ui/src/`.
-   [X] **TASK 3.1.4 :** Mettre à jour `packages/ui/vite.config.ts` pour inclure le plugin Tailwind (`@tailwindcss/vite`).
-   [X] **TASK 3.1.5 :** Ajouter les directives `@import` au début de `packages/ui/src/assets/main.css`.
-   [X] **TASK 3.1.6 :** Tester l'intégration en ajoutant une classe Tailwind temporaire dans `App.vue` et vérifier le rendu après avoir lancé `pnpm dev`.

---

## Notes

-   **Tailwind CSS v4 :** La v4 est encore en développement (au moment de la rédaction). La configuration exacte (plugins Vite/PostCSS, structure de `tailwind.config.js`) peut différer légèrement de la v3. Il faudra se référer à la documentation de la v4 (probablement le tag `@next` ou alpha/beta). L'API Lightning CSS pourrait être la méthode par défaut. (Clarifié : v4.1 utilise `@tailwindcss/vite`).
-   **Dépendances :** Assurer l'ajout de `postcss` et `autoprefixer` si nécessaire, car ils sont souvent requis par Tailwind. (Clarifié : Non requis comme dépendances directes, mais `postcss` est une peer dependency).
-   **Nettoyage CSS :** Le fichier `main.css` contiendra principalement les directives `@import`. Les styles globaux personnalisés minimes pourront y rester, mais la plupart des styles spécifiques devront être migrés vers des classes Tailwind ou des composants stylisés. 